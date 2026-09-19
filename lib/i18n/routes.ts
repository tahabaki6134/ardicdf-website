const manufacturingMethods = [
 { id: "foam", slug: { tr: "strafor-eps-xps", en: "eps-xps-foam" } },
 { id: "glass", slug: { tr: "cam-elyaf-polyester", en: "fiberglass-grp" } },
 { id: "carbon", slug: { tr: "karbon-fiber", en: "carbon-fiber" } },
 { id: "printing", slug: { tr: "3d-baski", en: "3d-printing" } },
 { id: "pu", slug: { tr: "poliuretan", en: "polyurethane" } },
 { id: "epoxy", slug: { tr: "epoksi-recine-dokum", en: "epoxy-resin-casting" } },
 { id: "tooling", slug: { tr: "kalip-model", en: "molds-patterns" } },
 { id: "wood", slug: { tr: "ahsap-cnc", en: "wood-cnc" } }
];
export const routeMethodIds = [...manufacturingMethods.map(m => m.id), "cnc"];
const projectIds = ["farmasi-boss-trip", "modular-artificial-rock-concert-environment", "cosmetic-bottle-display-props", "giant-burger-display-prop", "classical-decorative-columns", "ornamental-elephant-sculpture", "decorative-entrance-arch"];
const archiveIds = ["safari-experiences", "sculptures-characters", "artificial-rock-organic-forms", "historical-thematic-environments", "cnc-manufacturing-processes", "molds-composite-production", "commercial-brand-installations"];
const industryIds = ["retail-brand-activations", "events-exhibitions", "museums-themed-attractions", "hospitality-architectural-decor", "film-television", "prototypes-display-models"];
import { locales, prefix, isLocale, type Locale } from "./locales";
import { countryPages } from "./country-pages";

export type Page = { kind: "home" | "services" | "compare" | "works" | "about" | "workshop" | "contact" | "privacy" | "concepts" | "planning" | "industries" | "selection" | "method" | "project" | "archive" | "industry" | "country"; id?: string };
export const staticPages: Page["kind"][] = ["home", "services", "compare", "works", "about", "workshop", "contact", "privacy", "concepts", "planning", "industries", "selection"];
const staticSegments: Record<string, string> = { home: "", services: "services", compare: "compare", works: "works", about: "about", workshop: "fabrication", contact: "contact", privacy: "privacy", concepts: "concepts", planning: "planning", industries: "industries", selection: "project-selection" };
export const allPages: Page[] = [
  ...staticPages.map(kind => ({ kind })),
  ...[...manufacturingMethods.map(m => m.id), "cnc"].map(id => ({ kind: "method" as const, id })),
  ...projectIds.map(id => ({ kind: "project" as const, id })),
  ...archiveIds.map(id => ({ kind: "archive" as const, id })),
  ...industryIds.map(id => ({ kind: "industry" as const, id })),
  ...Array.from(new Set(countryPages.map(p => p.country))).map(id => ({ kind: "country" as const, id }))
];
export function pagePath(locale: Locale, page: Page) {
  let segment = staticSegments[page.kind];
  if (page.kind === "compare" && locale === "tr") segment = "karsilastir";
  if (page.kind === "method") {
    const method = manufacturingMethods.find(m => m.id === page.id);
    segment = `${locale === "tr" ? "imalat" : "manufacturing"}/${page.id === "cnc" ? "cnc" : method?.slug[locale === "tr" ? "tr" : "en"]}`;
  }
  if (page.kind === "project" || page.kind === "archive") segment = `works/${page.id}`;
  if (page.kind === "industry") segment = `industries/${page.id}`;
  if (page.kind === "country") segment = page.id!.toLowerCase();
  return segment ? `${prefix(locale)}/${segment}` : prefix(locale) || "/";
}
export function resolvePage(locale: Locale, slug: string[] = []) {
  const url = slug.length ? `${prefix(locale)}/${slug.join("/")}` : prefix(locale) || "/";
  return allPages.find(page => pageLocales(page).includes(locale) && pagePath(locale, page) === url);
}
export function parsePublicPath(pathname: string): { locale: Locale; page?: Page } {
  const parts = pathname.split("/").filter(Boolean);
  const locale: Locale = isLocale(parts[0]) ? parts.shift() as Locale : "tr";
  return { locale, page: resolvePage(locale, parts) };
}
export function pageLocales(page: Page): Locale[] { return page.kind === "country" ? countryPages.filter(p => p.country === page.id).map(p => p.locale) : [...locales]; }
export function languageAlternates(page: Page) { const available = pageLocales(page); return Object.fromEntries([...available.map(locale => [locale, pagePath(locale, page)]), ["x-default", pagePath(available.includes("en") ? "en" : available[0], page)]]); }
