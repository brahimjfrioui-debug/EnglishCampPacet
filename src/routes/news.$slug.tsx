import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryBadge, NewsCard } from "@/components/site/NewsCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { formatDate, getPost, NEWS_SORTED } from "@/content/news";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — English Camp" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return pageHead({
      title: `${post.title} — English Camp Pacet`,
      description: post.excerpt,
      path: `/news/${params.slug}`,
      type: "article",
    });
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-3xl font-medium text-primary">Article not found</h1>
      <p className="mt-3 text-muted-foreground">This post may have been moved or removed.</p>
      <Button asChild className="mt-8">
        <Link to="/news">Back to News & Events</Link>
      </Button>
    </div>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  const related = NEWS_SORTED.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="bg-cream">
          <div className="container-page max-w-4xl py-12 lg:py-16">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="size-4" /> News & Events
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CategoryBadge category={post.category} />
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-tight text-primary sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
          </div>
        </header>

        <div className="container-page max-w-4xl">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={912}
            className="-mt-2 aspect-[16/9] w-full rounded-4xl object-cover shadow-lift"
          />

          {(post.eventDate || post.location) && (
            <dl className="mt-8 grid gap-4 rounded-3xl bg-sky p-6 sm:grid-cols-2">
              {post.eventDate && (
                <div className="flex gap-3">
                  <Calendar className="mt-0.5 size-5 text-primary" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Event date
                    </dt>
                    <dd className="font-semibold text-primary">{post.eventDate}</dd>
                  </div>
                </div>
              )}
              {post.location && (
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 text-primary" />
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Location
                    </dt>
                    <dd className="font-semibold text-primary">{post.location}</dd>
                  </div>
                </div>
              )}
            </dl>
          )}

          <div className="mx-auto max-w-2xl space-y-6 py-12 text-lg leading-relaxed text-foreground/85">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <div className="flex flex-wrap gap-3 pt-4">
              <WhatsAppButton
                label="Ask about this"
                message={`Hello English Camp! I have a question about: ${post.title}`}
              />
              <Button asChild variant="outline">
                <Link to="/admissions">Admissions</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-sky">
          <div className="container-page section-y">
            <h2 className="text-3xl font-medium text-primary">More from English Camp</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
