import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Commercial & Thematic Interiors | Ardıç Design & Fabrication",
  description:
    "Discover immersive commercial and themed interior environments designed and fabricated by Ardıç. From hospitality venues and retail concepts to visitor attractions and entertainment destinations."
};

const projectSlots = ["01", "02", "03", "04"];

export default function CommercialThematicInteriorsPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/works"
            className="text-sm font-semibold uppercase tracking-brand text-bronze transition hover:text-ink"
          >
            ← Works
          </Link>

          <div className="mt-10">
            <SectionHeading
              eyebrow="Portfolio Category"
              title="Commercial & Thematic Interiors"
              copy="Immersive themed environments crafted for hospitality, entertainment, retail, and destination experiences."
            />
          </div>

          <div className="mt-14 grid gap-10 border-y border-ink/10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="font-display text-4xl leading-tight text-ink md:text-5xl">
              Built environments with atmosphere, story, and commercial presence.
            </p>
            <div className="space-y-6 text-lg leading-8 text-ink/65">
              <p>
                We design and fabricate immersive commercial environments that transform spaces
                into memorable experiences. From themed restaurants and hospitality venues to
                visitor attractions, retail concepts, and entertainment destinations, each project
                is developed through a seamless integration of design, fabrication, and on-site
                execution.
              </p>
              <p>
                Our work combines architectural thinking, sculptural craftsmanship, custom
                production, and material expertise to create environments that engage visitors and
                strengthen brand identity. Whether the objective is storytelling, atmosphere, or
                commercial impact, every project is tailored to its context and built with
                long-term durability in mind.
              </p>
              <p>
                Selected projects showcase our ability to deliver complete environments, from
                concept development and technical detailing to fabrication, installation, and final
                execution.
              </p>
            </div>
          </div>

          <section className="mt-16">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Selected Projects
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
                  Project archive structure.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-ink/55">
                Image slots reserved for future project case studies.
              </p>
            </div>

            <div className="mt-10 grid gap-px bg-ink/10 md:grid-cols-2">
              {projectSlots.map((slot) => (
                <article key={slot} className="bg-porcelain p-7 md:p-9">
                  <div className="flex aspect-[4/3] items-center justify-center border border-ink/10 bg-white">
                    <p className="text-xs font-semibold uppercase tracking-brand text-ink/35">
                      Future Project {slot}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
