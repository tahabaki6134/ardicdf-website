import Image from "next/image";
import Link from "next/link";
import type { Language } from "@/lib/manufacturing";
import { showcase, showcaseHref } from "@/lib/site-showcase";

export function SelectedWork({ lang, all = false }: { lang: Language; all?: boolean }) {
  const tr = lang === "tr";
  return <section className="page-shell" id="selected-work">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><p className="eyebrow">{tr ? "Gerçek üretim, tamamlanmış işler" : "Real fabrication, finished work"}</p><h2 className="mt-3 font-display text-3xl md:text-5xl">{tr ? "İşin sonunda ortaya çıkan." : "See what we build."}</h2></div>
      <Link href="/works" className="text-link">{tr ? "Tüm projeler" : "All projects"} →</Link>
    </div>
    <div className={`mt-7 grid gap-6 sm:grid-cols-2 ${all ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}>
      {showcase.slice(all ? 0 : 1).map(item => <Link key={item.id} href={showcaseHref(item, lang)} className="group min-w-0">
        <div className="relative aspect-[4/5] overflow-hidden bg-smoke/30"><Image src={item.image} alt={item[lang].alt} fill sizes="(min-width: 1024px) 30vw, (min-width: 640px) 48vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" /></div>
        <h3 className="mt-4 font-display text-2xl">{item[lang].title} <span aria-hidden="true" className="text-bronze">↗</span></h3><p className="mt-2 text-sm leading-6 text-ink/70">{item[lang].detail}</p>
      </Link>)}
    </div>
  </section>;
}
