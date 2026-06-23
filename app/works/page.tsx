import { portfolioCategories } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export default function WorksPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Works"
            title="Portfolio categories for environments, objects, and fabricated experiences."
            copy="A structured portfolio system organized around the studio’s core production and design disciplines."
          />

          <nav
            aria-label="Portfolio categories"
            className="mt-14 flex gap-3 overflow-x-auto border-y border-ink/10 py-4"
          >
            {portfolioCategories.map((category) => (
              <a
                key={category.slug}
                href={`#${category.slug}`}
                className="shrink-0 border border-ink/10 px-4 py-3 text-sm uppercase tracking-brand text-ink/65 transition hover:border-bronze hover:text-bronze"
              >
                {category.number} {category.title}
              </a>
            ))}
          </nav>

          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-2">
            {portfolioCategories.map((category) => (
              <section
                key={category.slug}
                id={category.slug}
                className="scroll-mt-40 bg-porcelain p-7 md:min-h-72 md:p-9"
              >
                <p className="font-display text-5xl text-bronze">{category.number}</p>
                <h2 className="mt-12 max-w-lg font-display text-4xl leading-tight text-ink">
                  {category.title}
                </h2>
                <div className="mt-8 h-px w-16 bg-bronze" />
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
