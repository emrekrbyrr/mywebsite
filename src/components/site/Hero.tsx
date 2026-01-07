"use client";

import { ArrowDown, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
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
      <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#222222]/18 via-[#7b7b7b]/14 to-[#222222]/18 blur-3xl" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7b7b7b]/14 via-[#222222]/14 to-[#7b7b7b]/14 blur-3xl" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(34,34,34,0.14)_1px,transparent_0)] [background-size:28px_28px] opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent" />
    </div>
  );
}

export function Hero() {
  const [showImage, setShowImage] = useState(true);

  return (
    <section className="relative overflow-hidden">
      <Glow />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/85 px-3 py-1 text-xs font-medium tracking-wide text-[color:var(--muted)] shadow-sm"
            >
              <span className="size-1.5 rounded-full bg-cyan-400/90" />
              {site.role}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl"
            >
              {site.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[color:var(--muted)]"
            >
              <span className="text-[color:var(--foreground)]">
                {site.hero.headline}
              </span>{" "}
              {site.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#iletisim"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[color:var(--accent-cream)] via-[color:var(--accent-sand)] to-[color:var(--accent-coffee)] px-5 text-sm font-semibold text-[color:var(--primary)] shadow-sm transition hover:brightness-105"
              >
                İletişime geç <Send className="size-4" />
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--tertiary)]"
              >
                LinkedIn <Linkedin className="size-4" />
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 text-sm font-semibold text-[color:var(--foreground)] shadow-sm transition hover:bg-[color:var(--tertiary)]"
              >
                GitHub <Github className="size-4" />
              </a>
            </motion.div>

            <motion.a
              href="#hakkimda"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              Aşağı kaydır <ArrowDown className="size-4" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-[#222222]/18 via-[#7b7b7b]/14 to-[#222222]/18 blur-3xl" />

              <div className="relative overflow-hidden rounded-full border border-[color:var(--border)] bg-[#fff6e8]/70 p-2 shadow-sm backdrop-blur-xl">
                <div className="relative aspect-square overflow-hidden rounded-full">
                  {showImage ? (
                    <Image
                      src={site.avatar.src}
                      alt={site.avatar.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 320px, 360px"
                      className="object-cover"
                      onError={() => setShowImage(false)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[color:var(--tertiary)]">
                      <div className="text-center">
                        <div className="mx-auto inline-flex size-16 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] text-lg font-bold tracking-[0.18em] text-[color:var(--foreground)] shadow-sm">
                          YEK
                        </div>
                        <p className="mt-4 text-sm text-[color:var(--muted)]">
                          Fotoğraf için{" "}
                          <span className="font-mono">public/profile.jpg</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-center px-2 pb-1">
                  <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[color:var(--accent-cream)] via-[color:var(--accent-sand)] to-[color:var(--accent-coffee)] opacity-80" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

