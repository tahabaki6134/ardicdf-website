"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type PortfolioLightboxImage = {
  src: string;
  alt: string;
};

type PortfolioLightboxProps = {
  images: PortfolioLightboxImage[];
};

export function PortfolioLightbox({ images }: PortfolioLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const hasNavigation = images.length > 1;

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft" && hasNavigation) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasNavigation) {
        showNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, hasNavigation, showNext, showPrevious]);

  return (
    <>
      <div className="mt-10 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <article key={image.src} className="bg-porcelain p-3">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-white text-left focus:outline-none focus:ring-2 focus:ring-bronze focus:ring-offset-2 focus:ring-offset-porcelain"
              aria-label={`Open larger preview: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain transition duration-500 group-hover:scale-[1.025]"
              />
              <span className="pointer-events-none absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/[0.04]" />
            </button>
          </article>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 px-4 py-6 backdrop-blur-sm md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close portfolio image preview"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/25 bg-white/10 text-3xl leading-none text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:right-8 md:top-8"
          >
            &times;
          </button>

          {hasNavigation ? (
            <>
              <button
                type="button"
                aria-label="Show previous portfolio image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-3xl text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:flex"
              >
                &lsaquo;
              </button>
              <button
                type="button"
                aria-label="Show next portfolio image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/25 bg-white/10 text-3xl text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:flex"
              >
                &rsaquo;
              </button>
            </>
          ) : null}

          <div
            className="relative h-[82vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
