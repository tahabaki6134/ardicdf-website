export const MAX_ATTACHMENTS = 6;
// Decimal MB, matching the visitor-facing limit. Multipart avoids base64's
// additional 33% and leaves room below Vercel's 4.5 MB request limit.
export const MAX_ATTACHMENT_BYTES = 4_000_000;
export const MAX_ENQUIRY_BODY_BYTES = 4_300_000;
export const attachmentAccept = ".pdf,.jpg,.jpeg,.png,.webp";
export type EnquiryAttachment = { filename: string; content: string };

