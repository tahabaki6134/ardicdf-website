import { NextResponse } from "next/server";
import {
  fieldLabels,
  initialEnquiry,
  validateEnquiry,
  type Enquiry,
  type EnquiryField
} from "@/lib/enquiry";
import { getIndustry } from "@/lib/industries";
import { getProject, MAX_SELECTED_PROJECTS, parseSelectedProjects } from "@/lib/projects";

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const safeSubject = (value: string) => value.replace(/[\r\n]+/g, " ").slice(0, 160);

async function verifyTurnstile(token: string, remoteIp: string) {
  if (!process.env.TURNSTILE_SECRET_KEY)
    return { ok: false, error: "Verification service is not configured." };
  if (!token || token.length > 4096)
    return { ok: false, error: "Please complete the verification before sending." };
  const body = new FormData();
  body.append("secret", process.env.TURNSTILE_SECRET_KEY);
  body.append("response", token);
  if (remoteIp) body.append("remoteip", remoteIp);
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      signal: AbortSignal.timeout(15000)
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.success !== true)
      return { ok: false, error: "Verification failed. Please try again." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Verification could not be completed. Please try again." };
  }
}

async function sendEmail(payload: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(15000),
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM_EMAIL?.trim() ||
        "Ardıç Design & Fabrication <onboarding@resend.dev>",
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.replyTo
    })
  });
  if (!response.ok)
    throw new Error("Email provider rejected the request (" + response.status + ").");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    const value: unknown = await request.json();
    if (!value || typeof value !== "object" || Array.isArray(value))
      throw new Error("Invalid body");
    payload = value as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const inquiry = Object.fromEntries(
    Object.keys(initialEnquiry).map((key) => [key, clean(payload[key])])
  ) as Enquiry;
  if (inquiry.companyWebsite)
    return NextResponse.json(
      { error: "Unable to process this enquiry. Please reload and try again." },
      { status: 400 }
    );

  const errors = validateEnquiry(inquiry);
  if (Object.keys(errors).length)
    return NextResponse.json(
      { error: "Please check your enquiry details.", fields: errors },
      { status: 400 }
    );
  if (inquiry.industry && !getIndustry(inquiry.industry))
    return NextResponse.json({ error: "Please choose a sector from the list." }, { status: 400 });

  const rawSelection = payload.selectedProjects;
  if (
    rawSelection !== undefined &&
    (!Array.isArray(rawSelection) ||
      rawSelection.length > MAX_SELECTED_PROJECTS ||
      rawSelection.some((id) => typeof id !== "string" || !getProject(id)))
  ) {
    return NextResponse.json(
      { error: "Please check your selected portfolio examples." },
      { status: 400 }
    );
  }
  const selected = parseSelectedProjects(rawSelection);
  if (!process.env.RESEND_API_KEY)
    return NextResponse.json({ error: "Email service is not configured." }, { status: 503 });

  const remoteIp =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";
  const verification = await verifyTurnstile(clean(payload.turnstileToken), remoteIp);
  if (!verification.ok) return NextResponse.json({ error: verification.error }, { status: 400 });

  // Verification handles automated requests. Never silently discard a valid
  // enquiry because its text contains a marketing term or a place such as Seoul.
  const rows = (Object.keys(initialEnquiry) as EnquiryField[])
    .filter((key) => key !== "companyWebsite")
    .map((key) => [
      fieldLabels[key],
      key === "industry"
        ? getIndustry(inquiry.industry)?.shortTitle || "Not specified"
        : inquiry[key] || "Not specified"
    ]);
  rows.push([
    "Selected portfolio examples",
    selected.length
      ? selected
          .map((id) => getProject(id)!.title + " — https://www.ardicdf.com/works/" + id)
          .join("\n")
      : "None selected"
  ]);
  const notificationText = rows.map(([label, value]) => label + ": " + value).join("\n\n");
  const tableRows = rows
    .map(
      ([label, value]) =>
        '<tr><th scope="row" style="padding:12px;text-align:left;vertical-align:top;border-top:1px solid #ddd">' +
        escapeHtml(label) +
        '</th><td style="padding:12px;white-space:pre-wrap;border-top:1px solid #ddd">' +
        escapeHtml(value) +
        "</td></tr>"
    )
    .join("");
  const notificationHtml =
    '<div style="font-family:Arial,sans-serif;line-height:1.6;color:#111"><h1>New Ardıç project enquiry</h1><table style="width:100%;border-collapse:collapse">' +
    tableRows +
    "</table></div>";
  const notificationEmail =
    process.env.CONTACT_NOTIFICATION_EMAIL?.trim() || "taaha.baaki@gmail.com";

  try {
    await sendEmail({
      to: notificationEmail,
      subject:
        "NEW RFQ · " +
        safeSubject(inquiry.projectType) +
        " · " +
        safeSubject(inquiry.company || inquiry.fullName),
      html: notificationHtml,
      text: notificationText,
      replyTo: inquiry.email
    });
  } catch {
    console.error("Contact notification could not be sent.");
    return NextResponse.json(
      { error: "Unable to send your project enquiry right now. Please try again later." },
      { status: 502 }
    );
  }

  const confirmationText = [
    "Thank you for contacting Ardıç Design & Fabrication.",
    "Your project enquiry has been sent to our team for review.",
    "Project type: " + inquiry.projectType,
    "We will use your contact details to discuss the scope, production requirements and next steps.",
    "For confidential projects, wait until the appropriate terms are agreed before sharing sensitive drawings or models."
  ].join("\n\n");
  let confirmationSent = false;
  try {
    await sendEmail({
      to: inquiry.email,
      subject: "Ardıç Design & Fabrication — Project enquiry received",
      html:
        '<div style="font-family:Arial,sans-serif;line-height:1.7;white-space:pre-wrap">' +
        escapeHtml(confirmationText) +
        "</div>",
      text: confirmationText,
      replyTo: notificationEmail
    });
    confirmationSent = true;
  } catch {
    // The team's notification succeeded. Report receipt accurately without
    // encouraging a duplicate enquiry when the optional confirmation fails.
    console.error("Contact confirmation could not be sent.");
  }
  return NextResponse.json({ ok: true, confirmationSent });
}
