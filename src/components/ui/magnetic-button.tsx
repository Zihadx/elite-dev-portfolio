"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  className?: string;
  strength?: number;
  children: React.ReactNode;
};

/**
 * Subtle magnetic pull toward cursor — use on CTAs.
 * Props are intentionally narrow: React's DOM `onAnimationStart` etc. clash with
 * Framer Motion's `motion.div` types when spread onto the component.
 */
export function MagneticButton({
  className,
  strength = 0.35,
  children,
}: MagneticButtonProps) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 320, damping: 24 });
  const sy = useSpring(y, { stiffness: 320, damping: 24 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
