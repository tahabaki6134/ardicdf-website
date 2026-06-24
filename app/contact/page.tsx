import Link from "next/link";
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
      value: "Message Project Director",
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

const projectTypes = [
  "Thematic Environment",
  "Sculptural Object",
  "Architectural Decor",
  "Brand Installation",
  "Large-Scale Fabrication",
  "Other"
];

const mapsUrl =
  "https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20T%C3%BCrkiye";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Bring Us a Space, an Object, or an Impossible Detail."
            copy="For custom environments, sculptural objects, architectural decor, branded experiences, and large-scale fabrication projects, start with a conversation."
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
                Türkiye
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
                Integrated design, digital production, sculptural fabrication, finishing, and
                installation coordination from Istanbul.
              </p>
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
              Start with the requirement. We will shape the production path.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-ink/60">
              From concept development to fabrication, finishing, and installation, Ardıç
              delivers complete design and production solutions under one roof.
            </p>
            <p className="mt-6 max-w-xl leading-8 text-ink/60">
              Tell us about your project, environment, installation, sculpture, architectural
              feature, or fabrication requirement. Our team will review your inquiry and get
              back to you.
            </p>
          </div>

          <form className="grid gap-5 bg-white p-8 shadow-soft md:p-10">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Full Name
                </span>
                <input
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Company
                </span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
                />
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Phone Number
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Project Type
              </span>
              <select
                name="projectType"
                required
                className="mt-3 w-full border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition focus:border-bronze"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a project type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Message
              </span>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-3 w-full resize-none border border-ink/10 bg-porcelain px-4 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-bronze"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Start a Project
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
