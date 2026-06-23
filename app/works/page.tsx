import { portfolioCategories, portfolioProjects } from "@/lib/content";
import { PortfolioProjectCard } from "@/components/portfolio-project-card";
import { SectionHeading } from "@/components/section-heading";

export default function WorksPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Works"
            title="Where Design Becomes a Built Experience."
            copy="Selected projects spanning thematic environments, sculptural fabrication, artificial landscapes, and custom production systems."
          />

          <div className="mt-16 grid gap-10">
            {portfolioProjects.map((project) => (
              <PortfolioProjectCard key={project.title} project={project} />
            ))}
          </div>

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {portfolioCategories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="group scroll-mt-40 bg-porcelain p-7 transition hover:bg-white md:min-h-80 md:p-9"
              >
                <a href={category.href ?? `#${category.slug}`} className="flex min-h-full flex-col">
                  <p className="font-display text-5xl text-bronze">{category.number}</p>
                  <h2 className="mt-12 max-w-lg font-display text-4xl leading-tight text-ink">
                    {category.title}
                  </h2>
                  <p className="mt-6 max-w-xl leading-7 text-ink/60">{category.description}</p>
                  <div className="mt-8 h-px w-16 bg-bronze" />
                  <span className="mt-auto pt-10 text-sm font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                    Explore →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
