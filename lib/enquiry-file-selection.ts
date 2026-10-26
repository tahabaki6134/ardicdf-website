import { MAX_ATTACHMENTS, MAX_ATTACHMENT_BYTES } from "./attachment-options";

type AttachmentMetadata = { name: string; size: number };
export type AttachmentSelectionError = "count" | "size" | "format";

// Check metadata before sending; the API still validates the actual file bytes.
// The visitor's files are kept intact, including high-resolution drawings.
export function validateAttachmentSelection(files: readonly AttachmentMetadata[]): AttachmentSelectionError | undefined {
  if (files.length > MAX_ATTACHMENTS) return "count";
  if (files.some(file => !Number.isSafeInteger(file.size) || file.size <= 0 || file.name.length > 180 || !/\.(pdf|jpe?g|png|webp)$/i.test(file.name) || /[\x00-\x1f/\\]/.test(file.name))) return "format";
  if (files.reduce((sum, file) => sum + file.size, 0) > MAX_ATTACHMENT_BYTES) return "size";
  return undefined;
}
