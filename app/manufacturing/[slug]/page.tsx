import { notFound } from "next/navigation";
import { ManufacturingDetail } from "@/components/manufacturing-pages";
import { getMethodBySlug, manufacturingMethods } from "@/lib/manufacturing";
import { methodMetadata } from "@/lib/manufacturing-meta";
import { manufacturingLanguage as lang } from "@/lib/manufacturing-site";

export const dynamicParams = false;
export function generateStaticParams() { return manufacturingMethods.map(method => ({ slug: method.slug[lang] })); }
export function generateMetadata({ params }: { params: { slug: string } }) {
  const method = getMethodBySlug(params.slug, lang);
  if (!method) notFound();
  return methodMetadata(method, lang);
}
export default function MethodPage({ params }: { params: { slug: string } }) {
  const method = getMethodBySlug(params.slug, lang);
  if (!method) notFound();
  return <ManufacturingDetail method={method} lang={lang} />;
}
