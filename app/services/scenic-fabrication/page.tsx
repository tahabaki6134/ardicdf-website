import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/services/scenic-fabrication";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle =
  "Scenic Fabrication & Large-Scale Props | International Production | Ardıç";
const pageDescription =
  "International scenic fabrication from Istanbul. Large-scale props, sculptures, artificial rockwork, branded installations, CNC foam, 3D printing, composites and custom finishes.";
const heroImage =
  "/projects/portfolio/commercial-brand-installations/illuminated-sculptural-wings-brand-installation-01.png";
const rockImage =
  "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png";

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
        alt: "Illuminated sculptural wing installation within a finished interior"
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

const creativeInputs = [
  "Concept Visuals",
  "3D Models",
  "CAD Files",
  "Architectural Drawings",
  "Dimensions",
  "Reference Imagery",
  "Physical Samples Where Applicable"
];

const productionMethods = [
  "CNC EPS / XPS",
  "Polyurethane",
  "Large-Format 3D Printing",
  "Wood / MDF / Plywood",
  "Sculptural Handwork",
  "Fiberglass / GRP",
  "Polyester",
  "Molds",
  "Composite Lamination",
  "Coatings",
  "Painting",
  "Finishing",
  "Modular Assembly"
];

const capabilities = [
  {
    number: "01",
    title: "Large-Scale Props",
    copy: "Oversized promotional objects, branded forms, product representations, sculptural objects, and custom visual features."
  },
  {
    number: "02",
    title: "Scenic Environments",
    copy: "Custom physical environments for stages, exhibitions, events, branded experiences, and themed spaces."
  },
  {
    number: "03",
    title: "Sculptures & Characters",
    copy: "Large figures, character forms, organic sculptures, and one-off custom sculptural pieces."
  },
  {
    number: "04",
    title: "Artificial Rock & Organic Forms",
    copy: "Rockwork, naturalistic forms, organic surfaces, and nature-inspired scenic geometry."
  },
  {
    number: "05",
    title: "Architectural Scenic Elements",
    copy: "Columns, reliefs, arches, ornaments, wall features, facades, decorative structures, and custom spatial elements."
  },
  {
    number: "06",
    title: "Brand Activation Fabrication",
    copy: "Physical objects, large logos, promotional forms, display objects, and experiential brand components."
  },
  {
    number: "07",
    title: "Exhibition & Event Fabrication",
    copy: "Display structures, scenic objects, focal installations, modular elements, and custom exhibition features."
  },
  {
    number: "08",
    title: "Custom Surface Finishing",
    copy: "Textures, coatings, paint systems, sculptural finishing, and decorative surface development according to project requirements."
  },
  {
    number: "09",
    title: "Modular Large-Scale Fabrication",
    copy: "Large objects divided into coordinated production modules for workshop fabrication, transport, and site assembly."
  },
  {
    number: "10",
    title: "Multi-Material Production",
    copy: "Foam, composites, printed parts, polyurethane, wood, and hand-finished components coordinated within one project."
  }
];

const scaleFactors = ["Geometry", "Material", "Transport", "Assembly", "Finish", "Site Access"];

const scaleProcesses = [
  "Aligned",
  "Joined",
  "Bonded",
  "Reinforced",
  "Coated",
  "Sculpted",
  "Sanded",
  "Painted",
  "Finished",
  "Assembled"
];

const digitalProcesses = [
  "CNC Machining",
  "Large-Format 3D Printing",
  "Digital Sectioning",
  "Mold Production",
  "Sculpture",
  "Manual Detailing",
  "Coatings",
  "Painting"
];

const materialCriteria = [
  "Geometry",
  "Scale",
  "Weight",
  "Finish",
  "Repeat Quantity",
  "Transport",
  "Assembly",
  "Intended Use"
];

const materials = [
  "EPS",
  "XPS",
  "Polyurethane",
  "Large-Format Printed Thermoplastics",
  "Fiberglass / GRP",
  "Polyester",
  "Carbon Fiber Lamination Where Appropriate",
  "Wood / MDF / Plywood",
  "Coatings",
  "Painted Finishes"
];

const surfaceProcesses = [
  "Coating",
  "Fiberglass / GRP",
  "Polyester",
  "Mold Production",
  "Composite Surface Work",
  "Painting",
  "Decorative Finishing"
];

