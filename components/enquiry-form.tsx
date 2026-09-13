"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { getMethod, manufacturingMethods } from "@/lib/manufacturing";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";
import { contactEmail } from "@/lib/contact-details";
import { attachmentAccept, MAX_ATTACHMENTS, MAX_ATTACHMENT_BYTES } from "@/lib/attachment-options";
import { trackConversion } from "./conversion-tracking";

declare global { interface Window { turnstile?: {
  render: (container: HTMLElement, options: { sitekey: string; theme?: "light" | "dark" | "auto"; callback?: (token: string) => void; "expired-callback"?: () => void; "error-callback"?: () => void }) => string;
  reset: (id?: string) => void; remove: (id: string) => void;
}; } }
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const tr = lang === "tr";
const initial = { fullName: "", email: "", phone: "", company: "", companyWebsite: "", projectType: "", message: "", projectLocation: "", approximateDimensions: "", quantity: "", materialPreference: "", targetFinish: "", installationSupport: "", referenceLink: "", confidentiality: "" };
type Field = keyof typeof initial;
const labels: Record<Field, string> = tr ? {
  fullName: "Ad soyad", email: "E-posta", phone: "Telefon / WhatsApp", company: "Firma", companyWebsite: "Firma sitesi", projectType: "İmalat yöntemi", message: "Ne üretmek istiyorsunuz?", projectLocation: "Teslim yeri", approximateDimensions: "Yaklaşık ölçüler", quantity: "Adet", materialPreference: "Malzeme / alternatif yöntem", targetFinish: "Beklenen son yüzey", installationSupport: "Üretim ve montaj kapsamı", referenceLink: "Çizim / model / referans bağlantısı", confidentiality: "Gizlilik"
} : {
  fullName: "Full name", email: "Email", phone: "Phone / WhatsApp", company: "Company", companyWebsite: "Company website", projectType: "Manufacturing method", message: "What would you like us to build?", projectLocation: "Delivery destination", approximateDimensions: "Approximate dimensions", quantity: "Quantity", materialPreference: "Material / alternative method", targetFinish: "Target finish", installationSupport: "Fabrication & installation scope", referenceLink: "Drawing / model / reference link", confidentiality: "Confidentiality"
};
const limits: Partial<Record<Field, number>> = { fullName: 120, email: 254, phone: 80, company: 160, projectType: 120, message: 3000, projectLocation: 180, approximateDimensions: 160, quantity: 80, materialPreference: 300, targetFinish: 300, referenceLink: 1000 };

