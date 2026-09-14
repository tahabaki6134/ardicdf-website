"use client";
import Script from "next/script";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { initialEnquiry, fieldLimits, type EnquiryField } from "@/lib/enquiry";
import { validateLocalized } from "@/lib/i18n/validation";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { pagePath } from "@/lib/i18n/routes";
import { attachmentAccept, MAX_ATTACHMENTS, MAX_ATTACHMENT_BYTES } from "@/lib/attachment-options";
import { useProjectSelection } from "../project-selection-provider";
import { parseSelectedProjects } from "@/lib/projects";
import { getIndustry } from "@/lib/industries";
import { contactEmail } from "@/lib/contact-details";
import { trackConversion } from "../conversion-tracking";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
class SubmissionError extends Error {}
export function MultilingualEnquiry({ locale, t, methods, countries, projectNames }: { locale: Locale; t: Dictionary; methods: Record<string, string>; countries: { code: string; name: string }[]; projectNames: Record<string, string> }) {
  const [form, setForm] = useState({ ...initialEnquiry, projectType: t.unsure });
  const [errors, setErrors] = useState<Partial<Record<EnquiryField, string>>>({});
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>([]), [fileError, setFileError] = useState("");
  const [token, setToken] = useState(""), [scriptReady, setScriptReady] = useState(false), [verificationError, setVerificationError] = useState("");
  const [sending, setSending] = useState(false), [sent, setSent] = useState(false), [confirmationSent, setConfirmationSent] = useState(false);
  const [hasComparison, setHasComparison] = useState(false);
  const { selected, setSelected, toggle } = useProjectSelection();
  const widget = useRef<HTMLDivElement>(null), widgetId = useRef<string>();
  const details = useRef<HTMLDetailsElement>(null), successHeading = useRef<HTMLHeadingElement>(null), busy = useRef(false), started = useRef(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const primary = methods[params.get("method") || ""], alternative = methods[params.get("alternative") || ""];
    const industry = params.get("industry") || "";
    setForm(current => ({ ...current, projectType: primary || t.unsure, materialPreference: [primary, alternative].filter(Boolean).join(" / "), industry: getIndustry(industry) ? industry : "" }));
    setHasComparison(Boolean(primary || alternative));
    const ids = parseSelectedProjects(params.get("selected")); if (ids.length) setSelected(ids);
  }, [methods, t.unsure, setSelected]);
  useEffect(() => {
    if (!siteKey || !scriptReady || !widget.current || !window.turnstile || sent) return;
    try {
      widgetId.current = window.turnstile.render(widget.current, { sitekey: siteKey, theme: "light", language: locale, callback: value => { setToken(value); setVerificationError(""); }, "expired-callback": () => { setToken(""); setVerificationError(t.error_verification); }, "error-callback": () => { setToken(""); setVerificationError(t.error_verification); } } as Parameters<NonNullable<Window["turnstile"]>["render"]>[1]);
    } catch { setVerificationError(t.error_verification); }
    return () => { if (widgetId.current) window.turnstile?.remove(widgetId.current); widgetId.current = undefined; };
  }, [scriptReady, sent, locale, t.error_verification]);
  useEffect(() => { if (sent) successHeading.current?.focus(); }, [sent]);
  function update(key: EnquiryField, value: string) {
    setForm(current => ({ ...current, [key]: value })); setErrors(current => ({ ...current, [key]: undefined }));
    if (!started.current) { started.current = true; trackConversion("project_enquiry_start", { language: locale }); }
  }
  function label(key: EnquiryField) { return (t as unknown as Record<string, string>)[key] || key; }
  function field(key: EnquiryField, options: { type?: string; required?: boolean; placeholder?: string } = {}) {
    const attrs = { id: `enquiry-${key}`, name: key, value: form[key], maxLength: fieldLimits[key], required: options.required, "aria-invalid": !!errors[key], "aria-describedby": errors[key] ? `${key}-error` : undefined, className: `field mt-2 ${errors[key] ? "border-red-700" : ""}`, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(key, event.target.value), placeholder: options.placeholder };
    return <div className="min-w-0"><label className="text-sm font-semibold" htmlFor={attrs.id}>{label(key)}{options.required ? " *" : ""}</label>{key === "message" ? <textarea {...attrs} rows={4} /> : <input {...attrs} type={options.type || "text"} dir={["email", "phone", "referenceLink"].includes(key) ? "ltr" : undefined} autoComplete={key === "fullName" ? "name" : key === "email" ? "email" : key === "phone" ? "tel" : key === "company" ? "organization" : undefined} />}{errors[key] && <p id={`${key}-error`} className="mt-2 text-sm text-red-800">{errors[key]}</p>}</div>;
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (busy.current) return; setError("");
    const validation = validateLocalized(form, t); setErrors(validation);
    if (Object.keys(validation).length) { setError(t.error_details); const first = Object.keys(validation)[0]; if (details.current?.querySelector(`#enquiry-${first}`)) details.current.open = true; document.getElementById(`enquiry-${first}`)?.focus(); return; }
    if (fileError) return;
    if (!siteKey || !token) { setError(t.error_verification); return; }
    busy.current = true; setSending(true);
    try {
      const attachments = await Promise.all(files.map(file => new Promise<{ filename: string; content: string }>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve({ filename: file.name, content: String(reader.result).split(",")[1] }); reader.onerror = reject; reader.readAsDataURL(file); })));
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json", "X-ARDIC-Language": locale }, body: JSON.stringify({ ...form, language: locale, selectedProjects: selected, attachments, turnstileToken: token }) });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) { if (result?.fields) setErrors(result.fields); throw new SubmissionError(typeof result?.error === "string" ? result.error : t.error_send); }
      setConfirmationSent(result.confirmationSent === true); setSent(true); setFiles([]); trackConversion("project_enquiry_success", { language: locale });
    } catch (cause) { setError(cause instanceof SubmissionError ? cause.message : t.error_send); setToken(""); if (widgetId.current) window.turnstile?.reset(widgetId.current); }
    finally { busy.current = false; setSending(false); }
  }
  if (sent) return <section className="border border-ink/15 bg-white p-6 md:p-9"><h2 ref={successHeading} tabIndex={-1} className="font-display text-3xl">{t.success_title}</h2><p className="mt-4 leading-7">{t.success_body}</p><p className="mt-4 text-sm leading-6">{confirmationSent ? t.confirmation_sent : t.confirmation_failed}</p></section>;
  return <form id="brief" onSubmit={submit} noValidate className="min-w-0 border border-ink/15 bg-white p-5 md:p-8">
    {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setVerificationError(t.error_verification)} />}
    <h2 className="font-display text-2xl md:text-3xl">{t.form_title}</h2><p className="mt-3 text-sm leading-7 text-ink/65">{t.form_intro}</p>
    <fieldset disabled={sending} className="mt-6 min-w-0 space-y-5"><legend className="sr-only">{t.form_title}</legend>
      <div className="hidden" aria-hidden="true"><label htmlFor="company-website">Website</label><input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" value={form.companyWebsite} onChange={e => update("companyWebsite", e.target.value)} /></div>
      {field("message", { required: true, placeholder: t.message_hint })}
      <div className="grid gap-5 sm:grid-cols-2">{field("fullName", { required: true })}{field("email", { type: "email", required: true })}</div>
      <div><label htmlFor="enquiry-country" className="text-sm font-semibold">{t.country} *</label><select id="enquiry-country" name="country" required value={form.country} onChange={e => update("country", e.target.value)} className="field mt-2" aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined}><option value="">{t.country_choose}</option>{countries.map(c => <option value={c.code} key={c.code}>{c.name}</option>)}</select>{errors.country && <p className="mt-2 text-sm text-red-800" id="country-error">{errors.country}</p>}</div>
      <label className="block text-sm font-semibold">{t.projectType}<select className="field mt-2" value={form.projectType} onChange={e => update("projectType", e.target.value)}><option>{t.unsure}</option>{Object.entries(methods).map(([id, name]) => <option key={id}>{name}</option>)}<option>{t.other}</option></select></label>
      {hasComparison && field("materialPreference")}
      {selected.length > 0 && <div><p className="text-sm font-semibold">{t.nav_selection}</p><ul className="mt-2 space-y-2">{selected.map(id => <li key={id} className="flex min-w-0 items-center justify-between gap-3 bg-porcelain p-3 text-sm"><span>{projectNames[id]}</span><button type="button" onClick={() => toggle(id)} className="min-h-11 shrink-0 px-2 underline">{t.remove}</button></li>)}</ul></div>}
      <div><label className="button-secondary cursor-pointer" htmlFor="enquiry-files">{t.files}</label><input id="enquiry-files" type="file" multiple accept={attachmentAccept} aria-label={t.files} aria-describedby="file-help" className="sr-only" onChange={e => { const next = [...files, ...Array.from(e.target.files || [])]; e.target.value = ""; if (next.length > MAX_ATTACHMENTS || next.reduce((sum, file) => sum + file.size, 0) > MAX_ATTACHMENT_BYTES || next.some(file => !file.size || !/\.(pdf|jpe?g|png|webp)$/i.test(file.name) || file.name.length > 180)) { setFileError(t.error_files); return; } setFiles(next); setFileError(""); }} /><p id="file-help" className="mt-2 text-xs leading-6 text-ink/65">{t.files_help}</p>{files.length > 0 && <ul className="mt-3 space-y-2">{files.map((file, index) => <li key={`${file.name}-${index}`} className="flex min-w-0 items-center justify-between gap-3 bg-porcelain p-3 text-sm"><bdi className="break-all">{file.name}</bdi><button type="button" className="min-h-11 shrink-0 px-2 underline" aria-label={`${t.remove} ${file.name}`} onClick={() => { setFiles(current => current.filter((_, i) => i !== index)); setFileError(""); }}>{t.remove}</button></li>)}</ul>}{fileError && <p role="alert" className="mt-2 text-sm text-red-800">{fileError} <button type="button" className="underline" onClick={() => setFileError("")}>{t.continue_files}</button></p>}</div>
      <details ref={details} className="border-y border-ink/15 py-4"><summary className="cursor-pointer py-2 text-sm font-semibold">{t.optional_details} ({t.optional})</summary><div className="mt-5 space-y-5"><div className="grid gap-5 sm:grid-cols-2">{field("phone", { type: "tel" })}{field("company")}{field("approximateDimensions", { placeholder: t.dimensions_hint })}{field("quantity")}</div>{field("projectLocation")}{!hasComparison && field("materialPreference")}{field("targetFinish")}<label className="block text-sm font-semibold">{t.installationSupport}<select className="field mt-2" value={form.installationSupport} onChange={e => update("installationSupport", e.target.value)}><option value="">{t.scope_discuss}</option>{[t.scope_all, t.scope_make, t.scope_ship].map(value => <option key={value}>{value}</option>)}</select></label>{field("referenceLink", { type: "url", placeholder: "https://…" })}<label className="block text-sm font-semibold">{t.confidentiality}<select className="field mt-2" value={form.confidentiality} onChange={e => update("confidentiality", e.target.value)}><option value="">{t.nda_standard}</option><option>{t.nda_required}</option></select></label><p className="text-xs leading-6 text-ink/65">{t.nda_note}</p></div></details>
      <div ref={widget} className="min-h-16 max-w-full overflow-x-auto" dir="ltr" />
      {!siteKey && <p role="status" className="text-sm leading-7 text-red-800">{t.error_unavailable}</p>}
      {verificationError && <p role="alert" className="text-sm leading-7 text-red-800">{verificationError} <button type="button" className="min-h-11 px-2 underline" onClick={() => { if (widgetId.current) window.turnstile?.reset(widgetId.current); setToken(""); }}>{t.retry}</button></p>}
      <p className="text-xs leading-6 text-ink/65">{t.privacy_short} <Link className="underline" href={pagePath(locale, { kind: "privacy" })}>{t.nav_privacy}</Link></p>
      {error && <p role="alert" className="border-s-2 border-red-700 ps-3 text-sm leading-7 text-red-800">{error}</p>}
      <button type="submit" disabled={sending || !siteKey} className="button-primary w-full sm:w-auto">{sending ? t.sending : t.submit}</button>
    </fieldset><p className="mt-5 break-words text-sm leading-7"><a dir="ltr" href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
  </form>;
}
