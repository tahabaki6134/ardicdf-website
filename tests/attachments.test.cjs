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
const { MAX_ATTACHMENT_BYTES, MAX_ATTACHMENTS, MAX_ENQUIRY_BODY_BYTES } = require("../lib/attachment-options.ts");
const { readEnquiryPayload } = require("../lib/enquiry-payload.ts");
const pdf = { filename: "cabinet-drawing.pdf", content: Buffer.from("%PDF-1.4\nTest drawing\n%%EOF").toString("base64") };

test("file bytes, names and limits are validated", () => {
  assert.deepEqual(parseAttachments([pdf]), [pdf]);
  assert.deepEqual(parseAttachments(undefined), []);
  assert.equal(parseAttachments(Array(MAX_ATTACHMENTS).fill(pdf)).length, 6);
  for (const input of [null, Array(MAX_ATTACHMENTS + 1).fill(pdf), [{ ...pdf, filename: "../private.pdf" }], [{ ...pdf, filename: "drawing.html" }], [{ ...pdf, content: Buffer.from("<html>not a pdf</html>").toString("base64") }], [{ ...pdf, content: "!bad!" }], [{ ...pdf, content: "" }], [{ ...pdf, content: Buffer.alloc(MAX_ATTACHMENT_BYTES + 1).toString("base64") }]]) assert.throws(() => parseAttachments(input));
  const half = { filename: "large.pdf", content: Buffer.concat([Buffer.from("%PDF-"), Buffer.alloc(MAX_ATTACHMENT_BYTES / 2)]).toString("base64") };
  assert.throws(() => parseAttachments([half, half]), "Combined size must be checked, not only individual files");
});

test("enquiry attachments reach only the team notification", async t => {
  const beforeFetch = global.fetch;
  const beforeEnv = { ...process.env };
  process.env.RESEND_API_KEY = "mock-key";
  process.env.TURNSTILE_SECRET_KEY = "mock-key";
  process.env.CONTACT_NOTIFICATION_EMAIL = "team@example.com";
  process.env.RESEND_FROM_EMAIL = "ARDIÇ <projects@ardicdf.com>";
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
  const tooLarge = await POST(request({ ...valid, extra: "x".repeat(MAX_ENQUIRY_BODY_BYTES) }));
  assert.equal(tooLarge.status, 413);
  assert.equal(emails.length, 0);
  const form = new FormData();
  const { attachments, ...fields } = valid;
  form.append("payload", JSON.stringify(fields));
  for (let i = 0; i < 6; i++) form.append("attachments", new Blob([Buffer.from(pdf.content, "base64")], { type: "application/pdf" }), `drawing-${i}.pdf`);
  const multipart = await POST(new Request("https://example.com/api/contact", { method: "POST", body: form }));
  assert.equal(multipart.status, 200);
  assert.equal(emails[0].attachments.length, 6);
  assert.equal(emails[0].attachments[0].content, pdf.content);
  assert.equal(emails[1].attachments, undefined);
});

test("a full 4 MB upload fits below the host limit and retains exact file bytes", async () => {
  const bytes = Buffer.alloc(MAX_ATTACHMENT_BYTES);
  bytes.write("%PDF-1.4");
  const form = new FormData();
  form.append("payload", JSON.stringify({ language: "tr", message: "Ölçülü çizim" }));
  form.append("attachments", new Blob([bytes]), "drawing.pdf");
  const request = new Request("https://example.com/api/contact", { method: "POST", body: form });
  assert.ok((await request.clone().arrayBuffer()).byteLength < 4_500_000);
  const parsed = await readEnquiryPayload(request);
  assert.equal(parsed.message, "Ölçülü çizim");
  assert.deepEqual(Buffer.from(parseAttachments(parsed.attachments)[0].content, "base64"), bytes);
});

test("malformed, excessive and streamed uploads are rejected before delivery", async () => {
  for (const type of ["duplicate-payload", "embedded-attachments", "extra-field", "too-many-files", "oversized-file", "text-file", "bad-json", "bad-signature"]) {
    const form = new FormData();
    form.append("payload", type === "bad-json" ? "{" : JSON.stringify(type === "embedded-attachments" ? { attachments: [] } : { language: "tr" }));
    if (type === "duplicate-payload") form.append("payload", "{}");
    if (type === "extra-field") form.append("unexpected", "value");
    if (type === "too-many-files") for (let i = 0; i < 7; i++) form.append("attachments", new Blob(["%PDF-1.4"]), `drawing-${i}.pdf`);
    if (type === "oversized-file") form.append("attachments", new Blob([Buffer.alloc(MAX_ATTACHMENT_BYTES + 1)]), "large.pdf");
    if (type === "text-file") form.append("attachments", "https://untrusted.example/file.pdf");
    if (type === "bad-signature") form.append("attachments", new Blob(["not a pdf"]), "drawing.pdf");
    const response = await POST(new Request("https://example.com/api/contact", { method: "POST", headers: { "X-ARDIC-Language": "tr" }, body: form }));
    assert.equal(response.status, type === "oversized-file" ? 413 : 400, type);
  }
  const oversized = new Request("https://example.com/api/contact", { method: "POST", body: new ReadableStream({ start(controller) { controller.enqueue(new Uint8Array(MAX_ENQUIRY_BODY_BYTES + 1)); controller.close(); } }), duplex: "half" });
  assert.equal(oversized.headers.get("content-length"), null);
  assert.equal((await POST(oversized)).status, 413);
});
