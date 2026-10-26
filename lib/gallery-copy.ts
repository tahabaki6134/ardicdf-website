import type { Locale } from "./i18n/locales";

export const galleryCategories = ["interiors", "sculpture", "scenery", "architecture", "brand", "workshop"] as const;
export type GalleryCategory = (typeof galleryCategories)[number];
export type GalleryKind = "all" | "fabrication" | "concept";

type GalleryCopy = {
  search: string;
  searchHint: string;
  kind: string;
  allKinds: string;
  fabrication: string;
  concept: string;
  conceptNote: string;
  category: string;
  allCategories: string;
  categories: Record<GalleryCategory, string>;
  results: string;
  empty: string;
  reset: string;
  viewProject: string;
  viewArchive: string;
  viewConcept: string;
  requestSimilar: string;
  discussConcept: string;
};

export const galleryCopy: Record<Locale, GalleryCopy> = {
  tr: {
    search: "Galeride ara", searchHint: "Örn. kolon, heykel, FARMASI", kind: "Görsel türü", allKinds: "Tüm görseller",
    fabrication: "Proje ve atölye görselleri", concept: "Konsept çalışması", conceptNote: "Bu görsel bir tasarım konseptidir; tamamlanmış bir uygulamayı göstermez.",
    category: "Kategori", allCategories: "Tüm kategoriler", categories: { interiors: "İç mekân ve mobilya", sculpture: "Heykel ve karakterler", scenery: "Sahne ve yapay kaya", architecture: "Mimari dekor", brand: "Marka ve etkinlik objeleri", workshop: "Atölye ve üretim süreçleri" },
    results: "{shown} / {total} görsel", empty: "Bu arama ve filtrelerle eşleşen görsel yok.", reset: "Filtreleri temizle", viewProject: "Projeyi incele", viewArchive: "İlgili arşivi incele", viewConcept: "Konsepti incele", requestSimilar: "Benzer bir iş için teklif iste", discussConcept: "Bu konsepti görüşelim"
  },
  en: {
    search: "Search the gallery", searchHint: "E.g. columns, sculpture, FARMASI", kind: "Image type", allKinds: "All images",
    fabrication: "Projects & workshop", concept: "Concept study", conceptNote: "This image is a design concept, not a completed installation.",
    category: "Category", allCategories: "All categories", categories: { interiors: "Interiors & furniture", sculpture: "Sculpture & characters", scenery: "Scenery & artificial rock", architecture: "Architectural decor", brand: "Brand & event objects", workshop: "Workshop & fabrication processes" },
    results: "{shown} / {total} images", empty: "No images match this search and these filters.", reset: "Clear filters", viewProject: "View project", viewArchive: "View related archive", viewConcept: "View concept", requestSimilar: "Request a similar project", discussConcept: "Discuss this concept"
  },
  de: {
    search: "Galerie durchsuchen", searchHint: "Z. B. Säulen, Skulptur, FARMASI", kind: "Bildtyp", allKinds: "Alle Bilder",
    fabrication: "Projekte & Werkstatt", concept: "Konzeptstudie", conceptNote: "Dieses Bild zeigt ein Designkonzept, keine fertiggestellte Ausführung.",
    category: "Kategorie", allCategories: "Alle Kategorien", categories: { interiors: "Innenräume & Möbel", sculpture: "Skulpturen & Figuren", scenery: "Kulissen & Kunstfelsen", architecture: "Architekturdekoration", brand: "Marken- & Eventobjekte", workshop: "Werkstatt & Fertigungsprozesse" },
    results: "{shown} / {total} Bilder", empty: "Keine Bilder entsprechen dieser Suche und diesen Filtern.", reset: "Filter zurücksetzen", viewProject: "Projekt ansehen", viewArchive: "Zugehöriges Archiv ansehen", viewConcept: "Konzept ansehen", requestSimilar: "Ähnliches Projekt anfragen", discussConcept: "Dieses Konzept besprechen"
  },
  fr: {
    search: "Rechercher dans la galerie", searchHint: "Ex. colonnes, sculpture, FARMASI", kind: "Type d’image", allKinds: "Toutes les images",
    fabrication: "Projets et atelier", concept: "Étude de concept", conceptNote: "Cette image présente un concept de design, et non une réalisation achevée.",
    category: "Catégorie", allCategories: "Toutes les catégories", categories: { interiors: "Intérieurs et mobilier", sculpture: "Sculptures et personnages", scenery: "Décors et rochers artificiels", architecture: "Décoration architecturale", brand: "Objets de marque et d’événement", workshop: "Atelier et procédés de fabrication" },
    results: "{shown} / {total} images", empty: "Aucune image ne correspond à cette recherche et à ces filtres.", reset: "Effacer les filtres", viewProject: "Voir le projet", viewArchive: "Voir les archives associées", viewConcept: "Voir le concept", requestSimilar: "Demander un projet similaire", discussConcept: "Discutons de ce concept"
  },
  ru: {
    search: "Поиск по галерее", searchHint: "Например, колонны, скульптура, FARMASI", kind: "Тип изображения", allKinds: "Все изображения",
    fabrication: "Проекты и мастерская", concept: "Концепция", conceptNote: "Это изображение дизайн-концепции, а не реализованного проекта.",
    category: "Категория", allCategories: "Все категории", categories: { interiors: "Интерьеры и мебель", sculpture: "Скульптуры и персонажи", scenery: "Декорации и искусственные скалы", architecture: "Архитектурный декор", brand: "Брендовые объекты и декор мероприятий", workshop: "Мастерская и производственные процессы" },
    results: "{shown} / {total} изображений", empty: "По этому запросу и фильтрам изображений не найдено.", reset: "Сбросить фильтры", viewProject: "Посмотреть проект", viewArchive: "Посмотреть связанный архив", viewConcept: "Посмотреть концепцию", requestSimilar: "Запросить похожий проект", discussConcept: "Обсудить эту концепцию"
  },
  ar: {
    search: "البحث في المعرض", searchHint: "مثلاً: أعمدة، منحوتة، FARMASI", kind: "نوع الصورة", allKinds: "جميع الصور",
    fabrication: "المشاريع والورشة", concept: "تصور تصميمي", conceptNote: "تعرض هذه الصورة تصوراً تصميمياً، وليست مشروعاً منفذاً.",
    category: "الفئة", allCategories: "جميع الفئات", categories: { interiors: "التصميم الداخلي والأثاث", sculpture: "المنحوتات والشخصيات", scenery: "ديكورات المسرح والصخور الاصطناعية", architecture: "الديكور المعماري", brand: "مجسمات العلامات التجارية والفعاليات", workshop: "الورشة وعمليات التصنيع" },
    results: "{shown} / {total} صورة", empty: "لا توجد صور تطابق هذا البحث وهذه المرشحات.", reset: "مسح المرشحات", viewProject: "عرض المشروع", viewArchive: "عرض الأرشيف ذي الصلة", viewConcept: "عرض التصور", requestSimilar: "طلب مشروع مشابه", discussConcept: "مناقشة هذا التصور"
  }
};
