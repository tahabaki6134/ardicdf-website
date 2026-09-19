import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/i18n/locales";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: process.env.VERCEL_ENV === "preview" ? ["/"] : ["/api/", "/review.html"] }, sitemap: siteOrigin + "/sitemap.xml" }; }
