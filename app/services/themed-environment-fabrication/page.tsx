import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.ardicdf.com";
const pagePath = "/services/themed-environment-fabrication";
const pageUrl = `${siteUrl}${pagePath}`;
const pageTitle = "Themed Environment Fabrication | International Production | Ardıç";
const pageDescription =
  "International themed environment fabrication from Istanbul. Custom scenic elements, sculptures, architectural decor, CNC EPS/XPS production and modular project delivery.";

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
        url: "/home/hero-roman-heritage.jpeg",
        alt: "Themed architectural environment with sculptural columns and historical stone details"
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

const capabilities = [
  "Themed environments",
  "Scenic fabrication",
  "Custom sculptures",
  "Character and prop fabrication",
  "Artificial rock and organic forms",
  "Architectural decorative elements",
  "CNC EPS / XPS production",
  "Large-format 3D printing",
  "Mold and composite production",
  "Surface finishing and painting",
  "Modular production",
  "Installation-ready components"
];

const workflow = [
  {
    number: "01",
    title: "Design & Technical Development",
    copy: "We review the creative intent, drawings, dimensions, materials, site conditions, and assembly requirements to define a buildable production approach."
  },
  {
    number: "02",
    title: "CNC / Digital Production",
    copy: "Digital models are translated into precisely shaped EPS, XPS, molds, patterns, prototypes, and production components."
  },
  {
    number: "03",
    title: "Sculptural Fabrication",
    copy: "Forms are assembled, sculpted, detailed, and prepared by our in-house team to achieve the required scale and visual character."
  },
  {
    number: "04",
    title: "Coating & Surface Finishing",
    copy: "Protective coatings, textures, painting, and specialist finishes are applied with the final environment and performance requirements in mind."
  },
  {
    number: "05",
    title: "Modular Assembly",
    copy: "Where appropriate, large elements are developed as coordinated modules for controlled workshop assembly and practical site installation."
  },
  {
    number: "06",
    title: "Packing & International Delivery",
    copy: "Completed components are prepared for packing, transport, and handover with the assembly logic needed for their destination."
  }
];

const relatedWork = [
  {
    title: "Artificial Rock & Organic Forms",
    copy: "Scenic rockwork, nature-inspired structures, and organic forms shaped for immersive environments.",
    href: "/works/artificial-rock-organic-forms",
    image:
      "/projects/portfolio/artificial-rock-organic-forms/organic-stone-feature-lounge-interior-01.png",
    alt: "Organic stone feature integrated into a premium interior environment",
    position: "50% 50%"
  },
  {
    title: "Sculptures & Characters",
    copy: "Custom figures, characters, props, and sculptural objects developed for memorable physical experiences.",
    href: "/works/sculptures-characters",
    image: "/services/sculpture-elephant-wide.jpeg",
    alt: "Large-scale sculptural elephant installed within a themed interior",
    position: "50% 42%"
  },
  {
    title: "Thematic Environments",
    copy: "Architectural elements, scenic details, and reference-led environments translated into fabricated form.",
    href: "/works/historical-thematic-environments",
    image:
      "/projects/portfolio/historical-thematic-environments/eagle-relief-wall-with-decorative-columns-01.png",
    alt: "Thematic architectural wall with sculptural eagle relief and decorative columns",
    position: "50% 50%"
  },
  {
    title: "CNC & Fabrication Process",
    copy: "Production-stage work across digitally shaped forms, foam components, and fabrication preparation.",
    href: "/works/cnc-manufacturing-processes",
    image:
      "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg",
    alt: "Large CNC-shaped foam component in the Ardıç fabrication workshop",
    position: "50% 46%"
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
          name: "Themed Environment Fabrication",
          item: pageUrl
        }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}/#service`,
      name: "Themed Environment Fabrication",
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
        "Themed environment fabrication",
        "Scenic fabrication",
        "Sculptural fabrication",
        "Architectural decor"
      ]
    }
  ]
};

