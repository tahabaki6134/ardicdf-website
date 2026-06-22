type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, light = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-semibold uppercase tracking-brand ${light ? "text-bronze" : "text-bronze"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-4xl leading-tight md:text-6xl ${
          light ? "text-porcelain" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-5 text-lg leading-8 ${light ? "text-porcelain/70" : "text-ink/65"}`}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
