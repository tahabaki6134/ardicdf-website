import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Design and fabrication services for brand installations, architectural decor, sculptures, artworks, thematic spaces, CNC production, finishing, and installation.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Services",
    description:
      "Premium project services spanning design direction, CNC fabrication, sculptural production, architectural decor, and site-ready installation.",
    url: "/services"
  }
};

const serviceImages: Record<string, string> = {
  "Brand Installations": "/services/brand-nyx-bottle.jpeg",
  "Architectural Decor": "/services/architectural-decor-columns.jpeg",
  "Sculptures & Artworks": "/services/sculpture-elephant-front.jpeg",
  "Thematic Spaces": "/services/thematic-spongebob-patrick.jpeg",
  "Industrial 3D Printing": "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg",
  "Composite Fabrication & Mold Making":
    "/projects/portfolio/molds-composite-production/molds-composite-production-03.jpeg"
};

const serviceImagePositions: Record<string, string> = {
  "Brand Installations": "50% 45%",
  "Architectural Decor": "50% 42%",
  "Sculptures & Artworks": "50% 35%",
  "Thematic Spaces": "48% 45%",
  "Industrial 3D Printing": "50% 42%",
  "Composite Fabrication & Mold Making": "50% 58%"
};

const serviceImageAlts: Record<string, string> = {
  "Composite Fabrication & Mold Making":
    "CNC-shaped master pattern prepared for composite mold production"
};

const serviceLinks: Record<string, { href: string; label: string }> = {
  "Thematic Spaces": {
    href: "/services/themed-environment-fabrication",
    label: "Explore Themed Environment Fabrication"
  },
  "Composite Fabrication & Mold Making": {
    href: "/services/composite-fabrication",
    label: "Explore Composite Fabrication"
  }
};

const compositeService = {
  title: "Composite Fabrication & Mold Making",
  description:
    "Molds, masters, plugs, fiberglass / GRP, polyester casting, carbon fiber lamination, polyurethane, and custom composite components for prototype, architectural, marine, and specialist fabrication projects."
};

const servicesPageItems = [...services, compositeService];

export default function ServicesPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <SectionHeading
              eyebrow="Services"
              headingTag="h1"
              title="Design services shaped around lasting presence."
              copy="As an EPSLAM company, Ardıç supports clients from early spatial ideas to finished physical work, balancing aesthetic ambition with buildable detail, fabrication logic, and installation planning."
            />

            <div className="relative min-h-[340px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[460px]">
              <Image
                src="/services/architectural-decor-relief.jpeg"
                alt="CNC carved decorative architectural relief"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 45%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
          </div>

          <section className="mt-16 border-y border-bronze/35 bg-white/65 px-6 py-10 shadow-soft md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  CONFIDENTIAL PROJECTS · NDA PROTECTED
                </p>
                <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-ink md:text-5xl">
                  What you see is only part of what we build.
                </h2>
              </div>
              <div className="border-l border-ink/10 pl-0 lg:pl-10">
                <p className="text-lg leading-8 text-ink/70">
                  Much of our work is confidential. Many commissioned projects are
                  protected by non-disclosure agreements, so our public portfolio
                  represents only a limited selection of our actual production capabilities.
                </p>
                <p className="mt-6 text-sm font-semibold uppercase leading-7 tracking-brand text-bronze">
                  Private project references and relevant production experience can be
                  discussed where contractually permitted.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-16 grid gap-px bg-ink/10 lg:grid-cols-2 lg:auto-rows-fr">
            {servicesPageItems.map((service, index) => (
              <article key={service.title} className="h-full bg-porcelain">
                <div className="grid h-full md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-64 overflow-hidden bg-ink md:min-h-full">
                    <Image
                      src={serviceImages[service.title]}
                      alt={serviceImageAlts[service.title] ?? `${service.title} service visual`}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-[1.015]"
                      style={{ objectPosition: serviceImagePositions[service.title] }}
                    />
                  </div>
                  <div className="flex min-h-80 flex-col justify-between border border-ink/10 p-7 md:p-9">
                    <div>
                      <p className="font-display text-4xl leading-none text-bronze/80">
                        {`${index + 1}`.padStart(2, "0")}
                      </p>
                      <h2 className="mt-5 font-display text-3xl leading-tight text-ink md:text-4xl">
                        {service.title}
                      </h2>
                      <div className="mt-5 h-px w-16 bg-bronze" />
                      <p className="mt-6 text-base leading-7 text-ink/65 md:text-lg md:leading-8">
                        {service.description}
                      </p>
                      {serviceLinks[service.title] ? (
                        <Link
                          href={serviceLinks[service.title].href}
                          className="mt-7 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
                        >
                          {serviceLinks[service.title].label} →
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 flex justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-block bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze"
            >
              Discuss a Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
