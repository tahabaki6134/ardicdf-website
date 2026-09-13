import Image from "next/image";
import Link from "next/link";
import { comparisonFields, fieldNames, manufacturingMethods, methodPath, comparePath, type Language, type ManufacturingMethod } from "@/lib/manufacturing";
import { manufacturingOrigins } from "@/lib/manufacturing-site";
import { ProjectDelivery } from "@/components/project-delivery";

export function CostContext({ lang }: { lang: Language }) {
  return <p className="mt-5 max-w-4xl text-sm leading-6 text-ink/70">{lang === "tr"
    ? "Maliyetler genel yönlendirmedir; teklif veya sabit bir sıralama değildir. Aynı ölçü, adet, son yüzey ve kullanım şartlarını karşılaştırın. Kalıp, kaplama, karkas ve sevkiyat toplamı değiştirebilir."
    : "Costs are general guidance, not quotations or a fixed ranking. Compare the same size, quantity, delivered finish and use. Tooling, coatings, frames and shipping can change the total."}</p>;
}

export function MethodGrid({ lang }: { lang: Language }) {
  const tr = lang === "tr";
  return <div className="mt-8 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
    {manufacturingMethods.map((method, index) => {
      const copy = method.copy[lang];
      return <article key={method.id} className={`flex flex-col bg-porcelain p-6 md:p-8 ${manufacturingMethods.length % 2 === 1 && index === manufacturingMethods.length - 1 ? "md:col-span-2" : ""}`}>
        <div className="flex flex-wrap items-start justify-between gap-3 text-sm">
          <span className="font-semibold text-bronze">0{index + 1}</span>
          <span className="border border-ink/15 px-3 py-1">{copy.costLabel}</span>
        </div>
        <h3 className="mt-5 font-display text-3xl leading-tight"><Link href={methodPath(method, lang)} className="hover:text-bronze">{copy.title}</Link></h3>
        <p className="mt-3 text-lg leading-7">{copy.summary}</p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70"><span className="font-semibold text-ink">{tr ? "Dikkate alın: " : "Consider: "}</span>{copy.limits[0]}</p>
        <Link href={methodPath(method, lang)} className="text-link mt-6 inline-block self-start">{tr ? "Maliyet, detay ve kullanım" : "Cost, detail & applications"}<span aria-hidden="true"> →</span></Link>
      </article>;
    })}
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
  const tr = lang === "tr";
  return <main>
    <section className="mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:px-8 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
      <div>
        <p className="eyebrow">{tr ? "İstanbul’da özel imalat · ARDIÇ" : "Custom manufacturing in Istanbul · ARDIÇ"}</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.08] tracking-tight md:text-6xl">{tr ? "Doğru imalat." : "The right process."}<br /><span className="text-bronze">{tr ? "Ne alacağınız belli." : "Know what you’re getting."}</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">{tr ? "Strafor, cam elyaf, karbon fiber, 3D baskı, poliüretan, epoksi döküm, kalıp ve ahşap/CNC. Bütçenize, detay beklentinize ve kullanım yerine göre üretim yöntemini seçin." : "Foam, fiberglass, carbon fiber, 3D printing, polyurethane, epoxy casting, molds and wood/CNC. Choose a manufacturing route around your budget, detail and intended use."}</p>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">{tr ? "Sabit ve hareketli mobilya, dış cephe elemanları ve özel imalatta projelendirmeden montajlı teslime uzanan üretim." : "Fitted and freestanding furniture, facade elements and custom fabrication, from design development to installed completion."} <Link href="#project-delivery" className="underline underline-offset-4 hover:text-bronze">{tr ? "Komple proje kapsamımız" : "Our complete project scope"}</Link></p>
        <div className="mt-7 flex flex-wrap gap-3"><Link href="#methods" className="button-primary">{tr ? "İmalat yöntemleri" : "Explore manufacturing"}</Link><Link href={comparePath(lang)} className="button-secondary">{tr ? "Yöntemleri karşılaştır" : "Compare methods"}</Link></div>
        <p className="mt-5 max-w-xl text-sm leading-6 text-ink/70">{tr ? "Malzemeden emin değil misiniz? Ölçü, kullanım yeri ve referansınızı paylaşın; seçenekleri birlikte değerlendirelim." : "Not sure about materials? Share dimensions, the setting and a reference so we can review the options with you."}</p>
        <Link href="/contact" className="text-link mt-4 inline-block">{tr ? "Projem için yöntem önerisi al" : "Get guidance for my project"}</Link>
      </div>
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden bg-ink"><Image src="/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg" alt={tr ? "ARDIÇ atölyesinde birleştirilmiş büyük köpük araç formu" : "Large assembled foam vehicle form in the ARDIÇ workshop"} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /></div>
        <figcaption className="border-b border-ink/15 py-3 text-sm leading-6 text-ink/70">{tr ? "Atölyeden · Son yüzey işlemlerinden önce şekillendirilmiş köpük form." : "From the workshop · A shaped foam form before the final surface finish."}</figcaption>
      </figure>
    </section>
    <section id="methods" className="page-shell border-t border-ink/15">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">{tr ? "Malzeme ve yöntem" : "Materials & methods"}</p><h2 className="mt-3 font-display text-4xl md:text-5xl">{tr ? "Neyle üretmek istiyorsunuz?" : "What should it be made with?"}</h2></div><Link href={comparePath(lang)} className="text-link">{tr ? "Yan yana karşılaştır" : "Compare side by side"}</Link></div>
      <MethodGrid lang={lang} /><CostContext lang={lang} />
    </section>
    <ProjectDelivery lang={lang} />
    <MethodApplications lang={lang} />
    <section className="page-shell grid items-start gap-8 md:grid-cols-2"><div><p className="eyebrow">{tr ? "Üretimden örnekler" : "See the work"}</p><h2 className="mt-3 font-display text-4xl">{tr ? "Yöntemden bitmiş ürüne." : "From process to finished piece."}</h2><p className="mt-5 text-lg leading-8 text-ink/75">{tr ? "Heykel, rölyef ve dekor çalışmalarını uygulama örnekleri olarak inceleyin. Kendi projenizin malzeme ve yüzey tarifini ayrıca netleştirelim." : "Explore sculptures, reliefs and display work as application examples. We define the material and finish for your own project separately."}</p></div><div className="grid gap-3"><Link href="/works" className="button-secondary justify-between">{tr ? "Proje arşivi" : "Project archive"}<span aria-hidden="true">→</span></Link><Link href="/fabrication" className="button-secondary justify-between">{tr ? "Atölye ve üretim süreci" : "Workshop & production"}<span aria-hidden="true">→</span></Link><Link href="/contact" className="button-primary justify-between">{tr ? "Projem için teklif iste" : "Request a project quote"}<span aria-hidden="true">→</span></Link></div></section>
  </main>;
}

export function ManufacturingIndex({ lang }: { lang: Language }) {
  const tr = lang === "tr";
  return <main><section className="page-shell"><p className="eyebrow">{tr ? "İmalat rehberi" : "Manufacturing guide"}</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">{tr ? "Önce yöntemi tanıyın." : "Understand the process first."}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">{tr ? "Her malzemenin güçlü yanı ve sınırı farklı. Maliyet, detay, dayanım ve son yüzeyi inceleyerek projeniz için seçenekleri daraltın." : "Every material has strengths and limits. Use cost, detail, durability and the delivered surface to narrow down the options for your project."}</p><div className="mt-6 flex flex-wrap gap-3"><Link href={comparePath(lang)} className="button-primary">{tr ? "İki yöntemi karşılaştır" : "Compare two methods"}</Link><Link href="/contact" className="button-secondary">{tr ? "Seçim için destek al" : "Ask for guidance"}</Link></div><MethodGrid lang={lang} /><CostContext lang={lang} /></section><ProjectDelivery lang={lang} /><MethodApplications lang={lang} /></main>;
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
