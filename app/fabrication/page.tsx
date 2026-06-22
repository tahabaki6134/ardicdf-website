import { capabilities } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export default function FabricationPage() {
  return (
    <main>
      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Fabrication"
            title="From workshop precision to site-ready installation."
            copy="The fabrication process is built for custom objects and environments where proportion, material behavior, finish, and installation all matter."
            light
          />
          <div className="mt-14 grid gap-px bg-porcelain/15 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-ink p-8">
                <p className="font-display text-3xl text-porcelain">{capability}</p>
                <p className="mt-5 leading-7 text-porcelain/60">
                  Planned with the finish, transport, and final installation conditions in mind.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
