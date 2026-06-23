import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { portfolioCategories } from "@/lib/content";

const projectSlots = ["01", "02", "03", "04"];

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

function getCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    slug: category.slug
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategory(params.slug);

  if (!category) {
    return {};
  }

  return {
    title: `${category.title} | Ardıç Design & Fabrication`,
    description: category.description
  };
}

export default function PortfolioCategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
          >
            &larr; Works
          </Link>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Portfolio Category"
              title={category.title}
              copy={category.description}
            />
          </div>

          <div className="mt-14 grid gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="font-display text-4xl leading-tight text-ink md:text-5xl">
              {category.introHeading}
            </p>
            <div className="space-y-6 text-lg leading-8 text-ink/65">
              {category.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <section className="mt-16">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Selected Projects
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  Project archive structure.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-ink/55">
                Image slots reserved for future project case studies.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2">
              {projectSlots.map((slot) => (
                <article key={slot} className="bg-porcelain p-7 md:p-9">
                  <div className="flex aspect-[4/3] items-center justify-center border border-ink/10 bg-white">
                    <p className="text-xs font-semibold uppercase tracking-brand text-ink/35">
                      Future Project {slot}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
