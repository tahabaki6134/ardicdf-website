const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { test } = require("node:test");
const ts = require("typescript");

// Exercise the actual TypeScript route with Node's test runner, without adding
// a runtime dependency or contacting verification/email providers.
const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) {
  return resolve.call(
    this,
    request.startsWith("@/") ? path.join(root, request.slice(2)) : request,
    ...args
  );
};
require.extensions[".ts"] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true
    }
  });
  module._compile(result.outputText, filename);
};

const { POST } = require("../app/api/contact/route.ts");
const { initialEnquiry, enquirySteps, validateEnquiry } = require("../lib/enquiry.ts");
const { projects, parseSelectedProjects, enquiryHref } = require("../lib/projects.ts");
const { industries } = require("../lib/industries.ts");

const valid = {
  ...initialEnquiry,
  fullName: "Example Client",
  email: "client@example.com",
  company: "Graphic design studio",
  projectType: "Brand Activation / Exhibition",
  projectLocation: "Seoul, South Korea",
  message:
    "Please review a product display for a Seoul launch. References: https://example.com/a https://example.com/b https://example.com/c",
  selectedProjects: [projects[1].id],
  turnstileToken: "test-token"
};

test("contact delivery and input boundaries", async (t) => {
  const originalFetch = global.fetch;
  const originalEnv = { ...process.env };
  process.env.RESEND_API_KEY = "test-key";
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.RESEND_FROM_EMAIL = "Test <sender@example.com>";
  process.env.CONTACT_NOTIFICATION_EMAIL = "team@example.com";
  t.after(() => {
    global.fetch = originalFetch;
    process.env = originalEnv;
  });

  async function submit(
    payload,
    { captcha = true, notification = true, confirmation = true } = {}
  ) {
    const calls = [];
    let mailCount = 0;
    global.fetch = async (url, options) => {
      calls.push({ url, options });
      if (url === "https://challenges.cloudflare.com/turnstile/v0/siteverify")
        return Response.json({ success: captcha });
      assert.equal(url, "https://api.resend.com/emails", "Unexpected external request");
      mailCount += 1;
      return Response.json(
        { id: "mock-email" },
        { status: (mailCount === 1 ? notification : confirmation) ? 200 : 503 }
      );
    };
    const response = await POST(
      new Request("https://www.ardicdf.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
    );
    return { response, body: await response.json(), calls, mailCount };
  }

  await t.test("a Seoul agency enquiry with several references is delivered", async () => {
    const result = await submit(valid);
    assert.equal(result.response.status, 200);
    assert.deepEqual(result.body, { ok: true, confirmationSent: true });
    assert.equal(result.mailCount, 2);
    const notification = JSON.parse(result.calls[1].options.body);
    assert.equal(notification.to, "team@example.com");
    assert.equal(notification.reply_to, "client@example.com");
    assert.match(notification.text, /Seoul/);
    assert.ok(notification.text.includes(projects[1].title));
    assert.ok(notification.text.includes("https://www.ardicdf.com/works/" + projects[1].id));
  });
  await t.test("HTML in a brief is escaped in notifications", async () => {
    const result = await submit({
      ...valid,
      message: '<script>alert("x")</script> & model',
      fullName: "Client\nnew line",
      company: ""
    });
    const email = JSON.parse(result.calls[1].options.body);
    assert.ok(!email.html.includes("<script>"));
    assert.ok(email.html.includes("&lt;script&gt;"));
    assert.ok(!/[\r\n]/.test(email.subject));
  });
  await t.test("invalid bodies and selections are rejected before external calls", async () => {
    for (const payload of [
      null,
      [],
      { ...valid, fullName: "" },
      { ...valid, email: "invalid" },
      { ...valid, message: "x".repeat(3001) },
      { ...valid, referenceLink: "javascript:alert(1)" },
      { ...valid, referenceLink: "https://user:password@example.com" },
      { ...valid, industry: "invented-sector" },
      { ...valid, selectedProjects: ["unknown-work"] },
      { ...valid, companyWebsite: "bot-filled" }
    ]) {
      const result = await submit(payload);
      assert.equal(result.response.status, 400);
      assert.equal(result.calls.length, 0);
      assert.notEqual(result.body.ok, true);
    }
  });
  await t.test("missing or failed verification cannot send email", async () => {
    const missing = await submit({ ...valid, turnstileToken: "" });
    assert.equal(missing.response.status, 400);
    assert.equal(missing.calls.length, 0);
    const failed = await submit(valid, { captcha: false });
    assert.equal(failed.response.status, 400);
    assert.equal(failed.mailCount, 0);
  });
  await t.test("notification failure is never reported as success", async () => {
    const result = await submit(valid, { notification: false });
    assert.equal(result.response.status, 502);
    assert.notEqual(result.body.ok, true);
    assert.equal(result.mailCount, 1);
  });
  await t.test("confirmation failure preserves the successful team notification", async () => {
    const result = await submit(valid, { confirmation: false });
    assert.equal(result.response.status, 200);
    assert.deepEqual(result.body, { ok: true, confirmationSent: false });
  });
});

test("step validation allows an early brief without contact or material details", () => {
  const early = {
    ...initialEnquiry,
    projectType: "Not sure yet — please advise",
    message: "A decorative form for a visitor space."
  };
  assert.deepEqual(validateEnquiry(early, enquirySteps[0].fields), {});
  assert.deepEqual(validateEnquiry(early, enquirySteps[1].fields), {});
  assert.deepEqual(validateEnquiry(early, enquirySteps[2].fields), {});
  assert.deepEqual(Object.keys(validateEnquiry(early, enquirySteps[3].fields)).sort(), [
    "email",
    "fullName"
  ]);
});

test("selection links contain only known, unique portfolio IDs", () => {
  assert.deepEqual(
    parseSelectedProjects([projects[0].id, "unknown", projects[0].id, projects[1].id]),
    [projects[0].id, projects[1].id]
  );
  const url = new URL(enquiryHref([projects[1].id], industries[0].slug), "https://www.ardicdf.com");
  assert.deepEqual([...url.searchParams.keys()], ["selected", "industry"]);
  assert.equal(url.searchParams.get("selected"), projects[1].id);
});

test("curated portfolio and sector records reference existing local photographs", () => {
  for (const record of [...projects, ...industries])
    assert.ok(fs.existsSync(path.join(root, "public", record.image)), record.image);
  for (const project of projects)
    for (const slug of project.industries)
      assert.ok(
        industries.some((industry) => industry.slug === slug),
        slug
      );
});
