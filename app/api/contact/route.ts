import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const NOTIFICATION_EMAIL = "taaha.baaki@gmail.com";
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL?.trim() || "Ardıç Design & Fabrication <onboarding@resend.dev>";

const MAX_MESSAGE_LENGTH = 3000;
const MAX_LINK_COUNT = 2;
const FIELD_LIMITS = {
  fullName: 120,
  company: 160,
  email: 254,
  phone: 80,
  country: 100,
  projectType: 120,
  projectLocation: 180,
  approximateDimensions: 160,
  quantity: 80,
  targetDeliveryDate: 40,
  materialPreference: 300,
  installationSupport: 120,
  budgetRange: 80,
  confidentiality: 120,
  referenceLink: 1000
} as const;
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
  country?: unknown;
  projectType?: unknown;
  projectLocation?: unknown;
  approximateDimensions?: unknown;
  quantity?: unknown;
  targetDeliveryDate?: unknown;
  materialPreference?: unknown;
  installationSupport?: unknown;
  budgetRange?: unknown;
  confidentiality?: unknown;
  referenceLink?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
};

type Inquiry = {
  fullName: string;
  company: string;
  companyWebsite: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  projectLocation: string;
  approximateDimensions: string;
  quantity: string;
  targetDeliveryDate: string;
  materialPreference: string;
  installationSupport: string;
  budgetRange: string;
  confidentiality: string;
  referenceLink: string;
  message: string;
  turnstileToken: string;
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

function looksLikeSpam(inquiry: Inquiry) {
  if (inquiry.companyWebsite) {
    return true;
  }

  const combined = [
    inquiry.fullName,
    inquiry.company,
    inquiry.email,
    inquiry.phone,
    inquiry.country,
    inquiry.projectType,
    inquiry.projectLocation,
    inquiry.approximateDimensions,
    inquiry.quantity,
    inquiry.targetDeliveryDate,
    inquiry.materialPreference,
    inquiry.installationSupport,
    inquiry.budgetRange,
    inquiry.confidentiality,
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

function safeSubjectPart(value: string) {
  return value.replace(/[\r\n]+/g, " ").slice(0, 160);
}

function findLimitExceeded(inquiry: Inquiry) {
  return (Object.keys(FIELD_LIMITS) as Array<keyof typeof FIELD_LIMITS>).find(
    (field) => inquiry[field].length > FIELD_LIMITS[field]
  );
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

async function verifyTurnstile(token: string, remoteIp: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return {
      ok: false,
      error: "Verification service is not configured."
    };
  }

  if (!token) {
    return {
      ok: false,
      error: "Please complete the verification before sending."
    };
  }

  const body = new FormData();
  body.append("secret", process.env.TURNSTILE_SECRET_KEY);
  body.append("response", token);

  if (remoteIp) {
    body.append("remoteip", remoteIp);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body
    });
    const result = (await response.json().catch(() => null)) as
      | { success?: boolean }
      | null;

    if (!response.ok || result?.success !== true) {
      return {
        ok: false,
        error: "Verification failed. Please try again."
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return {
      ok: false,
      error: "Verification could not be completed. Please try again."
    };
  }
}

export async function POST(request: Request) {
  let payload: InquiryPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const inquiry: Inquiry = {
    fullName: clean(payload.fullName),
    company: clean(payload.company),
    companyWebsite: clean(payload.companyWebsite),
    email: clean(payload.email),
    phone: clean(payload.phone),
    country: clean(payload.country),
    projectType: clean(payload.projectType),
    projectLocation: clean(payload.projectLocation),
    approximateDimensions: clean(payload.approximateDimensions),
    quantity: clean(payload.quantity),
    targetDeliveryDate: clean(payload.targetDeliveryDate),
    materialPreference: clean(payload.materialPreference),
    installationSupport: clean(payload.installationSupport),
    budgetRange: clean(payload.budgetRange),
    confidentiality: clean(payload.confidentiality),
    referenceLink: clean(payload.referenceLink),
    message: clean(payload.message),
    turnstileToken: clean(payload.turnstileToken)
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

  if (findLimitExceeded(inquiry)) {
    return NextResponse.json(
      { error: "One or more fields are longer than the allowed limit." },
      { status: 400 }
    );
  }

  const remoteIp =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "";
  const turnstile = await verifyTurnstile(inquiry.turnstileToken, remoteIp);

  if (!turnstile.ok) {
    return NextResponse.json({ error: turnstile.error }, { status: 400 });
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
    ["Country", inquiry.country || "-"],
    ["Project Type", inquiry.projectType],
    ["Project Location", inquiry.projectLocation || "-"],
    ["Approximate Dimensions", inquiry.approximateDimensions || "-"],
    ["Quantity", inquiry.quantity || "-"],
    ["Target Delivery Date", inquiry.targetDeliveryDate || "-"],
    ["Material / Process Preference", inquiry.materialPreference || "-"],
    ["Installation / Site Support", inquiry.installationSupport || "-"],
    ["Budget Range", inquiry.budgetRange || "-"],
    ["Confidentiality / NDA", inquiry.confidentiality || "-"],
    ["Drawings / 3D Model / Reference Link", inquiry.referenceLink || "-"],
    ["Project Brief", inquiry.message]
  ];

  const notificationText = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const notificationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.6;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">New Ardıç Project RFQ</h1>
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

  const confirmationText = [
    "Thank you for contacting Ardıç Design & Fabrication.",
    "",
    "We have received your project enquiry and will review the scope, geometry, production requirements and timing.",
    "",
    "If additional drawings, 3D models or technical information are required, our team will contact you using the details provided.",
    "",
    "For confidential projects, detailed files can be exchanged after the appropriate confidentiality process is agreed."
  ].join("\n");
  const confirmationHtml = `
    <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.7;">
      <h1 style="font-family: Georgia, serif; font-size: 28px;">Project Enquiry Received</h1>
      <p>Thank you for contacting Ardıç Design & Fabrication.</p>
      <p>We have received your project enquiry and will review the scope, geometry, production requirements and timing.</p>
      <p>If additional drawings, 3D models or technical information are required, our team will contact you using the details provided.</p>
      <p>For confidential projects, detailed files can be exchanged after the appropriate confidentiality process is agreed.</p>
    </div>
  `;

  try {
    await sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: `NEW RFQ · ${safeSubjectPart(inquiry.projectType)} · ${safeSubjectPart(
        inquiry.company || inquiry.fullName
      )}`,
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
      subject: "Ardıç Design & Fabrication — Project Enquiry Received",
      html: confirmationHtml,
      text: confirmationText
    });
  } catch (error) {
    console.error("Contact form confirmation email error:", error);
  }

  return NextResponse.json({ ok: true });
}
