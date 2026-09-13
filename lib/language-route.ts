import { manufacturingMethods, methodPath, comparePath, type Language } from "./manufacturing";
import { manufacturingOrigins } from "./manufacturing-site";
import { showcase } from "./site-showcase";

export function languageRoute(pathname: string, lang: Language) {
  const other = lang === "en" ? "tr" : "en";
  const method = manufacturingMethods.find(item => methodPath(item, lang) === pathname);
  let path = method ? methodPath(method, other) : pathname;
  if (pathname === comparePath(lang)) path = comparePath(other);
  if (lang === "en") {
    const project = showcase.find(item => pathname === `/works/${item.id}`);
    if (project) path = project.archive;
    if (["/works/giant-burger-display-prop", "/works/decorative-entrance-arch"].includes(pathname)) path = "/works";
    if (pathname.startsWith("/industries") || pathname === "/planning" || pathname.startsWith("/services/")) path = "/services";
    if (pathname === "/project-selection") path = "/contact";
  } else if (!method && !["/", "/services", "/about", "/fabrication", "/works", "/contact", "/concepts", "/privacy", "/references", comparePath(lang)].includes(pathname) && !pathname.startsWith("/works/")) path = "/services";
  return manufacturingOrigins[other] + path;
}
