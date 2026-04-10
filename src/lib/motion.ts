import type { Variants } from "framer-motion";

/** Shared easing for premium motion (matches global feel). */
export const EASE_LUXURY = [0.22, 1, 0.36, 1] as const;

export const REVEAL_VIEWPORT = { once: true, margin: "-12%" as const };

export function revealVariants(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [...EASE_LUXURY], delay },
    },
  };
}
