"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { projects, type Project } from "@/data";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

/** Asymmetrical bento spans on large screens (12-column grid). */
function spanClass(span: Project["span"]) {
  switch (span) {
    case "xl":
      return "md:col-span-12 xl:col-span-8 xl:row-span-2 xl:min-h-[520px]";
    case "lg":
      return "md:col-span-12 lg:col-span-7 xl:col-span-7 min-h-[380px]";
    case "md":
      return "md:col-span-6 xl:col-span-4 min-h-[360px]";
    default:
      return "md:col-span-6 xl:col-span-4 min-h-[320px]";
  }
}

export function Projects() {
  const reduced = useReducedMotion();
  const list = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
            Selected work
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Bento laboratory</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            Asymmetrical tiles, depth on hover, and crisp project metadata — optimized for
            scanning and storytelling.
          </p>
        </MotionReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {list.map((p, i) => (
            <MotionReveal
              key={p.title}
              delay={0.04 * i}
              className={cn(spanClass(p.span))}
            >
              <motion.article
                whileHover={
                  reduced
                    ? undefined
                    : { y: -6, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
                }
                className="group glass-panel relative h-full overflow-hidden rounded-3xl"
              >
                <div className="relative h-[52%] min-h-[120px] w-full md:h-[55%]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(230_32%_7%)] via-[hsl(230_32%_7%/0.2)] to-transparent opacity-90 transition group-hover:opacity-100" />
                </div>
                <div className="flex h-[48%] flex-col justify-between p-5 md:h-[45%]">
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground md:text-sm">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-xs font-medium text-foreground/95 transition hover:border-violet-400/35 hover:bg-violet-500/10"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </Link>
                    <Link
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-xs font-medium text-foreground/95 transition hover:border-violet-400/35 hover:bg-violet-500/10"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Link>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition group-hover:opacity-100" />
              </motion.article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
