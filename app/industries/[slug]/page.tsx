import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { getIndustry, industries } from "@/lib/industries";
import { enquiryHref, projects } from "@/lib/projects";

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustry(params.slug);
  return industry
    ? {
        title: industry.title,
        description: industry.description,
        alternates: { canonical: `/industries/${industry.slug}` },
        openGraph: {
          title: industry.title,
          description: industry.description,
          url: `/industries/${industry.slug}`
        }
      }
    : {};
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustry(params.slug);
  if (!industry) notFound();
  const relevant = projects
    .filter((project) => project.industries.includes(industry.slug))
    .slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.title,
    description: industry.description,
    url: `https://www.ardicdf.com/industries/${industry.slug}`,
    provider: { "@id": "https://www.ardicdf.com/#organization" },
    areaServed: "Worldwide"
  };
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Link href="/industries" className="text-link">
        ← All industries
      </Link>
      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow">Applications & production planning</p>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">{industry.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/75">{industry.description}</p>
          <Link href={enquiryHref([], industry.slug)} className="button-primary mt-7">
            Plan a project in this sector →
          </Link>
        </div>
        {relevant.length > 0 && (
          <figure>
            <div className="relative aspect-[4/3] bg-smoke">
              <Image
                src={industry.image}
                alt={industry.alt}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink/70">
              A related example from our fabrication portfolio.
            </figcaption>
          </figure>
        )}
      </div>
      <section className="mt-16">
        <h2 className="font-display text-4xl">What could we build for your brief?</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {industry.applications.map((application) => (
            <article key={application.title} className="border-t border-ink/20 pt-6">
              <h3 className="font-display text-3xl">{application.title}</h3>
              <p className="mt-4 leading-8 text-ink/75">{application.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="my-16 grid gap-8 bg-smoke/30 p-6 md:grid-cols-2 md:p-10">
        <div>
          <p className="eyebrow">Your brief checklist</p>
          <h2 className="mt-3 font-display text-3xl">
            Help us understand the production requirements.
          </h2>
          <Link href="/planning" className="text-link mt-5 inline-block">
            Materials, files & delivery guide →
          </Link>
        </div>
        <ul className="list-disc space-y-4 pl-5 leading-7">
          {industry.checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {relevant.length > 0 ? (
        <section>
          <h2 className="font-display text-4xl">Related fabrication work</h2>
          <p className="mt-4 leading-7 text-ink/70">
            Examples of forms and finishes relevant to this type of brief.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relevant.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      ) : (
        <section className="border-t border-ink/15 pt-8">
          <h2 className="font-display text-3xl">Explore the production processes</h2>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link className="text-link" href="/services/cnc-foam-polyurethane-machining">
              CNC machining →
            </Link>
            <Link className="text-link" href="/services/large-format-3d-printing">
              Large-format 3D printing →
            </Link>
            <Link className="text-link" href="/services/composite-fabrication">
              Molds & composites →
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}
