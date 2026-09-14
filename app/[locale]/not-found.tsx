"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { isLocale } from "@/lib/i18n/locales";
import { dictionary } from "@/lib/i18n/dictionary";
import { pagePath } from "@/lib/i18n/routes";
export default function NotFound() { const params = useParams(); const locale = isLocale(params.locale) ? params.locale : "tr"; const t = dictionary(locale); return <main id="main-content" className="page-shell"><h1 className="font-display text-4xl">{t.not_found}</h1><Link className="button-primary mt-8" href={pagePath(locale, { kind: "home" })}>{t.nav_home}</Link></main>; }
