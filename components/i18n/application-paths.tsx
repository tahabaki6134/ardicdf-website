import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { pagePath } from "@/lib/i18n/routes";

export function ApplicationPaths({ locale, t }: { locale: Locale; t: Dictionary }) {
  const paths = [
    { id: "retail-brand-activations", title: t.application_brand_title, description: t.application_brand_description },
    { id: "events-exhibitions", title: t.application_modular_title, description: t.application_modular_description },
    { id: "hospitality-architectural-decor", title: t.application_interior_title, description: t.application_interior_description },
    { id: "museums-themed-attractions", title: t.application_themed_title, description: t.application_themed_description }
  ];

  return <section className="mt-12 border-t border-ink/15 pt-8" aria-labelledby="application-paths-title">
    <p className="eyebrow">{t.nav_industries}</p>
    <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
      <h2 id="application-paths-title" className="font-display text-3xl md:text-4xl">{t.application_paths_title}</h2>
      <Link className="text-link" href={pagePath(locale, { kind: "industries" })}>{t.nav_industries} <span aria-hidden="true">↗</span></Link>
    </div>
    <p className="mt-4 max-w-3xl leading-8 text-ink/70">{t.application_paths_intro}</p>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {paths.map(item => <Link key={item.id} href={pagePath(locale, { kind: "industry", id: item.id })} className="group min-w-0 border border-ink/15 bg-white/50 p-5 transition hover:border-bronze hover:bg-white">
        <h3 className="text-lg font-semibold leading-7 group-hover:text-bronze">{item.title} <span className="text-bronze" aria-hidden="true">↗</span></h3>
        <p className="mt-3 text-sm leading-7 text-ink/70">{item.description}</p>
      </Link>)}
    </div>
  </section>;
}
