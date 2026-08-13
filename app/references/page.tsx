import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "References | Ardıç Design & Fabrication"
  },
  description:
    "Explore the completed projects, clients, and business references of Ardıç Design & Fabrication.",
  alternates: {
    canonical: "/references"
  },
  openGraph: {
    title: "References | Ardıç Design & Fabrication",
    description:
      "Explore the completed projects, clients, and business references of Ardıç Design & Fabrication.",
    url: "/references"
  }
};

const futureSections = [
  { id: "completed-projects", label: "Completed projects" },
  { id: "clients", label: "Clients" },
  { id: "brands", label: "Brands" },
  { id: "industries", label: "Industries" },
  { id: "international-projects", label: "International projects" },
  { id: "certifications", label: "Certifications" }
];

export default function ReferencesPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                References
              </p>
              <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
                References
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Discover the projects we have completed and the companies and organizations we have
              had the privilege to work with.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-ink/10 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-porcelain p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
                Coming Soon
              </p>
              <h2 className="mt-7 max-w-xl font-display text-4xl leading-tight text-ink md:text-5xl">
                Coming Soon
              </h2>
            </div>
            <div className="flex min-h-72 items-center bg-porcelain p-7 md:p-10">
              <p className="max-w-3xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
                This page will soon feature our completed projects, client portfolio, business
                partners, industries served, and additional reference materials.
              </p>
            </div>
          </div>

          <div aria-hidden="true">
            {futureSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-label={section.label}
                className="scroll-mt-32"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
