import Image from "next/image";
import Link from "next/link";
import { brand, capabilities, heroSlides, services, works } from "@/lib/content";
import { HomeHeroSlider } from "@/components/home-hero-slider";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";

export default function Home() {
  return (
    <main>
      <HomeHeroSlider slides={heroSlides} />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What We Do"
            title="Objects, environments, and installations with architectural weight."
            copy="Ardıç brings together creative direction, material intelligence, and hands-on production for ambitious commercial and cultural spaces."
          />
          <div className="mt-14 grid gap-px bg-ink/10 md:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="bg-porcelain p-7 md:min-h-72">
                <p className="font-display text-5xl text-bronze">0{index + 1}</p>
                <h3 className="mt-12 text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-4 leading-7 text-ink/60">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 grid gap-px bg-ink/10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] overflow-hidden bg-ink md:min-h-[460px]">
              <Image
                src="/home/brand-story-lobby.jpeg"
                alt="Dark premium lobby with natural rock forms and Ardic wall branding"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-end bg-ink p-8 text-porcelain md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                {brand.tagline}
              </p>
              <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                A studio language shaped by atmosphere, material, and memory.
              </h3>
              <p className="mt-6 leading-8 text-porcelain/65">
                Every environment is developed with the presence of a place, not just the finish of
                an object.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Works"
              title="Selected project studies."
              copy="Placeholder imagery sets the tone for the first production-ready release while the portfolio is curated."
            />
            <Link href="/works" className="text-sm font-semibold uppercase tracking-brand text-bronze">
              See all works
            </Link>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-porcelain md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Design + Fabrication Under One Roof"
            title="A direct line from idea to install."
            copy="Strategy, detailing, sampling, production, finishing, logistics, and installation are treated as one continuous craft process."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative min-h-[360px] overflow-hidden border border-porcelain/15 bg-ink sm:col-span-2">
              <Image
                src="/home/production-columns.png"
                alt="White Corinthian column production and sculptural fabrication details"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            {["Concept", "Engineering", "Fabrication", "Installation"].map((item) => (
              <div key={item} className="border border-porcelain/15 p-7">
                <p className="font-display text-4xl text-bronze">{item}</p>
                <p className="mt-4 leading-7 text-porcelain/65">
                  Refined decisions, controlled tolerances, and a finish-led approach at every stage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Manufacturing Capabilities"
            title="Built for demanding custom production."
            copy="The studio works across metals, woods, composites, lighting-ready forms, textures, and installation systems."
          />
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-porcelain p-8">
                <p className="font-display text-3xl text-ink">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-7xl bg-bronze px-6 py-14 text-porcelain md:px-12 md:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-porcelain/70">Contact</p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl leading-tight md:text-7xl">
                Let’s build a place people remember.
              </h2>
            </div>
            <Link
              href="/contact"
              className="w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-porcelain hover:text-ink"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
