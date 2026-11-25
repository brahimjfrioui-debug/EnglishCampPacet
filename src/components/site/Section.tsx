import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow text-primary/70", align === "center" && "justify-center")}>
          <span aria-hidden className="h-px w-6 bg-accent" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-medium leading-[1.1] text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/** Inner-page header with title, intro and optional image. */
export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="dot-texture absolute inset-0 opacity-60" />
      <div
        className={cn(
          "container-page relative grid items-center gap-10 py-14 lg:py-20",
          image && "lg:grid-cols-[1.1fr_1fr]",
        )}
      >
        <div className="rise-in">
          <p className="eyebrow text-primary/70">
            <span aria-hidden className="h-px w-6 bg-accent" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="rise-in relative [animation-delay:150ms]">
            <div
              aria-hidden
              className="absolute -right-4 -top-4 h-full w-full rounded-4xl bg-accent/60"
            />
            <img
              src={image}
              alt={imageAlt ?? ""}
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-4xl object-cover shadow-lift"
            />
          </div>
        )}
      </div>
    </section>
  );
}

