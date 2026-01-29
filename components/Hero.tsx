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
              <div className="absolute inset-0 bg-linear-to-br from-slates-950/40 via-slate-950/60 to-slate-950/80" />
            </div>
          );
        })}
        
      </div>
      {/* Carousel controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => handleSelectSlide(activeIndex - 1)}
        className="group absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-slate-900/40 p-4 text-white shadow-xl backdrop-blur transition hover:border-white/60 hover:bg-white/10"
      >
        <svg
          aria-hidden
          className="h-5 w-5 transition group-hover:-translate-x-0.5"
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
        className="group absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-slate-900/40 p-4 text-white shadow-xl backdrop-blur transition hover:border-white/60 hover:bg-white/10"
      >
        <svg
          aria-hidden
          className="h-5 w-5 transition group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-40 text-center text-white">
        <div
          key={`${activeSlide.id}-${direction}`}
          className={`w-full animate-hero-content-${direction}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">
            {activeSlide.eyebrow}
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight lg:text-6xl">
            {activeSlide.preTitle}{" "}
            <span className="bg-linear-to-r from-[#4318ff] via-[#a855f7] to-[#f5f3ff] bg-size-[200%_200%] bg-clip-text text-transparent">
              {activeSlide.highlight}
            </span>
            {activeSlide.postTitle && (
              <>
                <br />
                {activeSlide.postTitle}
              </>
            )}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {activeSlide.description}
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href={activeSlide.primaryCta.href}
              className="rounded-2xl bg-purple-600 px-10 py-4 text-lg font-semibold hover:bg-purple-500"
            >
              {activeSlide.primaryCta.label}
            </a>
            <a
              href={activeSlide.secondaryCta.href}
              className="rounded-2xl border border-white/40 px-10 py-4 text-lg hover:bg-white/10"
            >
              {activeSlide.secondaryCta.label}
            </a>
          </div>

          {/* Progress */}
          <div className="mt-14 mx-auto h-1 w-32 rounded-full bg-white/20">
            <div
              className="h-full origin-left bg-white"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
