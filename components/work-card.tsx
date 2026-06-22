import Image from "next/image";

type WorkCardProps = {
  work: {
    title: string;
    type: string;
    number?: string;
    image: string;
  };
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-white">
        <Image
          src={work.image}
          alt={`${work.title} project cover`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain transition duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl text-ink">{work.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-brand text-bronze">{work.type}</p>
        </div>
        {work.number ? <p className="shrink-0 text-sm text-ink/50">{work.number}</p> : null}
      </div>
    </article>
  );
}
