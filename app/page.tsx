import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brand, heroSlides, works } from "@/lib/content";
import { HomeHeroSlider } from "@/components/home-hero-slider";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";

const pageTitle =
  "International Design & Fabrication | CNC, Composites, Scenic & 3D Printing | Ardıç";
const pageDescription =
  "International custom fabrication from Istanbul for themed environments, scenic projects, CNC foam and polyurethane machining, composites, molds, large-format 3D printing, sculpture and multi-material production.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: "/home/hero-roman-heritage.jpeg",
        alt: "Ardıç historical environment fabrication in Istanbul"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/home/hero-roman-heritage.jpeg"]
  }
};

const coreServices = [
  {
    number: "01",
    title: "Themed Environment Fabrication",
    description:
      "Custom themed environments, architectural scenic elements, sculptures, and modular fabricated settings for international projects.",
    href: "/services/themed-environment-fabrication"
  },
  {
    number: "02",
    title: "Scenic Fabrication & Large-Scale Props",
    description:
      "Large props, branded objects, scenic environments, artificial rockwork, exhibitions, and custom experiential installations.",
    href: "/services/scenic-fabrication"
  },
  {
    number: "03",
    title: "CNC Foam & Polyurethane Machining",
    description:
      "CNC production for EPS/XPS, polyurethane, masters, plugs, patterns, sculptural geometry, and architectural components.",
    href: "/services/cnc-foam-polyurethane-machining"
  },
  {
    number: "04",
    title: "Composite Fabrication & Mold Making",
    description:
      "Fiberglass / GRP, polyester molds and casting, carbon fiber lamination, polyurethane, masters, plugs, and tooling.",
    href: "/services/composite-fabrication"
  },
  {
    number: "05",
    title: "Large-Format 3D Printing",
    description:
      "Modular oversized printing for prototypes, mold masters, tooling patterns, sculptures, architectural, and technical components.",
    href: "/services/large-format-3d-printing"
  }
];

const materials = [
  "CNC EPS / XPS",
  "Polyurethane machining",
  "Polyurethane casting",
  "Fiberglass / GRP",
  "Polyester molding and casting",
  "Carbon fiber lamination",
  "Large-format 3D printing",
  "Mold making",
  "Masters / plugs / patterns",
  "Wood / MDF / plywood fabrication",
  "Sculpture",
  "Coatings",
  "Painting",
  "Surface finishing",
  "Modular assembly"
];

const workflowStages = [
  {
    title: "Digital Development",
    description: "Production-aware models, geometry planning, segmentation, and fabrication preparation."
  },
  {
    title: "CNC / Additive Production",
    description: "Subtractive and large-format additive processes selected around scale, material, and use."
  },
  {
    title: "Molds & Fabrication",
    description: "Masters, tooling, composites, sculpture, woodworking, reinforcement, and custom assembly."
  },
  {
    title: "Finishing & Assembly",
    description: "Coatings, painting, surface finishing, final assembly, and preparation for site integration."
  }
];

const productionRanges = [
  {
    title: "Scenic & Architectural",
    items: [
      "Themed environments",
      "Scenic fabrication",
      "Large-scale props",
      "Sculptures",
      "Artificial rockwork",
      "Architectural decor",
      "Brand installations"
    ]
  },
  {
    title: "Technical & Industrial",
    items: [
      "Industrial prototypes",
      "Mold masters",
      "Production tooling",
      "Custom housings",
      "Composite shells",
      "Polyurethane components",
      "Large-format printed components",
      "UAV prototype molds / development components",
      "USV prototype bodies / shells / development components"
    ]
  }
];

const manufacturingCapabilities = [
  "CNC EPS / XPS Machining",
  "Polyurethane Machining & Casting",
  "Mold Making & Production Tooling",
  "Fiberglass / GRP Fabrication",
  "Polyester Molding & Casting",
  "Carbon Fiber Lamination",
  "Large-Format 3D Printing",
  "Custom Wood Fabrication",
  "Sculpture & Scenic Fabrication",
  "Coating, Painting & Finishing",
  "Modular Large-Scale Production",
  "Assembly & Project Preparation"
];

