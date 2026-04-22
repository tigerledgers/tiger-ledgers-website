"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CTAButton } from "@/components/common/CTAButton";
import { HERO_SLIDES, CTA_LABEL, CTA_HREF } from "@/constants/siteData";

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/70 to-navy/55" />
        </motion.div>
      </AnimatePresence>

      <div className="mx-auto max-w-4xl px-4 pt-20 text-center text-navy-foreground sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Tiger Ledgers
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-navy-foreground/85 sm:text-lg">
              {slide.subtext}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <CTAButton href={CTA_HREF}>{CTA_LABEL}</CTAButton>
              <CTAButton href="#services" variant="outline">
                Explore Services
              </CTAButton>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-14 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-gold" : "w-4 bg-navy-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
