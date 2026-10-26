const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { test } = require("node:test");
const { File } = require("node:buffer");
const ts = require("typescript");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");

const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return resolve.call(this, request.startsWith("@/") ? path.join(root, request.slice(2)) : request, ...args);
};
for (const extension of [".ts", ".tsx"]) require.extensions[extension] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
  });
  module._compile(result.outputText, filename);
};

const { MultilingualEnquiry } = require("../components/i18n/enquiry-form.tsx");
const { dictionary } = require("../lib/i18n/dictionary.ts");
const { locales } = require("../lib/i18n/locales.ts");
const { initialEnquiry, fieldLimits } = require("../lib/enquiry.ts");
const { validateLocalized } = require("../lib/i18n/validation.ts");
const { validateAttachmentSelection } = require("../lib/enquiry-file-selection.ts");
const { MAX_ATTACHMENT_BYTES, MAX_ATTACHMENTS } = require("../lib/attachment-options.ts");
const { sendEnquiry } = require("../lib/enquiry-request.ts");
const { POST } = require("../app/api/contact/route.ts");

test("date and budget are optional, labelled and visible in each localized form", () => {
  for (const locale of locales) {
    const t = dictionary(locale);
    const html = renderToStaticMarkup(React.createElement(MultilingualEnquiry, {
      locale, t, methods: {}, countries: [{ code: "TR", name: "Türkiye" }], projectNames: {}
    }));
    for (const key of ["targetDeliveryDate", "budgetRange"]) {
      const input = html.match(new RegExp(`<input[^>]+id="enquiry-${key}"[^>]*>`))?.[0];
      assert.ok(input, `${locale}/${key} is rendered`);
      assert.ok(!input.includes("required="), `${locale}/${key} must remain optional`);
      assert.ok(html.indexOf(`id="enquiry-${key}"`) < html.indexOf("<details"), `${locale}/${key} should not be hidden`);
      assert.ok(html.includes(`for="enquiry-${key}"`));
      assert.ok(input.includes(`maxLength="${fieldLimits[key]}"`));
      assert.ok(input.includes(`aria-describedby="${key}-help"`));
      assert.notEqual(t[key], key, `${locale}/${key} needs a translated label`);
    }
    assert.ok(html.includes(renderToStaticMarkup(React.createElement("p", null, t.large_files_help))), `${locale} explains how to share large drawings`);
    assert.ok(html.includes('id="enquiry-referenceLink"'));
  }
});

test("attachment selection identifies recoverable limits without changing the original files", () => {
  const original = Object.freeze({ name: "drawing.PDF", size: MAX_ATTACHMENT_BYTES });
  assert.equal(validateAttachmentSelection(Object.freeze([original])), undefined);
  assert.equal(validateAttachmentSelection([original, { name: "detail.jpg", size: 1 }]), "size");
  assert.equal(validateAttachmentSelection(Array(MAX_ATTACHMENTS + 1).fill({ name: "detail.png", size: 1 })), "count");
  for (const file of [
    { name: "empty.png", size: 0 }, { name: "model.stl", size: 100 },
    { name: "../drawing.pdf", size: 100 }, { name: "x".repeat(180) + ".pdf", size: 100 }
  ]) assert.equal(validateAttachmentSelection([file]), "format");
  assert.deepEqual(original, { name: "drawing.PDF", size: MAX_ATTACHMENT_BYTES });
});

test("date, budget and original attachments reach the actual contact route and notification", async t => {
  const beforeFetch = global.fetch;
  const beforeEnv = { ...process.env };
  process.env.RESEND_API_KEY = "mock-key";
  process.env.TURNSTILE_SECRET_KEY = "mock-secret";
  process.env.RESEND_FROM_EMAIL = "ARDIÇ <sender@example.com>";
  process.env.CONTACT_NOTIFICATION_EMAIL = "team@example.com";
  t.after(() => { global.fetch = beforeFetch; process.env = beforeEnv; });
  const source = Buffer.from("%PDF-1.4\nOriginal drawing bytes\n%%EOF");
  const valid = {
    ...initialEnquiry, fullName: "Example client", email: "client@example.com", country: "TR",
    projectType: "Custom fabrication", message: "Please review this display project.",
    targetDeliveryDate: " 10–15 December 2027 (flexible) ", budgetRange: " EUR 5,000–8,000 ",
    referenceLink: "https://example.com/private-drawing", turnstileToken: "mock-token"
  };
  for (const locale of locales) {
    const emails = [];
    global.fetch = async (url, options) => {
      if (url === "/api/contact") return POST(new Request("https://www.ardicdf.com/api/contact", options));
      if (url === "https://challenges.cloudflare.com/turnstile/v0/siteverify") return Response.json({ success: true });
      assert.equal(url, "https://api.resend.com/emails", "Never fetch a visitor's share link");
      emails.push(JSON.parse(options.body));
      return Response.json({ id: "mock-email" });
    };
    const result = await sendEnquiry({ ...valid, language: locale }, locale, 60_000, [new File([source], "drawing.pdf", { type: "application/pdf" })]);
    assert.equal(result.confirmationSent, true, locale);
    assert.equal(emails.length, 2);
    assert.equal(emails[0].to, "team@example.com");
    assert.ok(emails[0].text.includes("Target delivery date: " + valid.targetDeliveryDate.trim()));
    assert.ok(emails[0].text.includes("Target budget: " + valid.budgetRange.trim()));
    assert.ok(emails[0].html.includes(valid.budgetRange.trim()));
    assert.ok(emails[0].text.includes(valid.referenceLink));
    assert.deepEqual(Buffer.from(emails[0].attachments[0].content, "base64"), source);
    assert.equal(emails[1].attachments, undefined);
  }
  let externalCalls = 0;
  global.fetch = async () => { externalCalls += 1; throw new Error("No external request expected"); };
  for (const key of ["targetDeliveryDate", "budgetRange"]) {
    const payload = { ...valid, language: "tr", [key]: "x".repeat(fieldLimits[key] + 1) };
    assert.equal(validateLocalized(payload, dictionary("tr"))[key], dictionary("tr").error_length);
    const response = await POST(new Request("https://www.ardicdf.com/api/contact", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
    }));
    assert.equal(response.status, 400);
    assert.equal((await response.json()).fields[key], dictionary("tr").error_length);
  }
  assert.equal(externalCalls, 0);
});
