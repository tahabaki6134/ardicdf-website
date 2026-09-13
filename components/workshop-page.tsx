import Image from "next/image";
import Link from "next/link";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";
import { ProjectDelivery } from "./project-delivery";

export function WorkshopPage() {
  const tr = lang === "tr";
  const stations = [
    { image: "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-01.jpeg", title: tr ? "CNC ve form üretimi" : "CNC & form production", copy: tr ? "Strafor, ahşap ve model malzemelerinde kesim, şekillendirme ve modüler birleştirme." : "Cutting, shaping and modular assembly in foam, timber and pattern materials." },
    { image: "/projects/portfolio/cnc-manufacturing-processes/cnc-manufacturing-processes-04.jpeg", title: tr ? "Model ve yüzey detayı" : "Patterns & surface detail", copy: tr ? "Rölyef, ana model ve kalıp hazırlığı; dijital üretimle el işçiliğinin birlikte kullanımı." : "Reliefs, masters and mold preparation, combining digital fabrication with hand detailing." },
    { image: "/projects/portfolio/molds-composite-production/molds-composite-production-05.jpeg", title: tr ? "Birleştirme ve son yüzey" : "Assembly & finishing", copy: tr ? "Ürünün parçalarını, birleşimlerini, kaplamasını ve son görünümünü tamamlayan atölye çalışması." : "Workshop assembly, joints, coatings and the final appearance of the fabricated piece." }
  ];
  return <main>
    <section className="page-shell"><p className="eyebrow">{tr ? "İstanbul · Üretim atölyesi" : "Istanbul · Fabrication workshop"}</p><h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-6xl">{tr ? "Çizimin üretime dönüştüğü yer." : "Where the drawing becomes the object."}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{tr ? "CNC, kompozit, reçine dökümü, 3D baskı ve ahşap işçiliğini projenin ihtiyacına göre bir araya getiriyoruz. Üretimi Ferhatpaşa, Ataşehir’deki atölyemizde koordine ediyoruz." : "We bring CNC, composites, resin casting, 3D printing and woodworking together around the project, coordinating production at our workshop in Ferhatpaşa, Ataşehir."}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{stations.map(item => <figure key={item.title}><div className="relative aspect-[4/3] bg-smoke/30"><Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" /></div><figcaption><h2 className="mt-4 font-display text-2xl">{item.title}</h2><p className="mt-3 leading-7 text-ink/70">{item.copy}</p></figcaption></figure>)}</div>
      <div className="mt-10 grid gap-6 border-t border-ink/15 pt-7 md:grid-cols-2"><div><h2 className="font-display text-2xl">{tr ? "Dijital üretim ve 3D baskı" : "Digital fabrication & 3D printing"}</h2><p className="mt-3 leading-7 text-ink/70">{tr ? "Ana model, prototip, teknik parça ve büyük formları tek parça veya birleştirilebilir modüller olarak üretiyoruz. Baskı sonrası birleştirme ve yüzey hazırlığı da üretim planına dahil edilir." : "Masters, prototypes, technical parts and large forms are made as individual pieces or joined modules. Assembly and surface preparation are included in the production plan."}</p></div><div><h2 className="font-display text-2xl">{tr ? "Numuneden montaj hazırlığına" : "From sample to installation preparation"}</h2><p className="mt-3 leading-7 text-ink/70">{tr ? "Malzeme ve son yüzey seçimini, bağlantıları, paket ölçülerini ve montaj sırasını işin başında ele alıyoruz. Gereken numune ve kontrolleri projeye göre belirliyoruz." : "Materials, finish, connections, packing dimensions and installation sequence are considered from the outset. Samples and checks are defined around the project."}</p></div></div>
      <Link href="/services" className="text-link mt-7 inline-block">{tr ? "Malzeme ve yöntemlerin teknik karşılaştırması" : "Explore materials and process comparisons"} →</Link>
    </section>
    <ProjectDelivery lang={lang} />
  </main>;
}
