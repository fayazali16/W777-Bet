"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { HomeScreenshot } from "@/lib/home-screenshots";

type Props = {
  images: HomeScreenshot[];
};

export function HomeScreenshotsCarousel({ images }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const rafRef = useRef(0);

  const slideCount = images.length;

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const el = trackRef.current;
      if (!el) return;
      const next = Math.max(0, Math.min(index, slideCount - 1));
      const child = el.children.item(next) as HTMLElement | null;
      if (!child) return;
      const reduceMotion =
        typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      child.scrollIntoView({
        behavior: reduceMotion ? "instant" : "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(next);
    },
    [slideCount],
  );

  useEffect(() => {
    const el = trackRef.current;
    if (!el || slideCount <= 0) return;

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const itemWidth = el.clientWidth;
        if (itemWidth <= 0) return;
        const next = Math.round(el.scrollLeft / itemWidth);
        const bounded = Math.max(0, Math.min(next, slideCount - 1));
        if (bounded !== activeIndexRef.current) {
          activeIndexRef.current = bounded;
          setActiveIndex(bounded);
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      el.removeEventListener("scroll", onScroll);
    };
  }, [slideCount]);

  const dots = useMemo(() => images.map((img) => img.id), [images]);

  return (
    <div className="home-shots-wrap">
      <button
        type="button"
        className="home-shots-arrow home-shots-arrow--left"
        aria-label="Previous screenshot"
        onClick={() => scrollToIndex(activeIndex - 1)}
      >
        ‹
      </button>

      <div
        ref={trackRef}
        className="home-screenshots-grid"
        role="region"
        aria-label="Screenshot slider"
      >
        {images.map((image) => (
          <figure key={image.id} className="home-shot-card" id={`screenshot-${image.id}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 92vw, 920px"
            />
            <figcaption className="sr-only">
              <a href={`#screenshot-${image.id}`}>{image.name}</a>
              <span>{image.description}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="home-shots-arrow home-shots-arrow--right"
        aria-label="Next screenshot"
        onClick={() => scrollToIndex(activeIndex + 1)}
      >
        ›
      </button>

      <div className="home-shots-dots" aria-label="Current screenshot indicator">
        {dots.map((id, idx) => (
          <button
            type="button"
            key={id}
            className={`home-shots-dot${idx === activeIndex ? " is-active" : ""}`}
            aria-label={`Show screenshot ${idx + 1}`}
            aria-pressed={idx === activeIndex}
            onClick={() => scrollToIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
