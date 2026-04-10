"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { site } from "@/data/portfolio";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Brief luxury reveal — progress line + wordmark fade.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setDone(true), reduced ? 200 : 1200);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[hsl(230_35%_4%)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-display text-2xl font-bold tracking-tight text-gradient md:text-3xl"
          >
            {reduced ? "Loading" : site.name.split(" ")[0]}
          </motion.div>
          <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-indigo-500"
              initial={{ x: "-100%" }}
              animate={{ x: reduced ? "0%" : "200%" }}
              transition={{
                duration: reduced ? 0.1 : 1,
                ease: "easeInOut",
                repeat: reduced ? 0 : Infinity,
                repeatType: "loop",
                repeatDelay: 0.15,
              }}
            />
          </div>
          <p className="mt-6 text-xs tracking-[0.35em] text-muted-foreground">
            INITIALIZING
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
