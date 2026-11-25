import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { NewsCard } from "@/components/site/NewsCard";
import { CtaBand } from "@/components/site/CtaBand";
import { NEWS_SORTED, type NewsCategory } from "@/content/news";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/news/")({
  head: () =>
    pageHead({
      title: "News & Events — English Camp Pacet, Mojokerto",
      description:
        "School announcements, upcoming events and learning activities from English Camp, the English learning center in Pacet, Mojokerto.",
      path: "/news",
    }),
  component: NewsPage,
});

const FILTERS: Array<"All" | NewsCategory> = ["All", "Announcement", "Event", "Activity"];

function NewsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const posts = filter === "All" ? NEWS_SORTED : NEWS_SORTED.filter((p) => p.category === filter);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHeader
        eyebrow="News & events"
        title={
          <>
            What's new at <span className="marker">English Camp</span>
          </>
        }
        description="Announcements, upcoming events and stories from our classrooms."
      />
      <section className="container-page section-y">
        <div role="group" aria-label="Filter posts" className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-primary hover:border-primary/40",
              )}
            >
              {f === "All" ? "All" : `${f}s`}
            </button>
          ))}
        </div>

        {featured ? (
          <div className="space-y-6">
            <NewsCard post={featured} featured />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-muted-foreground">No posts in this category yet.</p>
        )}
      </section>
      <CtaBand />
    </>
  );
}
