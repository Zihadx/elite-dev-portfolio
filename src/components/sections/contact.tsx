"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { site } from "@/data";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const socials = [
  { href: site.social.github, icon: Github, label: "GitHub" },
  { href: site.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: site.social.twitter, icon: Twitter, label: "Twitter" },
];

export function Contact() {
  const reduced = useReducedMotion();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 3200);
  };

  return (
    <section
      id="contact"
      className="relative px-4 py-28 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300/90">
            Contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Let&apos;s build the exceptional</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            Tell me about your product, timeline, and ambition — I reply within two business
            days.
          </p>
        </MotionReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <MotionReveal delay={0.05}>
            <div className="glass-panel rounded-3xl p-6 md:p-8">
              <p className="text-sm font-medium text-foreground/95">Direct</p>
              <Link
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex items-center gap-2 text-sm text-violet-200/90 transition hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </Link>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Social
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={
                      reduced ? undefined : { y: -3, transition: { duration: 0.2 } }
                    }
                  >
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-muted-foreground transition hover:border-violet-400/35 hover:bg-violet-500/10 hover:text-foreground"
                    >
                      <s.icon className="h-4 w-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass-panel-strong space-y-5 rounded-3xl p-6 md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Ada Lovelace" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">Topic</Label>
                <Input id="topic" name="topic" placeholder="Product engineering partnership" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Context, goals, and what success looks like."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-2xl sm:w-auto"
                disabled={sent}
              >
                {sent ? (
                  "Received — talk soon"
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>
              <p className="text-[11px] text-muted-foreground">
                This demo form acknowledges locally — wire it to your API route or Formspark.
              </p>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
