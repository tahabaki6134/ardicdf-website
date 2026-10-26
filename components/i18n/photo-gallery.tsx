"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/photo-gallery";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { galleryCategories, galleryCopy, type GalleryCategory, type GalleryKind } from "@/lib/gallery-copy";
import { filterGalleryImages, galleryEnquiryHref, gallerySourceHref } from "@/lib/gallery-filters";
import { watermarkedDownload } from "@/lib/watermarked-download";
import { MAX_SELECTED_PROJECTS } from "@/lib/projects";
import { useProjectSelection } from "../project-selection-provider";

export function PhotoGallery({ images, t, locale }: { images: GalleryImage[]; t: Dictionary; locale: Locale }) {
  const copy = galleryCopy[locale];
  const rtl = locale === "ar";
  const { selected } = useProjectSelection();
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<GalleryKind>("all");
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const visibleImages = useMemo(() => filterGalleryImages(images, locale, query, kind, category), [images, locale, query, kind, category]);
  const [active, setActive] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [status, setStatus] = useState({ src: "", text: "" });
  const dialog = useRef<HTMLDialogElement>(null);
  const activeIndex = visibleImages.findIndex(image => image.src === active);
  const current = visibleImages[activeIndex];
  const isOpen = Boolean(current);
  const sourceHref = current ? gallerySourceHref(current, locale) : undefined;
  const reviewSelection = current && !current.concept && current.projectId && !selected.includes(current.projectId) && selected.length >= MAX_SELECTED_PROJECTS;

  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current!;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function move(step: number) {
    if (activeIndex < 0 || !visibleImages.length) return;
    setActive(visibleImages[(activeIndex + step + visibleImages.length) % visibleImages.length].src);
    setStatus({ src: "", text: "" });
  }
  async function download(src: string) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setStatus({ src, text: t.gallery_loading });
    try { await watermarkedDownload(src); setStatus({ src, text: t.gallery_success }); }
    catch { setStatus({ src, text: t.gallery_error }); }
    finally { busyRef.current = false; setBusy(false); }
  }

  return <section className="mt-8" aria-label={t.nav_gallery}>
    <div className="grid gap-4 rounded-sm border border-ink/15 bg-white/50 p-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
      <div className="sm:col-span-2 lg:col-span-1">
        <label htmlFor="gallery-search" className="text-sm font-semibold">{copy.search}</label>
        <input id="gallery-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={copy.searchHint} className="field mt-2" aria-controls="gallery-results" />
      </div>
      <div>
        <label htmlFor="gallery-kind" className="text-sm font-semibold">{copy.kind}</label>
        <select id="gallery-kind" value={kind} onChange={event => setKind(event.target.value as GalleryKind)} className="field mt-2" aria-controls="gallery-results">
          <option value="all">{copy.allKinds}</option><option value="fabrication">{copy.fabrication}</option><option value="concept">{copy.concept}</option>
        </select>
      </div>
      <div>
        <label htmlFor="gallery-category" className="text-sm font-semibold">{copy.category}</label>
        <select id="gallery-category" value={category} onChange={event => setCategory(event.target.value as GalleryCategory | "all")} className="field mt-2" aria-controls="gallery-results">
          <option value="all">{copy.allCategories}</option>{galleryCategories.map(id => <option value={id} key={id}>{copy.categories[id]}</option>)}
        </select>
      </div>
    </div>
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-y border-ink/15 py-4 text-sm text-ink/70">
      <p role="status" aria-live="polite" aria-atomic="true">{copy.results.replace("{shown}", String(visibleImages.length)).replace("{total}", String(images.length))}</p>
      {(query || kind !== "all" || category !== "all") && <button type="button" className="min-h-11 px-2 font-semibold underline" onClick={() => { setQuery(""); setKind("all"); setCategory("all"); }}>{copy.reset}</button>}
      <p>{t.gallery_watermark}</p>
    </div>
    {!visibleImages.length && <p className="border border-ink/15 p-8 text-center leading-7">{copy.empty}</p>}
    <div id="gallery-results" className="grid grid-cols-1 items-start gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {visibleImages.map((image, index) => <figure key={image.src} className="min-w-0">
        <button type="button" onClick={() => { setActive(image.src); setStatus({ src: "", text: "" }); }} aria-label={`${t.gallery_view}: ${image.title} · ${index + 1}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-smoke/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze">
          <Image src={image.src} alt={`${image.title} · ${index + 1}`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 94vw" className="object-contain transition duration-300 group-hover:scale-[1.025]" />
          <span aria-hidden="true" className="absolute bottom-3 end-3 bg-porcelain/95 px-3 py-1 text-lg text-ink">↗</span>
          <span className="absolute start-2 top-2 max-w-[85%] bg-porcelain/95 px-2 py-1 text-xs">{image.concept ? copy.concept : copy.fabrication}</span>
        </button>
        <figcaption className="mt-3 text-sm leading-6"><span className="me-2 text-bronze">{String(index + 1).padStart(2, "0")}</span>{image.title}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-labelledby="gallery-image-title" aria-describedby={current?.concept ? "gallery-concept-note" : undefined} onCancel={() => setActive(null)} onClose={() => { if (!dialog.current?.open) setActive(null); }}
      onClick={e => { if (e.target === e.currentTarget) setActive(null); }}
      onKeyDown={e => { if (e.key === "ArrowLeft") { e.preventDefault(); move(rtl ? 1 : -1); } if (e.key === "ArrowRight") { e.preventDefault(); move(rtl ? -1 : 1); } }}
      className="fixed inset-0 m-auto max-h-[94dvh] w-[96vw] max-w-6xl overflow-y-auto border border-ink/20 bg-porcelain p-0 text-ink backdrop:bg-black/80">
      {current && <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4"><h2 id="gallery-image-title" aria-live="polite" className="text-sm leading-6 sm:text-base">{current.title}<bdi className="ms-3 text-ink/60">{activeIndex + 1} / {visibleImages.length}</bdi></h2><button autoFocus type="button" className="min-h-11 shrink-0 border border-ink/20 px-4" onClick={() => setActive(null)}>{t.close} ×</button></div>
        <div className="relative h-[52dvh] w-full sm:h-[62dvh]"><Image src={current.src} alt={current.title} fill sizes="(min-width:1280px) 1100px, 94vw" className="object-contain" /></div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2"><button type="button" disabled={visibleImages.length < 2} className="button-secondary disabled:opacity-50" onClick={() => move(-1)} aria-label={t.gallery_previous}>{rtl ? "→" : "←"}</button><button type="button" disabled={visibleImages.length < 2} className="button-secondary disabled:opacity-50" onClick={() => move(1)} aria-label={t.gallery_next}>{rtl ? "←" : "→"}</button></div>
          <button type="button" disabled={busy} onClick={() => download(current.src)} className="button-primary disabled:opacity-50">{busy ? t.gallery_loading : t.gallery_download} ↓</button>
        </div>
        <p className="mt-5 text-xs font-semibold text-bronze">{current.concept ? copy.concept : copy.fabrication}</p>
        {current.concept && <p id="gallery-concept-note" className="mt-2 text-sm leading-6 text-ink/70">{copy.conceptNote}</p>}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          {sourceHref && <Link href={sourceHref} className="button-secondary">{current.concept ? copy.viewConcept : current.projectId ? copy.viewProject : copy.viewArchive} ↗</Link>}
          <Link href={galleryEnquiryHref(current, locale, selected)} className="button-primary">{reviewSelection ? t.nav_selection : current.projectId ? copy.requestSimilar : t.send_project} ↗</Link>
        </div>
        {reviewSelection && <p className="mt-2 text-sm leading-6 text-ink/70">{t.selection_limit}</p>}
        <p className="mt-3 text-xs leading-6 text-ink/65">{t.gallery_watermark}</p>
        <p role="status" aria-live="polite" className="min-h-6 text-sm">{status.src === current.src ? status.text : ""}</p>
      </div>}
    </dialog>
  </section>;
}
