import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

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

const mapsUrl =
  "https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20Turkey";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Start a Project with a Design & Fabrication Partner."
            copy="For international and Turkey-based clients planning themed environments, sculptural objects, architectural decor, brand installations, or large-scale fabrication, share the brief and our team will define the next production step."
          />

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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Start Your Project
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Tell us what needs to be built.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/60">
              From concept development to fabrication, finishing, and installation, Ardıç
              delivers complete design and production solutions under one roof.
            </p>
            <p className="mt-6 max-w-xl leading-8 text-ink/60">
              Share the project location, approximate scope, required objects or environments,
              and any timing or installation constraints. Our team will review your enquiry and
              respond with the right next step.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
