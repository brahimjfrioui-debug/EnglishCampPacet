import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SocialLinks } from "@/components/site/SocialLinks";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { FULL_ADDRESS, SITE } from "@/config/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact English Camp — Pacet, Mojokerto, East Java",
      description:
        "Contact English Camp in Pacet, Mojokerto via WhatsApp or our contact form. Find our location and ask about English courses.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title={
          <>
            We'd love to <span className="marker">hear from you</span>
          </>
        }
        description="Questions about programs, schedules or visiting the school? The fastest way to reach us is WhatsApp."
      >
        <WhatsAppButton size="lg" />
      </PageHeader>

      <section className="container-page section-y grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <ContactCard icon={<WhatsAppIcon className="size-5" />} title="WhatsApp">
            <span>{SITE.phoneDisplay}</span>
          </ContactCard>
          <ContactCard icon={<MapPin className="size-5" />} title="Address">
            <address className="not-italic">{FULL_ADDRESS}</address>
            <p className="mt-1 text-sm">({SITE.landmark})</p>
          </ContactCard>
          <ContactCard icon={<Mail className="size-5" />} title="Email">
            {SITE.email ? (
              <a href={`mailto:${SITE.email}`} className="hover:underline">
                {SITE.email}
              </a>
            ) : (
              <span>Reach us on WhatsApp — we reply quickly.</span>
            )}
          </ContactCard>
          <ContactCard icon={<Clock className="size-5" />} title="Opening hours">
            {SITE.openingHours}
          </ContactCard>
          <div className="reveal rounded-3xl border border-border bg-card p-6">
            <p className="font-semibold text-primary">Follow us</p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="reveal">
          <h2 className="mb-6 text-3xl font-medium text-primary">Send us a message</h2>
          <InquiryForm kind="contact" />
        </div>
      </section>

      <section className="container-page pb-20 lg:pb-28">
        <div className="reveal overflow-hidden rounded-4xl border border-border shadow-soft">
          <iframe
            title="Map showing English Camp, Jl. Raya Pacet No.339, Petak"
            src={SITE.mapEmbedUrl}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Jl. Raya Pacet No.339, Petak — next to TK Dharma Wanita Petak.
        </p>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="reveal flex gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
        {icon}
      </span>
      <div className="min-w-0 text-muted-foreground">
        <p className="font-semibold text-primary">{title}</p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
