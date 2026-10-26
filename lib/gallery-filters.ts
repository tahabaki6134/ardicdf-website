import { galleryCopy, type GalleryCategory, type GalleryKind } from "./gallery-copy";
import type { Locale } from "./i18n/locales";
import { pagePath } from "./i18n/routes";
import type { GalleryImage } from "./photo-gallery";
import { MAX_SELECTED_PROJECTS, parseSelectedProjects } from "./projects";

function searchText(value: string, locale: Locale) {
  return value.toLocaleLowerCase(locale).normalize("NFKD").replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, "").replace(/ı/g, "i");
}

export function filterGalleryImages(images: GalleryImage[], locale: Locale, query: string, kind: GalleryKind, category: GalleryCategory | "all") {
  const terms = searchText(query.trim(), locale).split(/\s+/).filter(Boolean);
  return images.filter(image => {
    if (kind !== "all" && image.concept !== (kind === "concept")) return false;
    if (category !== "all" && !image.categories.includes(category)) return false;
    const text = searchText([image.title, image.sourceTitle, ...image.categories.map(id => galleryCopy[locale].categories[id])].join(" "), locale);
    return terms.every(term => text.includes(term));
  });
}

export function gallerySourceHref(image: GalleryImage, locale: Locale) {
  if (image.concept) return pagePath(locale, { kind: "concepts" });
  if (image.projectId) return pagePath(locale, { kind: "project", id: image.projectId });
  if (image.archiveId) return pagePath(locale, { kind: "archive", id: image.archiveId });
  return undefined;
}

export function galleryEnquiryHref(image: GalleryImage, locale: Locale, selected: string[] = []) {
  // Only photographs attached to an actual published project can select a project.
  const current = !image.concept ? parseSelectedProjects(image.projectId) : [];
  const existing = parseSelectedProjects(selected);
  if (current.length && !existing.includes(current[0]) && existing.length >= MAX_SELECTED_PROJECTS) {
    return pagePath(locale, { kind: "selection" });
  }
  const ids = current.length ? parseSelectedProjects([...existing, ...current]) : [];
  const query = ids.length ? `?${new URLSearchParams({ selected: ids.join(",") })}` : "";
  return `${pagePath(locale, { kind: "contact" })}${query}#brief`;
}
