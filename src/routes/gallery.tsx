import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/Section";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { GALLERY } from "@/content/gallery";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: "Activities & Gallery — English Camp Pacet",
      description:
        "See student activities at English Camp Pacet: English conversation practice, outdoor games, group learning, events and our learning spaces in Mojokerto.",
      path: "/gallery",
    }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Activities & gallery"
        title={
          <>
            Moments of <span className="marker">learning</span>
          </>
        }
        description="Conversation practice, outdoor games, group projects, presentations and camp evenings — a look at life at English Camp."
      />
      <section className="container-page section-y">
        <GalleryGrid items={GALLERY} />
      </section>
      <CtaBand />
    </>
  );
}
