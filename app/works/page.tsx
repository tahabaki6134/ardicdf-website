import type { Metadata } from "next";
import { RotatingCoverImage } from "@/components/rotating-cover-image";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCategories } from "@/lib/content";
import { ProjectsExplorer } from "@/components/projects-explorer";

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
      <section className="px-5 py-10 md:px-8 md:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <SectionHeading
              eyebrow="Works"
              headingTag="h1"
              title="Selected fabrication projects."
              copy="Finished objects, architectural details and scenic installations from our production archive."
            />
            <p className="max-w-xl text-base leading-8 text-ink/60 md:text-lg">
              See the form, surface and assembly of our work. Each project is developed for its own dimensions, materials and use.
            </p>
          </div>

          <ProjectsExplorer />
          <h2 className="mt-16 font-display text-4xl">Explore the full image archive.</h2>
          <p className="mt-4 max-w-2xl leading-7 text-ink/70">
            Browse workshop photographs, fabrication details and completed pieces by production
            category.
          </p>
          <div className="mt-8 grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {worksCategories.map((category) => (
              <article
                key={category.title}
                className="group bg-porcelain transition hover:bg-white"
              >
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
