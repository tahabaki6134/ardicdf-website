import Link from "next/link";
import delivery from "@/lib/i18n/messages/delivery.json";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { pagePath } from "@/lib/i18n/routes";

type Props = { locale: Locale; t: Dictionary };

export function InternationalSummary({ locale, t }: Props) {
  return <section className="mt-12 border-y border-ink/15 bg-white/60 px-5 py-7 md:px-8 md:py-9">
    <p className="eyebrow">{t.guide_eyebrow}</p>
    <div className="mt-3 grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div><h2 className="font-display text-3xl md:text-4xl">{t.international_title}</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/75">{t.international_intro}</p></div>
      <div className="flex flex-col justify-between">
        <ol className="grid gap-3 sm:grid-cols-3">{[0, 2, 4].map((index, i) => <li key={index} className="border-s-2 border-bronze ps-3 text-sm font-semibold leading-6"><span className="block text-xs font-normal text-bronze" aria-hidden="true">0{i + 1}</span>{delivery[locale].steps[index].title}</li>)}</ol>
        <Link href={pagePath(locale, { kind: "planning" })} className="text-link mt-6 self-start">{t.guide_link} <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  </section>;
}

export function ProjectDeliveryGuide({ locale, t }: Props) {
  const copy = delivery[locale];
  return <>
    <section className="mt-9" aria-labelledby="delivery-steps">
      <h2 id="delivery-steps" className="font-display text-3xl">{t.guide_steps}</h2>
      <ol className="mt-6 grid gap-x-8 gap-y-7 md:grid-cols-2 lg:grid-cols-3">{copy.steps.map((step, index) => <li key={step.title} className="border-t border-ink/20 pt-5">
        <span className="text-sm text-bronze" aria-hidden="true">0{index + 1}</span><h3 className="mt-2 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-ink/75">{step.body}</p>
      </li>)}</ol>
    </section>
    <section className="mt-12 max-w-4xl" aria-labelledby="delivery-faq">
      <h2 id="delivery-faq" className="font-display text-3xl">{t.guide_questions}</h2>
      <div className="mt-5">{copy.faqs.map(item => <details key={item.question} className="border-t border-ink/15 py-4 last:border-b"><summary className="cursor-pointer py-2 font-semibold">{item.question}</summary><p className="mt-3 leading-8 text-ink/75">{item.answer}</p></details>)}</div>
    </section>
  </>;
}
