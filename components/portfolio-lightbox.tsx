"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type PortfolioLightboxImage = {
  src: string;
  alt: string;
};

type PortfolioLightboxProps = {
  images: PortfolioLightboxImage[];
};

export function PortfolioLightbox({ images }: PortfolioLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const suppressPreviewClick = useRef(false);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const hasNavigation = images.length > 1;

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    setIsZoomed(false);
    setDragOffset(0);
    setIsSwiping(false);
  }, []);

  const showPrevious = useCallback(() => {
    setIsZoomed(false);
    setDragOffset(0);
    setIsSwiping(false);
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setIsZoomed(false);
    setDragOffset(0);
    setIsSwiping(false);
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % images.length
    );
  }, [images.length]);

  const toggleZoom = useCallback(() => {
    setIsZoomed((currentValue) => !currentValue);
    setDragOffset(0);
    setIsSwiping(false);
  }, []);

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

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasNavigation || isZoomed) {
      return;
    }

    pointerStartX.current = event.clientX;
    pointerStartY.current = event.clientY;
    setIsSwiping(false);
    setDragOffset(0);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointerStartX.current === null || pointerStartY.current === null || isZoomed) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    const deltaY = event.clientY - pointerStartY.current;

    if (Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY)) {
      event.preventDefault();
      setIsSwiping(true);
      setDragOffset(Math.max(-80, Math.min(80, deltaX)));
    }
  };

  const handlePointerEnd = () => {
    if (pointerStartX.current === null) {
      return;
    }

    const finalOffset = dragOffset;
    pointerStartX.current = null;
    pointerStartY.current = null;
    setDragOffset(0);

    if (Math.abs(finalOffset) < 50) {
      window.setTimeout(() => setIsSwiping(false), 0);
      return;
    }

    suppressPreviewClick.current = true;
    window.setTimeout(() => {
      suppressPreviewClick.current = false;
    }, 250);

    if (finalOffset < 0) {
      showNext();
    } else {
      showPrevious();
    }
  };

  const handlePreviewClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (isSwiping || suppressPreviewClick.current) {
      setIsSwiping(false);
      return;
    }

    toggleZoom();
  };

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
          className="fixed inset-0 z-[80] flex overscroll-contain items-center justify-center bg-ink/90 px-4 py-6 backdrop-blur-sm md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image preview"
          onClick={() => {
            if (!isZoomed && !isSwiping) {
              closeLightbox();
            }
          }}
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
                className="absolute left-3 top-1/2 z-10 flex h-12 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/35 text-3xl text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:left-4 md:w-12"
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
                className="absolute right-3 top-1/2 z-10 flex h-12 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/35 text-3xl text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:right-4 md:w-12"
              >
                &rsaquo;
              </button>
            </>
          ) : null}

          <div
            className={`relative h-[82vh] w-full max-w-6xl select-none overflow-hidden ${
              isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
            }`}
            onClick={handlePreviewClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            style={{
              transform: isZoomed ? undefined : `translateX(${dragOffset}px)`,
              transition: isSwiping ? "none" : "transform 240ms ease-out",
              touchAction: isZoomed ? "pan-x pan-y pinch-zoom" : "none"
            }}
          >
            <Image
              key={activeImage.src}
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className={`object-contain transition duration-300 ${
                isZoomed ? "scale-150 md:scale-125" : "scale-100"
              }`}
              priority
            />
          </div>

          <button
            type="button"
            aria-label={isZoomed ? "Reset portfolio image zoom" : "Zoom portfolio image"}
            onClick={(event) => {
              event.stopPropagation();
              toggleZoom();
            }}
            className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 border border-white/20 bg-ink/45 px-4 py-2 text-xs font-semibold uppercase tracking-brand text-white transition hover:border-bronze hover:text-bronze focus:outline-none focus:ring-2 focus:ring-bronze md:bottom-8"
          >
            {isZoomed ? "Reset Zoom" : "Zoom"}
          </button>
        </div>
      ) : null}
    </>
  );
}
