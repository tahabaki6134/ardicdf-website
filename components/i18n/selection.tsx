"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProjectSelection } from "../project-selection-provider";
import { MAX_SELECTED_PROJECTS, parseSelectedProjects } from "@/lib/projects";
import { pagePath } from "@/lib/i18n/routes";
import type { Locale } from "@/lib/i18n/locales";
import type { Dictionary } from "@/lib/i18n/dictionary";
export function SelectButton({ id, t }: { id: string; t: Dictionary }) {
  const { selected, ready, toggle } = useProjectSelection();
  const active = selected.includes(id);
  return <button type="button" aria-pressed={active} disabled={!ready || (!active && selected.length >= MAX_SELECTED_PROJECTS)} onClick={() => toggle(id)} className="button-secondary text-sm">{active ? "✓" : "+"} {active ? t.selected_project : t.select_project}</button>;
}
export function SelectionBar({ locale, t }: { locale: Locale; t: Dictionary }) {
  const { selected, ready } = useProjectSelection();
  const pathname = usePathname();
  const contactPath = pagePath(locale, { kind: "contact" });
  if (!ready || !selected.length || pathname === contactPath) return null;
  const query = "?selected=" + selected.join(",");
  return <aside className="selection-bar" aria-label={t.nav_selection}>
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-5 gap-y-2">
      <div className="min-w-0"><p role="status" className="text-sm font-semibold">{t.selection_count.replace("{count}", String(selected.length))}</p><Link className="inline-block min-h-11 py-2 text-sm underline underline-offset-4" href={pagePath(locale, { kind: "selection" }) + query}>{t.selection_review}</Link></div>
      <Link className="button-primary text-sm" href={contactPath + query + "#brief"}>{t.selection_quote} <span aria-hidden="true">↗</span></Link>
    </div>
  </aside>;
}
export function SelectionList({ locale, t, names }: { locale: Locale; t: Dictionary; names: Record<string, string> }) {
  const { selected, ready, toggle, setSelected } = useProjectSelection();
  useEffect(() => { if (!ready) return; const ids = parseSelectedProjects(new URLSearchParams(window.location.search).get("selected")); if (ids.length) setSelected(ids); }, [setSelected, ready]);
  return <div className="mt-7"><p className="text-sm text-ink/65">{t.selection_limit}</p>{selected.length ? <ul className="my-6 space-y-3">{selected.map(id => <li key={id} className="flex flex-wrap items-center justify-between gap-4 border border-ink/20 p-4"><Link className="text-link" href={pagePath(locale, { kind: "project", id })}>{names[id]}</Link><button type="button" className="min-h-11 px-3 underline" onClick={() => toggle(id)}>{t.remove}</button></li>)}</ul> : <p className="my-7">{t.selection_empty}</p>}<Link className="button-primary" href={pagePath(locale, { kind: "contact" }) + (selected.length ? "?selected=" + selected.join(",") : "")}>{t.nav_contact}</Link></div>;
}
