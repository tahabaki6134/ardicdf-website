import { getIndustry } from "../industries";
import { parseSelectedProjects } from "../projects";
import type { Locale } from "./locales";
import { pageLocales, pagePath, parsePublicPath, routeMethodIds } from "./routes";

export function methodFromQuery(value: string | null) {
  return value && routeMethodIds.includes(value) ? value : undefined;
}

export function comparisonFromQuery(params: URLSearchParams) {
  const requestedLeft = methodFromQuery(params.get("left"));
  const requestedRight = methodFromQuery(params.get("right"));
  let left = requestedLeft || "foam";
  let right = requestedRight || "printing";
  if (left === right) {
    if (requestedRight && !requestedLeft) left = right === "foam" ? "printing" : "foam";
    else right = left === "printing" ? "foam" : "printing";
  }
  return { left, right };
}

// Keep the same public brief context in both language menus. Never carry
// arbitrary query values or customer form text into a language link.
export function languagePath(pathname: string, locale: Locale, params = new URLSearchParams(), hash = "") {
  const { page } = parsePublicPath(pathname);
  const path = pagePath(locale, page && pageLocales(page).includes(locale) ? page : { kind: "home" });
  const query = new URLSearchParams();
  for (const key of ["method", "alternative", "left", "right"]) {
    const value = methodFromQuery(params.get(key));
    if (value) query.set(key, value);
  }
  const selected = parseSelectedProjects(params.get("selected"));
  if (selected.length) query.set("selected", selected.join(","));
  const industry = params.get("industry");
  if (industry && getIndustry(industry)) query.set("industry", industry);
  const fragment = ["#brief", "#methods", "#featured-projects", "#project-delivery"].includes(hash) ? hash : "";
  return path + (query.size ? "?" + query : "") + fragment;
}
