import Image from "next/image";
import { portfolioCategories } from "@/lib/content";
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

          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {portfolioCategories.map((category) => (
              <article
                key={category.slug}
                id={category.slug}
                className="group scroll-mt-40 bg-porcelain transition hover:bg-white"
              >
                <a href={category.href} className="flex min-h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <Image
                      src={category.coverImage}
                      alt={`${category.title} cover image`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-h-80 flex-col p-7 md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-display text-5xl text-bronze">{category.number}</p>
                      <p className="text-sm font-semibold uppercase tracking-brand text-ink/45">
                        {category.imageCount} Images
                      </p>
                    </div>
                    <h2 className="mt-10 max-w-lg font-display text-4xl leading-tight text-ink">
                      {category.title}
                    </h2>
                    <p className="mt-6 max-w-xl leading-7 text-ink/60">{category.description}</p>
                    <div className="mt-8 h-px w-16 bg-bronze" />
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
