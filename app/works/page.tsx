import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore Ardıç Design & Fabrication portfolio categories across themed spaces, sculptures, architectural decor, brand installations, facade ornaments, molds, and polyester casting.",
  alternates: {
    canonical: "/works"
  },
  openGraph: {
    title: "Works",
    description:
      "Selected portfolio categories across sculpture, decor, thematic fabrication, brand installations, and custom production systems.",
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
              title="Selected works across sculpture, decor, and thematic fabrication."
              copy="Ardıç Design & Fabrication delivers custom physical works from concept development to production, finishing, and on-site execution."
            />
            <p className="max-w-xl text-base leading-8 text-ink/60 md:text-lg">
              The portfolio brings together project categories shaped through sculptural craftsmanship,
              architectural detailing, brand-focused fabrication, and workshop-led production systems.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {worksCategories.map((category) => (
              <article key={category.title} className="group bg-porcelain transition hover:bg-white">
                <a href={category.href} className="flex min-h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                    <Image
                      src={category.coverImage}
                      alt={category.alt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: category.coverPosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="flex min-h-72 flex-col border border-ink/10 p-7 md:p-8">
                    <p className="text-sm font-semibold uppercase tracking-brand text-bronze">
                      {category.number}
                    </p>
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
