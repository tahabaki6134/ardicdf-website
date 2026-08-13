import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/services/cnc-foam-polyurethane-machining";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle = "CNC Foam & Polyurethane Machining | EPS, XPS & Masters | Ardıç";
const pageDescription =
  "CNC foam and polyurethane machining in Istanbul for international projects. EPS/XPS forms, polyurethane masters, plugs, patterns, molds, sculptures and architectural components.";
const heroImage =
  "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pagePath },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pagePath,
    type: "website",
    images: [
      {
        url: heroImage,
        alt: "Large CNC-shaped master form in the Ardıç fabrication workshop"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage]
  }
};

const digitalInputs = [
  "3D Models",
  "CAD Geometry",
  "Client Drawings",
  "Reference Geometry",
  "Production-Ready Digital Files",
  "Models Refined for Fabrication"
];

const productionOutputs = [
  "Finished Forms",
  "Production Masters",
  "Molds",
  "Plugs",
  "Patterns",
  "Prototype Geometry",
  "Sculptural Bases",
  "Architectural Elements",
  "Composite-Workflow Forms"
];

const materialCapabilities = [
  {
    number: "01",
    title: "EPS CNC Machining",
    copy: "Large lightweight geometry for sculptures, scenic forms, architectural components, organic surfaces, large-volume masters, and modular custom objects."
  },
  {
    number: "02",
    title: "XPS CNC Machining",
    copy: "Detailed rigid-foam forms for models, masters, sculptural or architectural details, patterns, and custom project geometry."
  },
  {
    number: "03",
    title: "Polyurethane Machining",
    copy: "CNC-machined polyurethane for masters, tooling elements, prototypes, production forms, custom geometry, and mold-making workflows."
  },
  {
    number: "04",
    title: "CNC Wood & Panel Fabrication",
    copy: "MDF, plywood, and wood-based sheet materials for patterns, substructures, furniture elements, molds, masters, displays, and architectural or scenic components."
  },
  {
    number: "05",
    title: "Masters, Plugs & Patterns",
    copy: "Accurate physical geometry prepared to continue into mold making, fiberglass / GRP, polyester, polyurethane casting, or carbon fiber lamination where appropriate."
  },
  {
    number: "06",
    title: "Sculptural & Architectural Geometry",
    copy: "Reliefs, ornaments, large forms, organic surfaces, decorative elements, scenic components, and custom spatial features."
  }
];

const scaleFactors = [
  "Geometry",
  "Material",
  "Machining Strategy",
  "Assembly Logic",
  "Transport",
  "Surface Finishing"
];

const sectionProcesses = [
  "Machined",
  "Aligned",
  "Joined",
  "Bonded",
  "Reinforced",
  "Coated",
  "Sculpturally Refined",
  "Assembled",
  "Painted",
  "Finished"
];

const masterForms = [
  "Masters",
  "Plugs",
  "Patterns",
  "Prototype Bodies",
  "Positive Forms",
  "Tooling Geometry"
];

const compositeProcesses = [
  "Mold Making",
  "Fiberglass / GRP",
  "Polyester Molding & Casting",
  "Polyurethane Casting",
  "Carbon Fiber Lamination",
  "Composite Surface Work"
];

const hybridProcesses = [
  "CNC EPS / XPS",
  "CNC Polyurethane",
  "Large-Format 3D Printing",
  "Wood Structures",
  "Molds",
  "Composites",
  "Hand Finishing"
];

const applications = [
  "Production Masters",
  "Mold Plugs",
  "Tooling Patterns",
  "Large Sculptural Forms",
  "Architectural Components",
  "Scenic & Themed Elements",
  "Organic Geometry",
  "Reliefs & Decorative Forms",
  "Industrial Prototypes",
  "Prototype Bodies",
  "Display & Exhibition Forms",
  "Composite Masters",
  "Custom Furniture / Wood Components",
  "Large Custom Objects"
];

const workflow = [
  {
    number: "01",
    title: "Project Review",
    copy: "Review geometry, dimensions, material, finish, and intended use."
  },
  {
    number: "02",
    title: "Digital Preparation",
    copy: "Prepare the model for production and define machining and sectioning logic."
  },
  {
    number: "03",
    title: "Material Selection",
    copy: "Select EPS, XPS, polyurethane, wood-based materials, or an alternative process as appropriate."
  },
  {
    number: "04",
    title: "CNC Production",
    copy: "Machine the required forms, sections, masters, or components."
  },
  {
    number: "05",
    title: "Assembly",
    copy: "Align and combine modular production sections where required."
  },
  {
    number: "06",
    title: "Surface Development",
    copy: "Refine, fill, coat, sand, or sculpt surfaces according to project requirements."
  },
  {
    number: "07",
    title: "Mold / Composite Integration",
    copy: "Move masters or plugs into mold, GRP, polyester, polyurethane, or composite workflows where required."
  },
  {
    number: "08",
    title: "Finishing & Project Preparation",
    copy: "Complete painting, finishing, packing, or assembly preparation according to project scope."
  }
];

