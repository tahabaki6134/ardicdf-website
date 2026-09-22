"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeNames, locales, type Locale } from "@/lib/i18n/locales";
import { pagePath, pageLocales, parsePublicPath, type Page } from "@/lib/i18n/routes";
import { routeMethodIds as methodIds } from "@/lib/i18n/routes";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { parseSelectedProjects } from "@/lib/projects";
import { getIndustry } from "@/lib/industries";
import { useProjectSelection } from "../project-selection-provider";

export function LocaleHeader({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { selected } = useProjectSelection();
  const currentPage = parsePublicPath(pathname).page;
  useEffect(() => setOpen(false), [pathname]);
  function changeLanguage(next: Locale) {
    const source = new URL(window.location.href);
    const target = new URL(pagePath(next, currentPage && pageLocales(currentPage).includes(next) ? currentPage : { kind: "home" }), source.origin);
    for (const key of ["method", "alternative", "left", "right"]) {
      const value = source.searchParams.get(key);
      if (value && methodIds.includes(value)) target.searchParams.set(key, value);
    }
    const selectedQuery = parseSelectedProjects(source.searchParams.get("selected"));
    if (selectedQuery.length) target.searchParams.set("selected", selectedQuery.join(","));
    const industry = source.searchParams.get("industry");
    if (industry && getIndustry(industry)) target.searchParams.set("industry", industry);
    if (["#brief", "#methods", "#project-delivery"].includes(source.hash)) target.hash = source.hash;
    window.location.assign(target.href);
  }
  const nav: { kind: Page["kind"]; label: string }[] = [{ kind: "works", label: t.nav_works }, { kind: "services", label: t.nav_services }, { kind: "industries", label: t.nav_industries }, { kind: "planning", label: t.nav_planning }, { kind: "about", label: t.nav_about }];
  const links = nav.map(item => <Link key={item.kind} href={pagePath(locale, item)} aria-current={currentPage?.kind === item.kind ? "page" : (item.kind === "services" && currentPage?.kind === "method") || (item.kind === "works" && ["project", "archive"].includes(currentPage?.kind ?? "")) || (item.kind === "industries" && currentPage?.kind === "industry") ? "location" : undefined} className="min-h-11 py-3 font-semibold text-ink/75 hover:text-bronze aria-[current=page]:text-bronze aria-[current=location]:text-bronze">{item.label}</Link>);
  return <header className="sticky top-0 z-50 border-b border-ink/15 bg-porcelain/95 backdrop-blur-xl" onKeyDown={e => { if (e.key === "Escape") { setOpen(false); document.getElementById("menu-toggle")?.focus(); } }}>
    <a href="#main-content" className="skip-link">{t.skip}</a>
    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-2 px-4 py-2.5 md:px-8">
      <Link href={pagePath(locale, { kind: "home" })} aria-label={`ARDIÇ · ${t.nav_home}`} className="flex min-w-0 shrink-0 items-center gap-2" dir="ltr"><Image src="/logo-symbol.svg" alt="" width={48} height={48} priority className="h-9 w-9 md:h-12 md:w-12" /><span><span className="brand-name block font-display text-2xl leading-none tracking-[0.12em] md:text-3xl">ARDIÇ</span><span className="mt-1 block text-[9px] text-ink/70 md:text-xs">Design & Fabrication</span></span></Link>
      <nav aria-label={t.menu} className="hidden items-center gap-5 xl:flex">{links}</nav>
      <div className="flex min-w-0 items-center gap-2 md:gap-3">
        <label className="sr-only" htmlFor="site-language">{t.language}</label><select id="site-language" value={locale} onChange={e => changeLanguage(e.target.value as Locale)} className="language-select min-h-11 max-w-28 border border-ink/20 bg-transparent px-2 text-sm font-semibold" aria-label={t.language}>{locales.map(l => <option key={l} value={l} lang={l}>{localeNames[l]}</option>)}</select>
        {selected.length > 0 && <Link href={pagePath(locale, { kind: "selection" })} className="hidden text-sm font-semibold 2xl:block">{t.nav_selection} ({selected.length})</Link>}
        <Link href={pagePath(locale, { kind: "contact" })} className="button-primary hidden lg:inline-flex">{t.nav_contact}</Link>
        <button id="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="min-h-11 shrink-0 border border-ink/25 px-3 text-sm font-semibold xl:hidden">{open ? t.close : t.menu}</button>
      </div>
    </div>
    {open && <nav id="mobile-navigation" aria-label={t.menu} className="grid max-h-[75dvh] overflow-y-auto border-t border-ink/15 px-5 py-4 xl:hidden">{links}<Link className="py-3 font-semibold" href={pagePath(locale, { kind: "selection" })}>{t.nav_selection} ({selected.length})</Link><Link className="button-primary mt-3 justify-self-start" href={pagePath(locale, { kind: "contact" })}>{t.nav_contact}</Link></nav>}
  </header>;
}
