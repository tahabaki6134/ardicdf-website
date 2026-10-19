import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { pagePath } from "@/lib/i18n/routes";

export function ProductionCapacity({ locale, t }: { locale: Locale; t: Dictionary }) {
  return <section className="mt-12 border-t border-ink/15 pt-8" aria-labelledby="printing-capacity">
    <p className="eyebrow">{t.capacity_eyebrow}</p>
    <h2 id="printing-capacity" className="mt-3 font-display text-3xl md:text-4xl">{t.capacity_title}</h2>
    <dl className="mt-6 grid gap-5 sm:grid-cols-2">
      <div className="border border-ink/15 bg-white p-6"><dt className="text-sm font-semibold text-bronze">{t.capacity_large}</dt><dd className="mt-3 font-display text-3xl"><bdi>100 × 100 × 100</bdi> <span className="text-lg">{t.unit_cm}</span></dd><dd className="mt-3 text-sm leading-7 text-ink/70">{t.capacity_large_note}</dd></div>
      <div className="border border-ink/15 bg-white p-6"><dt className="text-sm font-semibold text-bronze">{t.capacity_desktop}</dt><dd className="mt-3 font-display text-3xl"><bdi>32 × 32 × 32</bdi> <span className="text-lg">{t.unit_cm}</span></dd><dd className="mt-3 text-sm leading-7 text-ink/70">{t.capacity_desktop_note}</dd></div>
    </dl>
    <p className="mt-5 max-w-4xl text-sm leading-7 text-ink/70">{t.capacity_note}</p>
    <Link className="text-link mt-5 inline-block" href={pagePath(locale, { kind: "contact" }) + "?method=printing#brief"}>{t.capacity_cta} <span aria-hidden="true">↗</span></Link>
  </section>;
}
