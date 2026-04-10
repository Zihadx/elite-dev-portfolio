"use client";

import Link from "next/link";

import { navItems, site } from "@/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] px-4 py-14 md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-tight">
            {site.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {year} — Crafted with Next.js & intention.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {navItems.map((n) => (
            <Link
              key={n.id}
              href={`#${n.id}`}
              className="transition hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
