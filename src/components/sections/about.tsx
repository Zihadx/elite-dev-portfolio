"use client";

import { motion } from "framer-motion";

import { about } from "@/data";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function About() {
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative px-4 py-28 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
            About
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-soft">Story over noise.</span>
          </h2>
        </MotionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionReveal delay={0.08}>
            <div className="glass-panel relative rounded-3xl p-8 md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
              <p className="text-lg font-medium leading-relaxed text-foreground/95 md:text-xl">
                {about.lead}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {about.body}
              </p>
            </div>
          </MotionReveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {about.strengths.map((s, i) => (
              <MotionReveal key={s.title} delay={0.05 * i}>
                <motion.div
                  whileHover={
                    reduced
                      ? undefined
                      : { y: -4, transition: { duration: 0.25 } }
                  }
                  className="glass-panel group rounded-2xl border border-white/[0.07] p-5 transition-shadow hover:shadow-[0_0_40px_-12px_hsl(var(--glow-primary)/0.35)]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {s.title}
                  </p>
                  <p className="mt-3 text-sm font-medium text-foreground/95">
                    {s.desc}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-violet-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              </MotionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
