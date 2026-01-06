"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const nav = [
  { href: "#hakkimda", label: "Hakkımda" },
  { href: "#odak", label: "Odak" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-zinc-50"
          aria-label={`${site.name} ana sayfa`}
        >
          <span className="inline-flex size-7 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.18em]">
            YEK
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Gezinme">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-300 transition hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-zinc-50"
            aria-label="E-posta"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-zinc-50"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-zinc-50"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

