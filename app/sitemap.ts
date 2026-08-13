import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/lib/content";

const siteUrl = "https://www.ardicdf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", lastModified: "2026-08-13" },
    { path: "/works", lastModified: "2026-08-13" },
    { path: "/concepts", lastModified: "2026-08-13" },
    { path: "/services", lastModified: "2026-08-13" },
    { path: "/services/cnc-foam-polyurethane-machining", lastModified: "2026-08-13" },
    { path: "/services/composite-fabrication", lastModified: "2026-08-13" },
    { path: "/services/large-format-3d-printing", lastModified: "2026-08-13" },
    { path: "/services/scenic-fabrication", lastModified: "2026-08-13" },
    { path: "/services/themed-environment-fabrication", lastModified: "2026-08-13" },
    { path: "/about", lastModified: "2026-08-13" },
    { path: "/fabrication", lastModified: "2026-08-13" },
    { path: "/contact", lastModified: "2026-08-13" },
    { path: "/privacy", lastModified: "2026-06-26" }
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route.path === "" ? 1 : 0.8
    })),
    ...portfolioCategories.map((category) => ({
      url: `${siteUrl}/works/${category.slug}`,
      lastModified: "2026-08-13",
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
