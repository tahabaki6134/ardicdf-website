import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/lib/content";

const siteUrl = "https://ardicdf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/works",
    "/services",
    "/about",
    "/fabrication",
    "/live",
    "/contact",
    "/privacy"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8
    })),
    ...portfolioCategories.map((category) => ({
      url: `${siteUrl}/works/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
