import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFICATION_EMAIL = "taaha.baaki@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL?.trim() || "Ardıç Mimarlık <onboarding@resend.dev>";

type InquiryPayload = {
  fullName?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(payload: {
  to: string;
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}) {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.replyTo
    })
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`Resend request failed (${response.status}): ${errorText}`);
  }
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const inquiry = {
    fullName: clean(payload.fullName),
    company: clean(payload.company),
    email: clean(payload.email),
    phone: clean(payload.phone),
    projectType: clean(payload.projectType),
    message: clean(payload.message)
  };

  if (
    !inquiry.fullName ||
    !inquiry.email ||
    !isValidEmail(inquiry.email) ||
    !inquiry.projectType ||
    !inquiry.message
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields with a valid email address." },
      { status: 400 }
    );
  }

  const rows = [
    ["Full Name", inquiry.fullName],
    ["Company", inquiry.company || "-"],
    ["Email", inquiry.email],
    ["Phone Number", inquiry.phone || "-"],
    ["Project Type", inquiry.projectType],
    ["Message", inquiry.message]
  ];

  const notificationText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.6;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">New Ardıç Website Inquiry</h1>
      <table style="border-collapse: collapse; width: 100%;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top: 1px solid #e5e0d6; padding: 12px 16px; font-weight: 700; width: 180px;">${escapeHtml(label)}</td>
                <td style="border-top: 1px solid #e5e0d6; padding: 12px 16px; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
    </div>
  `;

  const confirmationText =
    "Thank you for contacting Ardıç.\nOur team has received your inquiry and will respond shortly.";
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.7;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">Inquiry Received</h1>
      <p>Thank you for contacting Ardıç.</p>
      <p>Our team has received your inquiry and will respond shortly.</p>
    </div>
  `;

  try {
    await sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New Website Inquiry - ${inquiry.projectType}`,
      html: notificationHtml,
      text: notificationText,
      replyTo: inquiry.email
    });
  } catch (error) {
    console.error("Contact form notification email error:", error);
    return NextResponse.json(
      { error: "Unable to send your inquiry right now. Please try again later." },
      { status: 502 }
    );
  }

  try {
    await sendEmail({
      to: inquiry.email,
      subject: "Ardıç Mimarlık - Inquiry Received",
      html: confirmationHtml,
      text: confirmationText
    });
  } catch (error) {
    console.error("Contact form confirmation email error:", error);
  }

  return NextResponse.json({ ok: true });
}
