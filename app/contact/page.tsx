import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

const pageTitle = "Request a Quote | International Custom Fabrication | Ardıç";
const pageDescription =
  "Send your project brief to Ardıç Design & Fabrication in Istanbul. Request fabrication review for CNC, composites, molds, large-format 3D printing, scenic projects, prototypes and custom production.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/home/production-columns.png",
        alt: "Ardıç custom fabrication and sculptural production in Istanbul"
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

const contactRows = [
  [
    {
      title: "Project Director",
      value: "+90 543 626 89 69",
      href: "tel:+905436268969",
      whatsapp: "https://wa.me/905436268969"
    },
    {
      title: "WhatsApp",
      value: "Project Director",
      href: "https://wa.me/905436268969",
      external: true
    }
  ],
  [
    {
      title: "Fabrication Director",
      value: "+90 532 743 84 41",
      href: "tel:+905327438441",
      whatsapp: "https://wa.me/905327438441"
    },
    {
      title: "WhatsApp",
      value: "Fabrication Director",
      href: "https://wa.me/905327438441",
      external: true
    }
  ]
];

const rfqChecklist = [
  "3D model or drawings",
  "Overall dimensions",
  "Quantity",
  "Target finish",
  "Intended use",
  "Project location",
  "Target delivery date",
  "Reference images",
  "Preferred material, if known"
];

const capabilityLinks = [
  {
    label: "Themed Environments",
    href: "/services/themed-environment-fabrication"
  },
  {
    label: "Scenic Fabrication",
    href: "/services/scenic-fabrication"
  },
  {
    label: "CNC Foam & Polyurethane",
    href: "/services/cnc-foam-polyurethane-machining"
  },
  {
    label: "Composites & Molds",
    href: "/services/composite-fabrication"
  },
  {
    label: "Large-Format 3D Printing",
    href: "/services/large-format-3d-printing"
  },
  {
    label: "All Fabrication Capabilities",
    href: "/fabrication"
  }
];

const mapsUrl =
  "https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20Turkey";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Project Enquiry · International RFQ"
              headingTag="h1"
              title="Tell us what needs to be built."
              copy="Send us your concept, drawings, dimensions, 3D model information, quantity, project location, and target delivery date. Our team will review the fabrication requirements and determine an appropriate production route."
            />
            <p className="mt-7 max-w-2xl border-l border-bronze pl-5 leading-8 text-ink/60">
              Confidential enquiries are welcome. NDA-protected project information is handled
              as part of our normal project workflow.
            </p>
          </div>

          <div className="bg-white p-8 shadow-soft md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Contact Information
            </p>
            <div className="mt-8 space-y-px bg-ink/10">
              {contactRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid gap-px sm:grid-cols-2">
                  {row.map((block) => (
                    <article key={`${rowIndex}-${block.title}-${block.value}`} className="bg-white p-6">
                      <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                        {block.title}
                      </p>
                      <Link
                        href={block.href}
                        target={block.external ? "_blank" : undefined}
                        rel={block.external ? "noreferrer" : undefined}
                        className="mt-4 block font-display text-2xl leading-tight text-ink transition hover:text-bronze"
                      >
                        {block.value}
                      </Link>
                      {"whatsapp" in block && block.whatsapp ? (
                        <Link
                          href={block.whatsapp}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
                        >
                          WhatsApp
                        </Link>
                      ) : null}
                    </article>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Location
              </p>
              <address className="mt-4 not-italic text-xl leading-8 text-ink/70">
                Karadeniz Caddesi No:131
                <br />
                Ferhatpaşa
                <br />
                Ataşehir
                <br />
                Istanbul
                <br />
                Turkey
              </address>
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                View on Google Maps
              </Link>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Design & Fabrication Studio
              </p>
              <p className="mt-4 text-xl leading-8 text-ink/70">
                Integrated design, CNC production, sculptural fabrication, finishing, and
                installation coordination for Turkey-based and international project teams.
              </p>
              <Link
                href="mailto:taaha.baaki@gmail.com"
                className="mt-6 inline-flex text-xs font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
              >
                taaha.baaki@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl">
          <div className="overflow-hidden rounded-sm border border-ink/10 bg-white p-2 shadow-soft">
            <iframe
              title="Ardıç Design & Fabrication location on Google Maps"
              src={`${mapsUrl}&output=embed`}
              className="h-[360px] w-full rounded-sm border-0 md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              What to Send
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              The more context we receive, the faster we can understand the fabrication route.
            </h2>
            <ul className="mt-8 grid gap-x-7 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {rfqChecklist.map((item) => (
                <li key={item} className="border-t border-ink/10 pt-4 text-sm leading-6 text-ink/65">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl leading-8 text-ink/65">
              Not sure about the material or production method? Send the geometry and intended
              use — we can review the fabrication approach.
            </p>

            <div className="mt-12 border-y border-bronze/35 bg-white/65 px-6 py-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Confidential Projects · NDA Protected
              </p>
              <h3 className="mt-5 font-display text-3xl leading-tight text-ink">
                You do not need to publish the project to discuss it with us.
              </h3>
              <p className="mt-5 leading-7 text-ink/65">
                Many prototype, branded, architectural, and specialist fabrication enquiries
                are confidential. If your project requires an NDA before detailed drawings or
                3D files are exchanged, indicate this in the enquiry form.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-ink/10 pt-10">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Relevant Capabilities
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-5">
            {capabilityLinks.map((capability) => (
              <Link
                key={capability.href}
                href={capability.href}
                className="border-b border-bronze/50 pb-2 text-xs font-semibold uppercase tracking-brand text-ink transition hover:border-bronze hover:text-bronze"
              >
                {capability.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
