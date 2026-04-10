"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import { AmbientOrbs } from "@/components/sections/hero/ambient-orbs";
import { HeroProfileColumn } from "@/components/sections/hero/profile-column";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import {
  heroAvailabilityLabel,
  heroEasterEgg,
  heroTaglines,
  site,
} from "@/data";
import { useCyclingIndex } from "@/hooks/use-cycling-index";
import { usePointerBurst } from "@/hooks/use-pointer-burst";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { EASE_LUXURY } from "@/lib/motion";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Hero() {
  const reduced = useReducedMotion();
  const [line, setLine] = useCyclingIndex(heroTaglines.length, 4200, !reduced);
  const { unlocked: eliteMode, onPointerDown: onEasterPointerDown } =
    usePointerBurst(3, 500);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);

  const onCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: py * -12, ry: px * 12 });
  };

  const onCardLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden px-4 pb-24 pt-32 md:px-8 md:pt-36"
    >
      <AmbientOrbs />

      <div className="pointer-events-none absolute inset-0 bg-grid-fine bg-[length:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
            {heroAvailabilityLabel}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient-soft">{site.name}</span>
            <br />
            <span className="text-gradient">{site.role}</span>
          </motion.h1>

          <div className="mt-6 min-h-[3.5rem] text-lg text-muted-foreground md:text-xl">
            {!reduced ? (
              <AnimatePresence mode="wait">
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: EASE_LUXURY }}
                  className="block"
                >
                  {heroTaglines[line % heroTaglines.length]}
                </motion.span>
              </AnimatePresence>
            ) : (
              <span>{heroTaglines[0]}</span>
            )}
          </div>

          {!reduced && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="mt-2"
            >
              <button
                type="button"
                className="text-xs text-violet-300/80 underline-offset-4 hover:underline"
                onClick={() => setLine((l) => l + 1)}
              >
                Another line →
              </button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Button
                size="lg"
                className="rounded-2xl px-8"
                onClick={() => scrollToSection("contact")}
              >
                Start a project
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl px-8"
                onClick={() => scrollToSection("projects")}
              >
                View work
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground"
          >
            {site.tagline}
          </motion.p>

          <button
            type="button"
            className="mt-6 text-left text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50"
            onPointerDown={onEasterPointerDown}
          >
            <span
              className={cn(
                "transition-colors",
                eliteMode && "text-violet-300"
              )}
            >
              {eliteMode
                ? heroEasterEgg.unlockedLabel
                : heroEasterEgg.idleLabel}
            </span>
          </button>
        </div>

        <HeroProfileColumn
          parallaxY={parallaxY}
          cardRef={cardRef}
          siteName={site.name}
          location={site.location}
          eliteMode={eliteMode}
          tiltRx={tilt.rx}
          tiltRy={tilt.ry}
          onCardMove={onCardMove}
          onCardLeave={onCardLeave}
        />
      </div>
    </section>
  );
}
