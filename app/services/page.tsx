import { ManufacturingIndex } from "@/components/manufacturing-pages";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const metadata = manufacturingMetadata(
  lang === "tr" ? "İmalat Yöntemleri ve Malzeme Rehberi" : "Manufacturing Methods & Material Guide",
  lang === "tr" ? "Yedi imalat yönteminin maliyetini, detay sınırlarını ve kullanım alanlarını öğrenin. Strafor, cam elyaf, karbon fiber, 3D baskı ve kalıp üretimi." : "Understand the cost, detail limits and uses of seven manufacturing routes, including foam, fiberglass, carbon fiber, 3D printing and mold making.",
  { en: "/services", tr: "/services" }, lang
);
export default function ServicesPage() { return <ManufacturingIndex lang={lang} />; }
