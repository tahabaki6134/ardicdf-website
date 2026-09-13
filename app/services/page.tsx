import { ManufacturingIndex } from "@/components/manufacturing-pages";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const metadata = manufacturingMetadata(
  lang === "tr" ? "İmalat Yöntemleri ve Malzeme Rehberi" : "Manufacturing Methods & Material Guide",
  lang === "tr" ? "Sekiz imalat yöntemini karşılaştırın: strafor, cam elyaf, karbon fiber, 3D baskı, poliüretan, epoksi döküm, kalıp ve ahşap/mobilya. Komple proje üretimini inceleyin." : "Compare eight methods: foam, fiberglass, carbon fiber, 3D printing, polyurethane, epoxy casting, molds and wood/furniture. Explore complete project fabrication.",
  { en: "/services", tr: "/services" }, lang
);
export default function ServicesPage() { return <ManufacturingIndex lang={lang} />; }
