import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/services/composite-fabrication";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle =
  "Composite Fabrication & Mold Making | GRP, Carbon Fiber & Tooling | Ardıç";
const pageDescription =
  "Custom composite fabrication and mold making in Istanbul for international projects. GRP/fiberglass, polyester molds and casting, carbon fiber lamination, polyurethane, masters, plugs and tooling.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    type: "website",
    images: [
      {
        url: "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg",
        alt: "CNC-produced master form in the Ardıç fabrication workshop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
    ]
  }
};

const processInputs = [
  "Digital models",
  "CNC-machined masters",
  "EPS / XPS masters",
  "Polyurethane masters",
  "3D-printed masters",
  "Wood / MDF patterns",
  "Plug preparation",
  "Mold making",
  "GRP lamination",
  "Polyester casting",
  "Trimming & assembly",
  "Coating & finishing"
];

const selectionCriteria = [
  "Geometry",
  "Final Dimensions",
  "Required Surface",
  "Weight",
  "Repeat Quantity",
  "Transport",
  "Assembly",
  "Intended Application"
];

const capabilities = [
  {
    number: "01",
    title: "Mold Making & Production Tooling",
    copy: "Masters, plugs, patterns, and production molds developed for repeatable custom components."
  },
  {
    number: "02",
    title: "Fiberglass / GRP Fabrication",
    copy: "Custom GRP shells, molded forms, fabricated components, composite laminations, and fiberglass part reproduction."
  },
  {
    number: "03",
    title: "Polyester Molding & Casting",
    copy: "Polyester molds and cast or reproduced components for custom fabrication applications."
  },
  {
    number: "04",
    title: "Carbon Fiber Lamination",
    copy: "Carbon fiber lamination and composite surface work for custom parts and specialized forms where appropriate."
  },
  {
    number: "05",
    title: "Polyurethane Machining & Casting",
    copy: "CNC-machined polyurethane masters, prototype forms, tooling elements, custom parts, and polyurethane casting."
  },
  {
    number: "06",
    title: "Masters, Plugs & Patterns",
    copy: "Production masters created through CNC machining, polyurethane, EPS/XPS, large-format 3D printing, wood / MDF, or hybrid construction depending on the project."
  },
  {
    number: "07",
    title: "Prototype & Custom Bodies",
    copy: "Prototype shells, housings, large custom forms, and one-off fabricated bodies for industrial, mobility, marine, and specialist development applications."
  },
  {
    number: "08",
    title: "Multi-Material Fabrication",
    copy: "Composite workflows coordinated with CNC foam, polyurethane, wood structures, 3D-printed components, coatings, and hand-finished surfaces."
  }
];

const workflow = [
  {
    number: "01",
    title: "Design Review",
    copy: "Review geometry, dimensions, finish, quantity, transport, assembly, and intended use."
  },
  {
    number: "02",
    title: "Master / Plug Production",
    copy: "Produce the master using CNC machining, polyurethane, EPS/XPS, 3D printing, wood, or hybrid fabrication as appropriate."
  },
  {
    number: "03",
    title: "Mold Development",
    copy: "Prepare the mold system required for the selected fabrication method and repeat quantity."
  },
  {
    number: "04",
    title: "Lamination / Casting",
    copy: "Produce the part through the appropriate fiberglass / GRP, polyester, polyurethane, or composite workflow."
  },
  {
    number: "05",
    title: "Trimming & Assembly",
    copy: "Trim, join, reinforce, or assemble produced sections where the component requires it."
  },
  {
    number: "06",
    title: "Surface Finishing",
    copy: "Prepare coatings, sanding, finishing, and painting according to the project requirements."
  },
  {
    number: "07",
    title: "Modular Preparation",
    copy: "Coordinate large sections for workshop assembly, packing, transport, and site integration where appropriate."
  }
];

