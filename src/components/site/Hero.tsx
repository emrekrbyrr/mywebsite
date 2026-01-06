"use client";

import { ArrowDown, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

function Glow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/25 via-violet-500/25 to-fuchsia-500/25 blur-3xl" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:28px_28px] opacity-35" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Glow />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <motion.p
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-200"
        >
          <span className="size-1.5 rounded-full bg-cyan-400/90" />
          {site.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-zinc-300"
        >
          <span className="text-zinc-50">{site.hero.headline}</span>{" "}
          {site.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#iletisim"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 px-5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            İletişime geç <Send className="size-4" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
          >
            LinkedIn <Linkedin className="size-4" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
          >
            GitHub <Github className="size-4" />
          </a>
        </motion.div>

        <motion.a
          href="#hakkimda"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-zinc-50"
        >
          Aşağı kaydır <ArrowDown className="size-4" />
        </motion.a>
      </div>
    </section>
  );
}

