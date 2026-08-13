import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { conceptCollections, conceptProcess } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Concepts & Sculptural Design | Ardıç"
  },
  description:
    "Explore Ardıç design concepts and development studies for sculptural objects, custom interiors, furniture, thematic elements, and adaptable spatial ideas.",
  alternates: {
    canonical: "/concepts"
  },
  openGraph: {
    title: "Custom Concepts & Sculptural Design | Ardıç",
    description:
      "Original design concepts and development studies for adaptable interiors, sculptural objects, furniture, and thematic spatial elements.",
    url: "/concepts"
  }
};

export default function ConceptsPage() {
  const conceptIndex = conceptCollections.map((concept) => ({
    href: `#${concept.number.toLowerCase()}`,
    number: concept.number,
    title: concept.title
  }));

  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Signature Concepts
            </p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              Signature Concepts
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-ink/65">
              Original design concepts and development studies prepared for adaptation and
              potential in-house fabrication.
            </p>
            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç Design & Fabrication develops original concept interiors,
              sculptural objects, seating groups, mirrors, thematic elements, and
              custom-made design pieces. These are exploratory concept and development studies,
              rather than a record of completed client commissions. Each direction can be adapted to the dimensions,
              atmosphere, and functional needs of your own space, then produced through
              our in-house fabrication workflow.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex border border-ink bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:border-bronze hover:bg-bronze hover:text-ink"
              >
                Start a Project
              </Link>
              <div className="h-px w-16 bg-bronze" />
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[560px]">
            <Image
              src="/projects/concepts/olive-lounge-concept-interior-01.png"
              alt="Olive Lounge Concept interior with olive green seating and warm wood atmosphere"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 48%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 border border-porcelain/15 bg-ink/55 p-5 backdrop-blur-sm md:left-auto md:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                SC-001
              </p>
              <p className="mt-3 font-display text-2xl leading-tight text-porcelain">
                Adaptable lounge atmosphere with sculptural detail and warm material depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <article className="border border-ink/10 bg-porcelain p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              From Concept to Your Space
            </p>
            <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">
              From Concept to Your Space
            </h2>
            <p className="mt-7 leading-8 text-ink/65">
              Our signature concepts are not fixed catalog products. They are adaptable
              design systems. We refine the scale, materials, colors, lighting, furniture
              pieces, sculptural elements, and architectural details according to the
              client&apos;s space, then manufacture the approved design with our own production
              capabilities.
            </p>
          </article>

          <article className="border border-ink/10 bg-ink p-8 text-porcelain md:p-10">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Designed, Adapted, Manufactured
            </p>
            <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
              Designed, Adapted, Manufactured
            </h2>
            <p className="mt-7 leading-8 text-porcelain/70">
              Whether it is a lounge corner, a reception area, a themed room, a commercial
              interior, a sculptural mirror, a custom chair, or a futuristic pod element,
              we transform our concept ideas into physical, site-specific pieces.
            </p>
          </article>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-ink/10 pb-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <SectionHeading
              eyebrow="Concept Collection"
              title="Original concept lines prepared for adaptation."
            />
            <p className="max-w-xl leading-8 text-ink/60">
              Each Signature Concept begins as an Ardıç design language, then becomes a
              tailored proposal for the dimensions, function, atmosphere, materials, and
              production needs of a real space.
            </p>
          </div>

          <nav className="mt-10 border border-ink/10 bg-white/45 p-4 lg:hidden" aria-label="Concept index">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Concept Index
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {conceptIndex.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border border-ink/10 bg-porcelain px-4 py-3 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-ink/70 transition hover:border-bronze hover:text-bronze"
                >
                  <span className="block text-bronze">{item.number}</span>
                  <span className="mt-1 block normal-case tracking-[0.02em] text-ink">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="space-y-12">
              {conceptCollections.map((concept, index) => (
                <article
                  id={concept.number.toLowerCase()}
                  key={concept.number}
                  className="grid scroll-mt-32 overflow-hidden border border-ink/10 bg-porcelain lg:grid-cols-[1.05fr_0.95fr]"
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    {concept.image ? (
                      <figure className="h-full">
                        <div className="relative min-h-[340px] bg-ink md:min-h-[520px]">
                          <Image
                            src={concept.image}
                            alt={concept.imageAlt ?? `${concept.title} concept visual`}
                            fill
                            sizes="(min-width: 1024px) 48vw, 100vw"
                            className="object-cover"
                            style={{ objectPosition: index === 0 ? "50% 48%" : "50% 50%" }}
                          />
                        </div>
                        <figcaption className="border-t border-ink/10 bg-white/35 px-6 py-3 text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.14em] text-ink/50">
                          {concept.imageCaption}
                        </figcaption>
                      </figure>
                    ) : (
                      <div className="flex min-h-[340px] flex-col justify-between bg-ink p-8 text-porcelain md:min-h-[520px] md:p-10">
                        <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                          Adaptable Element Family
                        </p>
                        <div>
                          <div className="h-px w-16 bg-bronze" />
                          <p className="mt-8 max-w-md font-display text-4xl leading-tight">
                            Sculptural objects, furniture, relief surfaces, mirrors, and
                            brand-specific features.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <p className="font-display text-5xl leading-none text-bronze/80">
                      {concept.number}
                    </p>
                    <h2 className="mt-7 font-display text-4xl leading-tight text-ink md:text-5xl">
                      {concept.title}
                    </h2>
                    <div className="mt-6 h-px w-16 bg-bronze" />
                    <p className="mt-7 leading-8 text-ink/65">{concept.description}</p>
                    <div className="mt-9 grid gap-3 sm:grid-cols-2">
                      {concept.adaptableElements.map((element) => (
                        <div key={element} className="border border-ink/10 bg-white/55 p-4">
                          <p className="text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-ink/65">
                            {element}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {concept.galleryImages?.length ? (
                    <div className="border-t border-ink/10 p-6 md:p-8 lg:col-span-2">
                      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                            Material & Detail Views
                          </p>
                          <h3 className="mt-3 font-display text-3xl leading-tight text-ink">
                            Concept Detail Visuals
                          </h3>
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-brand text-ink/45">
                          {concept.galleryImages.length} Images
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {concept.galleryImages.map((image) => (
                          <figure
                            key={image.src}
                            className="group border border-ink/10 bg-white/35 p-2"
                          >
                            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
                                className="object-cover transition duration-700 group-hover:scale-[1.015]"
                                style={{ objectPosition: image.position ?? "50% 50%" }}
                              />
                            </div>
                            <figcaption className="px-2 pb-1 pt-3 text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.14em] text-ink/50">
                              {image.caption}
                            </figcaption>
                          </figure>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>

            <aside className="sticky top-36 hidden lg:block">
              <nav className="border border-ink/10 bg-white/55 p-6 shadow-soft" aria-label="Concept index">
                <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                  Concept Index
                </p>
                <div className="mt-5 space-y-2">
                  {conceptIndex.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block border border-ink/10 bg-porcelain px-4 py-4 transition hover:border-bronze hover:bg-white"
                    >
                      <span className="block font-display text-2xl leading-none text-bronze">
                        {item.number}
                      </span>
                      <span className="mt-3 block text-sm font-semibold leading-5 text-ink">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                How It Works
              </p>
              <h2 className="mt-7 max-w-md font-display text-4xl leading-tight text-ink md:text-5xl">
                How It Works
              </h2>
              <p className="mt-7 max-w-md leading-8 text-ink/60">
                A concept can remain intimate and residential or expand into a full
                commercial environment. The process keeps design intent, site logic, and
                fabrication in one controlled path.
              </p>
            </div>

            <div className="grid gap-px bg-ink/10 md:grid-cols-2">
              {conceptProcess.map((step) => (
                <article key={step.number} className="min-h-64 bg-porcelain p-7 md:p-8">
                  <p className="font-display text-4xl leading-none text-bronze/75">
                    {step.number}
                  </p>
                  <h3 className="mt-8 text-xl font-semibold leading-tight text-ink">
                    {step.title}
                  </h3>
                  <div className="mt-5 h-px w-12 bg-bronze" />
                  <p className="mt-6 text-sm leading-7 text-ink/60">{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-ink/10 bg-ink lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[320px]">
            <Image
              src="/projects/concepts/futuristic-pod-concept-interior-01.png"
              alt="Futuristic Pod Concept interior with sculptural metallic pod and warm ambient lighting"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "50% 48%" }}
            />
            <div className="absolute inset-0 bg-ink/40" />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Bring a Signature Concept Into Your Space
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
              Bring a Signature Concept Into Your Space
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-porcelain/70">
              Share your space, dimensions, and desired atmosphere. We can adapt one of
              our signature concepts into a custom-made design and fabrication proposal.
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
