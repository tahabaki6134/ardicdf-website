"use client";
import { useEffect, useRef } from "react";
import { EnquiryForm } from "./enquiry-form";
import { useProjectSelection } from "./project-selection-provider";
import { getProject } from "@/lib/projects";
export function ContactForm({ initialSelected = null, ...props }: { initialSelected?: string[] | null; initialIndustry?: string; initialMethod?: string; initialAlternative?: string }) {
  const { selected, ready, setSelected } = useProjectSelection();
  const initialized = useRef(false);
  useEffect(() => { if (ready && !initialized.current) { if (initialSelected !== null) setSelected(initialSelected); initialized.current = true; } }, [ready, initialSelected, setSelected]);
  return <EnquiryForm {...props} selectedProjects={selected} ready={ready} selection={selected.length > 0 && <div className="border-l-2 border-bronze bg-porcelain p-4"><p className="text-sm font-semibold">Portfolio examples in your brief</p><ul className="mt-2">{selected.map(id => <li key={id} className="flex items-center justify-between gap-3 text-sm"><span>{getProject(id)?.title}</span><button type="button" className="min-h-11 px-2 underline" aria-label={`Remove ${getProject(id)?.title}`} onClick={() => setSelected(selected.filter(value => value !== id))}>Remove</button></li>)}</ul></div>} />;
}
