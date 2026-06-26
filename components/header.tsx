"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 overflow-x-hidden border-b border-ink/10 bg-porcelain/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8 md:py-5">
        <Link href="/" className="group flex min-w-0 items-center gap-4 md:gap-5" aria-label="ARDIÇ home">
          <Image
            src="/logo-symbol.svg"
            alt=""
            width={96}
            height={96}
            priority
            className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20 md:h-24 md:w-24"
          />
          <span className="block min-w-0">
            <span className="block font-display text-3xl leading-none tracking-[0.22em] text-ink sm:text-4xl md:text-5xl">
              {brand.shortName}
            </span>
            <span className="mt-2 block text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-ink/70 sm:text-[0.65rem] md:text-xs">
              Design & Fabrication
            </span>
            <span className="mt-1 block text-[0.48rem] font-semibold uppercase tracking-[0.28em] text-ink/45 sm:text-[0.56rem] md:text-[0.65rem]">
              An EPSLAM Company
            </span>
            <span className="mt-2 hidden h-px w-20 bg-bronze sm:block" />
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[1.0625rem] tracking-[0.02em] transition ${
                  active ? "text-bronze" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-bronze px-4 py-2 text-xs font-semibold uppercase tracking-brand text-bronze transition hover:bg-bronze hover:text-porcelain lg:inline-block"
        >
          Start a Project
        </Link>
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 border border-ink/15 text-ink transition hover:border-bronze hover:text-bronze lg:hidden"
        >
          <span
            className={`h-px w-5 bg-current transition ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-current transition ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-5 bg-current transition ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`border-t border-ink/10 bg-porcelain px-5 py-5 shadow-soft transition lg:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="mx-auto grid max-w-7xl gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className={`border-b border-ink/10 py-4 font-display text-2xl leading-none transition ${
                pathname === item.href ? "text-bronze" : "text-ink hover:text-bronze"
              }`}
            >
              {item.mobileLabel ?? item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-5 inline-flex w-fit border border-bronze px-5 py-3 text-xs font-semibold uppercase tracking-brand text-bronze transition hover:bg-bronze hover:text-porcelain"
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </header>
  );
}
