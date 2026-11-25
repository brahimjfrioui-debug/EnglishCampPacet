import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { NewsCard } from "@/components/site/NewsCard";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { IMAGES } from "@/content/images";
import { PROGRAMS } from "@/content/programs";
import { FACILITIES, INTRO, WHY_CHOOSE } from "@/content/school";
import { GALLERY } from "@/content/gallery";
import { NEWS_SORTED } from "@/content/news";
import { FULL_ADDRESS, SITE } from "@/config/site";
import { pageHead } from "@/lib/seo";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LanguageSchool", "EducationalOrganization", "LocalBusiness"],
  name: "English Camp",
  alternateName: "English Camp Pacet",
  url: SITE.url,
  description:
    "English learning school in Pacet, Mojokerto, East Java offering English courses for kids, teens and adults.",
  address: {
    "@type": "PostalAddress",
    ...(SITE.streetAddress ? { streetAddress: SITE.streetAddress } : {}),
    addressLocality: "Pacet",
    addressRegion: "Jawa Timur",
    ...(SITE.postalCode ? { postalCode: SITE.postalCode } : {}),
    addressCountry: "ID",
  },
  areaServed: ["Pacet", "Mojokerto", "East Java"],
  ...(SITE.email ? { email: SITE.email } : {}),
  ...(SITE.whatsappNumber ? { telephone: `+${SITE.whatsappNumber}` } : {}),
  sameAs: Object.values(SITE.social).filter(Boolean),
};

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead({
      title: "English Camp Pacet — English Course & Learning Center in Mojokerto",
      description:
        "Learn English with confidence at English Camp in Pacet, Mojokerto. Kursus bahasa Inggris for kids, teens and adults with speaking-focused, camp-style learning.",
      path: "/",
    }),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ProgramsPreview />
      <WhyChoose />
      <Facilities />
      <GalleryPreview />
      <NewsPreview />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-page relative grid items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-16">
        <div className="rise-in">
          <div className="relative isolate">
            {/* Soft highland backdrop, ending just below the action buttons */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-[100vw] -top-40 -bottom-8 -z-10"
              style={{
                maskImage: "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 88%, transparent 100%)",
              }}
            >
              <img
                src={IMAGES.heroBackdrop}
                alt=""
                width={1920}
                height={1088}
                fetchPriority="high"
                className="h-full w-full object-cover object-center opacity-90"
              />
              <div className="absolute inset-0 bg-background/40 lg:bg-background/30" />
            </div>

            <p className="eyebrow text-primary/70">
              <span aria-hidden className="h-px w-6 bg-accent" />
              English school in Pacet, Mojokerto
            </p>
            <h1 className="mt-6 text-[2.75rem] font-medium leading-[1.02] text-primary sm:text-6xl lg:text-7xl">
              Learn English.
              <br />
              <span className="marker">Build Confidence.</span>
              <br />
              <em className="font-normal italic text-primary/80">Explore Your Future.</em>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A friendly English learning school in the cool highlands of East Java — where
              children, teens and adults learn to speak English with confidence.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/programs">
                  Explore Programs <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-primary">
            {["Kids, teens & adults", "Speaking-focused", "Camp-style learning"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="bleed-right rise-in relative [animation-delay:150ms]">
          <div aria-hidden className="absolute -left-6 top-10 -z-0 hidden size-28 rounded-full bg-accent lg:block" />
          <div
            aria-hidden
            className="absolute -bottom-6 right-0 h-2/3 w-2/3 rounded-l-4xl bg-sky"
          />
          <img
            src={IMAGES.campGroupBanner}
            alt="Children and teachers of the English & Cultural Camp smiling together behind their camp banner in front of a Javanese pavilion in Pacet"
            width={1831}
            height={859}
            fetchPriority="high"
            className="relative aspect-[16/9] w-full rounded-l-4xl rounded-r-none object-cover shadow-lift"
          />
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift sm:left-8">
            <span className="grid size-10 place-items-center rounded-xl bg-primary font-display text-lg text-primary-foreground">
              EC
            </span>
            <span className="text-sm leading-tight">
              <span className="block font-semibold text-primary">Pacet, Mojokerto</span>
              <span className="text-muted-foreground">East Java, Indonesia</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:py-24">
        <h2 className="reveal text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
          {INTRO.title}
        </h2>
        <div className="reveal space-y-6">
          <p className="text-lg leading-relaxed text-primary-foreground/80">{INTRO.body}</p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
          >
            Discover our story <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProgramsPreview() {
  return (
    <section className="container-page section-y">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Featured courses"
          title="Programs for every age and level"
          description="From playful first words to confident conversations — find the right English program."
        />
        <Button asChild variant="outline" className="reveal shrink-0">
          <Link to="/programs">
            View all programs <ArrowRight />
          </Link>
        </Button>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p, i) => (
          <li key={p.slug} className="reveal">
            <Link
              to="/programs"
              hash={p.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 grid size-9 place-items-center rounded-full bg-accent font-display text-sm font-semibold text-accent-foreground">
                  0{i + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {p.level}
                </p>
                <h3 className="mt-2 text-xl font-medium text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-sky">
      <div className="container-page section-y grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why English Camp"
            title={
              <>
                Where students find their <span className="marker">voice</span> in English
              </>
            }
            description="We believe English is best learned by using it. Our lessons are active, friendly and built around real communication."
          />
          <div className="reveal mt-8">
            <WhatsAppButton label="Ask us a question" />
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {WHY_CHOOSE.map(({ icon: Icon, title, body }) => (
            <li key={title} className="reveal rounded-3xl bg-card p-7 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section className="container-page section-y">
      <SectionHeading
        eyebrow="School highlights"
        title="A calm, inspiring place to learn"
        description="Comfortable classrooms, quiet reading spaces and open-air areas surrounded by the green hills of Pacet."
        align="center"
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {FACILITIES.map((f, i) => (
          <li key={f.title} className={i === 1 ? "reveal md:translate-y-10" : "reveal"}>
            <figure className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={f.image}
                  alt={f.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-5">
                <h3 className="text-xl font-medium text-primary">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="bg-cream">
      <div className="container-page section-y">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Student activities"
            title="Learning that feels like an adventure"
            description="Conversation practice, outdoor games, presentations and camp evenings."
          />
          <Button asChild variant="outline" className="reveal shrink-0">
            <Link to="/gallery">
              Open gallery <ArrowRight />
            </Link>
          </Button>
        </div>
        <GalleryGrid items={GALLERY} showFilters={false} limit={6} />
      </div>
    </section>
  );
}

function NewsPreview() {
  const posts = NEWS_SORTED.slice(0, 3);
  return (
    <section className="bg-sky">
      <div className="container-page section-y">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="News & events" title="What's happening at English Camp" />
          <Button asChild variant="outline" className="reveal shrink-0">
            <Link to="/news">
              All news & events <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <NewsCard key={p.slug} post={p} />
          ))}
        </div>
        <p className="sr-only">English Camp is located in {FULL_ADDRESS}.</p>
      </div>
    </section>
  );
}
