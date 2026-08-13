import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/services/large-format-3d-printing";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle = "Large-Format 3D Printing & Additive Manufacturing | Ardıç";
const pageDescription =
  "Large-format 3D printing in Istanbul for international projects. Modular oversized parts, prototypes, mold masters, tooling patterns, sculptures, architectural and technical components.";
const heroImage =
  "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg";

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
        url: heroImage,
        alt: "Digitally produced large master form in the Ardıç fabrication workshop"
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

const scaleFactors = [
  "Printer Capacity",
  "Geometry",
  "Structural Logic",
  "Assembly",
  "Transport",
  "Final Surface"
];

const moduleProcesses = [
  "Aligned",
  "Bonded",
  "Mechanically Connected",
  "Reinforced",
  "Filled",
  "Sanded",
  "Coated",
  "Assembled",
  "Painted",
  "Surface-Finished"
];

const printerFleet = [
  {
    count: "2",
    volume: "80×80×80 cm",
    label: "Large-Format Printers"
  },
  {
    count: "3",
    volume: "40×40×40 cm",
    label: "Production Printers"
  },
  {
    count: "1",
    volume: "100×100×100 cm",
    label: "Large-Format Printer"
  }
];

const fleetBenefits = [
  "Parallel production",
  "Modular part production",
  "Multi-part assembly coordination",
  "Concurrent prototype and final-component workflows where appropriate",
  "Machine assignment by section size"
];

const materials = [
  "PLA",
  "PETG",
  "ASA",
  "ABS",
  "TPU",
  "Engineering Thermoplastics",
  "Project-Specific Filament Systems",
  "Composite-Filled Filaments Where Appropriate"
];

const materialCriteria = [
  "Geometry",
  "Stiffness",
  "Flexibility",
  "Thermal Environment",
  "Surface Finish",
  "Post-Processing",
  "Indoor / Outdoor Use",
  "Prototype / Final Use"
];

const applications = [
  {
    number: "01",
    title: "Industrial Prototypes",
    copy: "Physical prototypes, enclosures, large development models, and custom forms."
  },
  {
    number: "02",
    title: "Mold Masters",
    copy: "Large-format printed masters prepared for coordinated mold-making workflows."
  },
  {
    number: "03",
    title: "Tooling Patterns",
    copy: "Digital patterns and production forms for composite, casting, and fabrication workflows."
  },
  {
    number: "04",
    title: "Sculptural Forms",
    copy: "Characters, artworks, organic forms, and custom sculptural components."
  },
  {
    number: "05",
    title: "Architectural Components",
    copy: "Custom geometry, decorative elements, reliefs, feature forms, and architectural prototypes."
  },
  {
    number: "06",
    title: "Large Custom Objects",
    copy: "Oversized objects developed through modular printing and coordinated assembly."
  },
  {
    number: "07",
    title: "Display & Brand Objects",
    copy: "Retail objects, exhibition pieces, props, and branded physical forms."
  },
  {
    number: "08",
    title: "Technical Components",
    copy: "Custom components, housings, development parts, and project-specific printed geometry."
  },
  {
    number: "09",
    title: "Prototype Bodies",
    copy: "Large housings, shells, development bodies, and physical design studies."
  },
  {
    number: "10",
    title: "Final Production Components",
    copy: "Finished printed parts where the selected material, geometry, and intended application are appropriate."
  }
];

const masterOutputs = [
  "Mold Masters",
  "Plugs",
  "Patterns",
  "Tooling Forms",
  "Prototype Bodies",
  "Positive Masters",
  "Custom Geometry"
];

const compositeProcesses = [
  "Mold Making",
  "Fiberglass / GRP",
  "Polyester",
  "Polyurethane",
  "Carbon Fiber Lamination",
  "Composite Surface Work",
  "Coating",
  "Finishing & Painting"
];

const integratedMaterials = [
  "CNC-Machined EPS / XPS",
  "Polyurethane",
  "Fiberglass / GRP",
  "Carbon Fiber Lamination",
  "Polyester",
  "Wood / MDF / Plywood",
  "Internal Substructures",
  "Coatings & Hand-Finished Surfaces"
];

const workflow = [
  {
    number: "01",
    title: "Project Review",
    copy: "Review dimensions, geometry, intended use, material, and required finish."
  },
  {
    number: "02",
    title: "Digital Preparation",
    copy: "Prepare or review the model and determine print orientation, sectioning, and production logic."
  },
  {
    number: "03",
    title: "Modular Division",
    copy: "Divide large geometry into manageable production sections where required."
  },
  {
    number: "04",
    title: "Parallel Printing",
    copy: "Assign components across the available printer fleet according to scale and geometry."
  },
  {
    number: "05",
    title: "Assembly & Reinforcement",
    copy: "Coordinate printed modules into the required final geometry and reinforce where appropriate."
  },
  {
    number: "06",
    title: "Surface Preparation",
    copy: "Bond, fill, sand, and prepare surfaces according to the intended final result."
  },
  {
    number: "07",
    title: "Coating & Finishing",
    copy: "Apply suitable coatings, paint, or fabrication finishes where included in the scope."
  },
  {
    number: "08",
    title: "Packing / Project Integration",
    copy: "Prepare finished components or modules for transport, further fabrication, or site assembly."
  }
];

