import type { MetadataRoute } from "next";
import { portfolioCategories } from "@/lib/content";
import { projects } from "@/lib/projects";
import { industries } from "@/lib/industries";

const siteUrl = "https://www.ardicdf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", lastModified: "2026-09-08" },
    { path: "/works", lastModified: "2026-09-08" },
    { path: "/industries", lastModified: "2026-09-08" },
    { path: "/planning", lastModified: "2026-09-08" },
    {
      path: "/works/modular-artificial-rock-concert-environment",
      lastModified: "2026-09-08"
    },
    { path: "/concepts", lastModified: "2026-08-13" },
    { path: "/services", lastModified: "2026-08-13" },
    { path: "/services/cnc-foam-polyurethane-machining", lastModified: "2026-08-13" },
    { path: "/services/composite-fabrication", lastModified: "2026-08-13" },
    { path: "/services/large-format-3d-printing", lastModified: "2026-08-13" },
    { path: "/services/scenic-fabrication", lastModified: "2026-08-13" },
    { path: "/services/themed-environment-fabrication", lastModified: "2026-08-13" },
    { path: "/about", lastModified: "2026-08-13" },
    { path: "/fabrication", lastModified: "2026-08-13" },
    { path: "/contact", lastModified: "2026-09-08" },
    { path: "/privacy", lastModified: "2026-09-08" }
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: route.lastModified,
      changeFrequency: route.path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route.path === "" ? 1 : 0.8
    })),
    ...portfolioCategories
      .filter((category) => category.published !== false)
      .map((category) => ({
        url: `${siteUrl}/works/${category.slug}`,
        lastModified: "2026-08-13",
        changeFrequency: "monthly" as const,
        priority: 0.7
      })),
    ...projects
      .filter((project) => project.id !== "modular-artificial-rock-concert-environment")
      .map((project) => ({
        url: `${siteUrl}/works/${project.id}`,
        lastModified: "2026-09-08",
        changeFrequency: "monthly" as const,
        priority: 0.8
      })),
    ...industries.map((industry) => ({
      url: `${siteUrl}/industries/${industry.slug}`,
      lastModified: "2026-09-08",
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
