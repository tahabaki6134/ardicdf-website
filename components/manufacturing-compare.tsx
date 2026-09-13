"use client";

import Link from "next/link";
import { useState } from "react";
import { comparisonFields, fieldNames, getMethod, manufacturingMethods, methodPath, comparePath, type Language } from "@/lib/manufacturing";

export function ManufacturingCompare({ lang, initialLeft, initialRight }: { lang: Language; initialLeft: string; initialRight: string }) {
  const tr = lang === "tr";
  const [left, setLeft] = useState(initialLeft);
  const [right, setRight] = useState(initialRight);
  const first = getMethod(left)!, second = getMethod(right)!;
  function choose(side: "left" | "right", value: string) {
    if (!getMethod(value)) return;
    const nextLeft = side === "left" ? value : left;
    const nextRight = side === "right" ? value : right;
    if (nextLeft === nextRight) return;
    setLeft(nextLeft); setRight(nextRight);
    const url = new URL(window.location.href);
    url.searchParams.set("left", nextLeft); url.searchParams.set("right", nextRight);
    window.history.replaceState(null, "", url);
  }
  return <>
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {(["left", "right"] as const).map((side, i) => <label key={side} className="block border border-ink/15 bg-white p-5">
        <span className="text-sm font-semibold text-bronze">{tr ? `${i + 1}. yöntem` : `Method ${i + 1}`}</span>
        <select className="field mt-3" value={side === "left" ? left : right} onChange={event => choose(side, event.target.value)}>
          {manufacturingMethods.map(method => <option key={method.id} value={method.id} disabled={method.id === (side === "left" ? right : left)}>{method.copy[lang].title}</option>)}
        </select>
      </label>)}
    </div>
    <p className="mt-5 text-sm leading-6 text-ink/70">{tr ? "Karşılaştırma genel yönlendirmedir; sabit fiyat veya yapısal performans taahhüdü değildir. Aynı ölçü, adet, son yüzey ve kullanım şartlarını birlikte değerlendirin." : "This comparison is general guidance, not a fixed price or a structural performance commitment. Compare equivalent dimensions, quantity, finish and use."}</p>
    <p role="status" aria-live="polite" className="sr-only">{first.copy[lang].title} / {second.copy[lang].title}</p>
    <div className="mt-7">
      <table className="method-comparison w-full table-fixed border-collapse text-left">
        <caption className="sr-only">{tr ? "İmalat yöntemlerinin maliyet ve performans karşılaştırması" : "Manufacturing cost and performance comparison"}</caption>
        <thead><tr><th scope="col" className="w-1/2 border-b-2 border-bronze p-3 align-top md:p-5"><span className="block font-display text-xl leading-tight md:text-3xl">{first.copy[lang].title}</span><span className="mt-3 block text-sm font-normal">{first.copy[lang].costLabel}</span></th><th scope="col" className="w-1/2 border-b-2 border-bronze p-3 align-top md:p-5"><span className="block font-display text-xl leading-tight md:text-3xl">{second.copy[lang].title}</span><span className="mt-3 block text-sm font-normal">{second.copy[lang].costLabel}</span></th></tr></thead>
        {comparisonFields.map(field => <tbody key={field}>
          <tr><th colSpan={2} scope="rowgroup" className="border-b border-ink/10 bg-smoke/40 px-3 py-3 text-base md:px-5">{fieldNames[lang][field]}</th></tr>
          <tr><td className="border-b border-r border-ink/15 p-3 align-top text-base leading-7 text-ink/80 md:p-5">{first.copy[lang][field]}</td><td className="border-b border-ink/15 p-3 align-top text-base leading-7 text-ink/80 md:p-5">{second.copy[lang][field]}</td></tr>
        </tbody>)}
      </table>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">{[first, second].map(method => <Link href={methodPath(method, lang)} className="button-secondary text-center" key={method.id}>{method.copy[lang].title}<span aria-hidden="true">→</span></Link>)}</div>
    {new Set([left, right]).has("carbon") && new Set([left, right]).has("glass") && <aside className="mt-7 border-l-4 border-bronze bg-white p-6"><h2 className="font-display text-2xl">{tr ? "Karbon mu, cam elyaf mı?" : "Carbon or glass fiber?"}</h2><p className="mt-4 leading-8 text-ink/75">{tr ? "Dekor kabuğunda maliyet ve kullanım dayanımı öncelikliyse cam elyaf; düşük ağırlıkta yüksek rijitlik gerekliyse karbon değerlendirilebilir. Darbeye dayanımı ayrı inceleyin. Karbon parça üretim kalıbı ile karbondan yapılmış kalıp aynı talep değildir." : "Consider glass fiber when cost and everyday durability matter for a decorative shell; assess carbon when low weight and high stiffness justify it. Evaluate impact separately. A mold for carbon parts and a mold made of carbon are different requests."}</p></aside>}
    <section className="mt-10 border-t border-ink/20 pt-8"><h2 className="font-display text-3xl">{tr ? "Aynı iş için iki seçenek isteyin." : "Ask for two options for the same brief."}</h2><p className="mt-4 max-w-3xl leading-8 text-ink/75">{tr ? "Ölçü, adet, kullanım yeri ve son yüzeyi paylaşın. Seçtiğiniz iki yöntem, teklif talebine birlikte aktarılır." : "Share dimensions, quantity, setting and finish. Both selected methods will be included in your enquiry."}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/contact?method=${left}&alternative=${right}#brief`} className="button-primary">{tr ? "Bu iki yöntem için teklif iste" : "Request a quote for both methods"}</Link><Link href={`${comparePath(lang)}?left=${left}&right=${right}`} className="button-secondary">{tr ? "Bu karşılaştırmanın bağlantısı" : "Link to this comparison"}</Link></div></section>
  </>;
}
