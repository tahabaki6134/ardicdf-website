import Image from "next/image";
import Link from "next/link";
import { comparisonFields, fieldNames, manufacturingMethods, methodPath, comparePath, type Language, type ManufacturingMethod } from "@/lib/manufacturing";
import { manufacturingOrigins } from "@/lib/manufacturing-site";
import { SelectedWork } from "@/components/selected-work";
import { MethodVisual } from "@/components/method-visual";
import { showcase, showcaseHref } from "@/lib/site-showcase";
import { ProjectDelivery } from "@/components/project-delivery";

export function CostContext({ lang }: { lang: Language }) {
  return <p className="mt-5 max-w-4xl text-sm leading-6 text-ink/70">{lang === "tr"
    ? "Maliyetler genel yönlendirmedir; teklif veya sabit bir sıralama değildir. Aynı ölçü, adet, son yüzey ve kullanım şartlarını karşılaştırın. Kalıp, kaplama, karkas ve sevkiyat toplamı değiştirebilir."
    : "Costs are general guidance, not quotations or a fixed ranking. Compare the same size, quantity, delivered finish and use. Tooling, coatings, frames and shipping can change the total."}</p>;
}

export function MethodGrid({ lang, compact = false }: { lang: Language; compact?: boolean }) {
  const tr = lang === "tr";
  const names = tr ? ["Strafor", "Cam elyaf", "Karbon fiber", "3D baskı", "Poliüretan", "Epoksi döküm", "Kalıp ve model", "Ahşap ve mobilya"] : ["EPS / XPS foam", "Fiberglass", "Carbon fiber", "3D printing", "Polyurethane", "Epoxy casting", "Molds & patterns", "Wood & furniture"];
  return <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-4 lg:gap-x-6">
    {manufacturingMethods.map((method, index) => <article key={method.id} className="min-w-0">
      <Link href={methodPath(method, lang)} className="group block"><MethodVisual id={method.id} lang={lang} /><h3 className="mt-3 font-display text-xl leading-tight transition group-hover:text-bronze md:text-2xl">{names[index]} <span className="text-bronze" aria-hidden="true">↗</span></h3></Link>
      {!compact && <p className="mt-3 text-sm leading-6 text-ink/70">{method.copy[lang].summary}</p>}
      <p className="mt-2 text-xs leading-5 text-ink/65">{method.copy[lang].costLabel}</p>
    </article>)}
  </div>;
}

export function MethodApplications({ lang }: { lang: Language }) {
  const tr = lang === "tr";
  const scenarios = tr ? [
    ["foam", "Büyük, tek adet teşhir formu", "Strafor ile düşük maliyetli hacim; temas ve görünür yüzey için gereken kaplamayı ayrıca seçin."],
    ["printing", "Aynı form, daha karmaşık ayrıntı", "3D baskıyla detaylı bölümleri üretin. Katman izi, birleşimler ve boya hazırlığını maliyete dahil edin."],
    ["glass", "Aynı formdan tekrar üretim", "Ana model ve kalıpla cam elyaf kabuklar üretin. Kalıp maliyetini adet ve kullanım ömrüyle birlikte değerlendirin."]
  ] : [
    ["foam", "One large display form", "Start with foam for economical volume, then specify the skin needed for contact and the visible finish."],
    ["printing", "The same form, more intricate features", "Print detailed sections and account for layer lines, joints and paint preparation in the cost."],
    ["glass", "The same form, made repeatedly", "Use a master and mold for glass-fiber shells. Weigh tooling cost against quantity and the intended service life."]
  ];
  return <section className="border-y border-ink/15 bg-white/60">
    <div className="page-shell">
      <p className="eyebrow">{tr ? "Aynı fikir, farklı üretim" : "One idea, different production routes"}</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight">{tr ? "Bir heykeli hangi yöntemle yapmalı?" : "How should a sculpture be made?"}</h2>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{tr ? "Aşağıdaki örnek, iç mekânda kullanılacak bir teşhir formu içindir. Kararı yalnızca görünüş değil; adet, dokunulma sıklığı, detay ve bitiş beklentisi değiştirir." : "This example considers an indoor display form. Quantity, frequency of contact, detail and finish change the decision, even when the appearance is similar."}</p>
      <div className="mt-9 grid gap-8 lg:grid-cols-3">{scenarios.map(([id, title, body], i) => {
        const method = manufacturingMethods.find(m => m.id === id)!;
        return <article key={id} className="border-t-2 border-bronze pt-5"><p className="text-sm font-semibold text-bronze">0{i + 1} / {method.copy[lang].title}</p><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-4 leading-7 text-ink/75">{body}</p><Link href={methodPath(method, lang)} className="text-link mt-5 inline-block">{tr ? "Yöntemi incele" : "Explore the method"}</Link></article>;
      })}</div>
      <p className="mt-8 border-t border-ink/15 pt-5 text-base leading-7 text-ink/75">{tr ? "Yöntemler birlikte de kullanılabilir: strafor ana hacim + basılmış ince detay + cam elyaf kabuk. Böyle bir işin fiyatı ve dayanımı, bütün yapıya göre değerlendirilir." : "Methods can be combined: a foam main volume, printed fine details and a glass-fiber skin. Cost and performance then belong to the complete assembly."}</p>
    </div>
  </section>;
}

