"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type CoverImage = {
  src: string;
  alt: string;
};

type RotatingCoverImageProps = {
  images: CoverImage[];
  position: string;
};

export function RotatingCoverImage({ images, position }: RotatingCoverImageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isShowingActive, setIsShowingActive] = useState(true);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        setPreviousIndex(currentIndex);
        setIsShowingActive(false);
        return (currentIndex + 1) % images.length;
      });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (previousIndex === null) {
      return;
    }

    const frame = window.requestAnimationFrame(() => setIsShowingActive(true));
    const timeout = window.setTimeout(() => setPreviousIndex(null), 1100);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [previousIndex]);

  const activeImage = images[activeIndex];
  const previousImage = previousIndex === null ? null : images[previousIndex];

  return (
    <>
      {previousImage ? (
        <Image
          key={previousImage.src}
          src={previousImage.src}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-100 transition duration-1000 ease-in-out group-hover:scale-[1.03]"
          style={{ objectPosition: position }}
          aria-hidden
        />
      ) : null}
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        fill
        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        className={`object-cover transition duration-1000 ease-in-out group-hover:scale-[1.03] ${
          previousImage && !isShowingActive ? "opacity-0" : "opacity-100"
        }`}
        style={{ objectPosition: position }}
      />
    </>
  );
}
