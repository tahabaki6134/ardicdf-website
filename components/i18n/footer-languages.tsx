"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { localeNames, locales, type Locale } from "@/lib/i18n/locales";
import { languagePath } from "@/lib/i18n/navigation";

function LanguageLinks({ locale, pathname, query = "", hash = "" }: { locale: Locale; pathname: string; query?: string; hash?: string }) {
  return locales.map(target => <Link
    href={languagePath(pathname, target, new URLSearchParams(query), hash)}
    hrefLang={target} lang={target} key={target} aria-current={target === locale ? "page" : undefined}
    className="inline-flex min-h-11 items-center py-2 aria-[current=page]:font-semibold aria-[current=page]:text-bronze"
  >{localeNames[target]}</Link>);
}

function ContextLanguageLinks({ locale, pathname }: { locale: Locale; pathname: string }) {
  const params = useSearchParams();
  const [hash, setHash] = useState("");
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname, params]);
  return <LanguageLinks locale={locale} pathname={pathname} query={params.toString()} hash={hash} />;
}

export function FooterLanguages({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return <Suspense fallback={<LanguageLinks locale={locale} pathname={pathname} />}>
    <ContextLanguageLinks locale={locale} pathname={pathname} />
  </Suspense>;
}
