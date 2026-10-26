const assert = require("node:assert/strict");
const fs = require("node:fs");
const { test } = require("node:test");
const ts = require("typescript");

require.extensions[".ts"] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true }
}).outputText, filename);

const { galleryImages } = require("../lib/photo-gallery.ts");
const { galleryCopy, galleryCategories } = require("../lib/gallery-copy.ts");
const { filterGalleryImages, gallerySourceHref, galleryEnquiryHref } = require("../lib/gallery-filters.ts");
const { locales } = require("../lib/i18n/locales.ts");
const { projects, MAX_SELECTED_PROJECTS } = require("../lib/projects.ts");
const { resolvePage } = require("../lib/i18n/routes.ts");

test("all published images have localized categories and navigable source pages", () => {
  for (const locale of locales) {
    const images = galleryImages(locale);
    assert.equal(new Set(images.map(image => image.src)).size, images.length);
    for (const image of images) {
      assert.ok(image.categories.length, image.src);
      for (const category of image.categories) assert.ok(galleryCopy[locale].categories[category], category);
      const href = gallerySourceHref(image, locale);
      assert.ok(href, image.src);
      assert.ok(resolvePage(locale, href.split("/").slice(2)), href);
      if (image.concept) {
        assert.equal(image.projectId, undefined, "A reused concept cover must never become a project");
        assert.equal(image.archiveId, undefined);
        assert.equal(image.sourceTitle, image.title, "A reused concept cover must discard the previous production source title");
        assert.equal(href, `/${locale}/concepts`);
      }
    }
  }
});

test("combined category, kind and search filters preserve production/concept boundaries", () => {
  for (const locale of locales) {
    const images = galleryImages(locale);
    assert.deepEqual(filterGalleryImages(images, locale, "", "all", "all"), images);
    const concepts = filterGalleryImages(images, locale, "", "concept", "all");
    const fabrication = filterGalleryImages(images, locale, "", "fabrication", "all");
    assert.ok(concepts.length && fabrication.length);
    assert.equal(concepts.length + fabrication.length, images.length);
    assert.ok(concepts.every(image => image.concept));
    for (const category of galleryCategories) {
      const filtered = filterGalleryImages(images, locale, "", "fabrication", category);
      assert.ok(filtered.length, `${locale}/${category}`);
      assert.ok(filtered.every(image => !image.concept && image.categories.includes(category)));
    }
    const brand = filterGalleryImages(images, locale, " farmasi ", "fabrication", "brand");
    const farmasiImages = images.filter(image => image.projectId === "farmasi-boss-trip");
    assert.equal(farmasiImages.length, 3);
    assert.deepEqual(brand, farmasiImages, `${locale}: the project name must find every detail image, even when its caption omits the brand`);
    const content = require("../lib/i18n/content.ts").localizedContent(locale);
    for (const image of images.filter(image => image.projectId)) assert.equal(image.sourceTitle, content.projects[image.projectId].title);
    assert.deepEqual(filterGalleryImages(images, locale, "FARMASI", "concept", "all"), []);
    assert.deepEqual(filterGalleryImages(images, locale, "no-matching-image-123", "all", "all"), []);
  }
  const tr = galleryImages("tr");
  assert.deepEqual(filterGalleryImages(tr, "tr", "HEYKEL", "all", "all"), filterGalleryImages(tr, "tr", "heykel", "all", "all"));
  const de = galleryImages("de");
  assert.deepEqual(filterGalleryImages(de, "de", "Säulen", "all", "all"), filterGalleryImages(de, "de", "saulen", "all", "all"));
});

test("project enquiry links preserve valid selections and concepts never add a completed project", () => {
  for (const locale of locales) {
    const images = galleryImages(locale);
    const target = images.find(image => image.projectId === projects[7].id);
    const selected = projects.slice(0, MAX_SELECTED_PROJECTS - 1).map(project => project.id);
    const url = new URL(galleryEnquiryHref(target, locale, [...selected, "unknown"]), "https://www.ardicdf.com");
    const ids = url.searchParams.get("selected").split(",");
    assert.equal(url.pathname, `/${locale}/contact`);
    assert.equal(url.hash, "#brief");
    assert.deepEqual(ids.slice(0, -1), selected);
    assert.equal(ids.at(-1), target.projectId);
    assert.equal(ids.length, MAX_SELECTED_PROJECTS);
    assert.ok(ids.every(id => projects.some(project => project.id === id)));
    assert.equal(new Set(ids).size, ids.length);
    const full = projects.slice(0, MAX_SELECTED_PROJECTS).map(project => project.id);
    assert.equal(galleryEnquiryHref(target, locale, full), `/${locale}/project-selection`, "A seventh project must not silently replace a selection");
    const alreadySelected = images.find(image => image.projectId === full[0]);
    const unchanged = new URL(galleryEnquiryHref(alreadySelected, locale, full), "https://www.ardicdf.com");
    assert.deepEqual(unchanged.searchParams.get("selected").split(","), full);
    for (const image of images.filter(image => image.concept || !image.projectId)) {
      assert.equal(galleryEnquiryHref(image, locale, selected), `/${locale}/contact#brief`);
    }
  }
});