export default function Home() {
  return (
    <main>
      <HomeHeroSlider slides={heroSlides} />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="International Fabrication · Istanbul"
              title="Built in Istanbul. Developed for projects worldwide."
              copy="Ardıç Design & Fabrication works with architects, designers, agencies, contractors, project managers, and specialist development teams to turn complex digital and creative concepts into physical objects, components, and environments."
            />
            <p className="mt-6 max-w-3xl leading-8 text-ink/65">
              Our Istanbul production base combines CNC machining, foam fabrication,
              polyurethane, composites, molds, large-format 3D printing, sculpture,
              woodworking, coatings, and finishing within one coordinated workflow.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold uppercase tracking-brand text-bronze">
              {[
                "Europe",
                "United Kingdom",
                "Switzerland",
                "Middle East",
                "Worldwide"
              ].map((region) => (
                <span key={region}>{region}</span>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-10 w-fit border border-ink/20 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze"
            >
              Explore Services
            </Link>
          </div>
          <div className="relative min-h-[360px] overflow-hidden bg-ink md:min-h-[520px]">
            <Image
              src="/home/brand-story-lobby.jpeg"
              alt="Dark premium lobby with natural rock forms and Ardıç wall branding"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 text-xs font-semibold uppercase tracking-brand text-porcelain md:bottom-9 md:left-9">
              {brand.tagline}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Fabrication Services"
            title="Multiple production disciplines. One fabrication partner."
            copy="A coordinated route from specialist digital production to fabrication, finishing, and project-ready assembly."
          />
          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex min-h-80 flex-col justify-between bg-porcelain p-7 transition hover:bg-ink"
              >
                <div>
                  <p className="font-display text-5xl text-bronze">{service.number}</p>
                  <h3 className="mt-10 font-display text-3xl leading-tight text-ink transition group-hover:text-porcelain">
                    {service.title}
                  </h3>
                  <p className="mt-5 leading-7 text-ink/60 transition group-hover:text-porcelain/65">
                    {service.description}
                  </p>
                </div>
                <span className="mt-8 text-xs font-semibold uppercase tracking-brand text-bronze">
                  Explore Service →
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/fabrication"
            className="mt-10 inline-flex border-b border-bronze pb-2 text-xs font-semibold uppercase tracking-brand text-bronze"
          >
            Explore All Fabrication Capabilities →
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Works"
              title="Selected project studies."
              copy="A curated view of built projects, production studies, scenic and sculptural work, architectural fabrication, and custom objects."
            />
            <Link href="/works" className="text-sm font-semibold uppercase tracking-brand text-bronze">
              See all works
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Design + Fabrication Under One Roof"
              title="Digital production. Skilled fabrication. Controlled finishing."
              copy="Digital models can move through CNC machining, large-format additive manufacturing, mold making, composite fabrication, sculpture, woodworking, coatings, painting, and assembly within one coordinated production workflow."
              light
            />
            <p className="mt-7 max-w-2xl leading-8 text-porcelain/60">
              Built on long-term family experience in production and construction, Ardıç is
              an EPSLAM company supported by an integrated fabrication infrastructure in
              Istanbul.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden border border-porcelain/15 bg-ink sm:col-span-2">
              <Image
                src="/home/production-columns.png"
                alt="White Corinthian column production and sculptural fabrication details"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            {workflowStages.map((stage) => (
              <article key={stage.title} className="border border-porcelain/15 p-7">
                <h3 className="font-display text-3xl leading-tight text-bronze">{stage.title}</h3>
                <p className="mt-4 leading-7 text-porcelain/65">{stage.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Multi-Material Fabrication"
                title="The production method follows the project."
                copy="Ardıç is not limited to one material or manufacturing process. Depending on geometry, scale, finish, weight, repeat quantity, transport, assembly, and intended use, we select or combine the most appropriate production methods."
              />
              <Link
                href="/fabrication"
                className="mt-9 inline-flex border border-bronze bg-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-ink"
              >
                Explore Fabrication
              </Link>
            </div>
            <ul className="grid gap-px bg-ink/10 sm:grid-cols-2" aria-label="Multi-material fabrication capabilities">
              {materials.map((material) => (
                <li key={material} className="bg-white px-6 py-5 font-display text-xl text-ink">
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 py-14 md:py-20">
          <SectionHeading
            eyebrow="Fabrication at Scale"
            title="Large objects are planned as systems of coordinated parts."
            copy="Large and complex geometry can be digitally divided into manageable production sections according to material, geometry, fabrication method, transport, and assembly. Sections can then be machined, printed, molded, fabricated, joined, reinforced, coated, and finished as one coordinated final object."
          />
          <p className="mt-10 max-w-5xl font-display text-3xl leading-tight text-bronze md:text-5xl">
            Project scale is managed through modular fabrication and assembly rather than the
            working envelope of a single machine.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="From Scenic to Specialist Production"
            title="Creative environments and technical prototypes share the same production discipline."
            copy="The same controlled approach to geometry, materials, tooling, reinforcement, finishing, and assembly supports creative commissions and specialist development work."
          />
          <div className="mt-14 grid gap-px bg-ink/10 lg:grid-cols-2">
            {productionRanges.map((range, rangeIndex) => (
              <article key={range.title} className="bg-porcelain p-8 md:p-10">
                <p className="font-display text-5xl text-bronze">0{rangeIndex + 1}</p>
                <h3 className="mt-7 text-xs font-semibold uppercase tracking-brand text-ink">
                  {range.title}
                </h3>
                <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {range.items.map((item) => (
                    <li key={item} className="border-t border-ink/10 pt-4 leading-7 text-ink/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-6">
            <Link
              href="/fabrication"
              className="text-xs font-semibold uppercase tracking-brand text-bronze"
            >
              Explore Fabrication →
            </Link>
            <Link
              href="/services/composite-fabrication"
              className="text-xs font-semibold uppercase tracking-brand text-bronze"
            >
              Composite Capabilities →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Manufacturing Capabilities"
            title="A fast view of our production range."
            copy="Digital manufacturing, material-led fabrication, skilled handwork, and controlled finishing are coordinated around each project brief."
            light
          />
          <div className="mt-12 grid gap-px bg-porcelain/15 sm:grid-cols-2 lg:grid-cols-3">
            {manufacturingCapabilities.map((capability) => (
              <div key={capability} className="bg-ink p-8">
                <p className="font-display text-2xl leading-tight text-porcelain">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Confidential Projects · NDA Protected
              </p>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                What you see online is only part of what we build.
              </h2>
            </div>
            <div className="border-l-0 border-ink/10 lg:border-l lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                A significant portion of our commissioned fabrication, prototype, branded,
                and specialist production work is protected by confidentiality agreements.
                The public portfolio therefore represents only a limited selection of our
                actual production experience and capabilities.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Relevant private project experience may be discussed where contractually
                permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl bg-bronze px-6 py-14 text-porcelain md:px-12 md:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-porcelain/70">
                International Project Enquiries
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
                Have a complex object, environment or prototype to build?
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-porcelain/80">
                Send us your concept, drawings, 3D model, dimensions, intended use, and target
                finish. We can review the project and discuss an appropriate production
                strategy.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-fit shrink-0 bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-porcelain hover:text-ink"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
