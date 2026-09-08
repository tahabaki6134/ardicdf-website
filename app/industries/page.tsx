import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries & Fabrication Applications",
  description:
    "Explore custom fabrication for retail, events, museums, hospitality, film sets and prototype models. Find relevant applications and prepare a project brief for Ardıç.",
  alternates: { canonical: "/industries" }
};

export default function IndustriesPage() {
  return (
    <main className="page-shell">
      <p className="eyebrow">Industries & applications</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
        A fabrication partner for what you have in mind.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
        Start with the setting and the experience you want to create. Explore applications, relevant
        portfolio examples and the information needed for a useful production review.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {industries.map((industry, index) => (
          <Link
            href={`/industries/${industry.slug}`}
            key={industry.slug}
            className="group border-t border-ink/20 py-7"
          >
            <p className="eyebrow">0{index + 1}</p>
            <h2 className="mt-3 font-display text-3xl group-hover:text-bronze">
              {industry.shortTitle}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-ink/75">{industry.description}</p>
            <span className="mt-5 inline-block font-semibold text-bronze">
              Explore applications & brief checklist ↗
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 border-t border-ink/15 pt-8">
        <h2 className="font-display text-3xl">Your project crosses categories?</h2>
        <p className="my-5 leading-7 text-ink/75">
          Share the concept, intended use and key constraints. We can review a combined fabrication
          approach.
        </p>
        <Link href="/contact" className="button-primary">
          Build your project brief →
        </Link>
      </div>
    </main>
  );
}
