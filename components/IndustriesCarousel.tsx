"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const industries = [
  { id: 1, image: "/industries/banking.jpg", name: "Banking" },
  { id: 2, image: "/industries/healthcare.jpg", name: "Healthcare" },
  { id: 3, image: "/industries/manufacturing.jpg", name: "Manufacturing" },
  { id: 4, image: "/industries/retail.jpg", name: "Retail" },
];

const AUTO_DELAY = 3200;
const CARD_WIDTH = 320;

export default function IndustriesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate slides for infinite effect
  const slides = useMemo(
    () => [...industries, ...industries, ...industries],
    []
  );

  const total = industries.length;
  const centerIndex = index + total;

  // Auto-play
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, [paused, total]);

  return (
    <section className="bg-white py-10 overflow-hidden mb-7">
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <h1 className="text-center text-5xl font-semibold bg-linear-to-b from-zinc-300 via-violet-500 to-violet-800 bg-clip-text text-transparent">
          Industries We Serve
        </h1>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(calc(50% - ${
                centerIndex * CARD_WIDTH
              }px - ${CARD_WIDTH / 2}px))`,
            }}
          >
            {slides.map((item, i) => {
              const distance = Math.abs(i - centerIndex);
              const scale = distance === 0 ? 1 : 0.85;
              const opacity = distance <= 1 ? 1 : 0.4;

              return (
                <div
                  key={`${item.id}-${i}`}
                  className="shrink-0 transition-all duration-700"
                  style={{
                    width: CARD_WIDTH,
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="mx-4 overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-medium text-gray-600">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-12 flex justify-center gap-3">
          {industries.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i
                  ? "w-10 bg-gray-900"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
