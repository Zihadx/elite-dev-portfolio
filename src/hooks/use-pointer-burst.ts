"use client";

import { useCallback, useState } from "react";

/**
 * Detects rapid repeated pointer downs (e.g. triple-tap easter eggs).
 */
export function usePointerBurst(threshold = 3, windowMs = 500) {
  const [unlocked, setUnlocked] = useState(false);
  const [stamps, setStamps] = useState<number[]>([]);

  const onPointerDown = useCallback(() => {
    if (unlocked) return;
    const now = Date.now();
    setStamps((prev) => {
      const next = [...prev, now].filter((t) => now - t < windowMs);
      if (next.length >= threshold) {
        setUnlocked(true);
        return [];
      }
      return next;
    });
  }, [unlocked, threshold, windowMs]);

  return { unlocked, onPointerDown };
}
