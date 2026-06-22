import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export default function AboutPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="About"
            title="A design and fabrication studio with a maker’s discipline."
            copy="Ardıç creates premium architectural features, installations, artworks, and themed environments for clients who need more than decoration."
          />
          <div className="relative aspect-[4/3] overflow-hidden bg-ink shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80"
              alt="Premium architectural interior placeholder"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          {[
            ["01", "Architectural Luxury", "Clean forms, tactile finishes, and restrained drama."],
            ["02", "Technical Control", "Design decisions are aligned with fabrication realities early."],
            ["03", "Memorable Delivery", "Every detail is judged by how it lives in the finished space."]
          ].map(([number, title, copy]) => (
            <article key={title} className="border-t border-ink/15 pt-8">
              <p className="font-display text-5xl text-bronze">{number}</p>
              <h2 className="mt-8 text-xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
