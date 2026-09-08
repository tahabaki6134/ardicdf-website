import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { industries } from "@/lib/industries";
import { projects } from "@/lib/projects";

const description =
  "Custom scenic environments, sculptures, architectural decor and brand props from Istanbul. Explore Ardıç’s real fabrication work and send an international project brief online.";
export const metadata: Metadata = {
  title: { absolute: "Custom Scenic, Sculpture & Brand Fabrication | Ardıç, Istanbul" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Custom Fabrication from Istanbul | Ardıç",
    description,
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ardıç Design & Fabrication" }]
  }
};

const capabilities = [
  [
    "CNC foam & polyurethane",
    "/services/cnc-foam-polyurethane-machining",
    "Geometry, carved forms and production masters."
  ],
  [
    "Composites & molds",
    "/services/composite-fabrication",
    "Custom shells, molds and repeat forms."
  ],
  [
    "Large-format 3D printing",
    "/services/large-format-3d-printing",
    "Complex shapes and physical development models."
  ],
  [
    "Scenic & themed fabrication",
    "/services/scenic-fabrication",
    "Sculpture, architectural details and complete scenic pieces."
  ]
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="py-4 lg:py-10">
          <p className="eyebrow">Custom fabrication · Istanbul, Türkiye</p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
            Bold ideas.
            <br />
            <span className="text-bronze">Extraordinary</span>
            <br />
            physical forms.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-ink/75">
            We build scenic environments, sculptures, architectural decor and brand props for
            designers, agencies and international project teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary">
              Build your project brief →
            </Link>
            <Link href="/works" className="button-secondary">
              Explore our work
            </Link>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-6 text-ink/65">
            Start with an idea, a drawing or a reference. Choose examples, outline your needs and
            request a fabrication review online.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink/15 pt-6 text-sm font-semibold">
            <span>An EPSLAM company</span>
            <span>English & Turkish enquiries</span>
            <Link href="/fabrication" className="underline underline-offset-4">
              Integrated production ↗
            </Link>
          </div>
        </div>
        <figure className="relative">
          <div className="relative aspect-[4/5] max-h-[700px] overflow-hidden bg-ink">
            <Image
              src={projects[0].image}
              alt={projects[0].alt}
              fill
              priority
              sizes="(min-width: 1440px) 640px, (min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/15 py-4 text-sm">
            <span>From the portfolio · Modular concert rockwork</span>
            <Link
              href="/works/modular-artificial-rock-concert-environment"
              className="font-semibold text-bronze underline underline-offset-4"
            >
              View case study ↗
            </Link>
          </figcaption>
        </figure>
      </section>

      <section className="page-shell border-t border-ink/15">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">See what takes shape here.</h2>
          </div>
          <Link href="/works" className="text-link">
            Explore the portfolio →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[projects[1], projects[3], projects[4]].map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-porcelain">
        <div className="page-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-brand text-smoke">
                Built around your sector
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">What are you creating?</h2>
            </div>
            <Link
              href="/industries"
              className="text-base font-semibold text-porcelain underline underline-offset-4"
            >
              All sectors & application ideas →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {industries.slice(0, 3).map((industry) => (
              <Link
                key={industry.slug}
                href={"/industries/" + industry.slug}
                className="group block border-t border-porcelain/25 pt-6"
              >
                <h3 className="font-display text-3xl group-hover:text-smoke">
                  {industry.shortTitle}
                </h3>
                <p className="mt-4 leading-7 text-porcelain/75">{industry.description}</p>
                <span className="mt-6 inline-block text-sm font-semibold">
                  Explore applications ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">One fabrication brief</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            The right process for the form.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/75">
            CNC machining, additive production, mold making, composites and finishing can be
            combined around your geometry, quantity and intended use.
          </p>
          <Link href="/services" className="text-link mt-6 inline-block">
            View capabilities →
          </Link>
        </div>
        <div>
          {capabilities.map(([title, href, copy], index) => (
            <Link
              key={href}
              href={href}
              className="group grid grid-cols-[2rem_1fr_auto] gap-4 border-t border-ink/20 py-6"
            >
              <span className="text-sm text-bronze">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl group-hover:text-bronze">{title}</h3>
                <p className="mt-2 leading-7 text-ink/70">{copy}</p>
              </div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/15 bg-smoke/25">
        <div className="page-shell">
          <p className="eyebrow">From first idea to production review</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Choose a direction",
                "Explore work and sector applications. Save relevant examples to your selection and share them with your team."
              ],
              [
                "02",
                "Build your brief",
                "Add dimensions, quantity, destination and target date. A material choice is optional; tell us how the piece will be used."
              ],
              [
                "03",
                "Agree the scope",
                "We review the brief and discuss the production route, finish, commercial scope and delivery requirements before work begins."
              ]
            ].map(([number, title, copy]) => (
              <div key={number}>
                <span className="eyebrow">{number}</span>
                <h3 className="mt-3 font-display text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-ink/75">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/contact" className="button-primary">
              Start your project →
            </Link>
            <Link href="/planning" className="button-secondary">
              Materials, files & delivery guide
            </Link>
          </div>
          <p className="mt-5 text-sm leading-6 text-ink/70">
            Confidential project? Request an NDA in the brief before sharing sensitive drawings.
          </p>
        </div>
      </section>
    </main>
  );
}
