import { projects } from "./projects";
import { portfolioCategories, getPortfolioImageSrc, conceptCollections } from "./content";
import { localizedContent } from "./i18n/content";
import { dictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";
import imageAliases from "./gallery-image-aliases.json";

export type GalleryImage = { src: string; title: string; concept: boolean };

// Reuse the published collections, never private uploads or unused assets.
// The same photograph can appear in several projects, but only once here.
export function galleryImages(locale: Locale): GalleryImage[] {
  const content = localizedContent(locale), t = dictionary(locale);
  const images = new Map<string, GalleryImage>();
  function add(src: string, title: string, concept = false) {
    const canonical = (imageAliases as Record<string, string>)[src] || src;
    // A concept reused as an archive cover keeps its explicit concept label.
    if (!images.has(canonical) || concept) images.set(canonical, { src: canonical, title, concept });
  }
  for (const project of projects) {
    const copy = content.projects[project.id];
    add(project.image, copy.title);
    project.gallery?.forEach((image, i) => add(image.src, copy.gallery?.[i]?.alt || copy.title));
  }
  for (const category of portfolioCategories.filter(c => c.published !== false)) {
    const title = content.archives[category.slug].title;
    if (category.coverImage) add(category.coverImage, title);
    category.coverImages?.forEach(src => add(src.src, title));
    category.images.forEach(image => add(getPortfolioImageSrc(image), title));
  }
  for (const concept of conceptCollections) {
    const title = `${t.gallery_concept} · ${content.concepts[concept.number].title}`;
    if (concept.image) add(concept.image, title, true);
    concept.galleryImages?.forEach(image => add(image.src, title, true));
  }
  return Array.from(images.values());
}
