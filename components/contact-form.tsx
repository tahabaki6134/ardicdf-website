"use client";

import Script from "next/script";
import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { trackConversion } from "@/components/conversion-tracking";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const projectTypes = [
  "Themed Environment Fabrication",
  "Scenic Fabrication / Large-Scale Props",
  "CNC Foam / EPS / XPS Machining",
  "Polyurethane Machining / Casting",
  "Composite Fabrication / Mold Making",
  "Fiberglass / GRP / Polyester",
  "Carbon Fiber Lamination",
  "Large-Format 3D Printing",
  "Molds / Masters / Plugs / Tooling",
  "Industrial Prototype / Product Development",
  "Architectural Decor",
  "Sculpture / Character Production",
  "Artificial Rock / Organic Forms",
  "Brand Activation / Exhibition",
  "Wood Fabrication / CNC Woodworking",
  "UAV / USV Prototype Development",
  "Multi-Material Custom Fabrication",
  "Other"
];

const budgetRanges = [
  "Not defined yet",
  "Under €5,000",
  "€5,000 – €15,000",
  "€15,000 – €30,000",
  "€30,000 – €75,000",
  "€75,000 – €150,000",
  "€150,000+",
  "Prefer to discuss privately"
];

const installationOptions = [
  "Fabrication only",
  "Fabrication + delivery preparation",
  "Site assembly support may be required",
  "Installation may be required",
  "Not sure yet"
];

const confidentialityOptions = [
  "Standard project enquiry",
  "Confidential project",
  "NDA required before detailed file exchange"
];

const initialForm = {
  fullName: "",
  company: "",
  companyWebsite: "",
  email: "",
  phone: "",
  country: "",
  projectType: "",
  projectLocation: "",
  approximateDimensions: "",
  quantity: "",
  targetDeliveryDate: "",
  materialPreference: "",
  installationSupport: "",
  budgetRange: "",
  confidentiality: "",
  referenceLink: "",
  message: ""
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type FormField = keyof typeof initialForm;
type FieldErrors = Partial<Record<FormField, string>>;

function validateForm(form: typeof initialForm) {
  const errors: FieldErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Please add your name.";
  }

  if (!form.email.trim()) {
    errors.email = "Please add your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!form.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!form.message.trim()) {
    errors.message = "Please add a short project brief.";
  }

  return errors;
}

