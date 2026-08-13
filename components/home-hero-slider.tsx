"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

type HeroSlide = {
  image: string;
  alt: string;
  label: string;
};

type HomeHeroSliderProps = {
  slides: HeroSlide[];
};

export function HomeHeroSlider({ slides }: HomeHeroSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[calc(100vh-8.5rem)] overflow-hidden bg-ink text-porcelain md:min-h-[calc(100vh-9.5rem)]">
      {slides.map((slide, index) => (
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-80" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/58 via-transparent to-transparent" />
      <div className="image-grain absolute inset-0" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8.5rem)] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 md:min-h-[calc(100vh-9.5rem)] md:px-8 md:pb-16">
        <p className="text-xs font-semibold uppercase tracking-brand text-bronze">{brand.name}</p>
        <h1
          className="mt-5 font-display"
          style={{
            fontSize: "clamp(2.2rem, 3.8vw, 4.6rem)",
            lineHeight: "1.02",
            maxWidth: "1050px"
          }}
        >
          International Design &amp; Fabrication for Extraordinary Spaces &amp; Custom Objects
        </h1>
        <div className="mt-8 flex max-w-6xl flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-3xl text-base leading-7 text-porcelain/82 md:text-lg md:leading-8">
            Themed environments, scenic fabrication, large-scale props, CNC foam and
            polyurethane machining, composites, molds and large-format 3D printing — produced
            in Istanbul for international projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/works"
              className="w-fit bg-porcelain px-6 py-4 text-xs font-semibold uppercase tracking-brand text-ink transition hover:bg-bronze hover:text-porcelain"
            >
              VIEW PROJECTS
            </Link>
            <Link
              href="/contact"
              className="w-fit border border-porcelain/45 px-6 py-4 text-xs font-semibold uppercase tracking-brand text-porcelain transition hover:border-bronze hover:bg-bronze"
            >
              DISCUSS A PROJECT
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Show ${slide.label}`}
              aria-current={index === activeSlide}
              onClick={() => setActiveSlide(index)}
              className={`group flex items-center gap-3 text-left transition ${
                index === activeSlide ? "text-porcelain" : "text-porcelain/45 hover:text-porcelain"
              }`}
            >
              <span
                className={`block h-px w-9 transition ${
                  index === activeSlide ? "bg-bronze" : "bg-porcelain/30 group-hover:bg-bronze"
                }`}
              />
              <span className="hidden text-[0.65rem] font-semibold uppercase tracking-brand md:block">
                {slide.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
