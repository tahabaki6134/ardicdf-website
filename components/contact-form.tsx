"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { trackConversion } from "@/components/conversion-tracking";

const projectTypes = [
  "Theme Park / Entertainment",
  "Hospitality / Retail Environment",
  "Architectural Decor",
  "Sculpture / Character Production",
  "Brand Installation",
  "CNC / Mold / Composite Production",
  "Large-Scale Fabrication",
  "Other"
];

const initialForm = {
  fullName: "",
  company: "",
  companyWebsite: "",
  email: "",
  phone: "",
  projectType: "",
  projectLocation: "",
  projectScope: "",
  message: ""
};

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

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

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

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.ok !== true) {
        throw new Error(data.error || "Unable to send your project enquiry right now.");
      }

      setForm(initialForm);
      setError("");
      setFieldErrors({});
      setStatus("success");
      trackConversion("contact_form_success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your project enquiry right now."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 bg-white p-8 shadow-soft md:p-10">
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
        <div className="border border-bronze/30 bg-porcelain p-6">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Project Enquiry Received
          </p>
          <p className="mt-4 leading-7 text-ink/70">
            Thank you. Our team has received your project enquiry and will review the
            brief shortly.
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
        <div className="border border-bronze/30 bg-porcelain p-5 text-sm leading-7 text-ink/70">
          {error}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Name
          </span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
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
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Company
          </span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={updateField}
            className={controlClass("company")}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Email
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
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
            value={form.phone}
            onChange={updateField}
            className={controlClass("phone")}
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Project Type
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
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
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
            value={form.projectLocation}
            onChange={updateField}
            className={controlClass("projectLocation")}
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
          Project Size / Scope
        </span>
        <input
          name="projectScope"
          type="text"
          value={form.projectScope}
          onChange={updateField}
          className={controlClass("projectScope")}
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
          Project Brief / Message
        </span>
        <textarea
          name="message"
          rows={6}
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Start a Project"}
      </button>
    </form>
  );
}