const applications = [
  "Stage & Performance Environments",
  "Events",
  "Exhibitions",
  "Brand Activations",
  "Product Launches",
  "Retail Installations",
  "Hospitality Interiors",
  "Theme Parks & Attractions",
  "Museums & Cultural Spaces",
  "Promotional Installations",
  "Large-Scale Props",
  "Custom Sculptures",
  "Artificial Rockwork",
  "Architectural Decor",
  "Immersive Environments",
  "Photo / Media Sets",
  "Experiential Installations",
  "Public-Facing Custom Objects"
];

const oversizedObjects = [
  "Oversized Products",
  "Giant Branded Objects",
  "Sculptural Promotional Pieces",
  "Dimensional Branding Where Appropriate",
  "Fictional Objects",
  "Thematic Props",
  "Organic Forms",
  "Custom Display Objects",
  "One-Off Statement Pieces"
];

const organicForms = [
  "Artificial Rocks",
  "Cliff-Like Forms",
  "Cave-Inspired Features Where Appropriate",
  "Organic Surfaces",
  "Naturalistic Forms",
  "Lightweight Modular Rock Structures",
  "Sculptural Surface Texture",
  "Painting & Coloration"
];

const workflow = [
  {
    number: "01",
    title: "Brief Review",
    copy: "Review the concept, dimensions, location, intended use, and required finish."
  },
  {
    number: "02",
    title: "Digital Development",
    copy: "Review or prepare production geometry and determine the fabrication logic."
  },
  {
    number: "03",
    title: "Material & Process Planning",
    copy: "Select CNC foam, printing, wood, molds, composites, or hybrid production according to the object."
  },
  {
    number: "04",
    title: "Primary Fabrication",
    copy: "Machine, print, sculpt, or construct the core geometry."
  },
  {
    number: "05",
    title: "Assembly",
    copy: "Join coordinated modules and develop the complete physical form."
  },
  {
    number: "06",
    title: "Surface Development",
    copy: "Apply coatings, composites, sculptural refinement, and texture where required."
  },
  {
    number: "07",
    title: "Painting & Finishing",
    copy: "Complete the final visual surface according to the project direction."
  },
  {
    number: "08",
    title: "Modular Preparation",
    copy: "Prepare sections, interfaces, and assembly logic for transport and site integration."
  }
];

const relatedCapabilities = [
  {
    eyebrow: "Immersive Production",
    title: "Themed Environment Fabrication",
    copy: "Integrated production for scenic features, themed spaces, architectural decor, and destination environments.",
    href: "/services/themed-environment-fabrication"
  },
  {
    eyebrow: "Subtractive Production",
    title: "CNC Foam & Polyurethane Machining",
    copy: "CNC production for EPS/XPS forms, polyurethane masters, props, reliefs, and modular geometry.",
    href: "/services/cnc-foam-polyurethane-machining"
  },
  {
    eyebrow: "Additive Production",
    title: "Large-Format 3D Printing",
    copy: "Modular additive production for sculptural forms, display objects, masters, and custom components.",
    href: "/services/large-format-3d-printing"
  },
  {
    eyebrow: "Surface & Mold Production",
    title: "Composite Fabrication",
    copy: "Continue masters and core forms into molds, GRP, polyester, polyurethane, and composite workflows.",
    href: "/services/composite-fabrication"
  },
  {
    eyebrow: "Integrated Workshop",
    title: "Fabrication Capabilities",
    copy: "Explore the wider CNC, foam, sculpture, mold, composite, woodworking, finishing, and assembly system.",
    href: "/fabrication"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "Artificial Rock & Organic Forms",
    copy: "View public work across rockwork, naturalistic surfaces, and organic spatial forms.",
    href: "/works/artificial-rock-organic-forms"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "Sculptures & Characters",
    copy: "View character figures, custom sculptures, and one-off sculptural objects.",
    href: "/works/sculptures-characters"
  },
  {
    eyebrow: "Portfolio Gallery",
    title: "Historical & Thematic Environments",
    copy: "View fabricated architectural details, reliefs, columns, and thematic spatial elements.",
    href: "/works/historical-thematic-environments"
  },
  {
    eyebrow: "Workshop Gallery",
    title: "CNC Manufacturing Processes",
    copy: "View production-stage work across shaped forms, foam components, and fabrication preparation.",
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
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: "Scenic Fabrication", item: pageUrl }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Scenic Fabrication & Large-Scale Props",
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
        "Scenic fabrication",
        "Large-scale props",
        "Sculptural fabrication",
        "Artificial rockwork",
        "Brand activation fabrication",
        "Exhibition fabrication",
        "Event fabrication",
        "Architectural scenic elements",
        "Themed environment fabrication",
        "Modular large-scale fabrication",
        "Multi-material fabrication"
      ]
    }
  ]
};

