import Link from "next/link";
import { brand } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Bring us the space, the object, or the impossible detail."
            copy="For new commissions, brand environments, custom architectural decor, sculptures, and thematic spaces, start with a call or a visit."
          />
          <div className="bg-white p-8 shadow-soft md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Phone</p>
            <Link href="tel:+905436268969" className="mt-4 block font-display text-4xl text-ink">
              {brand.phone}
            </Link>
            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Location</p>
              <p className="mt-4 max-w-xl text-xl leading-8 text-ink/70">{brand.location}</p>
            </div>
            <div className="mt-10 border-t border-ink/10 pt-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Studio</p>
              <p className="mt-4 text-xl leading-8 text-ink/70">
                Architectural design, premium fabrication, and installation coordination from Istanbul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
