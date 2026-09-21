export const locales = ["tr", "en", "de", "fr", "ru", "ar"] as const;
export type Locale = (typeof locales)[number];
export const localeNames: Record<Locale, string> = { tr: "Türkçe", en: "English", de: "Deutsch", fr: "Français", ru: "Русский", ar: "العربية" };
export const siteOrigin = "https://www.ardicdf.com";
export function isLocale(value: unknown): value is Locale { return typeof value === "string" && (locales as readonly string[]).includes(value); }
export function direction(locale: Locale) { return locale === "ar" ? "rtl" : "ltr"; }
export function prefix(locale: Locale) { return `/${locale}`; }
export function homePath(locale: Locale) { return `/${locale}`; }
