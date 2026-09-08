import type { Metadata } from "next";
import { ProjectSelection } from "@/components/project-selection";
import { parseSelectedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Your Project Selection",
  description:
    "Select fabrication examples, share them with your team and include them in an Ardıç project brief.",
  alternates: { canonical: "/project-selection" },
  robots: { index: false, follow: true }
};

export default function SelectionPage({
  searchParams
}: {
  searchParams: { selected?: string | string[] };
}) {
  const initialSelected =
    searchParams.selected === undefined ? null : parseSelectedProjects(searchParams.selected);
  return (
    <main className="page-shell">
      <p className="eyebrow">Your project selection</p>
      <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
        A shared starting point.
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/75">
        Bring together up to six portfolio examples. Use them to explain the forms, finishes or
        production approach you have in mind.
      </p>
      <ProjectSelection
        key={initialSelected?.join(",") ?? "session"}
        initialSelected={initialSelected}
      />
    </main>
  );
}
