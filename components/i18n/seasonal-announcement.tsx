"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/locales";
import { pagePath } from "@/lib/i18n/routes";

const campaignKey = "ardic-season-2027-dismissed";
// End this dated campaign at midnight on 1 January in Istanbul.
const campaignEnds = Date.parse("2027-01-01T00:00:00+03:00");

export function SeasonalAnnouncement({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (Date.now() >= campaignEnds) return;
    try { if (sessionStorage.getItem(campaignKey) === "1") return; } catch { /* Storage may be blocked. */ }
    setVisible(true);
  }, []);

  function dismiss() {
    try { sessionStorage.setItem(campaignKey, "1"); } catch { /* Closing remains available without storage. */ }
    setVisible(false);
  }

  if (!visible) return null;
  return <aside aria-labelledby="season-title" className="border-b border-[#c4ad7b]/40 bg-[#173b35] text-[#faf6eb]">
    <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-5 py-2 sm:gap-5 md:px-8">
      <div className="min-w-0 flex-1 sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-4">
        <p className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#d9c18f]">{t.season_eyebrow}</p>
        <p id="season-title" className="mt-1 text-sm leading-6 sm:mt-0">{t.season_title}</p>
        <Link href={pagePath(locale, { kind: "contact" }) + "#brief"} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#d9c18f] underline underline-offset-4 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{t.season_cta}<span aria-hidden="true">↗</span></Link>
      </div>
      <button type="button" onClick={dismiss} aria-label={t.close} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-2xl hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">×</button>
    </div>
  </aside>;
}
