import { pageMetadata } from "./seo";
import { pagePath, type Page } from "./routes";
import { dictionary } from "./dictionary";
import { siteOrigin, type Locale } from "./locales";
import { getProject } from "../projects";
export function pageStructuredData(locale: Locale, page: Page) {
  const meta = pageMetadata(locale, page), url = siteOrigin + pagePath(locale, page), t = dictionary(locale);
  const parent = ["project", "archive"].includes(page.kind) ? { kind: "works" as const } : page.kind === "method" ? { kind: "services" as const } : undefined;
  const crumbs = [{ "@type": "ListItem", position: 1, name: t.nav_home, item: siteOrigin + pagePath(locale, { kind: "home" }) }];
  if (parent) crumbs.push({ "@type": "ListItem", position: 2, name: parent.kind === "works" ? t.nav_works : t.nav_services, item: siteOrigin + pagePath(locale, parent) });
  if (page.kind !== "home") crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: String(meta.title).replace(/ \| ARDIÇ$/, ""), item: url });
  const item = { "@type": page.kind === "project" ? "CreativeWork" : page.kind === "method" ? "Service" : "WebPage", "@id": url + "#content", url, name: String(meta.title).replace(/ \| ARDIÇ$/, ""), description: meta.description, inLanguage: locale, ...(page.kind === "project" ? { image: siteOrigin + getProject(page.id!)!.image, creator: { "@id": siteOrigin + "/#organization" } } : page.kind === "method" ? { provider: { "@id": siteOrigin + "/#organization" } } : {}) };
  return { "@context": "https://schema.org", "@graph": [item, { "@type": "BreadcrumbList", itemListElement: crumbs }] };
}
