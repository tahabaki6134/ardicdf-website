import Image from "next/image";
import Link from "next/link";
import { brand, navigation } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink text-porcelain">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
        <div>
          <Image
            src="/logo.svg"
            alt={brand.name}
            width={260}
            height={260}
            className="h-36 w-36 object-contain"
          />
          <p className="mt-5 max-w-md font-display text-4xl leading-tight md:text-5xl">
            {brand.tagline}
          </p>
          <p className="mt-5 max-w-md leading-7 text-porcelain/60">
            An EPSLAM company built on long-term family production experience and integrated
            fabrication infrastructure.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-brand text-porcelain/50">Explore</p>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-porcelain/75 hover:text-bronze">
                {item.footerLabel ?? item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-brand text-porcelain/50">Contact</p>
          <div className="mt-5 space-y-3 text-porcelain/75">
            <Link href="tel:+905436268969" className="block transition hover:text-bronze">
              {brand.phone}
            </Link>
            <p>{brand.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
