import { dictionary } from "./dictionary";
import { direction, localeNames, locales, prefix, type Locale } from "./locales";

// A complete server response keeps a missing page readable in its selected language,
// including when Next's dynamic root layout cannot render its not-found boundary.
export function notFoundHtml(locale: Locale) {
  const t = dictionary(locale);
  const escape = (value: string) => value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
  return `<!doctype html><html lang="${locale}" dir="${direction(locale)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, follow"><title>${escape(t.not_found)} | ARDIÇ</title><link rel="icon" href="/favicon.ico"><style>body{margin:0;background:#f5f3ed;color:#151515;font-family:Arial,Tahoma,sans-serif}main{max-width:760px;margin:12vh auto;padding:24px}a{color:inherit}h1{font-size:clamp(28px,6vw,48px);line-height:1.4;margin:32px 0}.home{display:inline-block;padding:16px 24px;background:#151515;color:#fff;text-decoration:none}nav{display:flex;flex-wrap:wrap;gap:8px 20px;margin-top:48px}nav a{padding:12px 0}.brand{font:30px Georgia,serif;letter-spacing:4px;text-decoration:none}a:focus-visible{outline:3px solid #927348;outline-offset:5px}</style></head><body><main><a class="brand" dir="ltr" href="${prefix(locale) || "/"}">ARDIÇ</a><p>404</p><h1>${escape(t.not_found)}</h1><a class="home" href="${prefix(locale) || "/"}">${escape(t.nav_home)}</a><nav aria-label="${escape(t.language)}">${locales.map(l => `<a href="${prefix(l) || "/"}" lang="${l}"${locale === l ? ' aria-current="page"' : ""}>${localeNames[l]}</a>`).join("")}</nav></main></body></html>`;
}
