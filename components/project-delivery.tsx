import Link from "next/link";
import type { Language } from "@/lib/manufacturing";

export function ProjectDelivery({ lang, contained = false }: { lang: Language; contained?: boolean }) {
  const tr = lang === "tr";
  const areas = tr ? [
    { title: "Sabit mobilya", text: "Dolap, gardırop, depolama ünitesi, karşılama bankosu ve mekâna özel doğramaları gövde, kapak, raf, çekmece ve donanımlarıyla tamamlıyoruz." },
    { title: "Hareketli mobilya", text: "Masa, sehpa, konsol ve özel tasarım mobilyalarda parçaların üretimini, birleştirmesini ve son yüzeyini birlikte ele alıyoruz. Ahşap, epoksi ve kompozit detayları aynı üründe bir araya getirebiliyoruz." },
    { title: "Dış cephe elemanları", text: "Projeye özel cephe panelleri, kaplama elemanları, kolonlar, başlıklar, söveler ve rölyefler üretiyoruz. Alt konstrüksiyon, bağlantı, dış ortam dayanımı, sevkiyat ve montajı birlikte planlıyoruz." },
    { title: "Ticari ve özel imalat projeleri", text: "Mağaza teşhir üniteleri, otel ve restoran mobilyaları, müze sergileme elemanları ve sahne dekorlarında farklı imalat yöntemlerini tamamlanmış bir proje için birleştiriyoruz." }
  ] : [
    { title: "Fitted furniture & joinery", text: "We manufacture complete cabinets, wardrobes, storage units, reception counters and bespoke joinery, including carcasses, doors, shelves, drawers and hardware." },
    { title: "Freestanding furniture", text: "For tables, side tables, sideboards and custom furniture, we coordinate component production, assembly and finish. Timber, epoxy and composite details can be combined within the same piece." },
    { title: "Exterior facade elements", text: "We produce project-specific facade panels, cladding elements, columns, capitals, surrounds and reliefs. Subframes, connections, exposure, delivery and installation are planned together." },
    { title: "Commercial & custom fabrication", text: "Retail displays, hotel and restaurant furniture, museum exhibits and scenic assemblies can bring several manufacturing methods together within a complete project." }
  ];
  const steps = tr ? [
    ["Projelendirme", "Konsept veya mevcut çizim, ölçülendirme, malzeme seçimi ve imalat çizimleri."],
    ["Üretim ve birleştirme", "Parçalar, gövdeler, taşıyıcılar, donanımlar ve farklı malzemelerin uyumu."],
    ["Son yüzey ve kontrol", "Kaplama, ürün boyası veya verniği; ölçü, birleşim ve işlev kontrolü."],
    ["Sevkiyat ve montaj", "Paketleme, taşıma planı, yerinde montaj ve kararlaştırılan işin teslimi."]
  ] : [
    ["Design development", "Your concept or existing drawings, dimensions, material selection and shop drawings."],
    ["Fabrication & assembly", "Components, carcasses, supports, hardware and the interfaces between materials."],
    ["Finishing & checks", "Veneer, product paint or clear finish, followed by dimensional, fit and function checks."],
    ["Delivery & installation", "Packing, transport planning, site assembly and handover of the agreed work."]
  ];

  return <section id="project-delivery" className={`border-y border-ink/15 ${contained ? "my-12 py-10" : "bg-smoke/25"}`}>
    <div className={contained ? "" : "page-shell"}>
      <p className="eyebrow">{tr ? "Komple proje üretimi" : "Complete project fabrication"}</p>
      <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight md:text-5xl">{tr ? "Projeden anahtar teslimine üretim." : "From design to installed completion."}</h2>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-ink/75">{tr
        ? "Üretim hattımız; sabit ve hareketli mobilya, dış cephe elemanları ve özel imalat projelerinde tasarım, imalat çizimleri, üretim, son yüzey, sevkiyat ve yerinde montajı kapsar. Tek parça taleplerini de birbiriyle uyumlu komple proje üretimini de karşılayabiliyoruz."
        : "Our production covers design development, shop drawings, fabrication, finishing, delivery and installation for fitted and freestanding furniture, exterior facade elements and custom fabricated projects. We accept individual component orders and coordinated complete-project commissions."}</p>
      <div className="mt-8 border-l-4 border-bronze bg-white p-6 md:p-8">
        <h3 className="font-display text-2xl">{tr ? "Masif kapaktan komple dolaba" : "From a solid timber door to a complete cabinet"}</h3>
        <p className="mt-3 max-w-4xl leading-8 text-ink/75">{tr
          ? "Örneğin masif bir dolap kapağı talep ettiğinizde; kapağı ayrı üretebilir veya dolabın gövdesini, raflarını, çekmecelerini, menteşe ve raylarını, yüzey işlemlerini ve yerinde montajını da üstlenebiliriz. Kapak ve gövde malzemelerini kullanımınıza ve bütçenize göre seçeriz."
          : "If you request a solid timber cabinet door, we can supply the door individually or also manufacture the carcass, shelves and drawers, fit hinges and runners, finish the furniture and install it. Door and carcass materials are chosen for your use and budget."}</p>
      </div>
      <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-2">
        {areas.map(area => <article key={area.title} className="border-t border-ink/15 pt-5"><h3 className="font-display text-2xl">{area.title}</h3><p className="mt-3 leading-8 text-ink/75">{area.text}</p></article>)}
      </div>
      <ol className="mt-10 grid gap-6 border-t border-ink/15 pt-7 md:grid-cols-2 xl:grid-cols-4">
        {steps.map(([title, description], i) => <li key={title}><span className="text-sm font-semibold text-bronze">0{i + 1}</span><h3 className="mt-2 text-lg font-semibold">{title}</h3><p className="mt-2 leading-7 text-ink/75">{description}</p></li>)}
      </ol>
      <p className="mt-7 max-w-4xl text-sm leading-7 text-ink/70">{tr
        ? "Anahtar teslim kapsamı, mobilya ve özel imalat iş paketinin tamamlanmasıdır. Dahil olan ürünleri, bağlantıları, teslim yerini ve montaj sorumluluklarını teklif ve imalat çizimleriyle netleştiririz."
        : "Turnkey delivery covers completion of the agreed furniture and custom fabrication package. Included products, interfaces, destination and installation responsibilities are defined in the quotation and shop drawings."}</p>
      <Link href="/contact#brief" className="button-primary mt-6">{tr ? "Komple projem için teklif iste" : "Request a complete project quote"}</Link>
    </div>
  </section>;
}