export default function ScenicFabricationPage() {
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
              Scenic Fabrication · Large-Scale Props
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Scenic Fabrication &amp; Large-Scale Props for International Projects
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design &amp; Fabrication produces custom scenic environments, oversized props,
              sculptures, architectural features, and experiential installations for events,
              exhibitions, branded spaces, hospitality, and entertainment projects.
            </p>
            <p className="mt-5 max-w-2xl leading-8 text-ink/55">
              From our Istanbul production facility, we combine CNC foam fabrication, sculpture,
              large-format 3D printing, woodworking, molds, composites, coatings, painting, and
              modular assembly to turn creative concepts into physical environments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/services/themed-environment-fabrication"
                className="inline-flex justify-center border border-ink/25 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze"
              >
                View Themed Environment Fabrication
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[620px]">
            <Image
              src={heroImage}
              alt="Illuminated sculptural wing installation within a finished interior"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover brightness-95 contrast-105"
              style={{ objectPosition: "62% 50%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-porcelain/10" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              From Creative Brief to Built Object
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Creative concepts translated into fabrication-ready form.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              We review the available creative and technical information, then establish a
              production approach suited to the geometry, surface, assembly, transport, and
              intended application. Each project uses only the processes its physical outcome
              requires.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Project Inputs</p>
              <ul className="mt-7 space-y-4">
                {creativeInputs.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-4 text-sm font-semibold text-ink/70">{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-porcelain p-7">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Possible Production Methods</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {productionMethods.map((item) => (
                  <li key={item} className="border-b border-ink/10 pb-3 text-sm font-semibold leading-6 text-ink/70">{item}</li>
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
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Core Capabilities</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Scenic production built around the object, environment, and final experience.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Ardıç coordinates digital fabrication, workshop construction, sculptural handwork,
              surface development, and modular preparation as one production system.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((capability) => (
              <article key={capability.number} className="flex min-h-80 flex-col bg-porcelain p-7">
                <p className="font-display text-4xl leading-none text-bronze/75">{capability.number}</p>
                <h3 className="mt-8 text-xl font-semibold leading-tight text-ink">{capability.title}</h3>
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
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Large-Scale Fabrication</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Size is managed through modular production.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              Large scenic objects can be digitally divided into manageable sections according to
              geometry, material, transport, assembly, finish, and site access. Sections are then
              coordinated as parts of one complete physical form.
            </p>
            <p className="mt-8 border-l-2 border-bronze pl-6 font-semibold leading-8 text-porcelain">
              Final project scale is approached through modular fabrication and assembly rather
              than the working envelope of a single machine.
            </p>
          </div>
          <div>
            <ul className="grid gap-px bg-porcelain/15 sm:grid-cols-2">
              {scaleFactors.map((factor, index) => (
                <li key={factor} className="flex min-h-20 items-center gap-5 bg-ink p-5">
                  <span className="font-display text-2xl text-bronze/85">{`${index + 1}`.padStart(2, "0")}</span>
                  <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-porcelain">{factor}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {scaleProcesses.map((process) => (
                <span key={process} className="border border-porcelain/15 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-porcelain/65">{process}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Digital + Hand Fabrication</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Precision where needed. Hand finishing where it matters.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-ink/65">
                Digital production can establish geometry, repeatable sections, and fabrication
                logic. Sculpture, manual detailing, coatings, and painting then develop the final
                physical character, texture, and visual surface.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/services/cnc-foam-polyurethane-machining" className="inline-flex border border-bronze px-5 py-3 text-xs font-semibold uppercase tracking-brand text-ink transition hover:bg-bronze">
                  Explore CNC Foam Machining →
                </Link>
                <Link href="/services/large-format-3d-printing" className="inline-flex border border-ink/20 px-5 py-3 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze">
                  Explore 3D Printing →
                </Link>
              </div>
            </div>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
              {digitalProcesses.map((item, index) => (
                <li key={item} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                  <span className="font-display text-2xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                  <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Multi-Material Production</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">The material follows the object.</h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/65">
              Material and process selection responds to geometry, scale, weight, finish, repeat
              quantity, transport, assembly, durability requirements, and intended use. Projects
              may combine multiple materials when the physical outcome calls for it.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-[0.75fr_1.25fr]">
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
              {materialCriteria.map((item) => (
                <li key={item} className="flex min-h-20 items-center bg-porcelain p-5 text-sm font-semibold uppercase tracking-[0.1em] text-ink/70">{item}</li>
              ))}
            </ul>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2">
              {materials.map((item, index) => (
                <li key={item} className="flex min-h-20 items-center gap-4 bg-porcelain p-5">
                  <span className="font-display text-xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                  <span className="text-sm font-semibold leading-6 text-ink/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Surface & Composite Development</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              A lightweight form can become a finished production surface.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-porcelain/65">
              CNC-machined or sculpted foam geometry can continue through coating, mold,
              fiberglass / GRP, polyester, composite surface work, painting, and decorative
              finishing where those processes are appropriate to the project.
            </p>
            <Link href="/services/composite-fabrication" className="mt-8 inline-flex border border-bronze px-5 py-3 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink">
              Explore Composite Fabrication →
            </Link>
          </div>
          <ul className="grid gap-px bg-porcelain/15 sm:grid-cols-2">
            {surfaceProcesses.map((item, index) => (
              <li key={item} className="flex min-h-24 items-center gap-5 bg-ink p-6">
                <span className="font-display text-2xl text-bronze/85">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-porcelain">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Applications We Can Fabricate For</p>
          <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
            Physical production across performance, culture, hospitality, retail, and experience.
          </h2>
          <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-6">
            {applications.map((item, index) => (
              <li key={item} className="flex min-h-40 flex-col bg-porcelain p-6">
                <span className="font-display text-3xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="mt-auto pt-6 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Oversized Objects</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">Objects designed to command physical space.</h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Large props are treated as designed physical objects: their silhouette, material
              logic, module strategy, surface, and assembly are coordinated around the intended
              spatial impact rather than short-lived decoration alone.
            </p>
          </div>
          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {oversizedObjects.map((item, index) => (
              <li key={item} className="flex min-h-32 flex-col bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">{`${index + 1}`.padStart(2, "0")}</span>
                <span className="mt-auto pt-5 text-sm font-semibold uppercase leading-6 tracking-[0.1em] text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative min-h-[420px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[620px]">
            <Image
              src={rockImage}
              alt="Organic rock forms integrated around a circular interior feature"
              fill
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover brightness-90 contrast-105"
              style={{ objectPosition: "50% 50%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Organic Scenic Fabrication</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Rockwork, terrain, and naturalistic forms built from digital geometry and hand finishing.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              Artificial rockwork and organic features can combine lightweight modular structures,
              digitally established geometry, sculptural refinement, surface texture, and painted
              coloration to create distinctive naturalistic spatial forms.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {organicForms.map((item) => (
                <span key={item} className="border border-ink/15 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink/65">{item}</span>
              ))}
            </div>
            <Link href="/works/artificial-rock-organic-forms" className="mt-8 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink">
              View Artificial Rock &amp; Organic Forms →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-porcelain/15 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Scenic Production Workflow</p>
              <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">From creative brief to installation-ready components.</h2>
            </div>
            <p className="max-w-xl leading-8 text-porcelain/60">
              The workflow is adapted to the object, environment, material combination, surface,
              transport route, and the assembly scope included in the project.
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">International Scenic Production</p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">Built in Istanbul. Coordinated for projects worldwide.</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-ink/70">
              Our Istanbul production base supports digital project communication, remote file
              review, modular design, transport-oriented fabrication, packing preparation, and
              site assembly planning where included. We coordinate with architects, designers,
              agencies, and project teams through a clear fabrication process.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-ink/10 pt-8 text-xs font-semibold uppercase tracking-brand text-bronze">
              <span>Europe</span><span>United Kingdom</span><span>Switzerland</span><span>Middle East</span><span>Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Confidential Projects · NDA Protected</p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">Many of our most distinctive projects cannot be shown publicly.</h2>
            </div>
            <div className="lg:border-l lg:border-ink/10 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                A significant portion of our scenic, branded, and commissioned fabrication work
                is protected by confidentiality agreements. As a result, the public portfolio
                represents only a limited selection of our actual production experience and capabilities.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">Relevant private project experience may be discussed where contractually permitted.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Related Capabilities</p>
          <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">Continue through our production capabilities and public work.</h2>
          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {relatedCapabilities.map((item) => (
              <Link key={item.href} href={item.href} className="group flex min-h-64 flex-col bg-porcelain p-7 transition hover:bg-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{item.eyebrow}</p>
                <h3 className="mt-6 font-display text-3xl leading-tight text-ink">{item.title}</h3>
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
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-porcelain md:text-5xl">Planning a large prop, scenic environment, or custom installation?</h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Send us your concept, drawings, 3D model, dimensions, intended location, and target
                finish. We can review the project and determine an appropriate fabrication,
                material, and assembly strategy.
              </p>
            </div>
            <Link href="/contact" className="inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink">Send Your Project Brief</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
