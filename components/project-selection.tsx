"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { enquiryHref, projects } from "@/lib/projects";
import { ProjectCard } from "./project-card";
import { useProjectSelection } from "./project-selection-provider";
import { trackConversion } from "./conversion-tracking";

export function ProjectSelection({ initialSelected }: { initialSelected: string[] | null }) {
  const { selected, ready, setSelected } = useProjectSelection();
  const [applied, setApplied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [notice, setNotice] = useState("");
  useEffect(() => {
    if (!ready || applied) return;
    if (initialSelected !== null) setSelected(initialSelected);
    setApplied(true);
  }, [ready, applied, initialSelected, setSelected]);
  useEffect(() => {
    setShareUrl("");
    setNotice("");
  }, [selected]);
  const visible = projects.filter((project) => selected.includes(project.id));
  async function copySelection() {
    const url = new URL("/project-selection", window.location.origin);
    url.searchParams.set("selected", selected.join(","));
    setShareUrl(url.href);
    try {
      await navigator.clipboard.writeText(url.href);
      setNotice("Link copied. Share it with your team to show these portfolio examples.");
      trackConversion("portfolio_selection_share", { count: selected.length });
    } catch {
      setNotice("Copy the link below to share this selection.");
    }
  }
  if (!ready || !applied)
    return (
      <p className="mt-8" role="status">
        Loading your selection…
      </p>
    );
  return (
    <div className="mt-10">
      {visible.length ? (
        <>
          <div className="flex flex-wrap gap-3">
            <Link href={enquiryHref(selected)} className="button-primary">
              Use these examples in my brief →
            </Link>
            <button type="button" className="button-secondary" onClick={copySelection}>
              Copy selection link
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-ink/70">
            The shared link contains only your selected portfolio examples. Your enquiry and contact
            details are not included.
          </p>
          <p className="mt-3 text-sm" role="status">
            {notice}
          </p>
          {shareUrl && (
            <label className="mt-3 block max-w-3xl">
              <span className="mb-2 block text-sm font-semibold">Shareable selection link</span>
              <input
                className="field"
                readOnly
                value={shareUrl}
                onFocus={(event) => event.target.select()}
              />
            </label>
          )}
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <button
            className="mt-7 min-h-11 text-sm font-semibold underline underline-offset-4"
            type="button"
            onClick={() => setSelected([])}
          >
            Clear selection
          </button>
        </>
      ) : (
        <div className="border border-ink/20 p-7 md:p-10">
          <h2 className="font-display text-3xl">Choose a few references to get started.</h2>
          <p className="my-5 max-w-2xl leading-7 text-ink/75">
            Use “Select for my brief” on a portfolio example. Then return here to share your
            selection or include it in a project enquiry.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/works" className="button-primary">
              Explore our work →
            </Link>
            <Link href="/contact" className="button-secondary">
              Start without examples
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
