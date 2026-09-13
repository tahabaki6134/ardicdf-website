const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const { test } = require("node:test");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (request, ...args) { return resolve.call(this, request.startsWith("@/") ? path.join(root, request.slice(2)) : request, ...args); };
require.extensions[".ts"] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText, filename);
const { POST } = require("../app/api/contact/route.ts");
const { parseAttachments } = require("../lib/enquiry-attachments.ts");
const { MAX_ATTACHMENT_BYTES } = require("../lib/attachment-options.ts");
const pdf = { filename: "cabinet-drawing.pdf", content: Buffer.from("%PDF-1.4\nTest drawing\n%%EOF").toString("base64") };

test("file bytes, names and limits are validated", () => {
  assert.deepEqual(parseAttachments([pdf]), [pdf]);
  assert.deepEqual(parseAttachments(undefined), []);
  for (const input of [null, [pdf, pdf, pdf, pdf], [{ ...pdf, filename: "../private.pdf" }], [{ ...pdf, filename: "drawing.html" }], [{ ...pdf, content: Buffer.from("<html>not a pdf</html>").toString("base64") }], [{ ...pdf, content: "!bad!" }], [{ ...pdf, content: "" }], [{ ...pdf, content: Buffer.alloc(MAX_ATTACHMENT_BYTES + 1).toString("base64") }]]) assert.throws(() => parseAttachments(input));
  const half = { filename: "large.pdf", content: Buffer.concat([Buffer.from("%PDF-"), Buffer.alloc(MAX_ATTACHMENT_BYTES / 2)]).toString("base64") };
  assert.throws(() => parseAttachments([half, half]), "Combined size must be checked, not only individual files");
});

test("enquiry attachments reach only the team notification", async t => {
  const beforeFetch = global.fetch;
  const beforeEnv = { ...process.env };
  process.env.RESEND_API_KEY = "mock-key";
  process.env.TURNSTILE_SECRET_KEY = "mock-key";
  process.env.CONTACT_NOTIFICATION_EMAIL = "team@example.com";
  t.after(() => { global.fetch = beforeFetch; process.env = beforeEnv; });
  const valid = { fullName: "Example", email: "client@example.com", projectType: "Wood furniture", message: "A complete cabinet for Seoul, with https://example.com/a and https://example.com/b and https://example.com/c", turnstileToken: "mock-token", attachments: [pdf] };
  let emails = [];
  global.fetch = async (url, options) => {
    if (url === "https://challenges.cloudflare.com/turnstile/v0/siteverify") return Response.json({ success: true });
    assert.equal(url, "https://api.resend.com/emails");
    emails.push(JSON.parse(options.body));
    return Response.json({ id: "mock-email" });
  };
  function request(payload) { return new Request("https://example.com/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); }
  const response = await POST(request(valid));
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(emails.length, 2);
  assert.equal(emails[0].to, "team@example.com");
  assert.deepEqual(emails[0].attachments, [pdf]);
  assert.equal(emails[1].to, "client@example.com");
  assert.equal(emails[1].attachments, undefined);
  emails = [];
  const rejected = await POST(request({ ...valid, attachments: [{ filename: "image.png", content: pdf.content }] }));
  assert.equal(rejected.status, 400);
  assert.equal(emails.length, 0);
  const tooLarge = await POST(request({ ...valid, extra: "x".repeat(3 * 1024 * 1024) }));
  assert.equal(tooLarge.status, 413);
  assert.equal(emails.length, 0);
});
