import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PROGRAMS } from "@/content/programs";
import { CAMP, CAMP_GOALS, CHARACTER_VALUES, INCLUDED, RUNDOWN, SPECIAL_FEATURES } from "@/content/camp";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/programs")({
  head: () =>
    pageHead({
      title: "English Programs & Courses — English Camp Pacet, Mojokerto",
      description:
        "Explore English programs at English Camp Pacet: English for Kids, English for Teens, Conversation Club and English Camp Immersion in Mojokerto.",
      path: "/programs",
    }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Programs & courses"
        title={
          <>
            Find the right <span className="marker">program</span>
          </>
        }
        description="Every program focuses on real communication — so learners don't just know English, they use it."
      >
        <p className="font-semibold text-primary">
          {CAMP.name} · {CAMP.duration}
        </p>
      </PageHeader>

      <nav aria-label="Programs" className="sticky top-[4.5rem] z-30 border-b border-border bg-background/90 backdrop-blur-md">
        <ul className="container-page flex gap-2 overflow-x-auto py-3">
          {PROGRAMS.map((p) => (
            <li key={p.slug} className="shrink-0">
              <a
                href={`#${p.slug}`}
                className="block rounded-full border border-border px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page space-y-24 py-16 lg:space-y-32 lg:py-24">
        {PROGRAMS.map((p, i) => (
          <article
            key={p.slug}
            id={p.slug}
            className="grid scroll-mt-40 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16"
          >
            <div className={cn("reveal lg:sticky lg:top-40", i % 2 === 1 && "lg:order-2")}>
              <div className="relative">
                <div
                  aria-hidden
                  className={cn(
                    "absolute -bottom-4 h-full w-full rounded-4xl",
                    i % 2 === 0 ? "-left-4 bg-accent/60" : "-right-4 bg-sky",
                  )}
                />
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading={i === 0 ? "eager" : "lazy"}
                  width={1200}
                  height={912}
                  className="relative aspect-[4/3] w-full rounded-4xl object-cover shadow-lift"
                />
              </div>
            </div>

            <div className="reveal">
              <p className="eyebrow text-primary/60">Program 0{i + 1}</p>
              <h2 className="mt-3 text-4xl font-medium text-primary sm:text-5xl">{p.title}</h2>
              <p className="mt-2 font-display text-xl italic text-primary/70">{p.tagline}</p>

              <dl className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
                  <Users className="size-4 text-primary" />
                  <dt className="sr-only">Who it's for</dt>
                  <dd className="font-semibold text-primary">{p.audience}</dd>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm">
                  <Target className="size-4 text-primary" />
                  <dt className="sr-only">Level</dt>
                  <dd className="font-semibold text-primary">{p.level}</dd>
                </div>
              </dl>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-border bg-card p-6">
                  <h3 className="flex items-center gap-2 text-lg font-medium text-primary">
                    <Target className="size-5 text-accent" /> Learning objectives
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    {p.objectives.map((o) => (
                      <li key={o} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
                  <h3 className="flex items-center gap-2 text-lg font-medium">
                    <Sparkles className="size-5 text-accent" /> Course highlights
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton
                  label="Ask about this program"
                  message={`Hello English Camp! I would like more information about the ${p.title} program.`}
                />
                <Button asChild variant="outline">
                  <Link to="/admissions" search={{ program: "English Camp — 2 Days 1 Night" }}>
                    Register interest
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section id="rundown" className="bg-secondary section-y">
        <div className="container-page">
          <p className="eyebrow text-primary/60">{CAMP.duration}</p>
          <h2 className="mt-3 text-4xl font-medium text-primary sm:text-5xl">Program rundown</h2>
          <p className="mt-2 font-display text-xl italic text-primary/70">"{CAMP.motto}"</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {RUNDOWN.map((d) => (
              <div key={d.day} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-2xl font-medium text-primary">{d.day}</h3>
                <ol className="mt-4 divide-y divide-border">
                  {d.items.map((it) => (
                    <li key={d.day + it.time + it.title} className="grid grid-cols-[7.5rem_1fr] gap-3 py-2.5 text-sm">
                      <span className="font-semibold tabular-nums text-primary">{it.time}</span>
                      <span>
                        <span className="font-semibold text-primary">{it.title}</span>
                        {it.detail && <span className="block text-muted-foreground">{it.detail}</span>}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { title: "Our goals", list: CAMP_GOALS },
              { title: "What's included", list: INCLUDED },
              { title: "Special features", list: SPECIAL_FEATURES },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="text-lg font-medium text-primary">{b.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  {b.list.map((x) => (
                    <li key={x} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="mr-2 self-center font-semibold text-primary">Character building:</span>
            {CHARACTER_VALUES.map((v) => (
              <span key={v} className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which program fits?"
        body="Tell us the learner's age and goals — we'll recommend the best place to start."
      />
    </>
  );
}
