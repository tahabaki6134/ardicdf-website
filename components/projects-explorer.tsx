"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { industries } from "@/lib/industries";
import { ProjectCard } from "./project-card";
import { useProjectSelection } from "./project-selection-provider";

export function ProjectsExplorer() {
  const [industry, setIndustry] = useState("");
  const { selected } = useProjectSelection();
  const visible = projects.filter((project) => !industry || project.industries.includes(industry));
  return (
    <section aria-labelledby="selected-work-title" className="mt-14">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="selected-work-title" className="mt-3 font-display text-4xl">
            Find a starting point for your project.
          </h2>
        </div>
        <Link href="/project-selection" className="text-link">
          My selection ({selected.length}) →
        </Link>
      </div>
      <div className="my-8 flex flex-wrap items-end gap-5">
        <label className="block min-w-0 flex-1 sm:max-w-sm">
          <span className="mb-2 block text-sm font-semibold">Show work relevant to</span>
          <select
            className="field"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          >
            <option value="">All sectors</option>
            {industries
              .filter((item) => projects.some((project) => project.industries.includes(item.slug)))
              .map((item) => (
                <option value={item.slug} key={item.slug}>
                  {item.shortTitle}
                </option>
              ))}
          </select>
        </label>
        <p className="pb-3 text-sm text-ink/70" role="status">
          {visible.length} portfolio examples · Select work to include in your enquiry.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
