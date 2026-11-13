import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { epoxyImages } from "@/lib/photo-gallery";
import { localizedContent } from "@/lib/i18n/content";
import { pagePath } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import collections from "@/lib/i18n/messages/collections.json";
import { PhotoGallery } from "./photo-gallery";

type Props = { locale: Locale; t: Dictionary };
const collectionId = "epoxy-wood-collection";

export function EpoxyFeature({ locale, t }: Props) {
  const copy = collections[locale];
  const href = pagePath(locale, { kind: "project", id: collectionId });
  return <section className="mt-14 grid overflow-hidden bg-[#263b34] text-[#f5f3ee] lg:grid-cols-2">
    <div className="flex flex-col justify-center p-7 sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[.15em] text-[#d9c6a0]">{copy.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight">{copy.feature}</h2>
      <p className="mt-5 max-w-xl leading-8 text-white/80">{copy.featureBody}</p>
      <Link href={href} className="mt-7 inline-flex min-h-12 items-center gap-4 self-start border-b border-white/50 py-3 font-semibold">{copy.explore} <span aria-hidden="true">↗</span></Link>
    </div>
    <Link href={href} aria-label={copy.explore} className="relative block min-h-64 sm:min-h-80">
      <Image src={getProject(collectionId)!.image} alt={copy.titles[26]} fill sizes="(min-width:1024px) 50vw, 95vw" className="object-cover" />
    </Link>
  </section>;
}

export function CollectionLinks({ locale, t }: Props) {
  const content = localizedContent(locale);
  return <nav aria-label={t.works_title} className="mt-8 grid gap-4 sm:grid-cols-2">
    {[collectionId, "astronaut-monkey-mascot"].map(id => <Link key={id} href={pagePath(locale, { kind: "project", id })} className="flex min-w-0 items-center gap-4 border border-ink/15 bg-white/40 p-3 hover:border-bronze">
      <div className="relative h-20 w-24 shrink-0 bg-smoke/20"><Image src={getProject(id)!.image} alt="" fill sizes="96px" className={id === collectionId ? "object-cover" : "object-contain"} /></div>
      <span className="font-display text-xl">{content.projects[id].title} <span aria-hidden="true">↗</span></span>
    </Link>)}
  </nav>;
}

export function EpoxyCollection({ locale, t }: Props) {
  const copy = collections[locale];
  const contact = pagePath(locale, { kind: "contact" }) + "?method=epoxy&selected=epoxy-wood-collection#brief";
  const filters = [{ id: "all", label: copy.all }, ...["clocks", "lighting", "serving", "casting", "art"].map((id, i) => ({ id, label: copy.groups[i] }))];
  return <>
    <Link className="text-link mb-6 inline-block" href={pagePath(locale, { kind: "works" })}>{t.all_projects}</Link>
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
      <div><p className="eyebrow">{copy.eyebrow}</p><h1 className="mt-4 font-display text-4xl leading-tight md:text-6xl">{copy.title}</h1><p className="mt-5 text-lg leading-8 text-ink/75">{copy.intro}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={contact} className="button-primary">{t.nav_contact} ↗</Link><Link href={pagePath(locale, { kind: "method", id: "epoxy" })} className="text-link inline-flex min-h-12 items-center">{copy.process}</Link></div></div>
      <div className="grid grid-cols-2 items-stretch gap-3">
        <div className="relative col-span-2 aspect-[16/9] bg-smoke/20"><Image src="/works/epoxy-wood-collection/epoxy-27.webp" alt={copy.titles[26]} fill priority sizes="(min-width:1024px) 46vw, 94vw" className="object-cover" /></div>
        {[2, 13].map(n => <div key={n} className="relative aspect-[4/3] bg-smoke/20"><Image src={`/works/epoxy-wood-collection/epoxy-${String(n).padStart(2, "0")}.webp`} alt={copy.titles[n - 1]} fill sizes="(min-width:1024px) 23vw, 46vw" className="object-contain" /></div>)}
      </div>
    </div>
    <PhotoGallery images={epoxyImages(locale)} t={t} filters={filters} />
    <section className="mt-14 border-t border-ink/15 pt-8"><h2 className="font-display text-3xl">{copy.brief}</h2><p className="mt-4 max-w-3xl leading-8 text-ink/70">{copy.briefBody}</p><Link href={contact} className="button-primary mt-6">{t.nav_contact} ↗</Link></section>
  </>;
}

export function MascotVideos({ locale }: { locale: Locale }) {
  const copy = collections[locale];
  return <section className="mt-12 border-t border-ink/15 pt-8" aria-labelledby="mascot-videos">
    <h2 id="mascot-videos" className="font-display text-3xl">{copy.videoTitle}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{copy.videoNote}</p>
    <div className="mt-6 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">{copy.videoLabels.map((label, i) => <figure key={label}>
      <video controls playsInline preload="none" poster={`/works/astronaut-monkey-mascot/detail-${i + 1}.webp`} aria-label={label} className="mx-auto aspect-[9/16] w-full max-w-sm bg-black object-contain">
        <source src={`/works/astronaut-monkey-mascot/detail-${i + 1}.mp4`} type="video/mp4" />
        <a href={`/works/astronaut-monkey-mascot/detail-${i + 1}.mp4`}>{label}</a>
      </video><figcaption className="mt-3 text-sm leading-6 text-ink/70">{label}</figcaption>
    </figure>)}</div>
  </section>;
}
