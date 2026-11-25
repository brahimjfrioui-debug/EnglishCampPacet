import { useCallback, useEffect, useMemo, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { GALLERY_CATEGORIES, type GalleryItem } from "@/content/gallery";
import { cn } from "@/lib/utils";

const RATIO = {
  "4/3": { cls: "aspect-[4/3]", w: 1200, h: 900 },
  "3/4": { cls: "aspect-[3/4]", w: 900, h: 1200 },
  "16/9": { cls: "aspect-[16/9]", w: 1600, h: 900 },
} as const;

export function GalleryGrid({
  items,
  showFilters = true,
  limit,
}: {
  items: GalleryItem[];
  showFilters?: boolean;
  limit?: number;
}) {
  const [filter, setFilter] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const visible = useMemo(() => {
    const list = filter === "All" ? items : items.filter((i) => i.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [items, filter, limit]);

  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const current = index !== null ? visible[index] : null;

  return (
    <div>
      {showFilters && (
        <div role="group" aria-label="Filter photos" className="mb-8 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary/40",
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {visible.map((item, i) => {
          const r = RATIO[item.ratio ?? (i % 3 === 1 ? "3/4" : "4/3")];
          return (
          <li key={item.src + i} className="reveal break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-3xl bg-muted text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open photo: ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={r.w}
                height={r.h}
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  r.cls,
                )}
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-navy-deep/80 to-transparent p-4 pt-12 text-primary-foreground opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                <span>
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent">
                    {item.category}
                  </span>
                  <span className="mt-1 block text-sm font-semibold">{item.caption}</span>
                </span>
                <Expand className="size-4 shrink-0" />
              </span>
            </button>
          </li>
          );
        })}
      </ul>

      <DialogPrimitive.Root open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy-deep/95 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 outline-none sm:p-10">
            {current && (
              <>
                <DialogPrimitive.Title className="sr-only">{current.caption}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">{current.alt}</DialogPrimitive.Description>
                <figure className="flex max-h-full w-full max-w-5xl flex-col items-center">
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="max-h-[75vh] w-auto rounded-2xl object-contain shadow-lift animate-in fade-in-0 zoom-in-95"
                    key={current.src}
                  />
                  <figcaption className="mt-5 text-center text-primary-foreground">
                    <span className="eyebrow text-accent">{current.category}</span>
                    <span className="mt-1 block font-display text-xl">{current.caption}</span>
                    <span className="mt-1 block text-xs text-primary-foreground/60">
                      {index! + 1} / {visible.length}
                    </span>
                  </figcaption>
                </figure>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:left-6"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20 sm:right-6"
                >
                  <ChevronRight className="size-6" />
                </button>
                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}