export function EnquiryForm({ initialMethod = "", initialAlternative = "", initialIndustry = "", selectedProjects = [], selection, ready = true }: {
  initialMethod?: string; initialAlternative?: string; initialIndustry?: string; selectedProjects?: string[]; selection?: ReactNode; ready?: boolean;
}) {
  const unsure = tr ? "Henüz karar vermedim — öneri istiyorum" : "Not sure yet — please advise";
  const primary = getMethod(initialMethod)?.copy[lang].title;
  const alternative = getMethod(initialAlternative)?.copy[lang].title;
  const [form, setForm] = useState({ ...initial, projectType: primary || unsure, materialPreference: [primary, alternative].filter(Boolean).join(" / ") });
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [token, setToken] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const widget = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string>();
  const busy = useRef(false);
  const started = useRef(false);
  const successHeading = useRef<HTMLHeadingElement>(null);
  const details = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (!siteKey || !scriptReady || !widget.current || !window.turnstile || sent) return;
    try {
      widgetId.current = window.turnstile.render(widget.current, { sitekey: siteKey, theme: "light", callback: value => { setToken(value); setVerificationError(""); }, "expired-callback": () => { setToken(""); setVerificationError(tr ? "Lütfen doğrulamayı yenileyin." : "Please renew the verification."); }, "error-callback": () => { setToken(""); setVerificationError(tr ? "Doğrulama yüklenemedi. Tekrar deneyin veya e-posta ile ulaşın." : "Verification could not load. Retry or contact us by email."); } });
    } catch { setVerificationError(tr ? "Doğrulama yüklenemedi." : "Verification could not load."); }
    return () => { if (widgetId.current) window.turnstile?.remove(widgetId.current); widgetId.current = undefined; };
  }, [scriptReady, sent]);
  useEffect(() => { if (sent) successHeading.current?.focus(); }, [sent]);

  function update(name: Field, value: string) {
    setForm(current => ({ ...current, [name]: value }));
    setErrors(current => ({ ...current, [name]: undefined }));
    if (!started.current) { started.current = true; trackConversion("project_enquiry_start", { language: lang }); }
  }
  function field(name: Field, options: { type?: string; placeholder?: string; options?: string[]; required?: boolean } = {}) {
    const id = `enquiry-${name}`;
    const props = { id, name, value: form[name], required: options.required, "aria-invalid": errors[name] ? true as const : undefined, "aria-describedby": errors[name] ? `${id}-error` : undefined, className: "field mt-2", onChange: (e: { target: { value: string } }) => update(name, e.target.value) };
    return <div className="min-w-0"><label htmlFor={id} className="text-sm font-semibold">{labels[name]}{options.required ? " *" : ""}</label>{options.options ? <select {...props}>{options.options.map(value => <option key={value} value={value}>{value || (tr ? "Seçebilirsiniz" : "Choose if known")}</option>)}</select> : name === "message" ? <textarea {...props} rows={4} maxLength={3000} placeholder={options.placeholder} /> : <input {...props} type={options.type || "text"} maxLength={limits[name] || 120} placeholder={options.placeholder} autoComplete={name === "fullName" ? "name" : name === "email" ? "email" : name === "phone" ? "tel" : name === "company" ? "organization" : undefined} />}{errors[name] && <p id={`${id}-error`} className="mt-2 text-sm text-red-800">{errors[name]}</p>}</div>;
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || !ready) return;
    const found: Partial<Record<Field, string>> = {};
    for (const name of ["fullName", "email", "projectType", "message"] as Field[]) if (!form[name].trim()) found[name] = tr ? "Lütfen bu alanı doldurun." : "Please complete this field.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = tr ? "Geçerli bir e-posta adresi yazın." : "Enter a valid email address.";
    if (form.referenceLink) { try { const url = new URL(form.referenceLink); if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) throw new Error(); } catch { found.referenceLink = tr ? "https:// ile başlayan bir paylaşım bağlantısı yazın." : "Enter a share link beginning with https://."; } }
    setErrors(found); setError("");
    const invalid = Object.keys(found)[0];
    if (invalid) { if (invalid === "referenceLink" && details.current) details.current.open = true; document.getElementById(`enquiry-${invalid}`)?.focus(); return; }
    if (fileError) return;
    if (!siteKey || !token) { setError(tr ? "Lütfen doğrulamayı tamamlayın. Yüklenmiyorsa e-posta veya WhatsApp ile ulaşabilirsiniz." : "Please complete verification. If it does not load, contact us by email or WhatsApp."); return; }
    busy.current = true; setSending(true);
    try {
      const attachments = await Promise.all(files.map(file => new Promise<{filename: string; content: string}>((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve({ filename: file.name, content: String(reader.result).split(",")[1] }); reader.onerror = reject; reader.readAsDataURL(file); })));
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, projectScope: [form.materialPreference, form.approximateDimensions, form.quantity, form.targetFinish, form.installationSupport].filter(Boolean).join(" · "), industry: initialIndustry, selectedProjects, attachments, turnstileToken: token }) });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error(result?.error || (tr ? "Talep gönderilemedi. Tekrar deneyin veya e-posta ile ulaşın." : "The enquiry could not be sent. Retry or contact us by email."));
      setConfirmation(result.confirmationSent === true); setSent(true); setFiles([]); trackConversion("project_enquiry_success", { language: lang });
    } catch (cause) { setError(cause instanceof Error ? cause.message : (tr ? "Gönderim tamamlanamadı." : "Sending could not be completed.")); setToken(""); if (widgetId.current) window.turnstile?.reset(widgetId.current); }
    finally { busy.current = false; setSending(false); }
  }

  if (sent) return <section className="border border-ink/15 bg-white p-6 md:p-9"><h2 ref={successHeading} tabIndex={-1} className="font-display text-3xl">{tr ? "Projeniz ekibimize iletildi." : "Your project has been sent to our team."}</h2><p className="mt-4 leading-7">{tr ? "Talebinizi inceleyip verdiğiniz iletişim bilgileriyle size dönüş yapacağız." : "We will review your enquiry and respond using the contact details you provided."}</p><p className="mt-3 text-sm leading-6 text-ink/65">{confirmation ? (tr ? "E-posta adresinize bir alındı mesajı da gönderildi." : "A confirmation was also sent to your email address.") : (tr ? "Ayrı bir alındı e-postası gönderilemedi; proje talebiniz ekibimize ulaştı." : "A separate confirmation email could not be sent; your project enquiry reached our team.")}</p></section>;
  return <form id="brief" onSubmit={submit} noValidate className="min-w-0 border border-ink/15 bg-white p-5 md:p-8">
    {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setScriptReady(true)} onError={() => setVerificationError(tr ? "Doğrulama yüklenemedi. E-posta veya WhatsApp ile ulaşabilirsiniz." : "Verification could not load. You can contact us by email or WhatsApp.")} />}
    <h2 className="font-display text-2xl md:text-3xl">{tr ? "Kısaca projenizi anlatın." : "Tell us a little about your project."}</h2><p className="mt-3 text-sm leading-6 text-ink/65">{tr ? "Adınız, e-posta adresiniz ve kısa bir açıklama yeterli. Diğer ayrıntıları birlikte netleştirebiliriz." : "Your name, email and a short description are enough to start. We can work out the other details together."}</p>
    <fieldset disabled={sending} className="mt-6 min-w-0 space-y-5">
      <legend className="sr-only">{tr ? "Proje talebi" : "Project enquiry"}</legend>
      <div className="hidden" aria-hidden="true"><label htmlFor="company-website">Leave this field empty</label><input id="company-website" name="companyWebsite" tabIndex={-1} autoComplete="off" value={form.companyWebsite} onChange={e => update("companyWebsite", e.target.value)} /></div>
      {field("message", { required: true, placeholder: tr ? "Örn. komple dolap, masif kapak veya cephe elemanları. Yaklaşık ölçüyü, adedi ve montaj gerekip gerekmediğini ekleyebilirsiniz." : "For example, a complete cabinet, a timber door or facade elements. Include dimensions, quantity and installation needs if known." })}
      <div className="grid gap-5 sm:grid-cols-2">{field("fullName", { required: true })}{field("email", { type: "email", required: true })}</div>
      {field("projectType", { options: [unsure, ...manufacturingMethods.map(method => method.copy[lang].title), tr ? "Diğer" : "Other"] })}
      {(primary || alternative) && <div className="border-l-2 border-bronze bg-porcelain p-4">{field("materialPreference")}</div>}
      {selection}
      <div><label htmlFor="enquiry-files" className="text-sm font-semibold">{tr ? "Çizim veya fotoğraf ekle" : "Attach a drawing or photo"}</label><input id="enquiry-files" type="file" multiple accept={attachmentAccept} aria-describedby="file-help file-error" className="mt-2 block w-full min-w-0 text-sm file:mr-3 file:min-h-11 file:border-0 file:bg-porcelain file:px-3 file:font-semibold" onChange={event => { const next = [...files, ...Array.from(event.target.files || [])]; event.target.value = ""; if (next.length > MAX_ATTACHMENTS || next.reduce((sum, file) => sum + file.size, 0) > MAX_ATTACHMENT_BYTES || next.some(file => !file.size || !/\.(pdf|jpe?g|png|webp)$/i.test(file.name) || file.name.length > 180)) { setFileError(tr ? "En fazla 3 PDF, JPG, PNG veya WebP seçin; toplam 2 MB. Büyük dosyalar için aşağıdaki paylaşım bağlantısını kullanın." : "Choose up to 3 PDF, JPG, PNG or WebP files, 2 MB total. Use the share-link field below for larger files."); return; } setFileError(""); setFiles(next); }} /><p id="file-help" className="mt-2 text-xs leading-5 text-ink/65">{tr ? "PDF, JPG, PNG, WebP · En fazla 3 dosya, toplam 2 MB. Büyük çizim ve 3D modelleri bağlantıyla paylaşabilirsiniz." : "PDF, JPG, PNG, WebP · Up to 3 files, 2 MB total. Share larger drawings and 3D models using a link."}</p>{files.length > 0 && <ul className="mt-3 space-y-2">{files.map((file, index) => <li key={`${file.name}-${index}`} className="flex min-w-0 items-center justify-between gap-3 bg-porcelain p-3 text-sm"><span className="break-all">{file.name}</span><button type="button" className="min-h-11 shrink-0 px-2 underline" aria-label={`${tr ? "Kaldır" : "Remove"} ${file.name}`} onClick={() => { setFiles(current => current.filter((_, i) => i !== index)); setFileError(""); }}>{tr ? "Kaldır" : "Remove"}</button></li>)}</ul>}{fileError && <p id="file-error" role="alert" className="mt-2 text-sm text-red-800">{fileError} <button type="button" className="underline" onClick={() => setFileError("")}>{tr ? "Mevcut dosyalarla devam et" : "Continue with current files"}</button></p>}</div>
      <details ref={details} className="border-y border-ink/15 py-4"><summary className="cursor-pointer py-2 text-sm font-semibold">{tr ? "Ölçü, teslim yeri ve diğer ayrıntılar (isteğe bağlı)" : "Dimensions, destination & other details (optional)"}</summary><div className="mt-5 space-y-5"><div className="grid gap-5 sm:grid-cols-2">{field("phone", { type: "tel" })}{field("company")}{field("approximateDimensions", { placeholder: tr ? "Örn. 200 × 80 × 40 cm" : "e.g. 200 × 80 × 40 cm" })}{field("quantity")}</div>{field("projectLocation", { placeholder: tr ? "Şehir ve ülke" : "City and country" })}{!primary && !alternative && field("materialPreference")}{field("targetFinish")}{field("installationSupport", { options: ["", ...(tr ? ["Projelendirme, üretim ve montaj", "Yalnızca üretim", "Üretim ve sevkiyat", "Birlikte değerlendirelim"] : ["Design, fabrication & installation", "Fabrication only", "Fabrication & delivery", "Please advise"])] })}{field("referenceLink", { type: "url", placeholder: "https://…" })}{field("confidentiality", { options: ["", ...(tr ? ["Standart proje talebi", "Detaylı dosya paylaşmadan önce NDA gerekli"] : ["Standard project enquiry", "NDA required before detailed file exchange"])] })}<p className="text-xs leading-5 text-ink/65">{tr ? "Gizlilik sözleşmesi gerekiyorsa ilk aşamada genel bir açıklama paylaşın." : "If an NDA is needed, share a general outline first."}</p></div></details>
      <div ref={widget} className="min-h-16 max-w-full overflow-x-auto" />
      {!siteKey && <p role="status" className="text-sm leading-6 text-red-800">{tr ? "Çevrimiçi doğrulama şu anda kullanılamıyor. Lütfen e-posta veya WhatsApp ile ulaşın." : "Online verification is currently unavailable. Please contact us by email or WhatsApp."}</p>}
      {verificationError && <p role="alert" className="text-sm leading-6 text-red-800">{verificationError} <button type="button" className="min-h-11 px-2 underline" onClick={() => { if (widgetId.current) window.turnstile?.reset(widgetId.current); setToken(""); }}>{tr ? "Yeniden dene" : "Retry"}</button></p>}
      <p className="text-xs leading-6 text-ink/65">{tr ? "Bilgileriniz talebinizi değerlendirmek ve size yanıt vermek için kullanılır. " : "We use your details to review your enquiry and respond. "}<Link href="/privacy" className="underline">{tr ? "Gizlilik politikası" : "Privacy policy"}</Link></p>
      {error && <p role="alert" className="border-l-2 border-red-700 pl-3 text-sm leading-7 text-red-800">{error}</p>}
      <button type="submit" disabled={sending || !ready} className="button-primary w-full sm:w-auto">{sending ? (tr ? "Gönderiliyor…" : "Sending…") : (tr ? "Proje talebini gönder →" : "Send project enquiry →")}</button>
    </fieldset>
    <p className="mt-5 break-words text-sm leading-6 text-ink/70">{tr ? "E-posta ile: " : "By email: "}<a href={`mailto:${contactEmail}`} className="underline">{contactEmail}</a></p>
  </form>;
}
