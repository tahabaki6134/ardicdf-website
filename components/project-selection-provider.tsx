"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MAX_SELECTED_PROJECTS, parseSelectedProjects } from "@/lib/projects";
import { trackConversion } from "./conversion-tracking";

const storageKey = "ardic-selected-work-v1";
const SelectionContext = createContext<{
  selected: string[];
  ready: boolean;
  setSelected: (ids: string[]) => void;
  toggle: (id: string) => void;
}>({ selected: [], ready: false, setSelected: () => {}, toggle: () => {} });

export function ProjectSelectionProvider({ children }: { children: React.ReactNode }) {
  const [selected, updateSelected] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const value: unknown = JSON.parse(sessionStorage.getItem(storageKey) || "[]");
      updateSelected(parseSelectedProjects(value));
    } catch {
      /* A disabled or invalid store does not block selection. */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(selected));
    } catch {
      /* Optional persistence. */
    }
  }, [selected, ready]);

  const setSelected = useCallback((ids: string[]) => {
    updateSelected(parseSelectedProjects(ids));
  }, []);

  function toggle(id: string) {
    if (!parseSelectedProjects([id]).length) return;
    updateSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : parseSelectedProjects([...current, id])
    );
    trackConversion("portfolio_selection_change", { project: id });
  }

  return (
    <SelectionContext.Provider value={{ selected, ready, setSelected, toggle }}>
      {children}
    </SelectionContext.Provider>
  );
}

export const useProjectSelection = () => useContext(SelectionContext);

export function SelectProjectButton({ id }: { id: string }) {
  const { selected, ready, toggle } = useProjectSelection();
  const active = selected.includes(id);
  return (
    <button
      type="button"
      aria-pressed={active}
      disabled={!ready || (!active && selected.length >= MAX_SELECTED_PROJECTS)}
      onClick={() => toggle(id)}
      className="inline-flex min-h-11 items-center gap-2 border border-ink/20 px-4 py-2 text-sm font-semibold transition hover:border-bronze hover:bg-white disabled:opacity-50"
    >
      <span aria-hidden="true">{active ? "✓" : "+"}</span>
      {active ? "Selected for my brief" : "Select for my brief"}
    </button>
  );
}
