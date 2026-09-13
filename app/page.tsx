import { ManufacturingHome } from "@/components/manufacturing-pages";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const metadata = manufacturingMetadata(
  lang === "tr" ? "Özel Üretim · Mobilya, Cephe ve İmalat" : "Bespoke Fabrication · Furniture, Facades & Custom Objects",
  lang === "tr" ? "İstanbul’da epoksi döküm, kompozit, 3D baskı ve ahşap imalatı. Sabit ve hareketli mobilya ile dış cephe elemanlarında projeden montajlı teslime üretim." : "Epoxy casting, composites, 3D printing and woodworking in Istanbul. Fitted and freestanding furniture and facade elements, from design to installation.",
  { en: "/", tr: "/" }, lang
);
export default function HomePage() { return <ManufacturingHome lang={lang} />; }
