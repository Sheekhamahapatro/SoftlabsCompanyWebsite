"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const industries = [
  { id: 1, image: "/industries/banking.jpg", name: "Telecommunications" },
  { id: 2, image: "/industries/healthcare.jpg", name: "BFSI" },
  { id: 3, image: "/industries/manufacturing.jpg", name: "Energy" },
  { id: 4, image: "/industries/retail.jpg", name: "Manufacturing" },
  { id: 4, image: "/industries/retail.jpg", name: "Government" },
  { id: 4, image: "/industries/retail.jpg", name: "Defense" },
];

const AUTO_DELAY = 3200;
const CARD_WIDTH_MOBILE = 240;
const CARD_WIDTH_TABLET = 280;
const CARD_WIDTH_DESKTOP = 320;

export default function IndustriesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);
  const containerRef = useRef<HTMLDivElement>(null);

  // Responsive card width
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth;
      setCardWidth(
        w < 640 ? CARD_WIDTH_MOBILE : w < 1024 ? CARD_WIDTH_TABLET : CARD_WIDTH_DESKTOP
      );
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

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
    <section className="bg-white py-8 overflow-hidden mb-7 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-5xl bg-linear-to-b from-zinc-300 via-violet-500 to-violet-800 bg-clip-text text-transparent">
          Industries We Serve
        </h1>

        {/* Carousel */}
        <div
          ref={containerRef}
          className="relative mt-12 sm:mt-20"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transform: `translateX(calc(50% - ${
                centerIndex * cardWidth
              }px - ${cardWidth / 2}px))`,
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
                    width: cardWidth,
                    transform: `scale(${scale})`,
                    opacity,
                  }}
                >
                  <div className="mx-2 overflow-hidden rounded-xl bg-gray-200 shadow-lg sm:mx-4 sm:rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover sm:h-56"
                    />
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-gray-600 sm:mt-4 sm:text-sm">
                    {item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2 sm:mt-12 sm:gap-3">
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
