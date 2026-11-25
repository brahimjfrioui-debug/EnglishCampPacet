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
        <svg viewBox="0 0 32 32" className="size-7" fill="none">
          <path
            fillRule="evenodd"
            fill="currentColor"
            d="M7 5h18a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H15l-6 5v-5H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4zM16 8l7.500 13h-4.200l-1.100-2.200h-4.400L12.700 21H8.500zM16 13.200l-1.300 3h2.600z"
          />
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
