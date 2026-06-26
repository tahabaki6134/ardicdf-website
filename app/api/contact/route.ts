import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const NOTIFICATION_EMAIL = "taaha.baaki@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL?.trim() || "Ardıç Design & Fabrication <onboarding@resend.dev>";

const MAX_MESSAGE_LENGTH = 3000;
const MAX_LINK_COUNT = 2;
const SPAM_PHRASES = [
  "graphic design",
  "branding refresh",
  "seo",
  "marketing services",
  "we noticed your website",
  "boost your brand",
  "rank on google"
];

type InquiryPayload = {
  fullName?: unknown;
  company?: unknown;
  companyWebsite?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  projectLocation?: unknown;
  projectScope?: unknown;
  message?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function countLinks(value: string) {
  return (value.match(/https?:\/\/|www\.|[a-z0-9-]+\.[a-z]{2,}/gi) || []).length;
}

function looksLikeSpam(inquiry: {
  companyWebsite: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  projectScope: string;
  message: string;
}) {
  if (inquiry.companyWebsite) {
    return true;
  }

  const combined = [
    inquiry.fullName,
    inquiry.company,
    inquiry.email,
    inquiry.phone,
    inquiry.projectType,
    inquiry.projectLocation,
    inquiry.projectScope,
    inquiry.message
  ]
    .join(" ")
    .toLowerCase();

  if (countLinks(inquiry.message) > MAX_LINK_COUNT) {
    return true;
  }

  return SPAM_PHRASES.some((phrase) => combined.includes(phrase));
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
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const inquiry = {
    fullName: clean(payload.fullName),
    company: clean(payload.company),
    companyWebsite: clean(payload.companyWebsite),
    email: clean(payload.email),
    phone: clean(payload.phone),
    projectType: clean(payload.projectType),
    projectLocation: clean(payload.projectLocation),
    projectScope: clean(payload.projectScope),
    message: clean(payload.message)
  };

  if (inquiry.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  if (
    !inquiry.fullName ||
    !inquiry.email ||
    !isValidEmail(inquiry.email) ||
    !inquiry.projectType ||
    !inquiry.message
  ) {
    return NextResponse.json(
      { error: "Please add your name, email, project type, and message before sending." },
      { status: 400 }
    );
  }

  if (inquiry.message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: "Please keep your message under 3000 characters." },
      { status: 400 }
    );
  }

  if (looksLikeSpam(inquiry)) {
    return NextResponse.json({ ok: true });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const rows = [
    ["Name", inquiry.fullName],
    ["Company", inquiry.company || "-"],
    ["Email", inquiry.email],
    ["Phone / WhatsApp", inquiry.phone || "-"],
    ["Project Type", inquiry.projectType],
    ["Project Location", inquiry.projectLocation || "-"],
    ["Project Size / Scope", inquiry.projectScope || "-"],
    ["Message", inquiry.message]
  ];

  const notificationText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.6;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">New Ardıç Project Enquiry</h1>
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
    "Thank you for contacting Ardıç Design & Fabrication.\nOur team has received your project enquiry and will review the brief shortly.";
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.7;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">Project Enquiry Received</h1>
      <p>Thank you for contacting Ardıç Design & Fabrication.</p>
      <p>Our team has received your project enquiry and will review the brief shortly.</p>
    </div>
  `;

  try {
    await sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `New Project Enquiry - ${inquiry.projectType}`,
      html: notificationHtml,
      text: notificationText,
      replyTo: inquiry.email
    });
  } catch (error) {
    console.error("Contact form notification email error:", error);
    return NextResponse.json(
      { error: "Unable to send your project enquiry right now. Please try again later." },
      { status: 502 }
    );
  }

  try {
    await sendEmail({
      to: inquiry.email,
      subject: "Ardıç Design & Fabrication - Inquiry Received",
      html: confirmationHtml,
      text: confirmationText
    });
  } catch (error) {
    console.error("Contact form confirmation email error:", error);
  }

  return NextResponse.json({ ok: true });
}
