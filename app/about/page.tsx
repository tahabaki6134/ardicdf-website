import Image from "next/image";
import Link from "next/link";

const approach = [
  {
    title: "Concept Development",
    copy: "The creative and technical starting point that transforms ideas into design.",
    icon: "concept"
  },
  {
    title: "Fabrication",
    copy: "Precise fabrication, detail resolution, and material application powered by in-house workshop capabilities.",
    icon: "production"
  },
  {
    title: "Installation",
    copy: "Coordinated on-site assembly, installation, and delivery management.",
    icon: "installation"
  },
  {
    title: "Experience",
    copy: "Lasting, memorable results that give spaces a distinct identity.",
    icon: "experience"
  }
];

const capabilities = [
  {
    title: "CNC Fabrication",
    copy: "Precision-cut components for complex architectural and sculptural forms."
  },
  {
    title: "EPS / XPS Processing",
    copy: "Lightweight foam shaping for large-scale scenic and decorative structures."
  },
  {
    title: "Sculpture Production",
    copy: "Custom figures, organic forms, and detailed artistic production."
  },
  {
    title: "Decorative Architectural Elements",
    copy: "Columns, capitals, ornaments, and bespoke architectural details."
  },
  {
    title: "Mold Manufacturing",
    copy: "Durable mold systems for repeatable, controlled production."
  },
  {
    title: "Polyester Casting",
    copy: "Composite casting solutions for resilient decorative and thematic pieces."
  },
  {
    title: "Large-Scale Fabrication",
    copy: "Oversized objects and environments produced with workshop precision."
  },
  {
    title: "3D Printing Technology",
    copy: "Rapid prototyping and fine-detail support for custom production."
  }
];

const team: Array<{
  name: string;
  initials: string;
  role: string;
  copy: string;
  photo?: string;
}> = [
  {
    name: "Yusuf Baki",
    initials: "YB",
    role: "Owner & Fabrication Director",
    copy: "Responsible for production strategy, workshop management, and large-scale project implementation."
  },
  {
    name: "Taha Baki",
    initials: "TB",
    role: "Architecture, Strategy & Project Development",
    copy: "Responsible for architectural direction, project strategy, business development, and client relations."
  },
  {
    name: "Şiba Baki",
    initials: "SB",
    role: "Interior Design & Presentation",
    copy: "Responsible for interior design, presentation development, and creative project storytelling."
  },
  {
    name: "Rasim Gül",
    initials: "RG",
    role: "Visual Arts Specialist",
    copy: "Expert in artistic detailing, visual development, and surface / finishing techniques."
  },
  {
    name: "Gençağa Dilli",
    initials: "GD",
    role: "Sculptor",
    copy: "Expert in sculpture design, character production, and organic form development."
  },
  {
    name: "Fatih Dilli",
    initials: "FD",
    role: "Painter",
    copy: "Specializes in artistic painting, advanced coloring techniques, and special effects.",
    photo: "/team/fatih-dilli.png"
  }
];

const reasons = [
  "Design and fabrication under one roof",
  "Original and custom production solutions",
  "Large-scale project experience",
  "Rapid prototyping and flexible production",
  "Installation and on-site application capability"
];

function ApproachIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-bronze">
      {type === "concept" && (
        <>
          <path {...common} d="M16 34c-4-3-6-7-6-12a14 14 0 0 1 28 0c0 5-2 9-6 12" />
          <path {...common} d="M18 38h12M20 42h8M20 24l4-7 4 7M18 28h12" />
        </>
      )}
      {type === "production" && (
        <>
          <path {...common} d="M12 17 24 10l12 7v14l-12 7-12-7Z" />
          <path {...common} d="m12 17 12 7 12-7M24 24v14" />
        </>
      )}
      {type === "installation" && (
        <>
          <path {...common} d="m15 15 18 18M33 15 15 33" />
          <path {...common} d="M12 12h8v8h-8zM28 12h8v8h-8zM12 28h8v8h-8zM28 28h8v8h-8z" />
        </>
      )}
      {type === "experience" && (
        <>
          <circle {...common} cx="24" cy="22" r="10" />
          <path {...common} d="M17 36h14M20 32l-3 8M28 32l3 8M18 22h12M24 12v20" />
        </>
      )}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">About Us</p>
            <h1 className="mt-8 max-w-2xl font-display text-5xl leading-[1.02] text-ink md:text-7xl">
              From Idea to Fabrication, Into Experience.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-ink/65 md:text-lg md:leading-9">
              Ardıç is a design and fabrication studio that brings architectural thinking,
              interior design, sculpture, digital production technologies, and thematic decor
              manufacturing together under one roof.
            </p>
            <div className="mt-9 h-px w-16 bg-bronze" />
          </div>

          <div className="relative min-h-[360px] overflow-hidden border border-ink/10 bg-ink shadow-soft md:min-h-[560px]">
            <Image
              src="/home/production-columns.png"
              alt="Decorative architectural element fabrication inside the Ardıç production workshop"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "52% 50%" }}
            />
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-ink/10 pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Our Approach
            </p>
            <h2 className="mt-7 max-w-md font-display text-4xl leading-tight text-ink md:text-5xl">
              Design, Fabrication, and Installation.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-ink/60">
              In every project, we manage the entire process with our own team and
              infrastructure - from concept development to fabrication and on-site installation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {approach.map((item) => (
              <article key={item.title} className="flex flex-col">
                <ApproachIcon type={item.icon} />
                <h3 className="mt-8 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-4 leading-7 text-ink/60">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
            Our Production Capabilities
          </p>
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="flex min-h-64 flex-col bg-porcelain p-6 md:p-7"
              >
                <p className="font-display text-4xl leading-none text-bronze/75">
                  {`${index + 1}`.padStart(2, "0")}
                </p>
                <h3 className="mt-8 max-w-[12rem] text-lg font-semibold leading-tight text-ink">
                  {capability.title}
                </h3>
                <div className="mt-5 h-px w-12 bg-bronze" />
                <p className="mt-5 text-sm leading-7 text-ink/60">{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/45 px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-brand text-bronze">Our Team</p>
          <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {team.map((member) => (
              <article key={member.name} className="flex min-h-full flex-col bg-porcelain p-6">
                <div className="relative flex h-28 w-24 items-center justify-center overflow-hidden border border-bronze/25 bg-white shadow-soft">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{ objectPosition: "50% 32%" }}
                    />
                  ) : (
                    <>
                      <div className="absolute inset-2 border border-ink/5" />
                      <span className="relative font-display text-3xl tracking-[0.16em] text-bronze">
                        {member.initials}
                      </span>
                    </>
                  )}
                </div>
                <h3 className="mt-7 font-display text-2xl leading-tight text-ink">{member.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink">{member.role}</p>
                <div className="mt-5 h-px w-10 bg-bronze" />
                <p className="mt-5 text-sm leading-7 text-ink/60">{member.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden border border-ink/10 bg-porcelain lg:grid-cols-[0.82fr_1.18fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-brand text-bronze">
              Why Ardıç?
            </p>
            <ul className="mt-8 space-y-5">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-4 text-sm leading-7 text-ink/70 md:text-base">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-bronze text-xs text-bronze">
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[360px] bg-ink p-8 md:p-12">
            <Image
              src="/home/brand-story-lobby.jpeg"
              alt="Ardıç brand story inside a premium space with natural forms"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-ink/62" />
            <div className="relative flex h-full flex-col justify-center">
              <h2 className="max-w-xl font-display text-4xl leading-tight text-porcelain md:text-5xl">
                Let&apos;s Create Unforgettable Spaces Together.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-porcelain/75">
                Contact us to transform your ideas into reality.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex w-fit border border-bronze px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:bg-bronze hover:text-ink"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
