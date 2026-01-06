"use client";

import { useState } from "react";
import { Copy, Github, Linkedin, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-xs font-medium text-[color:var(--muted)] shadow-sm transition hover:bg-[color:var(--tertiary)] hover:text-[color:var(--foreground)]"
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
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              E‑posta
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              {site.email}
            </a>
          </div>
          <Mail className="mt-0.5 size-4 text-[color:var(--muted)]" />
        </div>
        <div className="mt-4">
          <CopyButton value={site.email} label="E-posta" />
        </div>
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              Telefon
            </p>
            <a
              href={phoneHref}
              className="mt-1 block text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            >
              {site.phone}
            </a>
          </div>
          <Phone className="mt-0.5 size-4 text-[color:var(--muted)]" />
        </div>
        <div className="mt-4">
          <CopyButton value={site.phone} label="Telefon" />
        </div>
      </div>

      <a
        href={site.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm transition hover:bg-[color:var(--tertiary)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              LinkedIn
            </p>
            <p className="mt-1 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]">
              Profilimi görüntüle
            </p>
          </div>
          <Linkedin className="mt-0.5 size-4 text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]" />
        </div>
      </a>

      <a
        href={site.links.github}
        target="_blank"
        rel="noreferrer"
        className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm transition hover:bg-[color:var(--tertiary)]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              GitHub
            </p>
            <p className="mt-1 text-sm text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]">
              Repolarımı incele
            </p>
          </div>
          <Github className="mt-0.5 size-4 text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]" />
        </div>
      </a>
    </div>
  );
}

