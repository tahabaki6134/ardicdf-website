import { concertDetailImages, showcase } from "./site-showcase";
import { industries } from "./industries";
import { projects } from "./projects";
import { portfolioCategories, getPortfolioImageSrc, conceptCollections } from "./content";
import { localizedContent } from "./i18n/content";
import { dictionary } from "./i18n/dictionary";
import type { Locale } from "./i18n/locales";
import imageAliases from "./gallery-image-aliases.json";
import epoxyAssets from "./epoxy-assets.json";
import collections from "./i18n/messages/collections.json";
import { pagePath } from "./i18n/routes";

export type GalleryImage = { src: string; title: string; concept: boolean; category?: string; href?: string; enquiryHref?: string };

export function epoxyImages(locale: Locale): GalleryImage[] {
  const copy = collections[locale];
  return epoxyAssets.map(image => ({
    src: image.src, title: copy.titles[image.number - 1], category: image.category, concept: false,
    href: pagePath(locale, { kind: "project", id: "epoxy-wood-collection" }),
    enquiryHref: pagePath(locale, { kind: "contact" }) + "?method=epoxy&selected=epoxy-wood-collection#brief"
  }));
}

// Reuse the published collections, never private uploads or unused assets.
// The same photograph can appear in several projects, but only once here.
export function galleryImages(locale: Locale): GalleryImage[] {
  const content = localizedContent(locale), t = dictionary(locale);
  const images = new Map<string, GalleryImage>();
  function add(src: string, title: string, concept = false, extra: Partial<GalleryImage> = {}) {
    const canonical = (imageAliases as Record<string, string>)[src] || src;
    // A concept reused as an archive cover keeps its explicit concept label.
    if (!images.has(canonical) || concept) images.set(canonical, { ...extra, src: canonical, title, concept });
  }
  for (const project of projects) {
    if (project.id === "epoxy-wood-collection") {
      epoxyImages(locale).forEach(image => add(image.src, image.title, false, image));
      continue;
    }
    const copy = content.projects[project.id];
    const links = { href: pagePath(locale, { kind: "project", id: project.id }), enquiryHref: pagePath(locale, { kind: "contact" }) + `?selected=${project.id}#brief` };
    add(project.image, copy.gallery?.[0]?.alt || copy.title, false, links);
    project.gallery?.forEach((image, i) => add(image.src, copy.gallery?.[i]?.alt || copy.title, false, links));
  }
  concertDetailImages.forEach(src => add(src, content.projects[showcase[0].id].title));
  industries.forEach(industry => add(industry.image, content.industries[industry.slug].title));
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
