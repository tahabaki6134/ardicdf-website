import { ManufacturingCompare } from "@/components/manufacturing-compare";
import { getMethod } from "@/lib/manufacturing";
import { manufacturingMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

const title = lang === "tr" ? "İmalat yöntemlerini karşılaştırın" : "Compare manufacturing methods";
const description = lang === "tr"
  ? "Strafor, cam elyaf, karbon fiber ve 3D baskıyı maliyet, detay, dayanım ve kullanım açısından yan yana değerlendirin."
  : "Compare foam, fiberglass, carbon fiber and 3D printing by cost, detail, durability and use.";
export const metadata = manufacturingMetadata(title, description, { en: "/compare", tr: "/karsilastir" }, lang);

export default function ComparePage({ searchParams }: { searchParams: { left?: string | string[]; right?: string | string[] } }) {
  const left = typeof searchParams.left === "string" && getMethod(searchParams.left) ? searchParams.left : "foam";
  const requestedRight = typeof searchParams.right === "string" && getMethod(searchParams.right) ? searchParams.right : "printing";
  const right = left === requestedRight ? (left === "glass" ? "carbon" : "glass") : requestedRight;
  return <main className="page-shell"><p className="eyebrow">{lang === "tr" ? "Maliyet · Detay · Kullanım" : "Cost · Detail · Use"}</p><h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight md:text-6xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">{description}</p><ManufacturingCompare key={`${left}:${right}`} lang={lang} initialLeft={left} initialRight={right} /></main>;
}
