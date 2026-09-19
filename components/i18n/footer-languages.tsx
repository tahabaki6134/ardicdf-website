"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n/locales";
import { pageLocales, pagePath, parsePublicPath } from "@/lib/i18n/routes";

export function FooterLanguages({ locale }: { locale: Locale }) {
  const { page } = parsePublicPath(usePathname());
  return locales.map(target => <Link
    href={pagePath(target, page && pageLocales(page).includes(target) ? page : { kind: "home" })}
    hrefLang={target} lang={target} key={target} aria-current={target === locale ? "page" : undefined}
    className="inline-flex min-h-11 items-center py-2 aria-[current=page]:font-semibold aria-[current=page]:text-bronze"
  >{localeNames[target]}</Link>);
}
