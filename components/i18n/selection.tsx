"use client";
import { useEffect } from "react";
import Link from "next/link";
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
export function SelectionList({ locale, t, names }: { locale: Locale; t: Dictionary; names: Record<string, string> }) {
  const { selected, ready, toggle, setSelected } = useProjectSelection();
  useEffect(() => { if (!ready) return; const ids = parseSelectedProjects(new URLSearchParams(window.location.search).get("selected")); if (ids.length) setSelected(ids); }, [setSelected, ready]);
  return <div className="mt-7"><p className="text-sm text-ink/65">{t.selection_limit}</p>{selected.length ? <ul className="my-6 space-y-3">{selected.map(id => <li key={id} className="flex flex-wrap items-center justify-between gap-4 border border-ink/20 p-4"><Link className="text-link" href={pagePath(locale, { kind: "project", id })}>{names[id]}</Link><button type="button" className="min-h-11 px-3 underline" onClick={() => toggle(id)}>{t.remove}</button></li>)}</ul> : <p className="my-7">{t.selection_empty}</p>}<Link className="button-primary" href={pagePath(locale, { kind: "contact" }) + (selected.length ? "?selected=" + selected.join(",") : "")}>{t.nav_contact}</Link></div>;
}
