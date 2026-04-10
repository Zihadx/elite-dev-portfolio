"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  LayoutGrid,
  type LucideIcon,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";

import { skillCategories } from "@/data/portfolio";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
const icons: LucideIcon[] = [LayoutGrid, Server, Sparkles, Wrench];

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-soft">Precision across the stack</span>
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const Icon = icons[ci] ?? Cpu;
            return (
              <MotionReveal key={cat.name} delay={0.06 * ci}>
                <div className="glass-panel relative overflow-hidden rounded-3xl p-6 md:p-8">
                  {/* Orbiting icon accents */}
                  <div className="pointer-events-none absolute -right-6 -top-6 opacity-40">
                    <motion.div
                      animate={
                        reduced
                          ? undefined
                          : { rotate: 360 }
                      }
                      transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Icon className="h-28 w-28 text-violet-400/15" aria-hidden />
                    </motion.div>
                  </div>

                  <div className="relative flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] shadow-inner">
                      <Icon className="h-5 w-5 text-violet-200" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{cat.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        Calibrated proficiency
                      </p>
                    </div>
                  </div>

                  <ul className="relative mt-8 space-y-5">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-foreground/95">
                            {item.name}
                          </span>
                          <span className="tabular-nums text-muted-foreground">
                            {item.level}%
                          </span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06] shadow-inner">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-violet-500 to-indigo-500"
                            initial={{ width: reduced ? `${item.level}%` : "0%" }}
                            whileInView={{ width: `${item.level}%` }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                              duration: reduced ? 0 : 1.1,
                              ease: [0.22, 1, 0.36, 1],
                              delay: 0.05,
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
