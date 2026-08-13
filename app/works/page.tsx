import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RotatingCoverImage } from "@/components/rotating-cover-image";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Scenic, Sculpture & Custom Fabrication Works | Ardıç"
  },
  description:
    "Explore selected Ardıç fabrication work across scenic environments, sculpture, architectural decor, brand installations, CNC production, molds, and composite systems.",
  alternates: {
    canonical: "/works"
  },
  openGraph: {
    title: "Scenic, Sculpture & Custom Fabrication Works | Ardıç",
    description:
      "Selected completed fabrication work and production categories across scenic, sculptural, architectural, branded, CNC, mold, and composite applications.",
    url: "/works"
  }
};

const worksCategories = portfolioCategories.filter((category) => category.published !== false);

export default function WorksPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Works"
              headingTag="h1"
              title="Scenic, Sculptural & Custom Fabrication Works"
              copy="Selected completed fabrication work across scenic environments, sculpture, architectural decor, brand installations, CNC production, molds, and composite systems."
            />
            <p className="max-w-xl text-base leading-8 text-ink/60 md:text-lg">
              This archive focuses on physical production and fabrication outcomes. Exploratory
              design concepts and development studies are presented separately in Concepts.
            </p>
          </div>

          <article className="mt-16 border border-ink/10 bg-ink text-porcelain shadow-soft">
            <Link
              href="/works/modular-artificial-rock-concert-environment"
              className="group grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"
            >
              <div className="relative aspect-video overflow-hidden bg-ink lg:aspect-auto lg:min-h-[520px]">
                <Image
                  src="/works/modular-artificial-rock-concert-environment/concert-rock-environment-hero.jpeg"
                  alt="Ardıç modular artificial-rock concert environment at full scale"
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.015]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
              </div>
              <div className="flex min-h-96 flex-col p-7 md:p-10 lg:p-12">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Featured Completed Case Study
                </p>
                <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                  Modular Artificial Rock Concert Environment
                </h2>
                <div className="mt-6 h-px w-14 bg-bronze" />
                <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
                  See how an oversized EPS foam scenic environment was fabricated as transportable
                  rockwork modules, finished for visual continuity, and assembled on site.
                </p>
                <span className="mt-auto pt-10 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-porcelain">
                  Read the Case Study &rarr;
                </span>
              </div>
            </Link>
          </article>

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {worksCategories.map((category) => (
              <article key={category.title} className="group bg-porcelain transition hover:bg-white">
                <a href={category.href} className="flex min-h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <RotatingCoverImage
                      images={category.coverImages}
                      position={category.coverPosition}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70" />
                    <div className="absolute left-5 top-5 border border-white/25 bg-ink/55 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-brand text-white backdrop-blur-sm">
                      {category.imageCount} Project Visuals
                    </div>
                  </div>
                  <div className="flex min-h-72 flex-col border border-ink/10 p-7 md:p-8">
                    <div className="flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-brand text-bronze">
                      <p>{category.number}</p>
                      <p>{category.imageCount} Images</p>
                    </div>
                    <h2 className="mt-7 max-w-lg font-display text-3xl leading-tight text-ink md:text-4xl">
                      {category.title}
                    </h2>
                    <div className="mt-5 h-px w-14 bg-bronze" />
                    <p className="mt-6 max-w-xl leading-7 text-ink/60">
                      {category.shortDescription ?? category.description}
                    </p>
                    <span className="mt-auto pt-10 text-sm font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                      View Gallery →
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
