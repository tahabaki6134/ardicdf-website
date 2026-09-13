import type { Metadata } from "next";
import { manufacturingOrigins } from "./manufacturing-site";
import { methodPath, type Language, type ManufacturingMethod } from "./manufacturing";

export function manufacturingMetadata(title: string, description: string, paths: Record<Language, string>, lang: Language): Metadata {
  const url = manufacturingOrigins[lang] + paths[lang];
  return {
    title: { absolute: `${title} | ARDIÇ` }, description,
    alternates: {
      canonical: url,
      languages: {
        en: manufacturingOrigins.en + paths.en,
        tr: manufacturingOrigins.tr + paths.tr,
        "x-default": manufacturingOrigins.en + paths.en
      }
    },
    openGraph: {
      title: `${title} | ARDIÇ`, description, url, type: "website",
      locale: lang === "tr" ? "tr_TR" : "en_US",
      images: [{ url: manufacturingOrigins[lang] + "/og-image.png", width: 1200, height: 630, alt: "ARDIÇ Design & Fabrication" }]
    }
  };
}

export function methodMetadata(method: ManufacturingMethod, lang: Language): Metadata {
  const copy = method.copy[lang];
  return manufacturingMetadata(copy.title, copy.summary + " " + copy.intro,
    { en: methodPath(method, "en"), tr: methodPath(method, "tr") }, lang);
}
