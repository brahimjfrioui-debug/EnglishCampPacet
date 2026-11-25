import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="English Camp — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className="relative grid size-10 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-soft transition-transform duration-300 group-hover:-rotate-6"
      >
        <svg viewBox="0 0 32 32" className="size-6" fill="none">
          <path
            d="M4 24 L13 10 L18 17 L21 13 L28 24 Z"
            fill="currentColor"
            opacity="0.92"
          />
          <circle cx="23" cy="8" r="3" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            inverted ? "text-primary-foreground" : "text-primary",
          )}
        >
          English Camp
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Pacet · Mojokerto
        </span>
      </span>
    </Link>
  );
}
