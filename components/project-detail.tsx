import Image from "next/image";
import Link from "next/link";
import { type Project, enquiryHref, projectHref, projects } from "@/lib/projects";
import { getIndustry } from "@/lib/industries";
import { ProjectCard } from "./project-card";
import { SelectProjectButton } from "./project-selection-provider";

export function ProjectDetail({ project }: { project: Project }) {
  const related = projects
    .filter(
      (item) =>
        item.id !== project.id &&
        item.industries.some((industry) => project.industries.includes(industry))
    )
    .slice(0, 3);
  const url = `https://www.ardicdf.com${projectHref(project)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url,
        image: `https://www.ardicdf.com${project.image}`,
        creator: { "@id": "https://www.ardicdf.com/#organization" }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Works",
            item: "https://www.ardicdf.com/works"
          },
          { "@type": "ListItem", position: 2, name: project.title, item: url }
        ]
      }
    ]
  };
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <Link href="/works" className="text-link">
        ← All work
      </Link>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.08] md:text-6xl">{project.title}</h1>
          <p className="mt-6 text-lg leading-8 text-ink/75">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={enquiryHref([project.id])} className="button-primary">
              Plan a similar project →
            </Link>
            <SelectProjectButton id={project.id} />
          </div>
        </div>
        <figure>
          <div className="relative min-h-80 aspect-[4/5] bg-smoke/40">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-contain"
            />
          </div>
          <figcaption className="mt-3 text-sm leading-6 text-ink/70">{project.alt}.</figcaption>
        </figure>
      </div>
      <div className="mt-16 grid gap-12 border-y border-ink/15 py-12 md:grid-cols-2">
        <section>
          <h2 className="font-display text-3xl">Form & finish</h2>
          {project.details.map((detail) => (
            <p key={detail} className="mt-5 leading-8 text-ink/75">
              {detail}
            </p>
          ))}
        </section>
        <section>
          <h2 className="font-display text-3xl">Planning a similar project</h2>
          <p className="mt-5 leading-7 text-ink/75">
            Your dimensions, setting and use determine the production route. Include these details
            in your brief:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-ink/75">
            {project.briefChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/planning" className="text-link mt-6 inline-block">
            Read the fabrication planning guide →
          </Link>
        </section>
      </div>
      <div className="my-12 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="eyebrow">Relevant capabilities</h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            {project.services.map((service) => (
              <Link key={service.href} href={service.href} className="text-link">
                {service.label} →
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="eyebrow">Application ideas</h2>
          <div className="mt-4 flex flex-col items-start gap-3">
            {project.industries.map(getIndustry).map(
              (industry) =>
                industry && (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="text-link"
                  >
                    {industry.shortTitle} →
                  </Link>
                )
            )}
          </div>
        </section>
      </div>
      <section>
        <h2 className="mb-7 font-display text-4xl">Related work</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
