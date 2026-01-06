import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-zinc-500">
          Modern, sade ve performans odaklı.
        </p>
      </div>
    </footer>
  );
}

