// Classify destinations, never translated link labels or private form content.
export function conversionForHref(href: string, base: string): string | null {
  if (!href.trim() || href.startsWith("#") || href.startsWith("?")) return null;
  let url: URL;
  try { url = new URL(href, base); } catch { return null; }
  if (url.protocol === "mailto:") return "email_click";
  if (url.protocol === "tel:") return "phone_click";
  if (url.protocol === "https:" && url.hostname === "wa.me") return "whatsapp_click";
  if (url.origin !== new URL(base).origin) return null;
  if (/\/privacy\/?$/.test(url.pathname)) return "privacy_click";
  if (/\/contact\/?$/.test(url.pathname)) return "start_project_click";
  return null;
}
