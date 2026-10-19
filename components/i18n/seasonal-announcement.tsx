"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { pagePath } from "@/lib/i18n/routes";

const campaignKey = "ardic-season-2027-dismissed";
// End this dated campaign at midnight on 1 January in Istanbul.
const campaignEnds = Date.parse("2027-01-01T00:00:00+03:00");

export function SeasonalAnnouncement({ locale, t }: { locale: Locale; t: Dictionary }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const restoreScroll = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (Date.now() >= campaignEnds) return;
    try { if (sessionStorage.getItem(campaignKey) === "1") return; } catch { /* Storage may be blocked. */ }
    const modal = dialog.current;
    if (!modal || typeof modal.showModal !== "function") return;
    const previousOverflow = document.body.style.overflow;
    restoreScroll.current = () => { document.body.style.overflow = previousOverflow; };
    modal.showModal();
    document.body.style.overflow = "hidden";
    return () => { modal.close(); restoreScroll.current?.(); restoreScroll.current = null; };
  }, []);

  function dismiss() {
    try { sessionStorage.setItem(campaignKey, "1"); } catch { /* Closing remains available without storage. */ }
    dialog.current?.close();
    restoreScroll.current?.();
    restoreScroll.current = null;
  }

  return <dialog ref={dialog} aria-labelledby="season-title" aria-describedby="season-description"
    onCancel={e => { e.preventDefault(); dismiss(); }}
    onClick={e => { if (e.target === e.currentTarget) dismiss(); }}
    className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto border border-[#c4ad7b]/50 bg-[#173b35] p-0 text-[#faf6eb] shadow-2xl backdrop:bg-black/65 backdrop:backdrop-blur-sm">
    <div className="relative overflow-hidden px-6 pb-7 pt-14 sm:px-10 sm:pb-10 sm:pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute -end-10 -top-10 h-44 w-44 rounded-full border border-[#c4ad7b]/25" />
      <div aria-hidden="true" className="pointer-events-none absolute end-3 top-3 h-28 w-28 rounded-full border border-[#c4ad7b]/30" />
      <button autoFocus type="button" onClick={dismiss} aria-label={t.close} className="absolute end-3 top-3 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-[#173b35] text-2xl hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">×</button>
      <div aria-hidden="true" className="mb-5 text-4xl leading-none text-[#d9c18f]">✧</div>
      <p className="relative text-xs font-semibold uppercase tracking-[.16em] text-[#d9c18f]">{t.season_eyebrow}</p>
      <h2 id="season-title" className="relative mt-4 max-w-md font-display text-4xl leading-[1.12] sm:text-5xl">{t.season_title}</h2>
      <p id="season-description" className="relative mt-5 text-base leading-7 text-white/85">{t.season_body}</p>
      <div className="relative mt-7 flex flex-col gap-3">
        <Link href={pagePath(locale, { kind: "contact" }) + "#brief"} onClick={dismiss} className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#d9c18f] px-5 py-3 text-center text-sm font-semibold text-[#132f2b] hover:bg-[#ead5a8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t.season_cta}<span aria-hidden="true">↗</span></Link>
        <button type="button" onClick={dismiss} className="min-h-11 px-3 py-2 text-sm text-white/85 underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">{t.season_continue}</button>
      </div>
    </div>
  </dialog>;
}
