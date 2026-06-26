import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fabrication",
  description:
    "Ardıç fabrication capabilities include CNC routing, EPS/XPS foam processing, sculpture production, decorative architectural elements, mold manufacturing, polyester casting, finishing, and installation.",
  alternates: {
    canonical: "/fabrication"
  },
  openGraph: {
    title: "Fabrication",
    description:
      "Integrated workshop infrastructure for CNC production, EPS/XPS shaping, sculptural fabrication, molds, casting, finishing, painting, assembly, and installation.",
    url: "/fabrication"
  }
};

const capabilities = [
  {
    number: "01",
    title: "CNC Fabrication",
    copy: "Precision-cut parts, reliefs, and structural bases prepared for custom architectural and sculptural production."
  },
  {
    number: "02",
    title: "EPS / XPS Processing",
    copy: "Lightweight foam shaping for large scenic forms, organic structures, and production-ready installation bases."
  },
  {
    number: "03",
    title: "Sculpture Production",
    copy: "Character figures, organic forms, and statement objects built through sculpting, coating, painting, and finishing."
  },
  {
    number: "04",
    title: "Decorative Architectural Elements",
    copy: "Columns, capitals, reliefs, ornaments, and facade details produced to specification."
  },
  {
    number: "05",
    title: "Mold Manufacturing",
    copy: "Repeatable mold systems for reliable production, consistent detailing, and composite casting workflows."
  },
  {
    number: "06",
    title: "Polyester Casting",
    copy: "Durable composite casting for decorative, thematic, and architectural applications requiring repeatable quality."
  },
  {
    number: "07",
    title: "Large-Scale Fabrication",
    copy: "Oversized objects and spatial installations planned for production, transport, assembly, and site use."
  },
  {
    number: "08",
    title: "3D Printing Technology",
    copy: "Rapid prototyping and precision detail support for custom objects and production studies."
  }
];

const workflow = [
  "Concept Development",
  "Digital Modeling",
  "Fabrication",
  "Finishing & Coating",
  "Installation"
];

const infrastructure = [
  "CNC Routing Systems",
  "EPS / XPS Processing Facility",
  "Sculpture Workshop",
  "Mold Manufacturing Department",
  "Polyester Casting Area",
  "3D Printing Lab",
  "Finishing & Surface Treatment Area",
  "Installation & Assembly Team"
];

const projectTypes = [
  {
    title: "Theme Parks",
    copy: "Immersive scenic elements built for durable guest experiences."
  },
  {
    title: "Hotels & Resorts",
    copy: "Custom objects and atmosphere-defining features for hospitality spaces."
  },
  {
    title: "Retail Environments",
    copy: "Brand-led displays, fixtures, and fabricated commercial moments."
  },
  {
    title: "Museums & Cultural Spaces",
    copy: "Interpretive objects and cultural environments produced with precision."
  },
  {
    title: "Public Installations",
    copy: "Large-format works planned for visibility, longevity, and site use."
  },
  {
    title: "Branded Experiences",
    copy: "Promotional objects and spatial installations with strong identity."
  },
  {
    title: "Character Sculptures",
    copy: "Expressive figures, mascots, and sculptural forms for themed settings."
  },
  {
    title: "Architectural Decor",
    copy: "Columns, reliefs, ornaments, and decorative surfaces made to order."
  }
];

const scaleStats = [
  "12+ Years of Manufacturing Experience",
  "600 m² Indoor Facility",
  "400 m² Outdoor Production Area",
  "5 Industrial 3D Printers",
  "Multiple CNC Production Systems",
  "In-House Sculpture Team",
  "End-to-End Project Delivery"
];

export default function FabricationPage() {
  return (
    <main>
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
              As an EPSLAM company, Ardıç connects digital modeling, CNC fabrication, EPS/XPS
              processing, sculpture, mold production, polyester casting, finishing, painting,
              assembly, and installation under one roof.
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Production Capabilities
            </p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">
              Integrated tools for custom physical work.
            </h2>
            <p className="mt-6 max-w-2xl leading-8 text-ink/60">
              Backed by EPSLAM&apos;s fabrication infrastructure and long-term family production
              experience, the workshop supports international clients who need buildable detail,
              controlled finishes, and coordinated delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="flex min-h-72 flex-col bg-porcelain p-7 md:p-8"
              >
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {capability.number}
                </p>
                <h3 className="mt-9 max-w-[13rem] text-xl font-semibold leading-tight text-ink">
                  {capability.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Production Workflow
            </p>
            <h2 className="mt-7 max-w-lg font-display text-4xl leading-tight text-ink md:text-5xl">
              A controlled path from idea to installation.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-ink/60">
              Each phase is developed with the final scale, finish, coating system, transport,
              assembly sequence, and site conditions in mind.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-5">
            {workflow.map((step, index) => (
              <article key={step} className="relative min-h-44 bg-porcelain p-6">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-lg font-semibold leading-tight text-ink">{step}</h3>
                {index < workflow.length - 1 && (
                  <span className="absolute bottom-6 right-6 hidden text-2xl text-bronze/65 md:block">
                    →
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden border border-bronze/20 bg-porcelain/5 shadow-soft">
            <Image
              src="/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg"
              alt="CNC fabrication process in Ardıç workshop"
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
              Ardıç operates through EPSLAM&apos;s integrated fabrication infrastructure, where digital
              production, sculptural fabrication, mold systems, polyester casting, finishing,
              painting, assembly, and installation are coordinated under one roof.
            </p>
            <div className="mt-10 grid gap-px bg-porcelain/12 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <div key={item} className="bg-ink p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-porcelain">
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
              Ardıç supports projects that require custom fabrication, durable objects,
              expressive surfaces, and installation-ready components across commercial,
              cultural, hospitality, and entertainment contexts.
            </p>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {projectTypes.map((type) => (
              <article key={type.title} className="flex min-h-56 flex-col bg-porcelain p-7 md:p-8">
                <h3 className="font-display text-3xl leading-tight text-ink">{type.title}</h3>
                <div className="mt-6 h-px w-12 bg-bronze" />
                <p className="mt-6 text-sm leading-7 text-ink/60">{type.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Fabrication at Scale
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Fabrication at Scale
              </h2>
            </div>
            <p className="max-w-xl leading-8 text-ink/60">
              From concept models to full-scale installations, Ardıç supports production
              across custom objects, architectural surfaces, sculptural works, and
              site-ready environments.
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

      <section className="px-5 py-20 md:px-8 md:py-28">
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
              Bring your concept, object, installation, or environment into production
              with a team that understands both design intent and workshop execution.
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
