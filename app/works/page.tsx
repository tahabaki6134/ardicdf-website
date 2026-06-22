import { works } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";

export default function WorksPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Works"
            title="A portfolio framework for memorable spaces and objects."
            copy="This first release uses refined placeholder project imagery and editorial project structure, ready for final case studies."
          />
          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            {works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
