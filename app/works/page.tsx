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

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {portfolioCategories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="group scroll-mt-40 bg-porcelain p-7 transition hover:bg-white md:min-h-80 md:p-9"
              >
                <div className="flex min-h-full flex-col">
                  <p className="font-display text-5xl text-bronze">{category.number}</p>
                  <h2 className="mt-12 max-w-lg font-display text-4xl leading-tight text-ink">
                    {category.title}
                  </h2>
                  <p className="mt-6 max-w-xl leading-7 text-ink/60">{category.description}</p>
                  <div className="mt-8 h-px w-16 bg-bronze" />
                  <a
                    href={`#${category.slug}`}
                    className="mt-auto pt-10 text-sm font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink"
                  >
                    Explore →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
