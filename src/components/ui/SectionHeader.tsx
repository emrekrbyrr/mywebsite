import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="text-xs font-medium tracking-[0.24em] text-[color:var(--muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[color:var(--muted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

