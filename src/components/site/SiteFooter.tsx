import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Clock, Phone } from "lucide-react";
import { FULL_ADDRESS, NAV_LINKS, SITE } from "@/config/site";
import { PROGRAMS } from "@/content/programs";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:py-20">
        <div className="space-y-5">
          <Logo inverted />
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            An English learning school in Pacet, Mojokerto — helping learners speak with
            confidence and explore their future.
          </p>
          <SocialLinks inverted />
        </div>

        <div>
          <h2 className="eyebrow text-accent">Explore</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/75 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-accent">Programs</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {PROGRAMS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/programs"
                  hash={p.slug}
                  className="text-primary-foreground/75 transition-colors hover:text-accent"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-accent">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <address className="not-italic">{FULL_ADDRESS}<br />({SITE.landmark})</address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`tel:+${SITE.whatsappNumber}`} className="hover:text-accent">Telp/WA {SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              {SITE.email ? (
                <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                  {SITE.email}
                </a>
              ) : (
                <span>[Email address to be added]</span>
              )}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{SITE.openingHours || "[Opening hours to be added]"}</span>
            </li>
          </ul>
          <WhatsAppButton className="mt-6" />
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} English Camp Pacet. All rights reserved.</p>
          <p>Kursus Bahasa Inggris Pacet · Mojokerto, Jawa Timur</p>
        </div>
      </div>
    </footer>
  );
}
