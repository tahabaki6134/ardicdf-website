import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import "../globals.css";
import { dictionary } from "@/lib/i18n/dictionary";
import { isLocale, direction, siteOrigin } from "@/lib/i18n/locales";
import { LocaleHeader } from "@/components/i18n/header";
import { LocaleFooter } from "@/components/i18n/footer";
import { ProjectSelectionProvider } from "@/components/project-selection-provider";
import { ConversionTracking } from "@/components/conversion-tracking";
import { contactEmail } from "@/lib/contact-details";
export const metadata: Metadata = { metadataBase: new URL(siteOrigin), icons: { icon: "/favicon.ico", apple: "/favicon-256x256.png" } };
export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale, t = dictionary(locale);
  const structuredData = { "@context": "https://schema.org", "@type": "Organization", "@id": siteOrigin + "/#organization", name: "ARDIÇ Design & Fabrication", url: siteOrigin, logo: siteOrigin + "/logo.svg", description: t.about_intro, parentOrganization: { "@type": "Organization", name: "EPSLAM" }, address: { "@type": "PostalAddress", streetAddress: "Karadeniz Caddesi No:131, Ferhatpaşa", addressLocality: "Ataşehir", addressRegion: "İstanbul", addressCountry: "TR" }, contactPoint: { "@type": "ContactPoint", contactType: "project enquiries", telephone: "+905436268969", email: contactEmail } };
  return <html lang={locale} dir={direction(locale)}><body className="font-sans antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ProjectSelectionProvider><LocaleHeader locale={locale} t={t} />{children}<LocaleFooter locale={locale} t={t} /></ProjectSelectionProvider><ConversionTracking /><Analytics /></body></html>;
}
