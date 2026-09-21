import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/i18n/locales";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Public utility pages must be crawlable so Google can read their noindex.
      // Their metadata/headers and exclusion from the sitemap remain in place.
      disallow: process.env.VERCEL_ENV === "preview" ? ["/"] : ["/api/"]
    },
    sitemap: siteOrigin + "/sitemap.xml"
  };
}
