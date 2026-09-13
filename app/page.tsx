import { ManufacturingHome } from "@/components/manufacturing-pages";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const metadata = manufacturingMetadata(
  lang === "tr" ? "Strafor, Cam Elyaf, Karbon Fiber ve 3D Baskı İmalatı" : "Foam, Fiberglass, Carbon Fiber & 3D Print Manufacturing",
  lang === "tr" ? "İstanbul’da özel imalat. Strafor, cam elyaf, karbon fiber, 3D baskı, poliüretan, kalıp ve ahşap yöntemlerini maliyet ve performanslarıyla inceleyin." : "Custom manufacturing from Istanbul. Explore foam, fiberglass, carbon fiber, 3D printing, polyurethane, mold making and woodworking by cost and performance.",
  { en: "/", tr: "/" }, lang
);
export default function HomePage() { return <ManufacturingHome lang={lang} />; }