const geometryAdvantages = [
  "Organic Geometry",
  "Curved Forms",
  "Custom One-Off Parts",
  "Digitally Repeatable Components",
  "Rapid Design Revisions",
  "Modular Large-Scale Forms",
  "Complex Masters",
  "Low-Volume Custom Geometry"
];

const relatedCapabilities = [
  {
    eyebrow: "Integrated Production",
    title: "Fabrication Capabilities",
    copy: "Explore CNC, foam, polyurethane, composites, woodworking, finishing, and assembly under one roof.",
    href: "/fabrication"
  },
  {
    eyebrow: "Mold-to-Part Production",
    title: "Composite Fabrication",
    copy: "Continue from printed masters into molds, tooling, GRP, polyester, polyurethane, and composite workflows.",
    href: "/services/composite-fabrication"
  },
  {
    eyebrow: "Scenic Production",
    title: "Themed Environment Fabrication",
    copy: "International fabrication for sculptural features, props, architectural decor, and immersive environments.",
    href: "/services/themed-environment-fabrication"
  },
  {
    eyebrow: "Workshop Process",
    title: "CNC Manufacturing Processes",
    copy: "View public production-stage work across digitally shaped masters, components, and fabrication preparation.",
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
          name: "Large-Format 3D Printing",
          item: pageUrl
        }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Large-Format 3D Printing & Additive Manufacturing",
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
        "Large-format 3D printing",
        "Additive manufacturing",
        "Prototype fabrication",
        "Mold master production",
        "Tooling patterns",
        "Architectural components",
        "Sculptural fabrication",
        "Modular oversized 3D printing",
        "Technical components"
      ]
    }
  ]
};

