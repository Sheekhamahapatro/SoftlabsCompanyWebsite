"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const brandPartners = [
  { src: "/Partners/array-jnh.png" },
  { src: "/Partners/array-without-bg.png" },
  { src: "/Partners/f5-logo.png" },
  { src: "/Partners/McAfee-logo.png" },
  { src: "/Partners/Meural-logo.png" },
  { src: "/Partners/radware.png" },
  { src: "/Partners/p3.png" },
  { src: "/Partners/pi.png" },
  { src: "/Partners/trend-micro.png" },
  { src: "/Partners/Vehere_logo-.png" },
];

export default function BrandCarousel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // duplicate array for seamless loop
  const marqueeItems = useMemo(
    () => [...brandPartners, ...brandPartners],
    []
  );

  return (
    <section className="bg-white py-12 sm:py-20">
      <div
        ref={containerRef}
        className="mx-auto max-w-6xl px-4 text-center sm:px-6"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-xs sm:tracking-[0.45em]">
          Trusted by 500+ startups worldwide
        </p>

        <div className="relative mt-8 overflow-hidden sm:mt-12">
          <div
            className={`flex min-w-max items-center gap-8 transition-opacity duration-700 sm:gap-14 ${
              isVisible ? "animate-brand-marquee opacity-100" : "opacity-0"
            }`}
            aria-label="Partner brands carousel"
          >
            {marqueeItems.map((brand, index) => (
              <div
                key={`${brand.src}-${index}`}
                className="flex items-center justify-center"
              >
                <Image
                  src={brand.src}
                  alt="Partner logo"
                  width={120}
                  height={60}
                  className="h-10 w-20 object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100 sm:h-12 sm:w-24 md:h-[60px] md:w-[120px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
