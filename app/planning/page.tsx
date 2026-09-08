import type { Metadata } from "next";
import Link from "next/link";
import { materialRoutes, planningQuestions } from "@/lib/planning";

export const metadata: Metadata = {
  title: "Fabrication Planning Guide: Materials, Files & International Delivery",
  description:
    "Prepare a fabrication brief with guidance on materials, dimensions, drawings, quantities, finishes, international delivery and confidential project enquiries.",
  alternates: { canonical: "/planning" }
};

export default function PlanningPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: planningQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer }
    }))
  };
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <p className="eyebrow">Fabrication planning guide</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">
        A clearer brief. A more useful production review.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
        You do not need every technical answer to get started. Define what the piece should do,
        where it will be used and what matters most: appearance, repeated use, timing or budget.
      </p>
      <Link href="/contact" className="button-primary mt-7">
        Build your brief step by step →
      </Link>
      <section className="mt-16">
        <h2 className="font-display text-4xl">Find a production starting point.</h2>
        <p className="mt-4 max-w-3xl leading-7 text-ink/75">
          These routes can be combined. Final material and process choices depend on your project
          requirements.
        </p>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <caption className="sr-only">
              Fabrication routes, typical applications and decisions to discuss
            </caption>
            <thead>
              <tr className="border-y border-ink/20 bg-smoke/30">
                <th scope="col" className="p-4">
                  Production route
                </th>
                <th scope="col" className="p-4">
                  Applications to discuss
                </th>
                <th scope="col" className="p-4">
                  What shapes the choice
                </th>
              </tr>
            </thead>
            <tbody>
              {materialRoutes.map((route) => (
                <tr key={route.href} className="border-b border-ink/15 align-top">
                  <th scope="row" className="p-4 font-semibold">
                    <Link href={route.href} className="text-link">
                      {route.name} ↗
                    </Link>
                  </th>
                  <td className="p-4 leading-7 text-ink/75">{route.use}</td>
                  <td className="p-4 leading-7 text-ink/75">{route.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-16 max-w-4xl">
        <h2 className="mb-7 font-display text-4xl">Questions before you enquire</h2>
        {planningQuestions.map((item) => (
          <details key={item.question} className="group border-t border-ink/20 py-5">
            <summary className="cursor-pointer text-lg font-semibold leading-7">
              {item.question}
            </summary>
            <p className="mt-4 leading-8 text-ink/75">{item.answer}</p>
          </details>
        ))}
      </section>
      <div className="mt-12 border-t border-ink/15 pt-8">
        <Link href="/contact" className="button-primary">
          Start a project enquiry →
        </Link>
      </div>
    </main>
  );
}
