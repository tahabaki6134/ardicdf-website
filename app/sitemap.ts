import type { MetadataRoute } from "next";
import { locales, siteOrigin } from "@/lib/i18n/locales";
import { allPages, pageLocales, pagePath, languageAlternates } from "@/lib/i18n/routes";
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap(locale => allPages.filter(page => page.kind !== "selection" && pageLocales(page).includes(locale)).map(page => ({ url: siteOrigin + pagePath(locale, page), lastModified: "2026-09-14", changeFrequency: "monthly" as const, priority: page.kind === "home" ? 1 : page.kind === "method" ? 0.9 : 0.7, alternates: { languages: Object.fromEntries(Object.entries(languageAlternates(page)).map(([key, path]) => [key, siteOrigin + path])) } })));
}
