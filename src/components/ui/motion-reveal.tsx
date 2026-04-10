"use client";

import { motion } from "framer-motion";
import * as React from "react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { REVEAL_VIEWPORT, revealVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function MotionReveal({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
      variants={revealVariants(delay)}
    >
      {children}
    </motion.div>
  );
}
