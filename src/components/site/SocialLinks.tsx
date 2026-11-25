import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const ITEMS = [
  { key: "instagram", label: "Instagram", icon: Instagram },
  { key: "facebook", label: "Facebook", icon: Facebook },
  { key: "tiktok", label: "TikTok", icon: Music2 },
  { key: "youtube", label: "YouTube", icon: Youtube },
] as const;

/** Shows each social network; links activate once a URL is added in src/config/site.ts. */
export function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  return (
    <ul className="flex items-center gap-2">
      {ITEMS.map(({ key, label, icon: Icon }) => {
        const href = SITE.social[key];
        const cls = cn(
          "grid size-10 place-items-center rounded-full border transition-colors",
          inverted
            ? "border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10"
            : "border-border text-primary hover:bg-secondary",
          !href && "opacity-60",
        );
        return (
          <li key={key}>
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={cls}>
                <Icon className="size-4" />
              </a>
            ) : (
              <span className={cls} title={`${label} — link coming soon`} aria-label={`${label} (coming soon)`}>
                <Icon className="size-4" />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
