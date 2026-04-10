"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

import { useMouseNormalized } from "@/hooks/use-mouse-normalized";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Cursor-following cinematic light wash — subtle blue → purple → indigo.
 */
export function AmbientGlow() {
  const { nx, ny } = useMouseNormalized();
  const reduced = useReducedMotion();

  const x = useSpring(nx, { stiffness: 40, damping: 28, mass: 0.8 });
  const y = useSpring(ny, { stiffness: 40, damping: 28, mass: 0.8 });

  useEffect(() => {
    if (reduced) {
      x.set(0);
      y.set(0);
      return;
    }
    x.set(nx);
    y.set(ny);
  }, [nx, ny, reduced, x, y]);

  const moveX = useTransform(x, [-0.5, 0.5], ["-8%", "8%"]);
  const moveY = useTransform(y, [-0.5, 0.5], ["-6%", "6%"]);

  if (reduced) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute -left-1/4 top-[-20%] h-[70vh] w-[70vw] rounded-full bg-gradient-to-br from-sky-500/25 via-violet-600/20 to-indigo-700/15 blur-[120px]"
      />
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute -right-1/4 bottom-[-10%] h-[60vh] w-[60vw] rounded-full bg-gradient-to-tl from-indigo-600/20 via-fuchsia-500/15 to-transparent blur-[100px]"
      />
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(230_35%_4%/0.85)] to-[hsl(230_35%_4%)]" />
    </div>
  );
}
