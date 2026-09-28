import type { EnquiryField } from "./enquiry";
import type { Locale } from "./i18n/locales";

export class EnquiryRequestError extends Error {
  constructor(
    public readonly reason: "timeout" | "network" | "response",
    message = "",
    public readonly status?: number,
    public readonly fields?: Partial<Record<EnquiryField, string>>
  ) { super(message); }
}

// Leave time for verification and mail delivery, but never leave the visitor
// indefinitely on "Sending". A timeout is an unknown result, not a failed send.
export async function sendEnquiry(payload: object, locale: Locale, timeoutMs = 60_000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-ARDIC-Language": locale },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    const result = await response.json().catch(() => null);
    if (controller.signal.aborted) throw new EnquiryRequestError("timeout");
    if (!response.ok || result?.ok !== true) {
      throw new EnquiryRequestError("response", typeof result?.error === "string" ? result.error : "", response.status, result?.fields);
    }
    return { confirmationSent: result.confirmationSent === true };
  } catch (error) {
    if (error instanceof EnquiryRequestError) throw error;
    throw new EnquiryRequestError(controller.signal.aborted ? "timeout" : "network");
  } finally {
    clearTimeout(timer);
  }
}
