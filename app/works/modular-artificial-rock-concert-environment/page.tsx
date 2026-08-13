import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/works/modular-artificial-rock-concert-environment";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle = "Modular Artificial Rock Concert Environment | Ardıç";
const pageDescription =
  "A completed modular concert environment fabricated by Ardıç using EPS foam scenic production, realistic artificial-rock finishing and transportable sections assembled on site.";
const socialTitle =
  "Modular Artificial Rock Concert Environment | Scenic Fabrication by Ardıç";
const socialDescription =
  "See how Ardıç produced an oversized artificial-rock concert environment as transportable EPS foam modules with realistic scenic finishing and on-site assembly.";
const imageBase = "/works/modular-artificial-rock-concert-environment";
const heroImage = `${imageBase}/concert-rock-environment-hero.jpeg`;

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    title: socialTitle,
    description: socialDescription,
    url: pagePath,
    type: "article",
    images: [
      {
        url: heroImage,
        width: 1600,
        height: 900,
        alt: "Ardıç modular artificial-rock concert environment with a continuous scenic surface at full scale"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [heroImage]
  }
};

const projectFacts = [
  {
    label: "Project Scope",
    value: "Scenic rock environment fabrication"
  },
  {
    label: "Primary Medium",
    value: "EPS foam"
  },
  {
    label: "Production Format",
    value: "Transportable modular sections"
  }
];

const projectOutcomes = [
  "Oversized scenic fabrication",
  "Modular production for transport",
  "EPS foam shaping",
  "Realistic artificial-rock surfaces",
  "Visual continuity across assembled sections",
  "Production planning for venue assembly"
];

const relatedLinks = [
  {
    eyebrow: "Service",
    title: "Scenic Fabrication",
    copy: "Explore large-scale props, scenic environments, rockwork, surface finishing, and modular production.",
    href: "/services/scenic-fabrication"
  },
  {
    eyebrow: "Service",
    title: "Themed Environment Fabrication",
    copy: "See how creative intent is translated into coordinated, buildable components for physical environments.",
    href: "/services/themed-environment-fabrication"
  },
  {
    eyebrow: "Capability",
    title: "CNC Foam & Polyurethane Machining",
    copy: "Review our wider EPS, XPS, and polyurethane machining capabilities for custom physical production.",
    href: "/services/cnc-foam-polyurethane-machining"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "Artificial Rock & Organic Forms",
    copy: "Browse public work across artificial rockwork, naturalistic surfaces, and organic scenic fabrication.",
    href: "/works/artificial-rock-organic-forms"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
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
          name: "Modular Artificial Rock Concert Environment",
          item: pageUrl
        }
      ]
    },
    {
      "@type": "CreativeWork",
      "@id": pageUrl,
      url: pageUrl,
      name: "Modular Artificial Rock Concert Environment",
      headline: "Modular Artificial Rock Concert Environment",
      description: pageDescription,
      genre: "Completed fabrication case study",
      image: `${siteUrl}${heroImage}`,
      creator: {
        "@id": `${siteUrl}/#organization`
      },
      provider: {
        "@id": `${siteUrl}/#organization`
      },
      mainEntityOfPage: pageUrl,
      about: [
        "Scenic fabrication",
        "Modular EPS foam fabrication",
        "Artificial-rock surface finishing",
        "Event environment fabrication"
      ]
    }
  ]
};

export default function ModularArtificialRockConcertEnvironmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/works"
            className="text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
          >
            &larr; Works
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Completed Fabrication Case Study
              </p>
              <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
                Modular Artificial Rock Concert Environment
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
                Ardıç fabricated a large scenic concert and event environment as realistic
                artificial rockwork, produced in transportable EPS foam sections and prepared for
                assembly at the venue.
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-ink/55">
                This case study documents the completed scenic fabrication scope: modular workshop
                production, surface development, finishing, transport preparation, and the assembled
                environment in use.
              </p>
            </div>

            <figure>
              <Image
                src={heroImage}
                alt="Ardıç modular artificial-rock concert environment with a continuous textured surface in its completed setting"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="h-auto w-full border border-ink/10 bg-ink shadow-soft"
              />
              <figcaption className="mt-4 text-xs font-semibold uppercase leading-6 tracking-brand text-ink/45">
                Completed environment · Modular artificial-rock surface
              </figcaption>
            </figure>
          </div>

          <dl className="mt-14 grid gap-px bg-ink/10 md:grid-cols-3">
            {projectFacts.map((fact) => (
              <div key={fact.label} className="bg-porcelain p-6 md:p-8">
                <dt className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {fact.label}
                </dt>
                <dd className="mt-4 font-display text-2xl leading-tight text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Project Overview
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              A scenic environment designed to read as one continuous formation.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              The completed work establishes an oversized rock platform and facade within a live
              event setting. Ardıç&apos;s scope centered on the physical scenic environment: shaping
              the main volumes, developing the artificial-rock surface, finishing the modules, and
              preparing the sections for venue assembly.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-ink/55">
              The public photographs show the relationship between workshop production and the
              final assembled form without attributing the surrounding event production to Ardıç.
            </p>
          </div>

          <figure>
            <Image
              src={`${imageBase}/concert-rock-environment-arena-overview.jpeg`}
              alt="Complete scale of the Ardıç modular artificial-rock environment assembled within a large event setting"
              width={1023}
              height={1537}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full border border-ink/10 bg-ink shadow-soft"
            />
            <figcaption className="mt-4 text-sm leading-7 text-ink/50">
              The arena overview shows the complete scale of the assembled environment and the
              continuity achieved across its modular rockwork.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-ink/10 lg:grid-cols-2">
            <article className="bg-porcelain p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Fabrication Challenge
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Oversized presence without a fragmented visual result.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-ink/65">
                The environment needed to appear as a single, terrain-like construction after
                assembly. Workshop production, transport, and venue handling also required the
                work to be divided into manageable sections. The fabrication challenge was to
                preserve the visual mass and rock character while planning for those practical
                stages.
              </p>
            </article>

            <article className="bg-porcelain p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Modular Production Strategy
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Sectioned for handling. Coordinated as one environment.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-ink/65">
                The scenic form was produced as coordinated modules sized for workshop handling and
                transport. Surface direction, edge character, and adjoining faces were developed
                with the final assembled reading in mind, allowing separate sections to establish
                one continuous rock environment on site.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Workshop Evidence
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                The modular rockwork during production.
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-porcelain/65">
              Workshop photographs record the same stratified rock language, broken edge profiles,
              and modular section depth visible in the completed environment. They show the scenic
              surfaces at different stages of shaping and finish development.
            </p>
          </div>

          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
            <figure>
              <Image
                src="/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-03.jpeg"
                alt="Ardıç workshop view of modular artificial-rock forms showing coordinated surface color and texture"
                width={1500}
                height={2000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full border border-porcelain/15 bg-porcelain/5"
              />
              <figcaption className="mt-4 text-sm leading-7 text-porcelain/55">
                Workshop modules show the layered rock texture and adjoining scenic faces during
                production before venue assembly.
              </figcaption>
            </figure>

            <figure>
              <Image
                src="/projects/portfolio/artificial-rock-organic-forms/artificial-rock-organic-forms-04.jpeg"
                alt="Ardıç workshop production view of modular EPS rockwork with carved strata and developing surface texture"
                width={1500}
                height={2000}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full border border-porcelain/15 bg-porcelain/5"
              />
              <figcaption className="mt-4 text-sm leading-7 text-porcelain/55">
                A production-stage view reveals the EPS core, module depth, carved rock planes, and
                developing scenic texture.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px bg-ink/10 lg:grid-cols-2">
          <article className="bg-porcelain p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              EPS Foam Scenic Fabrication
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Lightweight volume for an oversized scenic form.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              The main scenic volumes were formed in EPS foam, a lightweight medium suited to
              establishing large geometry in manageable sections. Workshop shaping established the
              broad mass, ledges, and rock planes before the modules moved into detailed surface
              development.
            </p>
          </article>

          <article className="bg-porcelain p-7 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Artificial-Rock Texture and Finishing
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Surface depth developed for changing light and viewing distance.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Broad fractures, layered strata, recessed fissures, and irregular edges were shaped
              across the modules to establish a convincing rock profile. Textured surface
              development and painted scenic finishing then gave the form visual depth across close
              views, distant views, and changing event light.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Transport and On-Site Assembly
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Prepared as sections. Assembled as a complete environment.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Completed modules were prepared as separate sections for transport and subsequent
              venue assembly. Once assembled on site, the adjoining sections read as one continuous
              rock facade and platform while retaining the practical handling logic required by an
              environment of this scale.
            </p>
          </div>

          <figure>
            <Image
              src={`${imageBase}/concert-rock-environment-side-view.jpeg`}
              alt="Side view of Ardıç modular rockwork showing the depth and continuous artificial-stone surface"
              width={1121}
              height={1403}
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="h-auto w-full border border-ink/10 bg-ink shadow-soft"
            />
            <figcaption className="mt-4 text-sm leading-7 text-ink/50">
              The side view makes the platform depth, facade profile, and continuous surface finish
              legible within the completed setting.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Completed Environment
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Scenic rockwork operating at event scale.
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-ink/60">
              The completed views demonstrate how the fabricated rockwork holds its form across the
              wider concert and audience context while retaining visible texture in closer
              performance views.
            </p>
          </div>

          <figure className="mt-12">
            <Image
              src={`${imageBase}/concert-rock-environment-full-stage.jpeg`}
              alt="Ardıç fabricated artificial-rock concert environment extending through the performance and audience setting"
              width={1086}
              height={1448}
              sizes="100vw"
              className="mx-auto h-auto w-full max-w-5xl border border-ink/10 bg-ink shadow-soft"
            />
            <figcaption className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-ink/50">
              The full-stage view places the modular scenic environment within the complete event
              and audience context.
            </figcaption>
          </figure>

          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
            <figure>
              <Image
                src={`${imageBase}/concert-rock-environment-performance-detail-01.jpeg`}
                alt="Performance detail across the Ardıç artificial-rock environment showing carved texture and finished rock edges"
                width={900}
                height={1600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full border border-ink/10 bg-ink"
              />
              <figcaption className="mt-4 text-sm leading-7 text-ink/50">
                Supporting detail showing the carved edge profile and surface response under red
                event lighting.
              </figcaption>
            </figure>

            <figure>
              <Image
                src={`${imageBase}/concert-rock-environment-performance-detail-02.jpeg`}
                alt="Close view of the completed Ardıç rockwork surface under event lighting"
                width={1122}
                height={1402}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="h-auto w-full border border-ink/10 bg-ink"
              />
              <figcaption className="mt-4 text-sm leading-7 text-ink/50">
                Supporting detail showing finished surface variation across the completed scenic
                platform.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              What This Project Demonstrates
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Production decisions aligned around the final environment.
            </h2>
          </div>

          <ul className="grid gap-px bg-porcelain/15 sm:grid-cols-2">
            {projectOutcomes.map((outcome, index) => (
              <li key={outcome} className="flex min-h-28 items-center gap-5 bg-ink p-6">
                <span className="font-display text-2xl text-bronze/85">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-porcelain">
                  {outcome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Related Capabilities
          </p>
          <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
            Continue through the relevant services and public work.
          </h2>

          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {relatedLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-64 flex-col bg-porcelain p-7 transition hover:bg-white md:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {item.eyebrow}
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{item.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">{item.copy}</p>
                <span className="mt-auto pt-8 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                  Explore &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-porcelain px-6 py-10 shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Confidential Projects · NDA Protected
              </p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                Our public work is a selective view of wider production experience.
              </h2>
            </div>
            <div className="border-l border-ink/10 pl-0 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                Much of our work is confidential. Many commissioned projects are protected by
                non-disclosure agreements, so our public portfolio represents only a limited
                selection of our actual production capabilities.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Private project references and relevant production experience can be discussed
                where contractually permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl bg-ink px-7 py-14 text-porcelain md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Start a Conversation
              </p>
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Planning a large-scale scenic environment?
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Share your concept, reference material, intended setting, and delivery requirements.
                We can review the fabrication scope and discuss an appropriate production approach.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