export default function ThemedEnvironmentFabricationPage() {
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
              International Fabrication
            </p>
            <h1 className="mt-7 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Themed Environment Fabrication for International Projects
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design &amp; Fabrication produces custom themed environments, scenic
              elements, sculptural features, and architectural decor for commercial,
              entertainment, hospitality, and destination projects. From our Istanbul
              production facility, we support international projects with design development,
              CNC production, EPS/XPS shaping, sculpture, molds, coatings, finishing, modular
              assembly, and delivery-ready fabrication.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex justify-center bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze sm:justify-start"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/fabrication"
                className="inline-flex justify-center border border-ink/25 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze sm:justify-start"
              >
                View Fabrication Capabilities
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[620px]">
            <Image
              src="/home/hero-roman-heritage.jpeg"
              alt="Themed architectural environment with sculptural columns and historical stone details"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-porcelain/10" />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Production Capabilities
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              From concept to physical environment.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/65">
              We work with architects, designers, project managers, contractors, and creative
              agencies to turn ambitious spatial ideas into coordinated, buildable components.
              Our integrated process connects technical development with workshop production,
              helping each element retain its intended scale, character, finish, and assembly
              logic.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <Link
                href="/works/modular-artificial-rock-concert-environment"
                className="inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                Read the Modular Artificial Rock Concert Environment Case Study →
              </Link>
              <Link
                href="/services/scenic-fabrication"
                className="inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                Explore Scenic Fabrication →
              </Link>
            </div>
          </div>

          <ul className="grid gap-px bg-ink/10 sm:grid-cols-2" aria-label="Themed fabrication capabilities">
            {capabilities.map((capability, index) => (
              <li key={capability} className="flex min-h-24 items-center gap-5 bg-porcelain p-6">
                <span className="font-display text-2xl text-bronze/80">
                  {`${index + 1}`.padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold uppercase leading-6 tracking-[0.11em] text-ink">
                  {capability}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-b border-ink/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Production Workflow
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                A coordinated path from brief to delivery.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Every stage is considered in relation to the finished environment, including
              visual intent, structural logic, surface quality, transport, and site assembly.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.number} className="flex min-h-72 flex-col bg-porcelain p-7 md:p-8">
                <p className="font-display text-4xl leading-none text-bronze/75">{step.number}</p>
                <h3 className="mt-9 max-w-xs text-xl font-semibold leading-tight text-ink">
                  {step.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              International Project Delivery
            </p>
            <h2 className="mt-7 max-w-2xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Built in Istanbul. Prepared for projects worldwide.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-9 text-porcelain/70">
              Large-scale scenic and architectural elements can be engineered and fabricated as
              modular components where appropriate, simplifying packing, transport, and site
              assembly while maintaining the intended visual result.
            </p>
            <p className="mt-6 max-w-2xl leading-8 text-porcelain/60">
              From Istanbul, Ardıç supports project teams working across Europe, the United
              Kingdom, Switzerland, the Middle East, and worldwide with production planning,
              clear fabrication logic, and delivery-ready components.
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
                Our public portfolio shows only part of our production experience.
              </h2>
            </div>
            <div className="border-l border-ink/10 pl-0 lg:pl-10">
              <p className="text-lg leading-8 text-ink/70">
                Much of our commissioned work is confidential and protected by non-disclosure
                agreements. For this reason, the projects shown publicly represent only a
                limited selection of our actual fabrication experience and production
                capabilities.
              </p>
              <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                Relevant private project experience may be discussed where contractually
                permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Related Work
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Explore relevant production experience.
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              Selected public galleries offer a closer view of the forms, environments, and
              fabrication processes connected to themed project production.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 md:grid-cols-2">
            {relatedWork.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group flex h-full flex-col bg-porcelain"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.015]"
                    style={{ objectPosition: item.position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col border border-ink/10 p-7 md:p-8">
                  <p className="font-display text-3xl leading-none text-bronze/80">
                    {`${index + 1}`.padStart(2, "0")}
                  </p>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60">{item.copy}</p>
                  <span className="mt-auto pt-8 text-xs font-semibold uppercase tracking-brand text-bronze transition group-hover:text-ink">
                    View Gallery →
                  </span>
                </div>
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
                Start a Conversation
              </p>
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Planning a themed environment project?
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-porcelain/70">
                Send us your project brief, drawings, dimensions, or reference material. We can
                review the fabrication requirements and discuss the most suitable production
                approach.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
