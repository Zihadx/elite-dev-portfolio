"use client";

import { motion } from "framer-motion";

import { experience } from "@/data";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Experience() {
  const reduced = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
            Journey
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Experience
          </h2>
        </MotionReveal>

        <div className="relative mt-16">
          <div
            className="absolute left-[11px] top-2 bottom-4 w-px bg-gradient-to-b from-violet-500/50 via-indigo-500/30 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="relative space-y-12 md:space-y-16">
            {experience.map((ex, i) => (
              <MotionReveal key={ex.company} delay={0.07 * i}>
                <li className="relative grid gap-6 md:grid-cols-2 md:gap-10">
                  <div className="md:text-right">
                    <div className="flex items-start gap-4 md:flex-row-reverse md:items-center md:gap-6">
                      <motion.span
                        className="relative mt-1.5 flex h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-sky-400 to-violet-600 shadow-[0_0_20px_hsl(var(--glow-primary)/0.75)] md:mt-0"
                        initial={reduced ? false : { scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 320, damping: 22 }}
                      />
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                          {ex.period}
                        </p>
                        <p className="mt-2 font-display text-xl font-semibold md:text-2xl">
                          {ex.role}
                        </p>
                        <p className="text-sm text-violet-200/90">{ex.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel rounded-2xl border border-white/[0.07] p-5 md:p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {ex.summary}
                    </p>
                  </div>
                </li>
              </MotionReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
