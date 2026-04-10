"use client";

import { motion } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Slow drifting glow blobs behind the hero for depth.
 */
export function AmbientOrbs() {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      />
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-[10%] top-[8%] h-[42vmin] w-[42vmin] rounded-full bg-gradient-to-br from-sky-500/30 to-transparent blur-[90px]"
        animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[5%] bottom-[12%] h-[38vmin] w-[38vmin] rounded-full bg-gradient-to-tl from-violet-600/25 to-transparent blur-[80px]"
        animate={{ x: [0, -18, 0], y: [0, -14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[30%] top-[40%] h-[28vmin] w-[28vmin] rounded-full bg-indigo-500/15 blur-[70px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
