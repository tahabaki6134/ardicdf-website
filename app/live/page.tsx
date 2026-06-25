import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Atelier | Ardıç Design & Fabrication",
  description:
    "A future live window into Ardıç's fabrication process, CNC production, sculptural work, finishing, coating, painting, and installation preparation."
};

const liveStreamUrl = process.env.NEXT_PUBLIC_LIVE_STREAM_URL?.trim();

const processItems = [
  "Live fabrication",
  "CNC production",
  "Sculptural work",
  "Finishing, coating, and painting",
  "Assembly and installation preparation"
];

export default function LiveAtelierPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Live Atelier
              </p>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
                A future window into the workshop.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
                Live Atelier is a future window into the production culture behind Ardıç Design &
                Fabrication. The stream will showcase selected workshop moments, fabrication
                processes, sculptural production, finishing techniques, and behind-the-scenes
                preparation.
              </p>
              <div className="mt-9 h-px w-16 bg-bronze" />
            </div>

            <div className="border border-ink/10 bg-white p-3 shadow-soft">
              {liveStreamUrl ? (
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <iframe
                    title="Ardıç Live Atelier stream"
                    src={liveStreamUrl}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video min-h-[320px] flex-col justify-end bg-ink p-8 text-porcelain md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                    Offline
                  </p>
                  <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                    Live Atelier Coming Soon
                  </h2>
                  <p className="mt-6 max-w-2xl leading-8 text-porcelain/70">
                    A continuous look into our fabrication process - from CNC shaping to
                    sculptural finishing and installation preparation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Workshop Process
            </p>
            <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Built to reveal production, not perform it.
            </h2>
          </div>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {processItems.map((item, index) => (
              <article key={item} className="min-h-40 bg-porcelain p-7">
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-lg font-semibold leading-tight text-ink">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border border-ink/10 bg-porcelain p-8 md:p-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Production Inquiry
            </p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-ink md:text-5xl">
              Discuss a workshop-led project.
            </h2>
          </div>
          <Link
            href="/contact"
            className="w-fit bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
          >
            Discuss a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
