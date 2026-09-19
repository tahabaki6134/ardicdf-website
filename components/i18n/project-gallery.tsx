import Image from "next/image";
import type { Project } from "@/lib/projects";
import type { ProjectCopy } from "@/lib/i18n/content";

export function ProjectGallery({ project, copy }: { project: Project; copy: ProjectCopy }) {
  if (!project.gallery?.length) return null;
  const [cover, ...details] = project.gallery;
  function figure(item: typeof cover, index: number) {
    const caption = copy.gallery?.[index];
    return <figure key={item.src}>
      <a href={item.src} target="_blank" rel="noopener" className="group block" aria-label={caption?.alt || copy.title}>
        <Image src={item.src} alt={caption?.alt || copy.title} width={item.width} height={item.height}
          priority={index === 0} sizes={index === 0 ? "(min-width:1024px) 900px, 90vw" : "(min-width:640px) 45vw, 90vw"}
          className="h-auto max-h-[78vh] w-full bg-smoke/20 object-contain transition group-hover:opacity-90" />
      </a>
      {caption && <figcaption className="mt-3 border-b border-ink/15 pb-4 text-sm leading-7 text-ink/70">{caption.caption} <span aria-hidden="true">↗</span></figcaption>}
    </figure>;
  }
  return <div className="mt-8 max-w-5xl">
    {figure(cover, 0)}
    <div className="mt-7 grid items-start gap-7 sm:grid-cols-2">{details.map((item, index) => figure(item, index + 1))}</div>
    {copy.note && <p className="mt-6 max-w-3xl text-sm leading-7 text-ink/65">{copy.note}</p>}
  </div>;
}
