import type { Language } from "./manufacturing";

export const showcase = [
  {
    id: "modular-artificial-rock-concert-environment",
    image: "/works/modular-artificial-rock-concert-environment/concert-rock-environment-hero.jpeg",
    archive: "/works/artificial-rock-organic-forms",
    en: { title: "Modular concert scenery", detail: "EPS modules · surface finishing · site assembly", alt: "Completed artificial rock scenery in use during an arena performance" },
    tr: { title: "Modüler konser dekoru", detail: "EPS modüller · son yüzey · yerinde montaj", alt: "Arena konserinde kullanımda olan tamamlanmış yapay kaya dekoru" }
  },
  {
    id: "classical-decorative-columns",
    image: "/projects/portfolio/historical-thematic-environments/historical-thematic-environments-04.jpeg",
    archive: "/works/historical-thematic-environments",
    en: { title: "Decorative columns", detail: "Architectural detail · stone-effect finish", alt: "Finished decorative columns with fluted shafts and ornamental capitals" },
    tr: { title: "Dekoratif kolonlar", detail: "Mimari detay · taş efektli son yüzey", alt: "Yivli gövde ve süslü başlıklarıyla tamamlanmış dekoratif kolonlar" }
  },
  {
    id: "cosmetic-bottle-display-props",
    image: "/projects/portfolio/commercial-brand-installations/molds-composite-production-10.jpeg",
    archive: "/works/commercial-brand-installations",
    en: { title: "Oversized product displays", detail: "Shaped components · colour · brand graphics", alt: "Completed oversized cosmetic bottle displays with coloured surfaces and graphics" },
    tr: { title: "Büyük ürün teşhirleri", detail: "Özel form · renk · marka grafikleri", alt: "Renk ve grafikleri tamamlanmış büyük kozmetik şişesi teşhirleri" }
  },
  {
    id: "ornamental-elephant-sculpture",
    image: "/services/sculpture-elephant-front.jpeg",
    archive: "/works/sculptures-characters",
    en: { title: "Ornamental sculpture", detail: "Sculptural form · relief detail · surface finish", alt: "White elephant sculpture with ornamental relief and long curved tusks" },
    tr: { title: "Detaylı heykel üretimi", detail: "Heykel formu · rölyef detay · son yüzey", alt: "Rölyef süslemeli, uzun kıvrımlı dişleri olan beyaz fil heykeli" }
  }
];

export function showcaseHref(item: typeof showcase[number], lang: Language) {
  return lang === "en" ? `/works/${item.id}` : item.archive;
}
