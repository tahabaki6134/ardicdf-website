import Image from "next/image";

type WorkCardProps = {
  work: {
    title: string;
    type: string;
    location: string;
    image: string;
  };
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <Image
          src={work.image}
          alt={`${work.title} project placeholder`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-3xl text-ink">{work.title}</h3>
          <p className="mt-2 text-sm uppercase tracking-brand text-bronze">{work.type}</p>
        </div>
        <p className="text-sm text-ink/50">{work.location}</p>
      </div>
    </article>
  );
}
