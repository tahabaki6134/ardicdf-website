import { MAX_ATTACHMENTS, MAX_ATTACHMENT_BYTES, MAX_ENQUIRY_BODY_BYTES } from "./attachment-options";

export class EnquiryPayloadError extends Error {
  constructor(public readonly status: 400 | 413) { super("Invalid enquiry payload"); }
}

export async function readEnquiryPayload(request: Request): Promise<Record<string, unknown>> {
  if (Number(request.headers.get("content-length")) > MAX_ENQUIRY_BODY_BYTES) throw new EnquiryPayloadError(413);
  const reader = request.body?.getReader();
  if (!reader) throw new EnquiryPayloadError(400);
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > MAX_ENQUIRY_BODY_BYTES) {
        await reader.cancel();
        throw new EnquiryPayloadError(413);
      }
      chunks.push(chunk.value);
    }
  } finally { reader.releaseLock(); }

  const bytes = Buffer.concat(chunks);
  const contentType = request.headers.get("content-type") || "";
  let value: unknown;
  if (contentType.startsWith("multipart/form-data;")) {
    const form = await new Response(bytes, { headers: { "Content-Type": contentType } }).formData();
    const entries = form.getAll("payload");
    if (entries.length !== 1 || typeof entries[0] !== "string" || entries[0].length > 40_000) throw new EnquiryPayloadError(400);
    for (const key of Array.from(form.keys())) if (key !== "payload" && key !== "attachments") throw new EnquiryPayloadError(400);
    value = JSON.parse(entries[0]);
    if (!value || typeof value !== "object" || Array.isArray(value) || "attachments" in value) throw new EnquiryPayloadError(400);
    const files = form.getAll("attachments");
    if (files.length > MAX_ATTACHMENTS) throw new EnquiryPayloadError(400);
    let fileBytes = 0;
    const attachments = [];
    for (const file of files) {
      if (typeof file === "string") throw new EnquiryPayloadError(400);
      fileBytes += file.size;
      if (fileBytes > MAX_ATTACHMENT_BYTES) throw new EnquiryPayloadError(413);
      attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") });
    }
    return { ...value, attachments };
  }
  // Keep already-open clients compatible with the previous JSON transport.
  value = JSON.parse(bytes.toString("utf8"));
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new EnquiryPayloadError(400);
  return value as Record<string, unknown>;
}
