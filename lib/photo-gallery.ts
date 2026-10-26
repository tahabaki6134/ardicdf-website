import { concertDetailImages, showcase } from "./site-showcase";
import { industries } from "./industries";
import { projects } from "./projects";
import { portfolioCategories, getPortfolioImageSrc, conceptCollections } from "./content";
import { localizedContent } from "./i18n/content";
import { dictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";
import type { GalleryCategory } from "./gallery-copy";
import imageAliases from "./gallery-image-aliases.json";

export type GalleryImage = {
  src: string;
  title: string;
  sourceTitle: string;
  concept: boolean;
  categories: GalleryCategory[];
  projectId?: string;
  archiveId?: string;
};

const projectCategories: Record<string, GalleryCategory[]> = {
  "sculptural-reception-interior": ["interiors"],
  "farmasi-boss-trip": ["brand"],
  "modular-artificial-rock-concert-environment": ["scenery"],
  "cosmetic-bottle-display-props": ["brand"],
  "giant-burger-display-prop": ["brand", "sculpture"],
  "classical-decorative-columns": ["architecture"],
  "ornamental-elephant-sculpture": ["sculpture"],
  "decorative-entrance-arch": ["architecture"]
};
const archiveCategories: Record<string, GalleryCategory[]> = {
  "safari-experiences": ["sculpture"],
  "sculptures-characters": ["sculpture"],
  "artificial-rock-organic-forms": ["scenery"],
  "historical-thematic-environments": ["architecture"],
  "cnc-manufacturing-processes": ["workshop"],
  "molds-composite-production": ["workshop"],
  "commercial-brand-installations": ["brand"]
};

// Reuse the published collections, never private uploads or unused assets.
// The same photograph can appear in several projects, but only once here.
export function galleryImages(locale: Locale): GalleryImage[] {
  const content = localizedContent(locale), t = dictionary(locale);
  const images = new Map<string, GalleryImage>();
  function add(src: string, title: string, details: Partial<Omit<GalleryImage, "src" | "title">> = {}) {
    const canonical = (imageAliases as Record<string, string>)[src] || src;
    const previous = images.get(canonical);
    // A concept reused as an archive cover keeps its explicit concept label.
    if (details.concept) {
      images.set(canonical, { src: canonical, title, sourceTitle: title, concept: true, categories: ["interiors"] });
    } else if (!previous) {
      images.set(canonical, { src: canonical, title, sourceTitle: title, concept: false, categories: [], ...details });
    } else if (!previous.concept) {
      images.set(canonical, { ...previous, categories: Array.from(new Set([...previous.categories, ...(details.categories || [])])), archiveId: previous.archiveId || details.archiveId });
    }
  }
  for (const project of projects) {
    const copy = content.projects[project.id];
    const details = { projectId: project.id, sourceTitle: copy.title, categories: projectCategories[project.id] || [] };
    add(project.image, copy.title, details);
    project.gallery?.forEach((image, i) => add(image.src, copy.gallery?.[i]?.alt || copy.title, details));
  }
  concertDetailImages.forEach(src => add(src, content.projects[showcase[0].id].title, { projectId: showcase[0].id, categories: ["scenery"] }));
  industries.forEach(industry => add(industry.image, content.industries[industry.slug].title));
  for (const category of portfolioCategories.filter(c => c.published !== false)) {
    const title = content.archives[category.slug].title;
    const details = { archiveId: category.slug, categories: archiveCategories[category.slug] || [] };
    if (category.coverImage) add(category.coverImage, title, details);
    category.coverImages?.forEach(src => add(src.src, title, details));
    category.images.forEach(image => add(getPortfolioImageSrc(image), title, details));
  }
  for (const concept of conceptCollections) {
    const title = `${t.gallery_concept} · ${content.concepts[concept.number].title}`;
    if (concept.image) add(concept.image, title, { concept: true });
    concept.galleryImages?.forEach(image => add(image.src, title, { concept: true }));
  }
  return Array.from(images.values());
}
