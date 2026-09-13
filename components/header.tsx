"use client";

import Image from "next/image";
import Link from "next/link";
import { getMethod } from "@/lib/manufacturing";
import { languageRoute } from "@/lib/language-route";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useProjectSelection } from "./project-selection-provider";

const navigation = [
  { href: "/services", label: "Manufacturing" },
  { href: "/compare", label: "Compare" },
  { href: "/works", label: "Projects" },
  { href: "/fabrication", label: "Workshop" },
  { href: "/about", label: "About" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { selected } = useProjectSelection();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  function links() {
    return navigation.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        aria-current={
          pathname === item.href || pathname.startsWith(item.href + "/") || (item.href === "/services" && (pathname.startsWith("/manufacturing/") || pathname.startsWith("/imalat/"))) ? "page" : undefined
        }
        className="min-h-11 py-3 text-base font-semibold text-ink/75 transition hover:text-bronze aria-[current=page]:text-bronze"
      >
        {item.label}
      </Link>
    ));
  }
  return (
    <header
      className="sticky top-0 z-50 border-b border-ink/15 bg-porcelain/95 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-2.5 md:px-8">
        <Link
          href="/"
          aria-label="Ardıç Design & Fabrication home"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2"
        >
          <Image
            src="/logo-symbol.svg"
            alt=""
            width={60}
            height={60}
            priority
            className="h-9 w-9 shrink-0 md:h-12 md:w-12"
          />
          <span>
            <span className="block font-display text-2xl leading-none tracking-[0.12em] md:text-3xl">
              ARDIÇ
            </span>
            <span className="mt-1 block text-[10px] text-ink/70 md:text-xs">Design & Fabrication</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          {links()}
        </nav>
        <div className="flex items-center gap-2 md:gap-3">
          <a href={languageRoute(pathname, "en")} onClick={event => { const source = new URL(window.location.href); const target = new URL(languageRoute(pathname, "en")); for (const key of ["method", "alternative", "left", "right"]) { const value = source.searchParams.get(key); if (value && getMethod(value)) target.searchParams.set(key, value); } event.currentTarget.href = target.href; }} hrefLang="tr" aria-label="Türkçe" className="inline-flex min-h-11 min-w-11 items-center justify-center text-xs font-semibold text-bronze">TR</a>
          {selected.length > 0 && <Link href="/project-selection" className="hidden py-3 text-sm font-semibold xl:block">
            Selection ({selected.length})
          </Link>}
          <Link href="/contact" className="button-primary hidden lg:inline-flex">
            Start a project →
          </Link>
          <button
            id="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="min-h-11 border border-ink/25 px-3 text-sm font-semibold xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="grid max-h-[75dvh] overflow-y-auto border-t border-ink/15 px-5 py-4 xl:hidden"
        >
          {links()}
          <Link className="py-3 font-semibold" onClick={() => setOpen(false)} href="/planning">
            Planning guide
          </Link>
          <Link
            className="py-3 font-semibold"
            onClick={() => setOpen(false)}
            href="/project-selection"
          >
            My selection ({selected.length})
          </Link>
          <Link
            className="button-primary mt-3 justify-self-start"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Start a project →
          </Link>
        </nav>
      )}
    </header>
  );
}
