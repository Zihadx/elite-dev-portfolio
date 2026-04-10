"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { navItems, site } from "@/data";
import { useActiveSection } from "@/hooks/use-active-section";
import { initialsFromName } from "@/lib/branding";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const ids = navItems.map((n) => n.id);

export function FloatingNav() {
  const active = useActiveSection(ids);

  return (
    <header className="fixed left-0 right-0 top-0 z-[90] px-4 pt-4 md:px-8">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/[0.09] bg-[hsl(230_32%_7%/0.55)] px-4 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_-12px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:px-6"
      >
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="group flex items-center gap-2 text-left"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] text-xs font-bold text-gradient shadow-inner">
            {initialsFromName(site.name)}
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-foreground/95 sm:block">
            {site.name.split(" ")[0]}
            <span className="text-muted-foreground">.</span>
          </span>
        </button>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "relative rounded-xl px-3 py-2 text-xs font-medium tracking-wide transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground/90"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl border border-violet-500/25 bg-gradient-to-r from-violet-500/15 to-indigo-500/10 shadow-[0_0_24px_-6px_hsl(var(--glow-primary)/0.45)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-violet-400/25 hover:text-foreground sm:inline-flex"
          >
            GitHub
          </Link>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="magnetic-btn rounded-xl bg-gradient-to-r from-violet-500/90 to-indigo-600/90 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_-4px_hsl(var(--glow-primary)/0.55)] hover:brightness-110"
          >
            Let&apos;s talk
          </button>
        </div>
      </motion.div>

      {/* Mobile nav strip */}
      <div className="mx-auto mt-3 flex max-w-6xl gap-2 overflow-x-auto pb-1 lg:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-medium",
              active === item.id
                ? "border-violet-400/35 bg-violet-500/10 text-foreground"
                : "border-white/10 bg-white/[0.03] text-muted-foreground"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}