const applications = [
  {
    title: "Industrial Prototypes",
    copy: "Prototype forms, bodies, masters, molds, and development components."
  },
  {
    title: "Custom Product Bodies",
    copy: "One-off housings, shells, and fabricated product forms made to project geometry."
  },
  {
    title: "Marine Prototype Components",
    copy: "Custom prototype molds, shells, bodies, and development components for marine applications."
  },
  {
    title: "USV Prototype Bodies & Components",
    copy: "Unmanned Surface Vehicle prototype bodies, molds, shells, and custom development components."
  },
  {
    title: "UAV Prototype Molds & Components",
    copy: "Unmanned Aerial Vehicle prototype molds and custom fabricated development components."
  },
  {
    title: "Architectural Composite Forms",
    copy: "Custom shells, surfaces, reliefs, and formed architectural components."
  },
  {
    title: "Themed & Scenic Components",
    copy: "Durable scenic forms, props, surfaces, and installation-ready elements."
  },
  {
    title: "Exhibitions & Brand Installations",
    copy: "Branded objects, display bodies, custom forms, and experiential components."
  },
  {
    title: "Large Custom Objects",
    copy: "Modular fabricated forms assembled and finished as coordinated final objects."
  },
  {
    title: "Sculptural Composite Forms",
    copy: "Sculptural shells and custom forms prepared through mold, lamination, and finishing workflows."
  },
  {
    title: "Molds & Production Tooling",
    copy: "Masters, plugs, patterns, molds, and tooling for repeatable custom-part production."
  },
  {
    title: "Custom Housings & Shells",
    copy: "Specialized housings, prototype shells, and one-off composite bodies."
  }
];

const relatedCapabilities = [
  {
    eyebrow: "Integrated Production",
    title: "Multi-Material Fabrication",
    copy: "Explore Ardıç's wider CNC, foam, polyurethane, composite, 3D-printing, woodworking, finishing, and assembly capabilities.",
    href: "/fabrication"
  },
  {
    eyebrow: "Scenic Production",
    title: "Themed Environment Fabrication",
    copy: "International fabrication support for scenic environments, sculptural features, artificial forms, props, and architectural decor.",
    href: "/services/themed-environment-fabrication"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "Molds & Composite Production",
    copy: "View selected public production examples connected to molds, custom forms, finishing, and repeatable components.",
    href: "/works/molds-composite-production"
  },
  {
    eyebrow: "Workshop Process",
    title: "CNC Manufacturing Processes",
    copy: "See production-stage work across CNC-shaped forms, foam components, masters, and fabrication preparation.",
    href: "/works/cnc-manufacturing-processes"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
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
          name: "Services",
          item: `${siteUrl}/services`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Composite Fabrication",
          item: pageUrl
        }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Composite Fabrication & Mold Making",
      url: pageUrl,
      description: pageDescription,
      provider: {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Ardıç Design & Fabrication",
        url: siteUrl
      },
      areaServed: "Worldwide",
      serviceType: [
        "Composite fabrication",
        "Mold making",
        "Fiberglass / GRP fabrication",
        "Polyester molding and casting",
        "Carbon fiber lamination",
        "Polyurethane machining and casting",
        "Masters and plugs",
        "Prototype fabrication",
        "Production tooling"
      ]
    }
  ]
};