export default function LargeFormat3DPrintingPage() {
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
              Large-Format Additive Manufacturing
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Large-Format 3D Printing for Prototypes, Masters &amp; Custom Production
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design &amp; Fabrication operates an in-house large-format filament-based
              additive manufacturing fleet for prototypes, mold masters, tooling patterns,
              architectural components, sculptural forms, technical parts, and large custom
              objects.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ink/55">
              From our Istanbul production facility, we combine digital modeling, modular
              printing, assembly, reinforcement, finishing, and multi-material fabrication to
              produce components far larger than the build volume of an individual printer.
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
              alt="Digitally produced large master form in the Ardıç fabrication workshop"
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Beyond a Single Build Volume
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Large objects are produced as coordinated systems of parts.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-ink/65">
                A large digital model can be divided into production sections according to
                printer capacity, geometry, structural logic, assembly, transport, and final
                surface requirements. The production route is planned for the complete object,
                rather than treating each printed section as an isolated part.
              </p>
              <div className="mt-8 border-l-2 border-bronze bg-porcelain px-6 py-5">
                <p className="font-semibold leading-8 text-ink">
                  Final object dimensions are determined by the project and production strategy,
                  not simply by the dimensions of one printer.
                </p>
              </div>
            </div>

            <div>
              <ul className="grid gap-px bg-ink/10 sm:grid-cols-2" aria-label="Modular production planning factors">
                {scaleFactors.map((factor, index) => (
                  <li key={factor} className="flex min-h-20 items-center gap-5 bg-porcelain p-5">
                    <span className="font-display text-2xl text-bronze/80">
                      {`${index + 1}`.padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
                      {factor}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 leading-8 text-ink/60">
                Depending on the scope, printed modules may be aligned, bonded, mechanically
                connected, reinforced, filled, sanded, coated, assembled, painted, or
                surface-finished as one coordinated final object.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {moduleProcesses.map((process) => (
                  <span
                    key={process}
                    className="border border-ink/10 bg-porcelain px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink/65"
                  >
                    {process}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-porcelain/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                In-House Print Farm
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Multiple machines. Parallel production. Larger final assemblies.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-porcelain/65">
              Six filament-based machines operate as a coordinated production fleet. Different
              section sizes can be assigned to suitable machines while modular parts move in
              parallel through printing and assembly preparation.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-porcelain/15 md:grid-cols-3">
            {printerFleet.map((printer) => (
              <article key={printer.volume} className="flex min-h-72 flex-col bg-ink p-7 md:p-9">
                <p className="font-display text-6xl leading-none text-bronze">{printer.count}</p>
                <p className="mt-7 font-display text-3xl leading-tight text-porcelain">
                  {printer.volume}
                </p>
                <div className="mt-6 h-px w-12 bg-bronze" />
                <p className="mt-auto pt-8 text-xs font-semibold uppercase tracking-brand text-porcelain/65">
                  {printer.label}
                </p>
              </article>
            ))}
          </div>

          <ul className="mt-px grid gap-px bg-porcelain/15 sm:grid-cols-2 lg:grid-cols-5">
            {fleetBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex min-h-24 items-center bg-ink p-5 text-sm font-semibold leading-6 text-porcelain/70"
              >
                {benefit}
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl border-l-2 border-bronze pl-6 text-lg leading-8 text-porcelain/75">
            Production scale is approached through modular digital fabrication rather than the
            build envelope of a single printer.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Material Selection
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Materials selected around the project.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              A broad range of standard and engineering thermoplastics can be selected according
              to geometry, surface requirements, mechanical needs, and final application.
              Material choice also considers post-processing, environment, and whether the part
              is a prototype, master, or suitable final-use component.
            </p>
          </div>

          <div>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
              {materials.map((material, index) => (
                <li key={material} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                  <span className="font-display text-2xl text-bronze/80">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
                    {material}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-7">
              {materialCriteria.map((criterion) => (
                <span key={criterion} className="text-xs font-semibold uppercase tracking-brand text-ink/50">
                  {criterion}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Applications
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Additive production across physical development and custom fabrication.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Printed parts can serve as prototypes, masters, patterns, integrated fabrication
              elements, or finished components when the material and intended application are
              appropriate.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map((application) => (
              <article key={application.number} className="flex min-h-72 flex-col bg-porcelain p-7">
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {application.number}
                </p>
                <h3 className="mt-7 text-lg font-semibold leading-tight text-ink">
                  {application.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{application.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              From Print to Mold
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              3D printing can be the first step in a larger production process.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              Large-format printing can produce mold masters, plugs, patterns, tooling forms,
              prototype bodies, positive masters, and custom geometry. These outputs can move
              into wider in-house mold, composite, casting, coating, and finishing workflows.
            </p>
            <Link
              href="/services/composite-fabrication"
              className="mt-8 inline-flex border border-bronze px-5 py-3 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Explore Composite Fabrication →
            </Link>
          </div>

          <div className="grid gap-px bg-porcelain/15 sm:grid-cols-2">
            <div className="bg-ink p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Printed Outputs
              </p>
              <ul className="mt-7 space-y-4">
                {masterOutputs.map((output) => (
                  <li key={output} className="border-b border-porcelain/10 pb-4 text-sm font-semibold text-porcelain/75">
                    {output}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Wider Workflows
              </p>
              <ul className="mt-7 space-y-4">
                {compositeProcesses.map((process) => (
                  <li key={process} className="border-b border-porcelain/10 pb-4 text-sm font-semibold text-porcelain/75">
                    {process}
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
                Multi-Material Fabrication
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Printed parts do not have to remain standalone printed parts.
              </h2>
            </div>
            <div>
              <p className="max-w-xl leading-8 text-ink/65">
                Depending on the project, additive manufacturing may be used for the complete
                object or only for the geometry that benefits most from digital production.
                Printed elements can be coordinated with other workshop materials and finishing
                systems as one fabrication strategy.
              </p>
            </div>
          </div>

          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {integratedMaterials.map((material, index) => (
              <li key={material} className="flex min-h-36 flex-col bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="mt-auto pt-6 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
                  {material}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Digital-to-Physical Workflow
              </p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                From 3D model to finished large-format component.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Each sequence is adapted to the geometry, material, module logic, surface, assembly,
              transport, and intended use of the project.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => (
              <article key={step.number} className="flex min-h-72 flex-col bg-porcelain p-7">
                <p className="font-display text-4xl leading-none text-bronze/75">{step.number}</p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-ink">{step.title}</h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Digital Freedom
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Complex geometry without traditional tooling at the first stage.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Additive manufacturing supports organic geometry, curved forms, one-off parts,
              design revisions, repeatable digital components, and complex masters. It is one
              production method within a wider fabrication system—not a default solution for
              every project.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-ink/55">
              Ardıç selects or combines CNC, foam, molds, composites, woodworking, and printing
              according to which route best serves the geometry, scale, finish, quantity, and
              intended use.
            </p>
          </div>

          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {geometryAdvantages.map((advantage, index) => (
              <li key={advantage} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">
                  {advantage}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              International Production
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Printed in Istanbul. Prepared for projects worldwide.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-porcelain/70">
              Our Istanbul production base supports international digital file exchange,
              project review, modular production, transport-oriented sectioning, assembly
              planning, and packing preparation for specialist project teams.
            </p>
            <p className="mt-6 leading-8 text-porcelain/60">
              We communicate with teams working across Europe, the United Kingdom, Switzerland,
              the Middle East, and worldwide while keeping production coordination centered in
              Istanbul.
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
                Many of the parts we produce cannot be shown publicly.
              </h2>
            </div>
            <div className="lg:border-l lg:border-ink/10 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                A significant portion of our prototype, product-development, and specialist
                fabrication work is protected by confidentiality agreements. For this reason,
                the examples shown publicly represent only a limited selection of our actual
                additive-manufacturing and production experience.
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
                Have a large or complex part to produce?
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Send us your 3D model, drawings, target dimensions, intended use, and required
                finish. We can review the geometry and determine an appropriate printing,
                sectioning, and fabrication strategy.
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