export function ManufacturingHome({ lang }: { lang: Language }) {
  const tr = lang === "tr", hero = showcase[0];
  return <main>
    <section className="mx-auto grid max-w-[1440px] gap-6 px-5 pb-8 pt-6 md:px-8 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-bronze">{tr ? "ARDIÇ · İstanbul’da özel üretim" : "ARDIÇ · Bespoke fabrication in Istanbul"}</p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,6.7vw,3.75rem)] leading-[1.07] tracking-tight">{tr ? "Özel üretim." : "Made for your project."}<br /><span className="text-bronze">{tr ? "Projeden montaja." : "Design to installation."}</span></h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-ink/75 md:mt-6 md:text-lg md:leading-8">{tr ? "Mobilya, cephe elemanları ve özel tasarım ürünleri; doğru malzeme, atölye üretimi ve yerinde montajla tamamlıyoruz." : "Bespoke furniture, facade elements and custom objects, brought together through material expertise, workshop fabrication and installation."}</p>
        <div className="mt-5 flex flex-wrap gap-3 md:mt-7"><Link href="/contact#brief" className="inline-flex min-h-12 items-center justify-center bg-ink px-4 py-3 text-sm font-semibold text-porcelain transition hover:bg-bronze">{tr ? "Proje gönder" : "Send your project"} →</Link><Link href="#methods" className="inline-flex min-h-12 items-center justify-center border border-ink/25 px-4 py-3 text-sm font-semibold transition hover:bg-white">{tr ? "İmalat yöntemleri" : "Explore methods"}</Link></div>
      </div>
      <Link href={showcaseHref(hero, lang)} className="group block min-w-0">
        <figure><div className="relative aspect-[16/10] overflow-hidden bg-ink lg:aspect-[6/5]"><Image src={hero.image} alt={hero[lang].alt} fill priority sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover" style={{objectPosition: "50% 65%"}} /></div><figcaption className="flex items-center justify-between gap-3 border-b border-ink/15 py-3 text-xs leading-5 text-ink/70"><span>{hero[lang].title} · {tr ? "Tamamlanmış uygulama" : "Completed installation"}</span><span aria-hidden="true">↗</span></figcaption></figure>
      </Link>
    </section>
    <section id="methods" className="page-shell border-y border-ink/15">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">{tr ? "8 imalat yöntemi" : "8 manufacturing methods"}</p><h2 className="mt-3 font-display text-3xl md:text-5xl">{tr ? "Projenize uygun malzeme." : "The material for your idea."}</h2></div><Link href={comparePath(lang)} className="text-link">{tr ? "Maliyet ve performansı karşılaştır" : "Compare cost & performance"} →</Link></div>
      <MethodGrid lang={lang} compact /><p className="mt-6 max-w-3xl text-sm leading-6 text-ink/65">{tr ? "Maliyet seviyeleri genel yönlendirmedir. Ölçü, adet, son yüzey ve montaj kapsamına göre teklif hazırlıyoruz." : "Cost levels are a guide. Your dimensions, quantity, finish and installation scope determine the quotation."}</p>
    </section>
    <SelectedWork lang={lang} />
    <ProjectDelivery lang={lang} compact />
    <section className="page-shell flex flex-wrap items-center justify-between gap-7"><div><p className="eyebrow">{tr ? "Projenizi konuşalım" : "Start with your idea"}</p><h2 className="mt-3 font-display text-3xl md:text-4xl">{tr ? "Bir çizim, fotoğraf veya fikirle başlayın." : "A drawing, a photo or an idea."}</h2><p className="mt-4 max-w-2xl leading-7 text-ink/70">{tr ? "Malzemeyi henüz seçmediyseniz kullanım yerini ve yaklaşık ölçüyü paylaşın; birlikte netleştirelim." : "Share the setting and approximate dimensions. We can help you choose the material and production route."}</p></div><Link href="/contact#brief" className="button-primary">{tr ? "Projem için teklif iste" : "Request a project quote"} →</Link></section>
  </main>;
}

