import { MAX_ATTACHMENTS, MAX_ATTACHMENT_BYTES, type EnquiryAttachment } from "./attachment-options";
export type { EnquiryAttachment } from "./attachment-options";

// Only local bytes are accepted: the email provider must never fetch a visitor-supplied URL.
export function parseAttachments(value: unknown): EnquiryAttachment[] {
  if (value === undefined) return [];
  if (!Array.isArray(value) || value.length > MAX_ATTACHMENTS) throw new Error("file-count");
  let total = 0;
  return value.map(file => {
    if (!file || typeof file !== "object" || typeof file.filename !== "string" || typeof file.content !== "string") throw new Error("file-format");
    if (file.filename.length > 180 || !/\.(pdf|jpe?g|png|webp)$/i.test(file.filename) || /[\x00-\x1f/\\]/.test(file.filename)) throw new Error("file-format");
    if (file.content.length > Math.ceil(MAX_ATTACHMENT_BYTES / 3) * 4 || file.content.length % 4 !== 0 || !/^[A-Za-z0-9+/]*={0,2}$/.test(file.content)) throw new Error("file-size");
    const bytes = Buffer.from(file.content, "base64");
    total += bytes.length;
    if (!bytes.length || total > MAX_ATTACHMENT_BYTES || bytes.toString("base64") !== file.content) throw new Error("file-size");
    const ext = file.filename.split(".").pop()!.toLowerCase();
    const valid = ext === "pdf" ? bytes.subarray(0, 5).toString() === "%PDF-"
      : ext === "png" ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
      : ext === "webp" ? bytes.subarray(0, 4).toString() === "RIFF" && bytes.subarray(8, 12).toString() === "WEBP"
      : bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
    if (!valid) throw new Error("file-format");
    return { filename: file.filename, content: file.content };
  });
}
