import { notFound } from "next/navigation";
import { locales, isLocale, prefix } from "@/lib/i18n/locales";
import { allPages, pageLocales, pagePath, resolvePage } from "@/lib/i18n/routes";
import { pageMetadata } from "@/lib/i18n/seo";
import { LocalizedPage } from "@/components/i18n/pages";
import { pageStructuredData } from "@/lib/i18n/structured-data";
import { dictionary } from "@/lib/i18n/dictionary";
// Known pages are pre-rendered; unmatched paths still enter their language layout
// so visitors receive a localized 404 instead of Next's global English fallback.
export const dynamicParams = true;
export function generateStaticParams() { return locales.flatMap(locale => allPages.filter(page => pageLocales(page).includes(locale)).map(page => ({ locale, slug: page.kind === "home" ? [] : pagePath(locale, page).slice(prefix(locale).length).split("/").filter(Boolean) }))); }
export function generateMetadata({ params }: { params: { locale: string; slug?: string[] } }) {
  if (!isLocale(params.locale)) return { robots: { index: false } };
  const page = resolvePage(params.locale, params.slug);
  if (!page) return { title: `${dictionary(params.locale).not_found} | ARDIÇ`, robots: { index: false, follow: true } };
  return pageMetadata(params.locale, page);
}
export default function Page({ params }: { params: { locale: string; slug?: string[] } }) {
  if (!isLocale(params.locale)) notFound(); const page = resolvePage(params.locale, params.slug); if (!page) notFound();
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData(params.locale, page)).replace(/</g, "\\u003c") }} /><LocalizedPage locale={params.locale} page={page} /></>;
}