export function ManufacturingIndex({ lang }: { lang: Language }) {
  const tr = lang === "tr";
  return <main><section className="page-shell"><p className="eyebrow">{tr ? "İmalat rehberi" : "Manufacturing guide"}</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">{tr ? "İmalat yöntemlerini keşfedin." : "Explore the manufacturing methods."}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">{tr ? "Her malzemenin güçlü yanı ve sınırı farklı. Maliyet, detay, dayanım ve son yüzeyi inceleyerek projeniz için seçenekleri daraltın." : "Every material has strengths and limits. Use cost, detail, durability and the delivered surface to narrow down the options for your project."}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={comparePath(lang)} className="button-primary">{tr ? "İki yöntemi karşılaştır" : "Compare two methods"}</Link><Link href="/contact" className="button-secondary">{tr ? "Seçim için destek al" : "Ask for guidance"}</Link></div><MethodGrid lang={lang} /><CostContext lang={lang} /></section><MethodApplications lang={lang} /></main>;
}

export function ManufacturingDetail({ method, lang }: { method: ManufacturingMethod; lang: Language }) {
  const tr = lang === "tr", copy = method.copy[lang], origin = manufacturingOrigins[lang];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": origin + methodPath(method, lang) + "#service", name: copy.title, description: copy.intro, url: origin + methodPath(method, lang), provider: { "@type": "Organization", name: "ARDIÇ Design & Fabrication", url: origin }, areaServed: "Worldwide" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: tr ? "Ana sayfa" : "Home", item: origin },
      { "@type": "ListItem", position: 2, name: tr ? "İmalat" : "Manufacturing", item: origin + "/services" },
      { "@type": "ListItem", position: 3, name: copy.title, item: origin + methodPath(method, lang) }
    ] }
  ] };
  return <main className="page-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <nav aria-label={tr ? "Sayfa yolu" : "Breadcrumb"} className="flex flex-wrap gap-2 text-sm text-ink/70"><Link href="/services" className="underline underline-offset-4">{tr ? "İmalat yöntemleri" : "Manufacturing methods"}</Link><span aria-hidden="true">/</span><span>{copy.title}</span></nav>
    <section className="mt-8 grid gap-8 border-b border-ink/15 pb-10 lg:grid-cols-[1.4fr_0.6fr]">
      <div><p className="eyebrow">{copy.costLabel}</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">{copy.title}</h1><p className="mt-5 text-xl leading-8">{copy.summary}</p><p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{copy.intro}</p></div>
      <div className="flex flex-col justify-end gap-3"><Link href={`/contact?method=${method.id}#brief`} className="button-primary">{tr ? "Bu yöntemle teklif iste" : "Request a quote for this method"}</Link><Link href={`${comparePath(lang)}?left=${method.id}&right=${method.id === "glass" ? "carbon" : "glass"}`} className="button-secondary">{tr ? "Başka yöntemle karşılaştır" : "Compare another method"}</Link></div>
    </section>
    <section className="mt-8"><MethodVisual id={method.id} lang={lang} detail /></section>
    {copy.processes && <section className="border-b border-ink/15 py-10">
      <h2 className="font-display text-3xl">{tr ? "Karbon fiberde kullandığımız yöntemler" : "Our carbon fiber manufacturing processes"}</h2>
      <p className="mt-4 max-w-4xl leading-8 text-ink/75">{tr ? "Elle serme vakumsuz tamamlanabilir veya vakum torbalamayla desteklenebilir. İnfüzyonda ise reçine, başta kuru serilmiş elyafa vakum altında girer. Seçimi parçanın ihtiyacına göre yaparız." : "Hand layup can be completed without vacuum or followed by vacuum bagging. With infusion, resin enters initially dry reinforcement under vacuum. We choose according to the part's requirements."}</p>
      <div className="mt-7 grid gap-7 lg:grid-cols-3">{copy.processes.map(process => <article key={process.title} className="border-t-2 border-bronze pt-5">
        <h3 className="font-display text-2xl leading-tight">{process.title}</h3>
        <p className="mt-4 leading-8 text-ink/75">{process.how}</p>
        <p className="mt-4 leading-7 text-ink/75"><strong className="text-ink">{tr ? "Ne zaman seçilir? " : "When to choose it: "}</strong>{process.fit}</p>
        <p className="mt-4 leading-7 text-ink/75"><strong className="text-ink">{tr ? "Maliyet ve kontrol: " : "Cost and control: "}</strong>{process.tradeoff}</p>
      </article>)}</div>
    </section>}
    <section className="pt-10"><h2 className="font-display text-3xl">{tr ? "Maliyet ve performanstan ne beklemeli?" : "What to expect from cost and performance"}</h2><CostContext lang={lang} /><dl className="mt-7 divide-y divide-ink/15 border-y border-ink/15">{comparisonFields.map(field => <div key={field} className="grid gap-3 py-6 md:grid-cols-[15rem_1fr]"><dt className="font-semibold">{fieldNames[lang][field]}</dt><dd className="max-w-3xl leading-8 text-ink/75">{copy[field]}</dd></div>)}</dl></section>
    <section className="grid gap-10 py-12 lg:grid-cols-2"><div><h2 className="font-display text-3xl">{tr ? "Bu yöntemle neler yapılabilir?" : "What can be made?"}</h2><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-ink/75">{copy.uses.map(use => <li key={use}>{use}</li>)}</ul><Link href={method.portfolio} className="text-link mt-6 inline-block">{tr ? "İlgili proje arşivini incele" : "Explore the related project archive"}</Link></div><div><h2 className="font-display text-3xl">{tr ? "Teklifte fiyatı ne değiştirir?" : "What changes the quotation?"}</h2><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-ink/75">{copy.drivers.map(driver => <li key={driver}>{driver}</li>)}</ul></div></section>
    <section className="border-y border-ink/15 py-10"><h2 className="font-display text-3xl">{tr ? "Üretim nasıl ilerler?" : "How production works"}</h2><ol className="mt-7 grid gap-7 md:grid-cols-3">{copy.steps.map((step, i) => <li key={step} className="border-t-2 border-bronze pt-4"><span className="text-sm font-semibold text-bronze">0{i + 1}</span><p className="mt-3 leading-8">{step}</p></li>)}</ol></section>
    {method.id === "wood" && <ProjectDelivery lang={lang} contained />}
    <section className="my-10 border-l-4 border-bronze bg-white p-6"><h2 className="font-display text-2xl">{tr ? "Seçim yaparken" : "Before choosing"}</h2><ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-ink/75">{copy.limits.map(limit => <li key={limit}>{limit}</li>)}</ul></section>
    <section><h2 className="font-display text-3xl">{tr ? "Sık sorulan sorular" : "Common questions"}</h2><div className="mt-6 divide-y divide-ink/15 border-y border-ink/15">{copy.faqs.map(faq => <details key={faq.question} className="py-5"><summary className="cursor-pointer text-lg font-semibold leading-7">{faq.question}</summary><p className="mt-4 max-w-4xl leading-8 text-ink/75">{faq.answer}</p></details>)}</div></section>
    <section className="mt-12 flex flex-wrap items-center justify-between gap-6 bg-ink p-7 text-porcelain md:p-9"><div><h2 className="font-display text-3xl">{tr ? "Ölçüyü ve kullanım yerini paylaşın." : "Share the dimensions and intended use."}</h2><p className="mt-3 max-w-2xl leading-7 text-porcelain/75">{tr ? "Adet, son yüzey, teslim yeri ve varsa çizimle birlikte değerlendirelim. Malzeme kararını henüz vermemiş olabilirsiniz." : "Include quantity, finish, destination and a drawing if available. You do not need to have decided on the material."}</p></div><Link href={`/contact?method=${method.id}#brief`} className="inline-flex min-h-12 items-center bg-porcelain px-6 py-3 font-semibold text-ink hover:bg-white">{tr ? "Teklif iste" : "Request a quote"}</Link></section>
  </main>;
}
