"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { pagePath } from "@/lib/i18n/routes";

const campaignKey = "ardic-season-2027-dismissed";
const campaignEnds = Date.parse("2027-01-01T00:00:00+03:00");

// A dismissible in-flow notice leaves the portfolio available on first arrival.
export function SeasonalAnnouncement({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (Date.now() >= campaignEnds) return;
    try { if (sessionStorage.getItem(campaignKey) === "1") return; } catch { /* Storage is optional. */ }
    setVisible(true);
  }, []);
  function dismiss() {
    try { sessionStorage.setItem(campaignKey, "1"); } catch { /* Closing still works. */ }
    setVisible(false);
  }
  if (!visible) return null;
  return <aside aria-label={t.season_eyebrow} className="bg-[#173b35] text-[#faf6eb]">
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:px-8">
      <div className="min-w-0 flex-1"><p className="text-sm font-semibold text-[#d9c18f]">{t.season_eyebrow}</p><p className="mt-1 text-xs leading-6 text-white/85 sm:text-sm">{t.season_body}</p><Link href={pagePath(locale, { kind: "contact" }) + "#brief"} className="mt-1 inline-flex min-h-8 items-center gap-2 text-sm font-semibold underline underline-offset-4">{t.season_cta} ↗</Link></div>
      <button type="button" onClick={dismiss} aria-label={t.close} className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 text-xl hover:bg-white/10">×</button>
    </div>
  </aside>;
}
