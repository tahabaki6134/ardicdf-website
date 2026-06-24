"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const projectTypes = [
  "Thematic Environment",
  "Sculptural Object",
  "Architectural Decor",
  "Brand Installation",
  "Large-Scale Fabrication",
  "Other"
];

const initialForm = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const updateField = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Unable to send your inquiry right now.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send your inquiry right now."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-8 shadow-soft md:p-10">
      {status === "success" ? (
        <div className="border border-bronze/30 bg-porcelain p-6">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Inquiry Received
          </p>
          <p className="mt-4 leading-7 text-ink/70">
            Thank you. Our team has received your inquiry and will respond shortly.
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
            Full Name
          </span>
          <input
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={form.fullName}
            onChange={updateField}
            className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
          />
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
            className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
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
            className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
          />
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Phone Number
          </span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={updateField}
            className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
          Project Type
        </span>
        <select
          name="projectType"
          required
          value={form.projectType}
          onChange={updateField}
          className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition focus:border-bronze"
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
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={updateField}
          className="mt-3 w-full resize-none border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
        />
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
