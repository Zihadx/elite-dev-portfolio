"use client";

import { useEffect, useState } from "react";

export type NormalizedMouse = { x: number; y: number; nx: number; ny: number };

/**
 * Normalized pointer position for parallax and ambient effects (0–1, -1–1).
 */
export function useMouseNormalized() {
  const [pos, setPos] = useState<NormalizedMouse>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const nx = x / window.innerWidth - 0.5;
      const ny = y / window.innerHeight - 0.5;
      setPos({ x, y, nx, ny });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return pos;
}
