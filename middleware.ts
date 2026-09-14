import { NextRequest, NextResponse } from "next/server";
import { isLocale, prefix, siteOrigin, type Locale } from "./lib/i18n/locales";

const legacyServices: Record<string, string> = {
  "cnc-foam-polyurethane-machining": "manufacturing/cnc",
  "composite-fabrication": "manufacturing/fiberglass-grp",
  "large-format-3d-printing": "manufacturing/3d-printing",
  "scenic-fabrication": "industries/events-exhibitions",
  "themed-environment-fabrication": "industries/museums-themed-attractions"
};
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const parts = url.pathname.split("/").filter(Boolean);
  if (url.hostname === "ardicdf.com.tr" || url.hostname === "www.ardicdf.com.tr") {
    return NextResponse.redirect(new URL(url.pathname + url.search, siteOrigin), 308);
  }
  const prefixed = isLocale(parts[0]);
  const locale: Locale = prefixed ? parts.shift() as Locale : "tr";
  if (["live", "references"].includes(parts[0])) {
    url.pathname = prefix(locale) + (parts[0] === "live" ? "/fabrication" : "/works");
    return NextResponse.redirect(url, 308);
  }
  if (parts[0] === "services" && legacyServices[parts[1]]) {
    const targetLocale = prefixed ? locale : "en";
    let target = legacyServices[parts[1]];
    if (targetLocale === "tr") target = target.replace("manufacturing/cnc", "imalat/cnc").replace("manufacturing/fiberglass-grp", "imalat/cam-elyaf-polyester").replace("manufacturing/3d-printing", "imalat/3d-baski");
    url.pathname = prefix(targetLocale) + "/" + target;
    return NextResponse.redirect(url, 308);
  }
  // Legacy English-only URLs keep their English destination.
  if (!prefixed && (parts[0] === "manufacturing" || parts[0] === "compare")) {
    url.pathname = "/en/" + parts.join("/");
    return NextResponse.redirect(url, 308);
  }
  if (!prefixed) {
    url.pathname = "/tr" + (url.pathname === "/" ? "" : url.pathname);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
