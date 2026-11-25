import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { IMAGES } from "@/content/images";
import { DIFFERENTIATORS, FACILITIES, HISTORY, MISSION, PHILOSOPHY, VISION } from "@/content/school";

const [classroom, reading] = FACILITIES as [(typeof FACILITIES)[number], (typeof FACILITIES)[number]];
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About English Camp — English Learning Center in Pacet, Mojokerto",
      description:
        "Get to know English Camp: our story, vision, mission and active, confidence-first approach to learning English in Pacet, Mojokerto.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={
          <>
            Learning English, <span className="marker">together</span>
          </>
        }
        description="English Camp is an English learning school in Pacet, Mojokerto — a welcoming place where learners grow in language, confidence and character."
        image={IMAGES.campGroupWide}
        imageAlt="English Camp learning space with a garden terrace and misty mountains"
      />

      <section className="container-page section-y grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <SectionHeading eyebrow="Our story" title="How English Camp began" />
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted-foreground">
          {HISTORY.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-page section-y grid gap-6 lg:grid-cols-2">
          <div className="reveal rounded-4xl bg-primary-foreground/[0.06] p-8 sm:p-10">
            <p className="eyebrow text-accent">Our vision</p>
            <p className="mt-5 font-display text-2xl leading-snug sm:text-3xl">{VISION}</p>
          </div>
          <div className="reveal rounded-4xl bg-accent p-8 text-accent-foreground sm:p-10">
            <p className="eyebrow">Our mission</p>
            <ul className="mt-6 space-y-4">
              {MISSION.map((m) => (
                <li key={m} className="flex gap-3 text-lg">
                  <Check className="mt-1 size-5 shrink-0" strokeWidth={2.5} />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Educational philosophy"
          title="How we teach"
          description="Three simple ideas guide every class at English Camp."
          align="center"
        />
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {PHILOSOPHY.map((p, i) => (
            <li key={p.title} className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft">
              <span className="font-display text-5xl font-medium text-accent">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-medium text-primary">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-sky">
        <div className="container-page section-y grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal grid grid-cols-2 gap-4">
            <img
              src={classroom.image}
              alt={classroom.imageAlt}
              loading="lazy"
              width={1200}
              height={912}
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <img
              src={reading.image}
              alt={reading.imageAlt}
              loading="lazy"
              width={1200}
              height={912}
              className="mt-12 aspect-[3/4] w-full rounded-3xl object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Learning environment"
              title="Fresh air, friendly faces, focused minds"
              description="Located in the cool highlands of Pacet, our school offers a calm atmosphere away from the noise of the city. Small groups, bright classrooms and outdoor spaces make learning comfortable and enjoyable."
            />
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading eyebrow="What makes us different" title="The English Camp approach" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="reveal">
              <span className="grid size-14 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
