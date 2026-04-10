"use client";

import { useEffect, useState } from "react";

/**
 * Advances index on an interval. Paused when `active` is false (e.g. reduced motion).
 */
export function useCyclingIndex(
  length: number,
  intervalMs: number,
  active: boolean
): readonly [number, (n: number | ((i: number) => number)) => void] {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!active || length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [active, length, intervalMs]);

  return [index, setIndex] as const;
}
