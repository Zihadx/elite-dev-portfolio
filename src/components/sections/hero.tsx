"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { AmbientOrbs } from "@/components/sections/hero-orbs";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Button } from "@/components/ui/button";
import { site } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const taglines = [
  "Ship products that feel inevitable.",
  "Precision engineering. Cinematic craft.",
  "Full-stack. Full send.",
];

export function Hero() {
  const reduced = useReducedMotion();
  const [line, setLine] = useState(0);
  const [egg, setEgg] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setLine((l) => (l + 1) % taglines.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduced]);
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
            Available for select projects
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
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {taglines[line % taglines.length]}
                </motion.span>
              </AnimatePresence>
            ) : (
              <span>{taglines[0]}</span>
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
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Start a project
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl px-8"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
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

          {/* Easter egg: triple-click badge */}
          <button
            type="button"
            className="mt-6 text-left text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50"
            onClick={() => {
              /* triple-click handled below */
            }}
            onPointerDown={(e) => {
              const now = Date.now();
              const w = (e.currentTarget as unknown as { _t?: number[] })._t ?? [];
              const next = [...w, now].filter((t) => now - t < 500);
              (e.currentTarget as unknown as { _t?: number[] })._t = next;
              if (next.length >= 3) {
                setEgg(true);
                (e.currentTarget as unknown as { _t?: number[] })._t = [];
              }
            }}
          >
            <span
              className={cn(
                "transition-colors",
                egg && "text-violet-300"
              )}
            >
              {egg ? "Elite mode unlocked — shine on." : "Est. craft-first engineering"}
            </span>
          </button>
        </div>

        <motion.div style={{ y: parallaxY }} className="relative">
          <div
            ref={cardRef}
            onMouseMove={onCardMove}
            onMouseLeave={onCardLeave}
            style={{
              perspective: "1200px",
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: reduced ? undefined : "transform 0.12s ease-out",
            }}
            className={cn(
              "glass-panel-strong relative mx-auto max-w-md overflow-hidden rounded-3xl p-1",
              egg && "shadow-[0_0_80px_-12px_hsl(var(--glow-primary)/0.55)]"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-600/10" />
            <div className="relative rounded-[22px] bg-[hsl(230_30%_8%/0.9)] p-6 shadow-inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Profile
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                    {site.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{site.location}</p>
                </div>
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 shadow-lg ring-2 ring-white/5">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&q=80"
                    alt="Profile"
                    fill
                    className="object-cover"
                    sizes="64px"
                    priority
                  />
                </div>
              </div>
              <div className="mt-6 grid gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Focus</span>
                  <span className="text-foreground/90">Product & platform</span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Stack ethos</span>
                  <span className="text-foreground/90">Typesafe · Observable</span>
                </div>
              </div>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Building interfaces that respect attention — and backends that respect uptime.
              </p>
            </div>
          </div>

          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky-500/20 blur-3xl"
            animate={reduced ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
