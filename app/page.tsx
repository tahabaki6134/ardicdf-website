import { ManufacturingHome } from "@/components/manufacturing-pages";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const metadata = manufacturingMetadata(
  lang === "tr" ? "Strafor, Cam Elyaf, Karbon Fiber ve 3D Baskı İmalatı" : "Foam, Fiberglass, Carbon Fiber & 3D Print Manufacturing",
  lang === "tr" ? "İstanbul’da epoksi döküm, kompozit, 3D baskı ve ahşap imalatı. Sabit ve hareketli mobilya ile dış cephe elemanlarında projeden montajlı teslime üretim." : "Epoxy casting, composites, 3D printing and woodworking in Istanbul. Fitted and freestanding furniture and facade elements, from design to installation.",
  { en: "/", tr: "/" }, lang
);
export default function HomePage() { return <ManufacturingHome lang={lang} />; }
