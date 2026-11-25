import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import { formatDate, type NewsPost } from "@/content/news";
import { cn } from "@/lib/utils";

export function CategoryBadge({ category }: { category: NewsPost["category"] }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em]",
        category === "Event" && "bg-accent text-accent-foreground",
        category === "Announcement" && "bg-primary text-primary-foreground",
        category === "Activity" && "bg-secondary text-secondary-foreground",
      )}
    >
      {category}
    </span>
  );
}

export function NewsCard({ post, featured = false }: { post: NewsPost; featured?: boolean }) {
  return (
    <article className="reveal group h-full">
      <Link
        to="/news/$slug"
        params={{ slug: post.slug }}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
          featured && "lg:flex-row",
        )}
      >
        <div className={cn("relative overflow-hidden", featured && "lg:w-3/5")}>
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            width={1200}
            height={912}
            className={cn(
              "aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105",
              featured && "lg:h-full lg:aspect-auto",
            )}
          />
          <div className="absolute left-4 top-4">
            <CategoryBadge category={post.category} />
          </div>
        </div>
        <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center lg:p-10")}>
          <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Calendar className="size-3.5" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <h3
            className={cn(
              "mt-3 font-display font-medium leading-snug text-primary",
              featured ? "text-2xl lg:text-4xl" : "text-xl",
            )}
          >
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-primary">
            Read more
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