function FormSectionLabel({ children }: { children: string }) {
  return (
    <p className="border-b border-ink/10 pb-3 text-xs font-semibold uppercase tracking-brand text-bronze">
      {children}
    </p>
  );
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string>();

  const resetTurnstile = useCallback(() => {
    setTurnstileToken("");
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (!turnstileSiteKey || !turnstileRef.current || !window.turnstile || turnstileWidgetId.current) {
      return;
    }

    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: "light",
      callback: (token) => {
        setTurnstileToken(token);
        setTurnstileError("");
      },
      "expired-callback": () => {
        setTurnstileToken("");
        setTurnstileError("Please complete the verification again.");
      },
      "error-callback": () => {
        setTurnstileToken("");
        setTurnstileError("Verification could not be completed. Please try again.");
      }
    });
  }, []);

  useEffect(() => {
    renderTurnstile();
  }, [renderTurnstile]);

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const fieldName = event.target.name as FormField;
    setForm((current) => ({
      ...current,
      [fieldName]: event.target.value
    }));
    setFieldErrors((current) => {
      if (!current[fieldName]) {
        return current;
      }

      const next = { ...current };
      delete next[fieldName];
      return next;
    });
  };

  const controlClass = (field: FormField, extra = "") =>
    `mt-3 w-full border px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze ${
      fieldErrors[field] ? "border-bronze bg-white" : "border-ink/10 bg-porcelain"
    } ${extra}`;

  const errorId = (field: FormField) => (fieldErrors[field] ? `${field}-error` : undefined);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setError("");
    setFieldErrors({});

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus("error");
      setError("Please complete the highlighted required fields before sending.");
      return;
    }

    if (!turnstileSiteKey) {
      setStatus("error");
      setError("Verification is not configured. Please contact us by WhatsApp or phone.");
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Please complete the verification before sending.");
      setStatus("error");
      setError("Please complete the verification before sending.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          turnstileToken
        })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok !== true) {
        throw new Error(data.error || "Unable to send your project enquiry right now.");
      }

      setForm(initialForm);
      setError("");
      setFieldErrors({});
      setStatus("success");
      resetTurnstile();
      trackConversion("contact_form_success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your project enquiry right now."
      );
      resetTurnstile();
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-9 bg-white p-6 shadow-soft sm:p-8 md:p-10">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderTurnstile}
      />

      <label className="hidden" aria-hidden="true">
        Company website
        <input
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={updateField}
        />
      </label>

      {status === "success" ? (
        <div className="border border-bronze/30 bg-porcelain p-6" role="status">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Project Enquiry Received
          </p>
          <p className="mt-4 leading-7 text-ink/70">
            Thank you. Your brief has been received and will be reviewed by our fabrication team.
          </p>
          <p className="mt-3 leading-7 text-ink/70">
            If you need to send additional information immediately, you can continue the
            conversation on WhatsApp.
          </p>
          <a
            href="https://wa.me/905436268969"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
          >
            Continue on WhatsApp
          </a>
        </div>
      ) : null}

      {status === "error" ? (
        <div className="border border-bronze/30 bg-porcelain p-5 text-sm leading-7 text-ink/70" role="alert">
          {error}
        </div>
      ) : null}

      <section className="grid gap-5" aria-labelledby="rfq-contact-label">
        <FormSectionLabel>Contact</FormSectionLabel>
        <span id="rfq-contact-label" className="sr-only">Contact details</span>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">Name *</span>
            <input
              name="fullName"
              type="text"
              autoComplete="name"
              required
              maxLength={120}
              value={form.fullName}
              onChange={updateField}
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={errorId("fullName")}
              className={controlClass("fullName")}
            />
            {fieldErrors.fullName ? (
              <p id="fullName-error" className="mt-2 text-sm leading-6 text-bronze">
                {fieldErrors.fullName}
              </p>
            ) : null}
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">Company</span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={160}
              value={form.company}
              onChange={updateField}
              className={controlClass("company")}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">Email *</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              value={form.email}
              onChange={updateField}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={errorId("email")}
              className={controlClass("email")}
            />
            {fieldErrors.email ? (
              <p id="email-error" className="mt-2 text-sm leading-6 text-bronze">
                {fieldErrors.email}
              </p>
            ) : null}
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Phone / WhatsApp
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={80}
              value={form.phone}
              onChange={updateField}
              className={controlClass("phone")}
            />
          </label>
        </div>

        <label className="block md:max-w-[calc(50%_-_0.625rem)]">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">Country</span>
          <input
            name="country"
            type="text"
            autoComplete="country-name"
            maxLength={100}
            value={form.country}
            onChange={updateField}
            className={controlClass("country")}
          />
        </label>
      </section>

      <section className="grid gap-5" aria-labelledby="rfq-project-label">
        <FormSectionLabel>Project</FormSectionLabel>
        <span id="rfq-project-label" className="sr-only">Project details</span>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Project Type *
            </span>
            <select
              name="projectType"
              required
              value={form.projectType}
              onChange={updateField}
              aria-invalid={Boolean(fieldErrors.projectType)}
              aria-describedby={errorId("projectType")}
              className={controlClass("projectType")}
            >
              <option value="" disabled>Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {fieldErrors.projectType ? (
              <p id="projectType-error" className="mt-2 text-sm leading-6 text-bronze">
                {fieldErrors.projectType}
              </p>
            ) : null}
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Project Location
            </span>
            <input
              name="projectLocation"
              type="text"
              autoComplete="address-level2"
              maxLength={180}
              value={form.projectLocation}
              onChange={updateField}
              className={controlClass("projectLocation")}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Approximate Dimensions
            </span>
            <input
              name="approximateDimensions"
              type="text"
              maxLength={160}
              placeholder="e.g. 4200 × 1800 × 900 mm"
              value={form.approximateDimensions}
              onChange={updateField}
              className={controlClass("approximateDimensions")}
            />
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">Quantity</span>
            <input
              name="quantity"
              type="text"
              inputMode="numeric"
              maxLength={80}
              placeholder="e.g. 1, 10, 50"
              value={form.quantity}
              onChange={updateField}
              className={controlClass("quantity")}
            />
          </label>
        </div>

        <label className="block md:max-w-[calc(50%_-_0.625rem)]">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Target Delivery Date
          </span>
          <input
            name="targetDeliveryDate"
            type="date"
            value={form.targetDeliveryDate}
            onChange={updateField}
            className={controlClass("targetDeliveryDate")}
          />
        </label>
      </section>

      <section className="grid gap-5" aria-labelledby="rfq-production-label">
        <FormSectionLabel>Production</FormSectionLabel>
        <span id="rfq-production-label" className="sr-only">Production preferences</span>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Material / Process Preference
          </span>
          <input
            name="materialPreference"
            type="text"
            maxLength={300}
            placeholder="EPS/XPS, polyurethane, GRP, carbon fiber, 3D printing, wood, unsure..."
            value={form.materialPreference}
            onChange={updateField}
            className={controlClass("materialPreference")}
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Installation / Site Support
            </span>
            <select
              name="installationSupport"
              value={form.installationSupport}
              onChange={updateField}
              className={controlClass("installationSupport")}
            >
              <option value="">Select if known</option>
              {installationOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Budget Range
            </span>
            <select
              name="budgetRange"
              value={form.budgetRange}
              onChange={updateField}
              className={controlClass("budgetRange")}
            >
              <option value="">Select if known</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Confidentiality / NDA
          </span>
          <select
            name="confidentiality"
            value={form.confidentiality}
            onChange={updateField}
            className={controlClass("confidentiality")}
          >
            <option value="">Select if applicable</option>
            {confidentialityOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
      </section>

      <section className="grid gap-5" aria-labelledby="rfq-files-label">
        <FormSectionLabel>Files</FormSectionLabel>
        <span id="rfq-files-label" className="sr-only">Reference files</span>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Drawings / 3D Model / Reference Link
          </span>
          <input
            name="referenceLink"
            type="text"
            maxLength={1000}
            placeholder="Google Drive, Dropbox, WeTransfer, OneDrive, client server, or files available after NDA"
            value={form.referenceLink}
            onChange={updateField}
            className={controlClass("referenceLink")}
          />
        </label>
        <p className="text-sm leading-6 text-ink/50">
          Share a secure file link or note how the project files can be exchanged. Direct file
          upload is not required.
        </p>
      </section>

      <section className="grid gap-5" aria-labelledby="rfq-brief-label">
        <FormSectionLabel>Brief</FormSectionLabel>
        <span id="rfq-brief-label" className="sr-only">Project brief</span>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Project Brief / Message *
          </span>
          <textarea
            name="message"
            rows={7}
            required
            maxLength={3000}
            value={form.message}
            onChange={updateField}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={errorId("message")}
            className={controlClass("message", "resize-none")}
          />
          {fieldErrors.message ? (
            <p id="message-error" className="mt-2 text-sm leading-6 text-bronze">
              {fieldErrors.message}
            </p>
          ) : null}
        </label>
      </section>

      <div>
        <div ref={turnstileRef} className="min-h-[65px]" />
        {turnstileError ? (
          <p className="mt-2 text-sm leading-6 text-bronze">{turnstileError}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit Project Enquiry"}
      </button>
    </form>
  );
}
