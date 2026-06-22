import Link from "next/link";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export default function ServicesPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Design services shaped around lasting presence."
            copy="Ardıç supports clients from early spatial ideas to finished physical work, balancing aesthetic ambition with buildable detail."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="border-t border-ink/15 py-8">
                <h2 className="font-display text-4xl text-ink">{service.title}</h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-ink/65">{service.description}</p>
              </article>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-block bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze"
          >
            Discuss a Brief
          </Link>
        </div>
      </section>
    </main>
  );
}