export default function CompositeFabricationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Composites · Molds · Tooling
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Composite Fabrication &amp; Mold Making for Custom Projects
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design &amp; Fabrication combines fiberglass / GRP fabrication, polyester
              molding and casting, carbon fiber lamination, mold making, CNC-produced masters,
              polyurethane processing, and multi-material fabrication for custom international
              projects.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ink/55">
              From our Istanbul production facility, we develop masters, plugs, molds, composite
              shells, prototype bodies, and finished custom components according to the geometry,
              scale, finish, quantity, and intended use of each project.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/fabrication"
                className="inline-flex justify-center border border-ink/25 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze"
              >
                View Our Fabrication Capabilities
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[620px]">
            <Image
              src="/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
              alt="CNC-produced master form in the Ardıç fabrication workshop"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover brightness-95 contrast-105"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-porcelain/10" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Custom Composite Fabrication
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              From master model to finished component.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              A project may begin with a digital model or an existing reference and move through
              one or more master, plug, mold, lamination, casting, trimming, assembly, coating,
              surface-finishing, and painting stages. The route is selected for the specific
              component rather than applying every process to every project.
            </p>
          </div>

          <div>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2" aria-label="Composite fabrication process options">
              {processInputs.map((item, index) => (
                <li key={item} className="flex min-h-20 items-center gap-5 bg-porcelain p-5">
                  <span className="font-display text-2xl text-bronze/80">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-7 max-w-2xl leading-8 text-ink/60">
              Geometry, final dimensions, required surface, weight, repeat quantity, transport,
              assembly, and intended application guide the material and process selection.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Core Capabilities
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Flexible processes for custom parts and forms.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Mold, tooling, composite, and prototype workflows can be used independently or
              coordinated as a hybrid production route according to the project requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article key={capability.number} className="flex min-h-80 flex-col bg-porcelain p-7 md:p-8">
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {capability.number}
                </p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-ink">
                  {capability.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-porcelain/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Mold-to-Part Workflow
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                One coordinated path from geometry to finished form.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-porcelain/65">
              The sequence is adapted to the selected material, component geometry, finish,
              quantity, assembly logic, and transport requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-porcelain/15 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <article key={step.number} className="flex min-h-72 flex-col bg-ink p-7">
                <p className="font-display text-4xl leading-none text-bronze/85">{step.number}</p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-porcelain">
                  {step.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-porcelain/60">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Fabrication at Scale
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Complex forms are not limited to a single machine or mold size.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-ink/70">
              Large forms can be digitally divided into manageable sections and produced using
              a combination of CNC machining, mold systems, 3D printing, composite fabrication,
              and internal substructures. Sections can then be assembled, reinforced, and
              surface-finished as a coordinated final object.
            </p>
            <div className="mt-8 border-l-2 border-bronze bg-white/45 px-6 py-5">
              <p className="font-semibold leading-8 text-ink">
                Production scale is approached through modular engineering and fabrication
                rather than the working envelope of a single machine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Material &amp; Process Selection
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              The process follows the project — not the other way around.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Ardıç works across multiple materials and fabrication methods. A component may use
              one process or combine CNC-machined masters, mold systems, composites,
              polyurethane, wood structures, 3D-printed parts, coatings, and hand finishing when
              that combination best serves the brief.
            </p>
          </div>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {selectionCriteria.map((criterion, index) => (
              <li key={criterion} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.11em] text-ink">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Applications
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Custom fabrication across creative and specialist projects.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Applications are developed as prototype, mold, tooling, shell, or custom
              fabrication scopes according to the documented project brief and intended use.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((application) => (
              <article key={application.title} className="flex min-h-60 flex-col bg-porcelain p-7">
                <h3 className="font-display text-2xl leading-tight text-ink">
                  {application.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{application.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              International Fabrication
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Produced in Istanbul. Prepared for international projects.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-porcelain/70">
              Our Istanbul production base supports digital project review, production planning,
              modular fabrication, transport-oriented component development, and packing or
              assembly preparation for international project teams.
            </p>
            <p className="mt-6 leading-8 text-porcelain/60">
              We communicate with teams working across Europe, the United Kingdom, Switzerland,
              the Middle East, and worldwide while keeping fabrication and workshop coordination
              centered in Istanbul.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-porcelain/15 pt-8 text-xs font-semibold uppercase tracking-brand text-bronze">
              <span>Europe</span>
              <span>United Kingdom</span>
              <span>Switzerland</span>
              <span>Middle East</span>
              <span>Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Confidential Projects · NDA Protected
              </p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                Some of our most advanced fabrication work cannot be shown publicly.
              </h2>
            </div>
            <div className="lg:border-l lg:border-ink/10 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                A significant portion of our custom mold, composite, prototype, and specialist
                fabrication work is protected by confidentiality agreements. For this reason,
                the projects shown publicly represent only a limited selection of our actual
                production experience.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Relevant experience may be discussed where contractually permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Related Capabilities
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Continue through our production capabilities and public work.
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {relatedCapabilities.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-64 flex-col bg-porcelain p-7 transition hover:bg-white md:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {item.eyebrow}
                </p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-ink md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">{item.copy}</p>
                <span className="mt-auto pt-8 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl border border-ink/10 bg-ink px-7 py-14 text-porcelain md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Start a Project
              </p>
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Need a mold, prototype, or custom composite component?
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Send us your drawings, 3D model, dimensions, quantity, and intended application.
                We can review the geometry and discuss a suitable fabrication route.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Send Your Project Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
