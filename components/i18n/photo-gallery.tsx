"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/photo-gallery";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { watermarkedDownload } from "@/lib/watermarked-download";

export function PhotoGallery({ images, t }: { images: GalleryImage[]; t: Dictionary }) {
  const [active, setActive] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [status, setStatus] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const current = active === null ? undefined : images[active];
  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current!;
    const previousOverflow = document.body.style.overflow;
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => { modal.close(); document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function move(step: number) {
    setActive(value => value === null ? null : (value + step + images.length) % images.length);
    setStatus("");
  }
  async function download(src: string) {
    if (busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    setStatus(t.gallery_loading);
    try { await watermarkedDownload(src); setStatus(t.gallery_success); }
    catch { setStatus(t.gallery_error); }
    finally { busyRef.current = false; setBusy(false); }
  }

  return <section className="mt-8" aria-label={t.nav_gallery}>
    <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-y border-ink/15 py-4 text-sm text-ink/70">
      <span>{images.length} · {t.photo}</span><p>{t.gallery_watermark}</p>
    </div>
    <div className="grid grid-cols-1 items-start gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => <figure key={image.src} className="min-w-0">
        <button type="button" onClick={() => { setActive(index); setStatus(""); }} aria-label={`${t.gallery_view}: ${image.title} · ${index + 1}`} className="group relative block aspect-[4/3] w-full overflow-hidden bg-smoke/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-bronze">
          <Image src={image.src} alt={`${image.title} · ${index + 1}`} fill sizes="(min-width:1024px) 30vw, (min-width:640px) 46vw, 94vw" className="object-contain transition duration-300 group-hover:scale-[1.025]" />
          <span aria-hidden="true" className="absolute bottom-3 end-3 bg-porcelain/95 px-3 py-1 text-lg text-ink">↗</span>
          {image.concept && <span className="absolute start-2 top-2 bg-porcelain/95 px-2 py-1 text-xs">{t.gallery_concept}</span>}
        </button>
        <figcaption className="mt-3 text-sm leading-6"><span className="me-2 text-bronze">{String(index + 1).padStart(2, "0")}</span>{image.title}</figcaption>
      </figure>)}
    </div>
    <dialog ref={dialog} aria-labelledby="gallery-image-title" onCancel={() => setActive(null)} onClose={() => setActive(null)}
      onClick={e => { if (e.target === e.currentTarget) setActive(null); }}
      onKeyDown={e => { if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); } if (e.key === "ArrowRight") { e.preventDefault(); move(1); } }}
      className="fixed inset-0 m-auto max-h-[94dvh] w-[96vw] max-w-6xl overflow-y-auto border border-ink/20 bg-porcelain p-0 text-ink backdrop:bg-black/80">
      {current && <div className="p-4 sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4"><h2 id="gallery-image-title" className="text-sm leading-6 sm:text-base">{current.title}<span className="ms-3 text-ink/60">{active! + 1} / {images.length}</span></h2><button autoFocus type="button" className="min-h-11 shrink-0 border border-ink/20 px-4" onClick={() => setActive(null)}>{t.close} ×</button></div>
        <div className="relative h-[52dvh] w-full sm:h-[62dvh]"><Image src={current.src} alt={current.title} fill sizes="(min-width:1280px) 1100px, 94vw" className="object-contain" /></div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2"><button type="button" className="button-secondary" onClick={() => move(-1)} aria-label={t.gallery_previous}>←</button><button type="button" className="button-secondary" onClick={() => move(1)} aria-label={t.gallery_next}>→</button></div>
          <button type="button" disabled={busy} onClick={() => download(current.src)} className="button-primary disabled:opacity-50">{busy ? t.gallery_loading : t.gallery_download} ↓</button>
        </div>
        <p className="mt-3 text-xs leading-6 text-ink/65">{t.gallery_watermark}</p>
        <p role="status" aria-live="polite" className="min-h-6 text-sm">{status}</p>
      </div>}
    </dialog>
  </section>;
}
