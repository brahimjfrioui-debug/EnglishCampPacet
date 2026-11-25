import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-background",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:bg-primary/5 hover:text-primary"
                  activeProps={{ className: "bg-secondary !text-primary font-semibold" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" className="hidden sm:inline-flex">
            <Link to="/admissions">
              Join English Camp
              <ArrowRight />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Open menu">
                <Menu className="!size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[86%] flex-col gap-0 p-0 sm:max-w-sm">
              <SheetTitle className="sr-only">Site menu</SheetTitle>
              <div className="border-b border-border px-6 py-5">
                <Logo />
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setOpen(false)}
                        activeOptions={{ exact: link.to === "/" }}
                        className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-lg text-foreground transition-colors hover:bg-muted"
                        activeProps={{ className: "bg-secondary text-primary" }}
                      >
                        {link.label}
                        <ArrowRight className="size-4 opacity-40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex flex-col gap-3 border-t border-border p-6">
                <Button asChild variant="accent" size="lg">
                  <Link to="/admissions" onClick={() => setOpen(false)}>
                    Join English Camp
                  </Link>
                </Button>
                <WhatsAppButton size="lg" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
