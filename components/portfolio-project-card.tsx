import Image from "next/image";

type PortfolioProjectCardProps = {
  project: {
    title: string;
    category: string;
    description: string;
    images: string[];
    number: string;
  };
};

export function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
  const [cover, ...supportingImages] = project.images;

  return (
    <article className="group bg-porcelain">
      <div className="grid gap-px bg-ink/10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative aspect-[4/3] bg-white">
          <Image
            src={cover}
            alt={`${project.title} cover image`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain p-2 transition duration-700 group-hover:scale-[1.01]"
          />
        </div>
        <div className="grid grid-cols-2 gap-px bg-ink/10">
          {supportingImages.slice(0, 4).map((image, index) => (
            <div key={image} className="relative aspect-square bg-white">
              <Image
                src={image}
                alt={`${project.title} supporting image ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-contain p-2 transition duration-700 group-hover:scale-[1.01]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-8 p-7 md:grid-cols-[0.8fr_1.2fr] md:p-9">
        <div>
          <p className="text-sm text-ink/45">{project.number}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">{project.title}</h2>
          <p className="mt-3 text-sm uppercase tracking-brand text-bronze">{project.category}</p>
        </div>
        <p className="max-w-2xl leading-7 text-ink/60 md:pt-12">{project.description}</p>
      </div>
    </article>
  );
}
