import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-[color:var(--muted)]">
          Modern, sade ve performans odaklı.
        </p>
      </div>
    </footer>
  );
}

