import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { localizedContent } from "@/lib/i18n/content";
import { methodIds, methodCopy } from "@/lib/i18n/methods";
import { pagePath } from "@/lib/i18n/routes";
import { getProject } from "@/lib/projects";

type Props = { locale: Locale; t: Dictionary };
export function HomeShowcase({ locale, t }: Props) {
  const project = getProject("sculptural-reception-interior")!;
  const copy = localizedContent(locale).projects[project.id];
  const [cover] = project.gallery!;
  const href = pagePath(locale, { kind: "project", id: project.id });
  return <section className="home-intro grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
    <div>
      <p className="eyebrow">{t.hero_eyebrow}</p>
      <h1 className="mt-4 font-display text-[2.25rem] leading-[1.12] sm:text-5xl xl:text-[3.4rem]">{t.hero_title}<span className="mt-1 block text-bronze">{t.hero_accent}</span></h1>
      <p className="mt-5 max-w-xl text-base leading-7 text-ink/75">{t.hero_intro}</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link className="button-primary" href={pagePath(locale, { kind: "contact" }) + "#brief"}>{t.send_project} <span aria-hidden="true">↗</span></Link><a className="button-secondary" href="#featured-projects">{t.all_projects}</a></div>
    </div>
    <div className="min-w-0">
      <Link href={href} className="block"><figure>
        <Image src={cover.src} alt={copy.gallery![0].alt} width={cover.width} height={cover.height} priority sizes="(min-width:1024px) 58vw, 100vw" className="h-auto w-full bg-smoke/20" />
        <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm leading-6"><span>{copy.title}</span><span aria-hidden="true">↗</span></figcaption>
      </figure></Link>
    </div>
  </section>;
}

export function CompactMethods({ locale, t }: Props) {
  return <section id="methods" className="mt-10 border-t border-ink/15 pt-8 md:mt-12">
    <p className="eyebrow">{t.methods_eyebrow}</p>
    <div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 className="font-display text-3xl md:text-4xl">{t.methods_title}</h2><Link className="text-link" href={pagePath(locale, { kind: "compare" })}>{t.compare_cta} ↗</Link></div>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{methodIds.map((id, index) => {
      const copy = methodCopy(locale, id);
      return <Link key={id} href={pagePath(locale, { kind: "method", id })} className="group flex min-w-0 items-start gap-3 border border-ink/15 bg-white/50 p-4 transition hover:border-bronze hover:bg-white">
        <span className="pt-0.5 text-xs text-bronze" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="min-w-0 flex-1"><h3 className="text-base font-semibold leading-6 group-hover:text-bronze">{copy.title}</h3><p className="mt-1 text-xs leading-5 text-ink/65">{copy.costLabel}</p></div><span className="text-bronze" aria-hidden="true">↗</span>
      </Link>;
    })}</div>
    <p className="mt-4 max-w-4xl text-xs leading-6 text-ink/65">{t.cost_note}</p>
  </section>;
}
