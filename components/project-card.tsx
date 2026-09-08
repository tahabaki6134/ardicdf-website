import Image from "next/image";
import Link from "next/link";
import { type Project, projectHref } from "@/lib/projects";
import { SelectProjectButton } from "./project-selection-provider";

export function ProjectCard({
  project,
  priority = false
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="flex h-full flex-col border border-ink/15 bg-porcelain">
      <Link href={projectHref(project)} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-smoke">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 48vw, 100vw"
            priority={priority}
            className="object-cover transition duration-500 motion-reduce:transition-none group-hover:scale-[1.02]"
          />
        </div>
        <div className="px-6 pt-6">
          <p className="eyebrow">{project.category}</p>
          <h3 className="mt-3 font-display text-3xl leading-tight group-hover:text-bronze">
            {project.title}
          </h3>
          <p className="mt-4 leading-7 text-ink/75">{project.description}</p>
          <p className="mt-5 text-sm font-semibold text-bronze">
            Explore this work <span aria-hidden="true">↗</span>
          </p>
        </div>
      </Link>
      <div className="mt-auto px-6 pb-6 pt-5">
        <SelectProjectButton id={project.id} />
      </div>
    </article>
  );
}
