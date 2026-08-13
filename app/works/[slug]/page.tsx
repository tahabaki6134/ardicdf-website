import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioLightbox } from "@/components/portfolio-lightbox";
import { SectionHeading } from "@/components/section-heading";
import { getPortfolioImageAlt, getPortfolioImageSrc, portfolioCategories } from "@/lib/content";

const siteUrl = "https://www.ardicdf.com";

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
    title: category.title,
    description: category.description,
    alternates: {
      canonical: `/works/${category.slug}`
    },
    openGraph: {
      title: category.title,
      description: category.description,
      url: `/works/${category.slug}`
    }
  };
}

export default function PortfolioCategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug);

  if (!category) {
    notFound();
  }

  const galleryImages = category.images.map((image, index) => ({
    src: getPortfolioImageSrc(image),
    alt: getPortfolioImageAlt(image, `${category.title} gallery image ${index + 1}`)
  }));
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Works",
        item: `${siteUrl}/works`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: `${siteUrl}/works/${category.slug}`
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
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
              eyebrow="Portfolio Gallery"
              headingTag="h1"
              title={category.title}
              copy={category.description}
            />
          </div>

          <div className="mt-14 grid gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-display text-4xl leading-tight text-ink md:text-5xl">
                {category.introHeading}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-brand text-bronze">
                {category.imageCount} Images
              </p>
            </div>
            <div className="space-y-6 text-lg leading-8 text-ink/65">
              {category.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {category.slug === "artificial-rock-organic-forms" ? (
            <section className="mt-16 border border-ink/10 bg-ink text-porcelain shadow-soft">
              <Link
                href="/works/modular-artificial-rock-concert-environment"
                className="group grid lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch"
              >
                <div className="relative aspect-video overflow-hidden bg-ink lg:aspect-auto lg:min-h-[440px]">
                  <Image
                    src="/works/modular-artificial-rock-concert-environment/concert-rock-environment-hero.jpeg"
                    alt="Completed Ardıç modular artificial-rock environment showing the finished scenic surface"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.015]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
                </div>
                <div className="flex min-h-80 flex-col p-7 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                    Completed Fabrication Case Study
                  </p>
                  <h2 className="mt-7 max-w-lg font-display text-4xl leading-tight text-porcelain">
                    Modular Artificial Rock Concert Environment
                  </h2>
                  <p className="mt-6 max-w-xl leading-8 text-porcelain/65">
                    Follow the project from EPS foam workshop modules to a full-scale scenic rock
                    environment assembled in its completed setting.
                  </p>
                  <span className="mt-auto pt-9 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-porcelain">
                    Read the Case Study &rarr;
                  </span>
                </div>
              </Link>
            </section>
          ) : null}

          <section className="mt-16">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Gallery
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  Category image archive.
                </h2>
              </div>
            </div>

            <PortfolioLightbox images={galleryImages} />
          </section>
        </div>
      </section>
    </main>
  );
}
