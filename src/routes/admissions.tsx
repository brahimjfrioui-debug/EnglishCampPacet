import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { z } from "zod";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHeader, SectionHeading } from "@/components/site/Section";
import { InquiryForm } from "@/components/site/InquiryForm";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { ADMISSION_STEPS, FAQS, REQUIRED_DOCUMENTS } from "@/content/school";
import { PROGRAM_OPTIONS } from "@/content/programs";
import { pageHead } from "@/lib/seo";

const searchSchema = z.object({ program: z.string().optional() });

export const Route = createFileRoute("/admissions")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    ...pageHead({
      title: "Admissions & Registration — English Camp Pacet, Mojokerto",
      description:
        "How to join English Camp in Pacet, Mojokerto: registration steps, required documents, FAQs and a quick registration inquiry form.",
      path: "/admissions",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  const { program } = Route.useSearch();
  const defaultProgram = program && PROGRAM_OPTIONS.includes(program) ? program : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title={
          <>
            Join <span className="marker">English Camp</span>
          </>
        }
        description="Joining is simple. Send an inquiry, talk with our team, and we'll help the student start in the right program."
      >
        <WhatsAppButton size="lg" label="Ask on WhatsApp" />
      </PageHeader>

      <section className="container-page section-y">
        <SectionHeading eyebrow="How to join" title="Four simple steps" align="center" />
        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADMISSION_STEPS.map(({ icon: Icon, title, body }, i) => (
            <li key={title} className="reveal relative rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="absolute right-6 top-6 font-display text-4xl font-medium text-accent">
                {i + 1}
              </span>
              <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="register" className="scroll-mt-24 bg-sky">
        <div className="container-page section-y grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Registration inquiry"
              title="Tell us about the student"
              description="Fill in the form and send it to our team on WhatsApp. We'll contact you to answer questions and recommend a program."
            />
            <div className="reveal rounded-3xl bg-card p-7 shadow-soft">
              <h3 className="flex items-center gap-2 text-xl font-medium text-primary">
                <FileText className="size-5 text-accent" /> Required documents
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {REQUIRED_DOCUMENTS.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal">
            <InquiryForm kind="registration" defaultProgram={defaultProgram} />
          </div>
        </div>
      </section>

      <section className="container-page section-y grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Can't find your answer? Message us on WhatsApp — we're happy to help."
        />
        <Accordion type="single" collapsible className="reveal">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-medium text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
