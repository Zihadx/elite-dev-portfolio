"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Soft spotlight + ring follower. Hidden on touch / reduced motion.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;

    const prefersFine = window.matchMedia("(pointer: fine)").matches;
    if (!prefersFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduced, x, y]);

  useEffect(() => {
    if (reduced) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.innerWidth >= 768;
    if (!fine || !wide) return;
    document.body.classList.add("cursor-none");
    return () => document.body.classList.remove("cursor-none");
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--glow-primary)/0.14),transparent_65%)] blur-2xl md:block"
        style={{ x: sx, y: sy }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[101] hidden h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/5 shadow-[0_0_24px_hsl(var(--glow-primary)/0.35)] backdrop-blur-md md:block"
        style={{ x: sx, y: sy }}
        aria-hidden
      />
    </>
  );
}
