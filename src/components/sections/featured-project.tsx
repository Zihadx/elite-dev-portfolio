"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { featuredProject } from "@/data/portfolio";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FeaturedProject() {
  const reduced = useReducedMotion();
  const p = featuredProject;

  return (
    <section
      id="featured"
      className="relative px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
                <Sparkles className="h-4 w-4" aria-hidden />
                Featured project
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Spotlight
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A flagship build — asymmetric layout, cinematic hover, and production-grade
              polish.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-12">
          <motion.div
            whileHover={
              reduced ? undefined : { scale: 1.01, transition: { duration: 0.35 } }
            }
            className="glass-panel-strong relative overflow-hidden rounded-[28px] border border-white/10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-indigo-600/10" />
            <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative aspect-[16/11] min-h-[240px] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230_35%_4%)] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 lg:pl-4">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {p.stack.slice(0, 2).join(" · ")}
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500/90 to-indigo-600/90 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-6px_hsl(var(--glow-primary)/0.55)] transition hover:brightness-110"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={p.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-foreground/90 transition hover:border-violet-400/30 hover:bg-white/[0.07]"
                  >
                    Source
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </MotionReveal>
      </div>
    </section>
  );
}
