import { NextRequest, NextResponse } from "next/server";
import { isLocale, prefix, type Locale } from "./lib/i18n/locales";
import { pagePath, resolvePage } from "./lib/i18n/routes";
import { notFoundHtml } from "./lib/i18n/not-found";

const legacyServices: Record<string, string> = {
  "cnc-foam-polyurethane-machining": "manufacturing/cnc",
  "composite-fabrication": "manufacturing/fiberglass-grp",
  "large-format-3d-printing": "manufacturing/3d-printing",
  "scenic-fabrication": "industries/events-exhibitions",
  "themed-environment-fabrication": "industries/museums-themed-attractions"
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // The independent .com.tr deployment is the domestic Turkish website.
  if (url.hostname === "ardicdf.com.tr" || url.hostname === "www.ardicdf.com.tr") {
    return NextResponse.next();
  }

  // ardicdf.com is the international site and opens in English.
  if (url.pathname === "/") {
    url.pathname = "/en";
    return NextResponse.redirect(url, 308);
  }

  const parts = url.pathname.split("/").filter(Boolean);
  const prefixed = isLocale(parts[0]);

  if (prefixed) {
    const locale = parts.shift() as Locale;

    if (["live", "references"].includes(parts[0])) {
      url.pathname = prefix(locale) + (parts[0] === "live" ? "/fabrication" : "/works");
      return NextResponse.redirect(url, 308);
    }

    if (parts[0] === "services" && legacyServices[parts[1]]) {
      let target = legacyServices[parts[1]];
      if (locale === "tr") {
        target = target
          .replace("manufacturing/cnc", "imalat/cnc")
          .replace("manufacturing/fiberglass-grp", "imalat/cam-elyaf-polyester")
          .replace("manufacturing/3d-printing", "imalat/3d-baski");
      }
      url.pathname = prefix(locale) + "/" + target;
      return NextResponse.redirect(url, 308);
    }

    if (!resolvePage(locale, parts)) {
      return new NextResponse(notFoundHtml(locale), {
        status: 404,
        headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, follow" }
      });
    }

    return NextResponse.next();
  }

  // Old unprefixed English URLs are canonicalized to /en/... instead of
  // silently rendering Turkish content on the international domain.
  if (["live", "references"].includes(parts[0])) {
    url.pathname = parts[0] === "live" ? "/en/fabrication" : "/en/works";
    return NextResponse.redirect(url, 308);
  }

  if (parts[0] === "services" && legacyServices[parts[1]]) {
    url.pathname = "/en/" + legacyServices[parts[1]];
    return NextResponse.redirect(url, 308);
  }

  const englishPage = resolvePage("en", parts);
  if (englishPage) {
    url.pathname = pagePath("en", englishPage);
    return NextResponse.redirect(url, 308);
  }

  // Keep explicitly Turkish legacy slugs usable, but move them under /tr/....
  const turkishPage = resolvePage("tr", parts);
  if (turkishPage) {
    url.pathname = pagePath("tr", turkishPage);
    return NextResponse.redirect(url, 308);
  }

  return new NextResponse(notFoundHtml("en"), {
    status: 404,
    headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, follow" }
  });
}

export const config = { matcher: ["/((?!api|_next|.*\\..*).*)"] };