const polyurethaneApplications = [
  "Masters",
  "Prototype Forms",
  "Patterns",
  "Tooling Elements",
  "Custom Components",
  "Mold-Related Production Forms"
];

const widerProcesses = [
  "Sculptural Refinement",
  "Internal Subassemblies Where Appropriate",
  "Fiberglass / GRP",
  "Polyester",
  "Polyurethane",
  "Carbon Fiber Lamination",
  "3D-Printed Additions",
  "Wood Elements",
  "Coatings",
  "Painting",
  "Finishing",
  "Assembly"
];

const relatedCapabilities = [
  {
    eyebrow: "Integrated Production",
    title: "Fabrication Capabilities",
    copy: "Explore Ardıç's wider CNC, foam, composite, additive, woodworking, finishing, and assembly capabilities.",
    href: "/fabrication"
  },
  {
    eyebrow: "Master-to-Part Production",
    title: "Composite Fabrication",
    copy: "Continue machined masters and plugs into molds, GRP, polyester, polyurethane, and composite workflows.",
    href: "/services/composite-fabrication"
  },
  {
    eyebrow: "Hybrid Digital Production",
    title: "Large-Format 3D Printing",
    copy: "Combine CNC machining with modular additive manufacturing for complex masters, parts, and large assemblies.",
    href: "/services/large-format-3d-printing"
  },
  {
    eyebrow: "Scenic Production",
    title: "Themed Environment Fabrication",
    copy: "International production for sculptural features, props, architectural decor, and immersive environments.",
    href: "/services/themed-environment-fabrication"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "CNC Manufacturing Processes",
    copy: "View public workshop stages across CNC-cut forms, foam models, reliefs, and shaped components.",
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
          name: "CNC Foam & Polyurethane Machining",
          item: pageUrl
        }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "CNC Foam & Polyurethane Machining",
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
        "CNC foam machining",
        "EPS CNC machining",
        "XPS CNC machining",
        "Polyurethane machining",
        "CNC routing",
        "Master model production",
        "Plug and pattern production",
        "Mold master fabrication",
        "Sculptural fabrication",
        "Architectural components",
        "Modular large-scale fabrication"
      ]
    }
  ]
};

export default function CncFoamPolyurethaneMachiningPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              CNC · Foam · Polyurethane
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              CNC Foam &amp; Polyurethane Machining for Large Custom Forms
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design &amp; Fabrication uses CNC machining to produce large EPS/XPS forms,
              polyurethane masters, architectural components, sculptural geometry, molds,
              plugs, patterns, and prototype forms for international fabrication projects.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ink/55">
              From our Istanbul production facility, digitally developed geometry can move
              directly into CNC production and then continue through assembly, coating, mold
              making, composite fabrication, painting, and finishing.
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
                View Fabrication Capabilities
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[620px]">
            <Image
              src={heroImage}
              alt="Large CNC-shaped master form in the Ardıç fabrication workshop"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
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
              Digital Fabrication
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Complex geometry translated into buildable physical form.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              CNC production can begin from client-supplied digital geometry, drawings, reference
              forms, or models developed and refined for fabrication. The production route is
              coordinated around the physical output and the processes that may follow it.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Digital Inputs
              </p>
              <ul className="mt-7 space-y-4">
                {digitalInputs.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-4 text-sm font-semibold text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Physical Outputs
              </p>
              <ul className="mt-7 space-y-4">
                {productionOutputs.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-4 text-sm font-semibold text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Material Capabilities
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Digital machining across foam, polyurethane, and selected panel materials.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Materials and machining routes are selected according to geometry, scale, surface,
              downstream production, assembly, transport, and intended application.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {materialCapabilities.map((capability) => (
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Fabrication at Scale
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Large geometry is planned as a coordinated set of production sections.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              Final object scale is not necessarily defined by one CNC production envelope.
              Large digital geometry may be divided according to material, machining strategy,
              assembly logic, transport, and final surface requirements.
            </p>
            <div className="mt-8 border-l-2 border-bronze pl-6">
              <p className="font-semibold leading-8 text-porcelain">
                Large-scale production is approached through modular fabrication and assembly
                rather than a claim of unlimited machine size.
              </p>
            </div>
          </div>

          <div>
            <ul className="grid gap-px bg-porcelain/15 sm:grid-cols-2">
              {scaleFactors.map((factor, index) => (
                <li key={factor} className="flex min-h-20 items-center gap-5 bg-ink p-5">
                  <span className="font-display text-2xl text-bronze/85">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-porcelain">
                    {factor}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-7 leading-8 text-porcelain/60">
              Depending on the scope, sections may be machined, aligned, joined, bonded,
              reinforced, coated, sculpturally refined, assembled, painted, or finished as one
              coordinated object.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {sectionProcesses.map((process) => (
                <span key={process} className="border border-porcelain/15 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-porcelain/65">
                  {process}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Master-to-Mold Production
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Machined masters can continue directly into mold and composite workflows.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              CNC-machined EPS, XPS, or polyurethane can establish the physical geometry for
              masters, plugs, patterns, prototype bodies, positive forms, and tooling. These
              forms can then continue through Ardıç&apos;s wider mold and composite processes.
            </p>
            <Link
              href="/services/composite-fabrication"
              className="mt-8 inline-flex border border-bronze px-5 py-3 text-xs font-semibold uppercase tracking-brand text-ink transition hover:bg-bronze"
            >
              Explore Composite Fabrication →
            </Link>
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Machined Forms</p>
              <ul className="mt-7 space-y-4">
                {masterForms.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-4 text-sm font-semibold text-ink/70">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Downstream Workflows</p>
              <ul className="mt-7 space-y-4">
                {compositeProcesses.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-4 text-sm font-semibold text-ink/70">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Hybrid Digital Production
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                CNC machining and additive manufacturing can work together.
              </h2>
            </div>
            <div>
              <p className="max-w-xl leading-8 text-ink/65">
                Some geometries are better suited to CNC machining, while others benefit from
                large-format 3D printing. Ardıç may combine digital processes with wood
                structures, molds, composites, and hand finishing according to the project.
              </p>
              <p className="mt-5 font-semibold leading-8 text-ink">
                The production method follows the geometry and project requirements—not the
                other way around.
              </p>
              <Link
                href="/services/large-format-3d-printing"
                className="mt-7 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                Explore Large-Format 3D Printing →
              </Link>
            </div>
          </div>
          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {hybridProcesses.map((item, index) => (
              <li key={item} className="flex min-h-32 flex-col bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="mt-auto pt-6 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Applications</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              CNC production across masters, spatial forms, and custom fabrication.
            </h2>
            <Link
              href="/services/scenic-fabrication"
              className="mt-7 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
            >
              Explore Scenic Fabrication →
            </Link>
          </div>
          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((item, index) => (
              <li key={item} className="flex min-h-40 flex-col bg-porcelain p-6">
                <span className="font-display text-3xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="mt-auto pt-6 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-porcelain/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">CNC Production Workflow</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                From digital geometry to fabrication-ready component.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-porcelain/60">
              Each route is adapted to the material, geometry, module logic, downstream process,
              surface, transport, and intended application.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-porcelain/15 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <article key={step.number} className="flex min-h-72 flex-col bg-ink p-7">
                <p className="font-display text-4xl leading-none text-bronze/85">{step.number}</p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-porcelain">{step.title}</h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-porcelain/60">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Polyurethane Machining</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Machined polyurethane for masters, prototypes, and production forms.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Ardıç can CNC-machine polyurethane and also supports polyurethane casting as part
              of wider mold and fabrication workflows. The route is selected around the form,
              downstream process, surface, and intended application.
            </p>
            <Link
              href="/services/composite-fabrication"
              className="mt-8 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
            >
              View Mold &amp; Composite Workflows →
            </Link>
          </div>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {polyurethaneApplications.map((item, index) => (
              <li key={item} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">More Than CNC</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Machining is one stage in a wider production system.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/65">
              A CNC-produced object can continue through sculptural refinement, selected
              subassemblies, mold and composite production, additive components, coatings,
              painting, finishing, and assembly under one coordinated fabrication workflow.
            </p>
          </div>
          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {widerProcesses.map((item, index) => (
              <li key={item} className="flex min-h-32 flex-col bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="mt-auto pt-6 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">International Fabrication</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Digitally coordinated in Istanbul. Prepared for projects worldwide.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-porcelain/70">
              Our Istanbul production base supports digital file exchange, remote project review,
              modular production, transport-oriented sectioning, packing preparation, assembly
              logic, and ongoing communication with international project teams.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-porcelain/15 pt-8 text-xs font-semibold uppercase tracking-brand text-bronze">
              <span>Europe</span><span>United Kingdom</span><span>Switzerland</span><span>Middle East</span><span>Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Confidential Projects · NDA Protected</p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                A large part of our production work is not visible online.
              </h2>
            </div>
            <div className="lg:border-l lg:border-ink/10 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                Many CNC masters, prototypes, tooling forms, and specialist fabrication projects
                are produced under confidentiality agreements. As a result, the public work shown
                on this website represents only a limited selection of our actual production experience.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Relevant private project experience may be discussed where contractually permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Related Capabilities</p>
          <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
            Continue through our production capabilities and public work.
          </h2>
          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {relatedCapabilities.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-h-64 flex-col bg-porcelain p-7 transition hover:bg-white md:p-9">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{item.eyebrow}</p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-ink md:text-4xl">{item.title}</h3>
                <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">{item.copy}</p>
                <span className="mt-auto pt-8 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl border border-ink/10 bg-ink px-7 py-14 text-porcelain md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Start a Project</p>
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Have a large form, master, or CNC project to produce?
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Send us your 3D model, drawings, dimensions, material requirements, and intended
                application. We can review the geometry and discuss an appropriate machining and
                fabrication strategy.
              </p>
            </div>
            <Link href="/contact" className="inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink">
              Send Your Project Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
