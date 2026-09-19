import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/projects";
import { portfolioCategories, getPortfolioImageSrc } from "@/lib/content";
import { localizedContent } from "@/lib/i18n/content";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { pagePath, type Page } from "@/lib/i18n/routes";

// Only connect processes backed by the existing project record or named workshop archive.
// Do not infer a new photograph's materials from its appearance.
const evidence: Record<string, Page> = {
  foam: { kind: "project", id: "modular-artificial-rock-concert-environment" },
  glass: { kind: "archive", id: "molds-composite-production" },
  tooling: { kind: "archive", id: "molds-composite-production" },
  cnc: { kind: "archive", id: "cnc-manufacturing-processes" }
};
export function MethodEvidence({ locale, t, id }: { locale: Locale; t: Dictionary; id: string }) {
  const page = evidence[id];
  if (!page) return null;
  const content = localizedContent(locale);
  const archive = page.kind === "archive" ? portfolioCategories.find(item => item.slug === page.id)! : undefined;
  const title = archive ? content.archives[archive.slug].title : content.projects[page.id!].title;
  const image = archive ? archive.coverImage || getPortfolioImageSrc(archive.images[0]) : getProject(page.id!)!.image;
  return <section className="mt-12 border-t border-ink/15 pt-8">
    <h2 className="font-display text-3xl">{t.related_title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{t.related_intro}</p>
    <Link href={pagePath(locale, page)} className="mt-5 grid max-w-3xl items-center gap-5 border border-ink/15 bg-white p-4 sm:grid-cols-[200px_1fr]">
      <div className="relative aspect-[16/10]"><Image src={image} alt={title} fill sizes="(min-width:640px) 200px, 90vw" className="object-cover" /></div>
      <h3 className="font-display text-2xl">{title} <span aria-hidden="true">↗</span></h3>
    </Link>
  </section>;
}
