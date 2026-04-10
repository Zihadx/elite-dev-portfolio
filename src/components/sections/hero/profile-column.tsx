"use client";

import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";
import type { RefObject } from "react";

import { heroProfileImage, heroProfileMeta } from "@/data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type HeroProfileColumnProps = {
  parallaxY: MotionValue<number>;
  cardRef: RefObject<HTMLDivElement | null>;
  siteName: string;
  location: string;
  eliteMode: boolean;
  tiltRx: number;
  tiltRy: number;
  onCardMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  onCardLeave: () => void;
};

export function HeroProfileColumn({
  parallaxY,
  cardRef,
  siteName,
  location,
  eliteMode,
  tiltRx,
  tiltRy,
  onCardMove,
  onCardLeave,
}: HeroProfileColumnProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div style={{ y: parallaxY }} className="relative">
      <div
        ref={cardRef}
        onMouseMove={onCardMove}
        onMouseLeave={onCardLeave}
        style={{
          perspective: "1200px",
          transform: `rotateX(${tiltRx}deg) rotateY(${tiltRy}deg)`,
          transition: reduced ? undefined : "transform 0.12s ease-out",
        }}
        className={cn(
          "glass-panel-strong relative mx-auto max-w-md overflow-hidden rounded-3xl p-1",
          eliteMode && "shadow-[0_0_80px_-12px_hsl(var(--glow-primary)/0.55)]"
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
                {siteName}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{location}</p>
            </div>
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 shadow-lg ring-2 ring-white/5">
              <Image
                src={heroProfileImage}
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
              <span>{heroProfileMeta.focusLabel}</span>
              <span className="text-foreground/90">{heroProfileMeta.focusValue}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{heroProfileMeta.stackLabel}</span>
              <span className="text-foreground/90">{heroProfileMeta.stackValue}</span>
            </div>
          </div>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
            {heroProfileMeta.footerLine}
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
  );
}
