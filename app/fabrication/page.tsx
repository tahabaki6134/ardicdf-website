import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pageUrl = `${siteUrl}/fabrication`;
const pageTitle = "Multi-Material Fabrication, Composites, CNC & 3D Printing | Ardıç";
const pageDescription =
  "Multi-material fabrication in Istanbul for international projects: CNC machining, EPS/XPS and polyurethane, fiberglass/GRP, molds and casting, carbon fiber lamination, large-format 3D printing and custom woodworking.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle
  },
  description: pageDescription,
  alternates: {
    canonical: "/fabrication"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/fabrication",
    type: "website",
    images: [
      {
        url: "/home/production-columns.png",
        alt: "Multi-material fabrication and decorative architectural production at Ardıç"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/home/production-columns.png"]
  }
};

const capabilities = [
  {
    number: "01",
    title: "CNC Fabrication",
    copy: "CNC routing and machining for EPS/XPS, polyurethane, wood, and panel materials, producing patterns, masters, reliefs, molds, and custom components."
  },
  {
    number: "02",
    title: "EPS / XPS Foam Fabrication",
    copy: "Large sculptural forms, scenic components, architectural elements, and organic geometry produced as lightweight, modular assemblies."
  },
  {
    number: "03",
    title: "Polyurethane Machining & Casting",
    copy: "Machined polyurethane masters and parts, plus polyurethane casting for molds, prototypes, custom forms, and production components."
  },
  {
    number: "04",
    title: "Mold Making & Production Tooling",
    copy: "Master and plug production, production molds, and repeatable part workflows for composite, polyester, fiberglass, and polyurethane applications."
  },
  {
    number: "05",
    title: "Polyester & Fiberglass / GRP Fabrication",
    copy: "Polyester and fiberglass / GRP mold production, composite lamination, polyester casting, fiberglass part reproduction, custom shells, and composite coatings."
  },
  {
    number: "06",
    title: "Carbon Fiber Lamination & Composite Surface Work",
    copy: "Carbon fiber lamination and composite surface work integrated into custom forms and specialized composite fabrication where appropriate."
  },
  {
    number: "07",
    title: "Industrial & Prototype Fabrication",
    copy: "Prototype bodies, housings, molds, masters, composite shells, and one-off development components for engineering, mobility, marine, UAV, and USV projects."
  },
  {
    number: "08",
    title: "Large-Format 3D Printing",
    copy: "Prototypes, tooling patterns, mold masters, technical parts, architectural components, display objects, and modular large custom forms."
  },
  {
    number: "09",
    title: "Custom Wood Fabrication & CNC Woodworking",
    copy: "Solid wood, MDF, plywood, and sheet materials shaped into CNC-routed components, timber substructures, custom furniture, displays, scenic elements, molds, patterns, masters, and hybrid assemblies with foam, composites, or 3D prints."
  },
  {
    number: "10",
    title: "Sculpture & Scenic Fabrication",
    copy: "Character figures, organic forms, props, and architectural features developed through sculpting, coating, painting, and detailed hand finishing."
  }
];

const workflow = [
  {
    number: "01",
    title: "Design & Engineering Development"
  },
  {
    number: "02",
    title: "Digital Modeling & CNC Production"
  },
  {
    number: "03",
    title: "Masters, Molds & Form Making"
  },
  {
    number: "04",
    title: "Fabrication, Casting & Lamination"
  },
  {
    number: "05",
    title: "Finishing, Painting & Assembly"
  },
  {
    number: "06",
    title: "Packing & Installation Preparation"
  }
];

const materialCriteria = [
  "Geometry",
  "Scale",
  "Weight",
  "Finish",
  "Quantity",
  "Transport",
  "Assembly",
  "Intended Use"
];

const printingApplications = [
  "Prototypes",
  "Molds & Mold Masters",
  "Tooling Patterns",
  "Architectural Components",
  "Sculptural Forms",
  "Technical Components",
  "Display Objects",
  "Large Custom Forms",
  "Final Production Components Where Appropriate"
];

const infrastructure = [
  "CNC Routing & Polyurethane Machining",
  "EPS / XPS Processing Facility",
  "Composite & Fiberglass / GRP Fabrication",
  "Mold Making & Production Tooling",
  "Polyester & Polyurethane Casting",
  "Large-Format 3D Printing Lab",
  "Custom Wood Fabrication",
  "Sculpture & Scenic Workshop",
  "Finishing & Surface Treatment",
  "Installation & Assembly Team"
];

const projectTypes = [
  {
    title: "Industrial Prototypes",
    copy: "One-off bodies, housings, and development components for technical evaluation."
  },
  {
    title: "Product Development",
    copy: "Physical models, masters, prototypes, and production-ready custom forms."
  },
  {
    title: "Custom Composite Components",
    copy: "Fiberglass, polyester, polyurethane, and laminated composite parts made to brief."
  },
  {
    title: "Marine / USV Projects",
    copy: "Prototype bodies, molds, shells, and fabricated components for marine and Unmanned Surface Vehicle development."
  },
  {
    title: "UAV Prototype Components",
    copy: "Molds, masters, housings, and custom components for Unmanned Aerial Vehicle development projects."
  },
  {
    title: "Large Custom Objects",
    copy: "Oversized forms developed through modular production, reinforcement, and finishing."
  },
  {
    title: "Exhibitions & Brand Installations",
    copy: "Display structures, branded objects, and installation-ready experiential elements."
  },
  {
    title: "Architectural Fabrication",
    copy: "Reliefs, surfaces, ornaments, columns, and custom architectural components."
  },
  {
    title: "Themed Environments",
    copy: "Scenic elements, sculptures, props, and spatial features for immersive settings."
  },
  {
    title: "Molds & Production Tooling",
    copy: "Masters, plugs, molds, and tooling systems for repeatable component production."
  }
];

const scaleStats = [
  "12+ Years of Manufacturing Experience",
  "600 m² Indoor Facility",
  "400 m² Outdoor Production Area",
  "6 Industrial 3D Printers",
  "Multiple CNC Production Systems",
  "In-House Sculpture Team",
  "End-to-End Project Delivery"
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${pageUrl}/#service`,
  name: "Multi-Material Fabrication",
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
    "CNC fabrication",
    "EPS/XPS fabrication",
    "Polyurethane machining and casting",
    "Mold making",
    "Polyester and fiberglass / GRP fabrication",
    "Polyester molding and casting",
    "Carbon fiber lamination and composite surface work",
    "Large-format 3D printing",
    "Custom woodworking",
    "Prototype fabrication",
    "Multi-material fabrication"
  ]
};

