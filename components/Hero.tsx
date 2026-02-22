"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useMemo, useState } from "react";

import cyberResilienceBg from "@/public/cybersecurity.jpg";
import cloudHardeningBg from "@/public/Cloud-Computing.jpg";
import managedDefenseBg from "@/public/Defense.jpg";

type HeroSlide = {
  id: string;
  eyebrow: string;
  preTitle: string;
  highlight: string;
  postTitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  background: SlideBackground;
};

type SlideBackground =
  | { variant: "image"; src: StaticImageData }
  | { variant: "gradient"; value: string };

type SlideDirection = "next" | "prev";

const AUTOPLAY_DELAY = 7000;

const heroSlides: HeroSlide[] = [
  {
    id: "zero-trust",
    eyebrow: "Cyber resilience studio",
    preTitle: "Your Trusted Partner For",
    highlight: "Zero-Trust Readiness",
    postTitle: "Across Every Surface",
    description:
      "Driving innovation for enhanced customer experiences through airtight identity, endpoint, and data protections.",
    primaryCta: { label: "Book Zero-Trust Audit", href: "/contact" },
    secondaryCta: { label: "Explore Playbooks", href: "/services" },
    background: { variant: "image", src: cyberResilienceBg },
  },
  {
    id: "cloud-hardening",
    eyebrow: "Securing cloud journeys",
    preTitle: "Cloud Workloads Built For",
    highlight: "Resilience & Speed",
    postTitle: "Without Compromise",
    description:
      "Modernize on multi-cloud with continuous posture management, proactive detection, and automated guardrails.",
    primaryCta: { label: "Schedule Cloud Deep-Dive", href: "/contact" },
    secondaryCta: { label: "View Case Studies", href: "/about" },
    background: { variant: "image", src: cloudHardeningBg },
  },
  {
    id: "managed-defense",
    eyebrow: "Managed defense",
    preTitle: "Detect, Respond, and Recover",
    highlight: "Before Threats Escalate",
    postTitle: "",
    description:
      "24/7 SOC coverage, curated threat intel, and automated response workflows keep teams confident and compliant.",
    primaryCta: { label: "Talk With Analysts", href: "/contact" },
    secondaryCta: { label: "See Response Kits", href: "/services" },
    background: { variant: "image", src: managedDefenseBg },
  },
];

const getBackgroundValue = (slide: HeroSlide) =>
  slide.background.variant === "image"
    ? `url(${slide.background.src.src})`
    : slide.background.value;

export default function Hero() {
  const slideCount = heroSlides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState<SlideDirection>("next");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);

    const timeout = setTimeout(() => {
      setPrevIndex(activeIndex);
      setDirection("next");
      setActiveIndex((activeIndex + 1) % slideCount);
    }, AUTOPLAY_DELAY);

    let raf: number;
    let start: number | null = null;

    const animate = (t: number) => {
      if (!start) start = t;
      setProgress(Math.min((t - start) / AUTOPLAY_DELAY, 1));
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [activeIndex, slideCount]);

  const activeSlide = useMemo(() => heroSlides[activeIndex], [activeIndex]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-bg",
      getBackgroundValue(heroSlides[activeIndex]),
    );
  }, [activeIndex]);

  useEffect(() => {
    return () => {
      document.documentElement.style.removeProperty("--header-bg");
    };
  }, []);

  const handleSelectSlide = (next: number) => {
    const index = (next + slideCount) % slideCount;
    if (index === activeIndex) return;
    setPrevIndex(activeIndex);
    setDirection(index > activeIndex ? "next" : "prev");
    setActiveIndex(index);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === prevIndex && prevIndex !== activeIndex;

          const animationClass = isActive
            ? direction === "next"
              ? "animate-hero-enter-next"
              : "animate-hero-enter-prev"
            : isPrev
            ? direction === "next"
              ? "animate-hero-exit-next"
              : "animate-hero-exit-prev"
            : "";

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 overflow-hidden will-change-transform ${animationClass} ${
                isActive || isPrev ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide.background.variant === "image" ? (
                <Image
                  src={slide.background.src}
                  alt=""
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: slide.background.value }}
                />
              )}
              <div className="absolute inset-0 bg-linear-to-br from-white/75 via-white/60 to-white/85" />
            </div>
          );
        })}
        
      </div>
      {/* Carousel controls - smaller on mobile */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => handleSelectSlide(activeIndex - 1)}
        className="group absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-300 bg-white/80 p-2.5 text-slate-700 shadow-xl backdrop-blur transition hover:border-slate-400 hover:bg-white sm:left-4 sm:p-3 md:left-6 md:p-4"
      >
        <svg
          aria-hidden
          className="h-4 w-4 transition group-hover:-translate-x-0.5 sm:h-5 sm:w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => handleSelectSlide(activeIndex + 1)}
        className="group absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-300 bg-white/80 p-2.5 text-slate-700 shadow-xl backdrop-blur transition hover:border-slate-400 hover:bg-white sm:right-4 sm:p-3 md:right-6 md:p-4"
      >
        <svg
          aria-hidden
          className="h-4 w-4 transition group-hover:translate-x-0.5 sm:h-5 sm:w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 pb-20 text-center text-slate-800 sm:px-6 sm:pt-32 sm:pb-32 md:pb-40">
        <div
          key={`${activeSlide.id}-${direction}`}
          className={`w-full animate-hero-content-${direction}`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-slate-600 sm:text-xs sm:tracking-[0.5em] md:tracking-[0.6em]">
            {activeSlide.eyebrow}
          </p>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight text-slate-900 sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {activeSlide.preTitle}{" "}
            <span className="text-violet-700">
              {activeSlide.highlight}
            </span>
            {activeSlide.postTitle && (
              <>
                <br />
                {activeSlide.postTitle}
              </>
            )}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-700 sm:mt-6 sm:text-lg">
            {activeSlide.description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-6">
            <a
              href={activeSlide.primaryCta.href}
              className="w-full rounded-2xl bg-violet-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-violet-700 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              {activeSlide.primaryCta.label}
            </a>
            <a
              href={activeSlide.secondaryCta.href}
              className="w-full rounded-2xl border-2 border-slate-700 px-8 py-3.5 text-base font-medium text-slate-800 hover:bg-slate-100 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              {activeSlide.secondaryCta.label}
            </a>
          </div>

          {/* Progress */}
          <div className="mt-10 mx-auto h-1 w-28 rounded-full bg-slate-300 sm:mt-14 sm:w-32">
            <div
              className="h-full origin-left rounded-full bg-violet-600"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
