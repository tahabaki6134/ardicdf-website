"use client";

import Script from "next/script";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { trackConversion } from "./conversion-tracking";
import { EnquiryField } from "./enquiry-field";
import { useProjectSelection } from "./project-selection-provider";
import {
  budgetRanges,
  confidentialityOptions,
  enquirySteps,
  fieldLabels,
  initialEnquiry,
  installationOptions,
  projectTypes,
  validateEnquiry,
  type Enquiry,
  type EnquiryErrors,
  type EnquiryField as FieldName
} from "@/lib/enquiry";
import { getIndustry, industries } from "@/lib/industries";
import { getProject } from "@/lib/projects";
import { contactEmail } from "@/lib/contact-details";

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
      remove: (widgetId: string) => void;
    };
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm({
  initialSelected = null,
  initialIndustry = ""
}: {
  initialSelected?: string[] | null;
  initialIndustry?: string;
}) {
  const [form, setForm] = useState<Enquiry>({ ...initialEnquiry, industry: initialIndustry });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [token, setToken] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const widgetContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);
  const inFlight = useRef(false);
  const initializedSelection = useRef(false);
  const formStarted = useRef(false);
  const { selected, ready, setSelected } = useProjectSelection();
  const succeeded = status === "success";

  useEffect(() => {
    if (!ready || initializedSelection.current) return;
    if (initialSelected !== null) setSelected(initialSelected);
    initializedSelection.current = true;
  }, [ready, initialSelected, setSelected]);

  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);

  useEffect(() => {
    if (
      step !== 3 ||
      succeeded ||
      !scriptReady ||
      !siteKey ||
      !window.turnstile ||
      !widgetContainer.current
    )
      return;
    setToken("");
    setVerificationError("");
    try {
      widgetId.current = window.turnstile.render(widgetContainer.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (value) => {
          setToken(value);
          setVerificationError("");
        },
        "expired-callback": () => setToken(""),
        "error-callback": () => {
          setToken("");
          setVerificationError(
            "Verification could not load. Retry verification or use the email link below."
          );
        }
      });
    } catch {
      setVerificationError(
        "Verification could not load. Please reload this page or send your brief by email."
      );
    }
    return () => {
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [step, scriptReady, succeeded]);

  function updateField(name: FieldName, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (!formStarted.current) {
      formStarted.current = true;
      trackConversion("contact_form_start");
    }
  }

  function resetVerification() {
    setToken("");
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }

  function showErrors(found: EnquiryErrors) {
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) requestAnimationFrame(() => document.getElementById(first)?.focus());
  }

  function nextStep() {
    const found = validateEnquiry(form, enquirySteps[step].fields);
    if (Object.keys(found).length) {
      showErrors(found);
      return;
    }
    setError("");
    setErrors({});
    setStep((current) => Math.min(current + 1, 3));
    trackConversion("contact_form_step_complete", { step: step + 1 });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    if (step < 3) {
      nextStep();
      return;
    }
    const found = validateEnquiry(form);
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0] as FieldName;
      const errorStep = enquirySteps.findIndex((item) => item.fields.includes(first));
      if (errorStep >= 0) setStep(errorStep);
      showErrors(found);
      return;
    }
    if (!siteKey) {
      setError(
        "Online verification is unavailable. Please send your brief using the email link below."
      );
      return;
    }
    if (!token) {
      setError("Please complete the verification before sending.");
      return;
    }
    inFlight.current = true;
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, selectedProjects: selected, turnstileToken: token })
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || data?.ok !== true)
        throw new Error(data?.error || "Your enquiry could not be sent. Please try again.");
      setConfirmationSent(data.confirmationSent === true);
      setStatus("success");
      trackConversion("contact_form_success", { selected_count: selected.length });
      requestAnimationFrame(() => document.getElementById("enquiry-success")?.focus());
    } catch (problem) {
      setStatus("idle");
      setError(
        problem instanceof Error
          ? problem.message
          : "Your enquiry could not be sent. Please try again."
      );
      resetVerification();
    } finally {
      inFlight.current = false;
    }
  }

  function field(name: FieldName, props: Partial<React.ComponentProps<typeof EnquiryField>> = {}) {
    return (
      <EnquiryField name={name} form={form} errors={errors} onChange={updateField} {...props} />
    );
  }

  const selectedTitles = selected.map((id) => getProject(id)?.title).filter(Boolean);
  const summaryFields = enquirySteps
    .slice(0, 3)
    .flatMap((item) => item.fields)
    .filter((name) => form[name].trim());

  if (status === "success") {
    return (
      <section
        className="border border-bronze/40 bg-white p-6 md:p-10"
        aria-labelledby="enquiry-success"
      >
        <p className="eyebrow">Project enquiry sent</p>
        <h2 id="enquiry-success" tabIndex={-1} className="mt-4 font-display text-4xl">
          Thank you, {form.fullName}.
        </h2>
        <p className="mt-5 leading-8 text-ink/75">
          Your brief has been sent to our project team for review. We will use the contact details
          you provided to discuss the next steps.
        </p>
        {confirmationSent && (
          <p className="mt-4 leading-7 text-ink/75">
            A confirmation has also been sent to {form.email}.
          </p>
        )}
        <p className="mt-4 leading-7 text-ink/75">
          For an NDA request, wait until the terms are agreed before sharing detailed confidential
          files.
        </p>
        <button
          type="button"
          className="button-secondary mt-7"
          onClick={() => {
            setForm({ ...initialEnquiry });
            setSelected([]);
            setStatus("idle");
            setStep(0);
            setToken("");
            formStarted.current = false;
          }}
        >
          Start another enquiry
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="min-w-0 border border-ink/15 bg-white p-5 md:p-9">
      {siteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => setScriptReady(true)}
          onError={() =>
            setVerificationError(
              "Verification could not load. Please reload or send your brief by email."
            )
          }
        />
      )}
      <ol
        aria-label="Enquiry progress"
        className="grid grid-cols-2 gap-3 border-b border-ink/15 pb-6 sm:grid-cols-4"
      >
        {enquirySteps.map((item, index) => (
          <li
            key={item.title}
            aria-current={index === step ? "step" : undefined}
            className={index === step ? "text-ink" : "text-ink/60"}
          >
            <span
              className={
                "mb-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold " +
                (index <= step ? "bg-ink text-white" : "bg-smoke/50")
              }
            >
              {index + 1}
            </span>
            <span className="text-sm font-semibold">{item.title}</span>
          </li>
        ))}
      </ol>
      <h2 ref={heading} tabIndex={-1} className="mt-7 font-display text-3xl">
        {enquirySteps[step].title}
      </h2>
      <p className="mb-7 mt-3 text-sm leading-6 text-ink/70">
        Step {step + 1} of 4 · Fields marked * are required. Approximate details are welcome.
      </p>
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={form.companyWebsite}
          onChange={(event) => setForm({ ...form, companyWebsite: event.target.value })}
        />
      </div>
      <fieldset disabled={status === "submitting"} className="min-w-0 space-y-6">
        <legend className="sr-only">{enquirySteps[step].title}</legend>
        {step === 0 && (
          <>
            {field("projectType", {
              options: projectTypes,
              placeholder: "What would you like to build?"
            })}
            {field("industry", {
              options: industries.map((item) => ({ value: item.slug, label: item.shortTitle })),
              placeholder: "Choose a sector, or leave open"
            })}
            {field("message", {
              multiline: true,
              placeholder:
                "Describe the piece or environment, what it should achieve, and any important constraints.",
              hint: "Up to 3,000 characters. You can add dimensions, files and finish references in the next steps."
            })}
            {!!selectedTitles.length && (
              <div className="border border-ink/15 bg-porcelain p-4">
                <p className="text-sm font-semibold">Portfolio examples in your brief</p>
                <ul className="mt-2 space-y-2 text-sm leading-6">
                  {selected.map((id) => (
                    <li key={id} className="flex items-center justify-between gap-3">
                      <span>{getProject(id)?.title}</span>
                      <button
                        type="button"
                        onClick={() => setSelected(selected.filter((value) => value !== id))}
                        className="min-h-11 shrink-0 underline underline-offset-4"
                        aria-label={"Remove " + getProject(id)?.title}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
        {step === 1 && (
          <>
            {field("intendedUse", {
              options: [
                "Indoor display",
                "Outdoor display",
                "Temporary event / exhibition",
                "Touring / repeated use",
                "Prototype / presentation model",
                "Other / not sure yet"
              ],
              hint: "Mention visitor interaction, weather exposure or special requirements in your brief."
            })}
            <div className="grid gap-6 sm:grid-cols-2">
              {field("approximateDimensions", {
                placeholder: "e.g. 2 m high × 1 m wide",
                hint: "Include units: mm, cm, m, inches or feet."
              })}
              {field("quantity", { placeholder: "e.g. 1 piece or 12 sets" })}
            </div>
            {field("projectLocation", { placeholder: "City and country, plus venue if known" })}
            <div className="grid gap-6 sm:grid-cols-2">
              {field("targetDeliveryDate", {
                type: "date",
                hint: "A target date for review; availability is confirmed with the scope."
              })}
              {field("installationSupport", { options: installationOptions })}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            {field("materialPreference", {
              options: [
                "Not sure — please advise",
                "CNC foam / EPS / XPS",
                "Polyurethane",
                "Fiberglass / GRP / composites",
                "Large-format 3D printing",
                "Wood / multi-material",
                "Other — described in brief"
              ],
              hint: "A preference is optional. We can review a suitable production route."
            })}
            {field("targetFinish", {
              placeholder: "e.g. stone effect, matte colour, gloss or textured",
              hint: "Include an approved colour code or a finish reference if available."
            })}
            {field("budgetRange", {
              options: budgetRanges,
              hint: "Optional planning range, excluding any unconfirmed delivery or site scope."
            })}
            {field("confidentiality", { options: confidentialityOptions })}
            {field("referenceLink", {
              type: "url",
              placeholder: "https://…",
              hint: form.confidentiality.startsWith("NDA")
                ? "Send a non-confidential outline now. Share sensitive files after the NDA is agreed."
                : "Link to drawings, a 3D model or photographs. Check that the link can be opened by the project team."
            })}
          </>
        )}
        {step === 3 && (
          <>
            <div className="grid gap-6 sm:grid-cols-2">
              {field("fullName", { autoComplete: "name" })}
              {field("company", { autoComplete: "organization" })}
            </div>
            {field("email", { type: "email", autoComplete: "email" })}
            <div className="grid gap-6 sm:grid-cols-2">
              {field("country", { autoComplete: "country-name" })}
              {field("phone", {
                type: "tel",
                autoComplete: "tel",
                hint: "Optional. Include your country code."
              })}
            </div>
            <section
              className="border border-ink/15 bg-porcelain p-5"
              aria-labelledby="brief-summary"
            >
              <h3 id="brief-summary" className="font-display text-2xl">
                Review your project brief
              </h3>
              <dl className="mt-4 space-y-4">
                {summaryFields.map((name) => (
                  <div key={name}>
                    <dt className="text-sm font-semibold">{fieldLabels[name]}</dt>
                    <dd className="mt-1 whitespace-pre-wrap break-words text-base leading-7 text-ink/75">
                      {name === "industry" ? getIndustry(form[name])?.shortTitle : form[name]}
                    </dd>
                  </div>
                ))}
                {!!selectedTitles.length && (
                  <div>
                    <dt className="text-sm font-semibold">Selected portfolio examples</dt>
                    <dd className="mt-1 text-base leading-7 text-ink/75">
                      {selectedTitles.join("; ")}
                    </dd>
                  </div>
                )}
              </dl>
              <button
                type="button"
                className="mt-4 min-h-11 font-semibold underline underline-offset-4"
                onClick={() => setStep(0)}
              >
                Edit project details
              </button>
            </section>
            <div ref={widgetContainer} className="min-h-16 overflow-x-auto" />
            {!siteKey && (
              <p role="status" className="text-sm leading-6 text-red-800">
                Online verification is currently unavailable. You can send your brief by email
                below.
              </p>
            )}
            {verificationError && (
              <div role="alert">
                <p className="text-sm leading-6 text-red-800">{verificationError}</p>
                <button
                  type="button"
                  onClick={resetVerification}
                  className="mt-2 min-h-11 text-sm font-semibold underline"
                >
                  Retry verification
                </button>
              </div>
            )}
            <p className="text-sm leading-6 text-ink/70">
              We use these details to review and respond to your enquiry. Read our{" "}
              <Link href="/privacy" className="underline underline-offset-4">
                Privacy Policy
              </Link>
              . Submitting a brief does not confirm a price or production slot.
            </p>
          </>
        )}
      </fieldset>
      {error && (
        <p
          role="alert"
          className="mt-6 border-l-2 border-red-700 pl-4 text-base leading-7 text-red-800"
        >
          {error}
        </p>
      )}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 pt-6">
        {step > 0 ? (
          <button
            type="button"
            className="button-secondary"
            disabled={status === "submitting"}
            onClick={() => {
              setError("");
              setErrors({});
              setStep(step - 1);
            }}
          >
            ← Back
          </button>
        ) : (
          <span className="text-sm text-ink/60">Your details are sent at the final step.</span>
        )}
        <button
          type="submit"
          className="button-primary"
          disabled={status === "submitting" || !ready}
        >
          {status === "submitting"
            ? "Sending enquiry…"
            : step === 3
              ? "Send project enquiry →"
              : "Continue →"}
        </button>
      </div>
      <p className="mt-5 break-words text-sm leading-6 text-ink/70">
        Prefer email?{" "}
        <a href={"mailto:" + contactEmail} className="underline underline-offset-4">
          {contactEmail}
        </a>
      </p>
    </form>
  );
}