export default function FabricationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Fabrication
            </p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Where Ideas Become Built Objects.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              As an EPSLAM company, Ardıç coordinates CNC production, EPS/XPS and polyurethane
              machining, mold making, composite fabrication, large-format 3D printing,
              woodworking, finishing, painting, assembly, and installation preparation under
              one roof.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-ink/55">
              From our Istanbul production base, we support international projects with
              material-led fabrication strategies and modular components prepared for transport
              and site assembly.
            </p>
            <div className="mt-9 h-px w-16 bg-bronze" />
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[560px]">
            <Image
              src="/home/production-columns.png"
              alt="Fabrication workshop with decorative architectural column production"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "52% 50%" }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Production Capabilities
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Integrated processes for complex physical work.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Backed by EPSLAM&apos;s fabrication infrastructure and long-term family production
              experience, Ardıç combines digital manufacturing, mold and composite workflows,
              skilled handwork, and controlled finishing for international project teams.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="flex min-h-80 flex-col bg-porcelain p-7 md:p-8"
              >
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Multi-Material Fabrication
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Different materials. One coordinated production workflow.
            </h2>
            <p className="mt-7 max-w-2xl leading-8 text-porcelain/68">
              Ardıç is not limited to one manufacturing method. Depending on the project, we
              combine CNC-machined EPS/XPS, polyurethane, fiberglass / GRP, polyester, carbon
              fiber lamination, large-format 3D printing, wood fabrication, molds, casting,
              coatings, and hand finishing within a coordinated production workflow.
            </p>
          </div>

          <div>
            <p className="max-w-xl text-lg leading-9 text-porcelain/72">
              The production method and material system are selected according to the physical,
              visual, and delivery requirements of each component.
            </p>
            <ul className="mt-9 grid gap-px bg-porcelain/15 sm:grid-cols-2">
              {materialCriteria.map((criterion, index) => (
                <li key={criterion} className="flex items-center gap-5 bg-ink p-5">
                  <span className="font-display text-2xl text-bronze/80">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-porcelain">
                    {criterion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Production Workflow
            </p>
            <h2 className="mt-7 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
              A controlled path from idea to installation.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-ink/60">
              Each phase is developed with geometry, material behavior, finish, quantity,
              transport, assembly sequence, and site conditions in mind.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.number} className="min-h-48 bg-porcelain p-6">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {step.number}
                </p>
                <h3 className="mt-8 max-w-xs text-lg font-semibold leading-tight text-ink">
                  {step.title}
                </h3>
                <div className="mt-6 h-px w-12 bg-bronze" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Additive Manufacturing
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Large-Format Industrial 3D Printing
              </h2>
              <p className="mt-7 max-w-2xl leading-8 text-ink/65">
                Our in-house capacity includes two 80×80×80 cm printers, three 40×40×40 cm
                printers, and one 100×100×100 cm printer. We work with PLA, PETG, ASA, ABS, TPU,
                project-specific filament systems, composite-filled materials where appropriate,
                and a broad range of standard and engineering thermoplastics selected according
                to project requirements.
              </p>
              <div className="mt-8 border-l-2 border-bronze bg-porcelain px-6 py-5">
                <p className="font-semibold leading-8 text-ink">
                  Large objects can be digitally divided, printed in modular sections, assembled,
                  reinforced, and surface-finished, allowing production far beyond the build
                  volume of a single printer.
                </p>
              </div>
            </div>

            <div>
              <div className="grid gap-px bg-ink/10 sm:grid-cols-3">
                {[
                  { value: "2", label: "80×80×80 cm Printers" },
                  { value: "3", label: "40×40×40 cm Printers" },
                  { value: "1", label: "100×100×100 cm Printer" }
                ].map((item) => (
                  <article key={item.label} className="flex min-h-52 flex-col bg-porcelain p-7">
                    <p className="font-display text-5xl leading-none text-bronze">{item.value}</p>
                    <div className="mt-8 h-px w-12 bg-bronze" />
                    <h3 className="mt-6 text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-ink">
                      {item.label}
                    </h3>
                  </article>
                ))}
              </div>

              <ul className="mt-px grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
                {printingApplications.map((application) => (
                  <li
                    key={application}
                    className="flex min-h-20 items-center bg-porcelain p-5 text-sm font-semibold leading-6 text-ink/75"
                  >
                    {application}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden border border-bronze/20 bg-porcelain/5 shadow-soft">
            <Image
              src="/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
              alt="CNC-shaped production component in the Ardıç fabrication workshop"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover brightness-90 contrast-110 saturate-110"
              style={{ objectPosition: "50% 42%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-porcelain/10" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Integrated Facility
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Workshop Infrastructure
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              Ardıç operates through EPSLAM&apos;s integrated fabrication infrastructure, where
              machining, mold making, composite work, additive manufacturing, woodworking,
              sculpture, surface finishing, and assembly are coordinated under one roof.
            </p>
            <div className="mt-10 grid gap-px bg-porcelain/12 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <div key={item} className="bg-ink p-5">
                  <p className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-porcelain">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Project Types
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Projects We Build
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Our production workflows support creative, architectural, commercial, and
              specialized engineering briefs that require custom forms, controlled surfaces,
              composite shells, tooling, and assembly-ready components.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {projectTypes.map((type) => (
              <article key={type.title} className="flex min-h-64 flex-col bg-porcelain p-7">
                <h3 className="font-display text-2xl leading-tight text-ink">{type.title}</h3>
                <div className="mt-6 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{type.copy}</p>
              </article>
            ))}
          </div>

          <Link
            href="/services/themed-environment-fabrication"
            className="mt-10 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
          >
            Explore Themed Environment Fabrication →
          </Link>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Confidential Projects · NDA Protected
              </p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                Our public work represents only part of our production experience.
              </h2>
            </div>
            <div className="border-l border-ink/10 pl-0 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                A significant portion of our commissioned fabrication work is protected by
                confidentiality agreements and cannot be shown publicly. The projects and
                production examples available on this website therefore represent only a
                limited selection of our actual capabilities.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Relevant experience may be discussed where contractually permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Fabrication at Scale
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Built in Istanbul. Prepared for international projects.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              From concept models to full-scale installations, Ardıç supports custom objects,
              architectural surfaces, composite components, sculptural works, and site-ready
              environments. Large elements can be divided into coordinated modules for
              production, packing, transport, reinforcement, and site assembly.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {scaleStats.map((stat, index) => (
              <article key={stat} className="flex min-h-48 flex-col bg-porcelain p-7 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 font-display text-3xl leading-tight text-ink">{stat}</h3>
                <div className="mt-auto pt-7">
                  <div className="h-px w-12 bg-bronze" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-ink/10 bg-ink lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px]">
            <Image
              src="/services/sculpture-elephant-wide.jpeg"
              alt="Large-scale sculptural fabrication for memorable environments"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-ink/35" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Start Production
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Let&apos;s Build Something Memorable.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-porcelain/70">
              Bring your design, prototype, mold, composite component, custom object, or
              environment into production with a team that understands both design intent and
              workshop execution.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
