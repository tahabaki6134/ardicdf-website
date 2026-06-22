"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, navigation } from "@/lib/content";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-porcelain/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 md:px-8 md:py-6">
        <Link href="/" className="group flex items-center gap-4 md:gap-5" aria-label="ARDIÇ home">
          <Image
            src="/logo-symbol.svg"
            alt=""
            width={88}
            height={88}
            priority
            className="h-16 w-16 object-contain md:h-20 md:w-20"
          />
          <Image
            src="/logo-horizontal.svg"
            alt={brand.name}
            width={360}
            height={118}
            priority
            className="hidden h-14 w-auto object-contain sm:block md:h-16 lg:h-20"
          />
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${
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
          className="hidden border border-bronze px-4 py-2 text-xs font-semibold uppercase tracking-brand text-bronze transition hover:bg-bronze hover:text-porcelain sm:inline-block"
        >
          Start a Project
        </Link>
      </div>
      <nav
        className="flex gap-4 overflow-x-auto border-t border-ink/10 px-5 py-3 text-sm lg:hidden"
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "shrink-0 text-bronze" : "shrink-0 text-ink/70"}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
