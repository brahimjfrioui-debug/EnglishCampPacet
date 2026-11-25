import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "./WhatsAppButton";

export function CtaBand({
  title = "Ready to start your English journey?",
  body = "Tell us about the learner and we'll help you find the right program at English Camp.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-page section-y">
      <div className="reveal relative overflow-hidden rounded-4xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 lg:px-16 lg:py-20">
        <svg
          aria-hidden
          viewBox="0 0 400 200"
          className="absolute -bottom-6 right-0 w-[min(560px,90%)] text-primary-foreground/[0.06]"
          fill="currentColor"
        >
          <path d="M0 200 L110 70 L170 140 L230 60 L320 160 L360 120 L400 160 L400 200 Z" />
        </svg>
        <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/90" />
        <div className="relative max-w-2xl">
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-primary-foreground/75">{body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <Link to="/admissions">
                Join English Camp <ArrowRight />
              </Link>
            </Button>
            <WhatsAppButton size="lg" variant="outline-light" label="Ask on WhatsApp" />
          </div>
        </div>
      </div>
    </section>
  );
}
