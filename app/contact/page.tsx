import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { getIndustry } from "@/lib/industries";
import { parseSelectedProjects } from "@/lib/projects";
import { contactEmail } from "@/lib/contact-details";

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

export default function ContactPage({
  searchParams
}: {
  searchParams: { selected?: string | string[]; industry?: string | string[] };
}) {
  const initialSelected =
    searchParams.selected === undefined ? null : parseSelectedProjects(searchParams.selected);
  const initialIndustry =
    typeof searchParams.industry === "string" && getIndustry(searchParams.industry)
      ? searchParams.industry
      : "";
  return (
    <main className="page-shell">
      <div className="mb-10 max-w-4xl">
        <p className="eyebrow">Project enquiry · International fabrication</p>
        <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
          Tell us what needs to be built.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
          Build a project brief in four steps. Share what you know now; materials, production
          details and delivery arrangements can be reviewed with the scope.
        </p>
      </div>
      <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_0.8fr]">
        <ContactForm
          key={`${initialIndustry}:${initialSelected?.join(",") ?? "session"}`}
          initialSelected={initialSelected}
          initialIndustry={initialIndustry}
        />
        <aside className="space-y-8 lg:sticky lg:top-28">
          <section className="border-t border-ink/20 pt-6">
            <h2 className="font-display text-3xl">What happens next?</h2>
            <p className="mt-4 leading-8 text-ink/75">
              Our team reviews your brief and responds using the details you provide. We may ask for
              drawings, clarify the intended use or suggest a production approach before preparing a
              quotation.
            </p>
          </section>
          <section className="border-t border-ink/20 pt-6">
            <h2 className="font-display text-3xl">Confidential project?</h2>
            <p className="mt-4 leading-8 text-ink/75">
              Request an NDA in step 3. Send a non-confidential outline first, then exchange
              detailed files after the terms are agreed.
            </p>
          </section>
          <section className="border-t border-ink/20 pt-6">
            <h2 className="font-display text-3xl">A little guidance</h2>
            <p className="mt-4 leading-8 text-ink/75">
              Unsure about file formats, material choices or international delivery?
            </p>
            <Link href="/planning" className="text-link mt-4 inline-block">
              Read the planning guide →
            </Link>
          </section>
          <section className="border-t border-ink/20 pt-6">
            <h2 className="font-display text-3xl">Contact the studio</h2>
            <a href={"mailto:" + contactEmail} className="text-link mt-5 block break-words">
              {contactEmail}
            </a>
            <a href="tel:+905436268969" className="mt-4 block leading-7">
              Project director: +90 543 626 89 69
            </a>
            <a href="tel:+905327438441" className="mt-3 block leading-7">
              Fabrication director: +90 532 743 84 41
            </a>
            <a
              href="https://wa.me/905436268969"
              target="_blank"
              rel="noreferrer"
              className="text-link mt-4 inline-block"
            >
              WhatsApp ↗
            </a>
            <address className="mt-6 not-italic leading-8 text-ink/75">
              Karadeniz Caddesi No:131, Ferhatpaşa
              <br />
              Ataşehir, Istanbul, Türkiye
            </address>
            <a
              className="mt-3 inline-block underline underline-offset-4"
              href="https://www.google.com/maps?q=Karadeniz%20Caddesi%20No%3A131%2C%20Ferhatpa%C5%9Fa%2C%20Ata%C5%9Fehir%2C%20Istanbul%2C%20Turkey"
              target="_blank"
              rel="noreferrer"
            >
              View location ↗
            </a>
            <p className="mt-5 text-sm text-ink/70">Enquiries in English or Turkish.</p>
          </section>
        </aside>
      </div>
    </main>
  );
}
