"use client";

import { useState } from "react";
import { Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:bg-white/10"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1200);
        } catch {
          // ignore
        }
      }}
      aria-label={`${label} kopyala`}
    >
      <Copy className="size-3.5" />
      {copied ? "Kopyalandı" : "Kopyala"}
    </button>
  );
}

export function Contact() {
  const phoneHref = `tel:${site.phone.replaceAll(" ", "")}`;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-50">E‑posta</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-zinc-300 hover:text-zinc-50"
            >
              {site.email}
            </a>
          </div>
          <Mail className="mt-0.5 size-4 text-zinc-300" />
        </div>
        <div className="mt-4">
          <CopyButton value={site.email} label="E-posta" />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-50">Telefon</p>
            <a
              href={phoneHref}
              className="mt-1 block text-sm text-zinc-300 hover:text-zinc-50"
            >
              {site.phone}
            </a>
          </div>
          <Phone className="mt-0.5 size-4 text-zinc-300" />
        </div>
        <div className="mt-4">
          <CopyButton value={site.phone} label="Telefon" />
        </div>
      </div>

      <a
        href={site.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-50">LinkedIn</p>
            <p className="mt-1 text-sm text-zinc-300 group-hover:text-zinc-50">
              Profilimi görüntüle
            </p>
          </div>
          <Linkedin className="mt-0.5 size-4 text-zinc-300 group-hover:text-zinc-50" />
        </div>
      </a>

      <a
        href={site.links.github}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-zinc-50">GitHub</p>
            <p className="mt-1 text-sm text-zinc-300 group-hover:text-zinc-50">
              Repolarımı incele
            </p>
          </div>
          <Github className="mt-0.5 size-4 text-zinc-300 group-hover:text-zinc-50" />
        </div>
      </a>
    </div>
  );
}

