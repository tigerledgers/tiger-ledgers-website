"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/common/NavLink";
import { CTAButton } from "@/components/common/CTAButton";
import { NAV_ITEMS, SITE, CTA_LABEL, CTA_HREF } from "@/constants/siteData";
const logoSrc = "/logo.png";
import { cn } from "@/lib/utils";

interface HeaderProps {
  /** Force the solid (post-hero) appearance — use on routes without a hero. */
  solid?: boolean;
}

function isInternalRoute(href: string) {
  return href.startsWith("/");
}

export function Header({ solid = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) {
      return;
    }
    const hero = document.getElementById("hero");
    if (!hero) {
      setScrolled(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [solid]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoSrc}
            alt={`${SITE.name} logo`}
            width={300}
            height={128}
            priority
            style={{ height: "auto" }}
            className="h-8 w-auto object-contain sm:h-10"
          />
          <span
            className={cn(
              "font-display text-base font-semibold tracking-tight transition-colors sm:text-xl",
              scrolled ? "text-navy" : "text-white",
            )}
          >
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) =>
            isInternalRoute(item.href) ? (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
                  scrolled
                    ? "text-navy/80 hover:text-navy"
                    : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:text-gold",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <NavLink
                key={item.id}
                href={solid ? `/${item.href}` : item.href}
                inverted={!scrolled}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <CTAButton href={solid ? `/${CTA_HREF}` : CTA_HREF}>{CTA_LABEL}</CTAButton>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className={cn("h-5 w-5", scrolled ? "text-navy" : "text-white")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetTitle className="font-display text-xl text-navy">{SITE.name}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-5" aria-label="Mobile">
                {NAV_ITEMS.map((item) =>
                  isInternalRoute(item.href) ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-navy hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.id}
                      href={solid ? `/${item.href}` : item.href}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-navy hover:text-gold"
                    >
                      {item.label}
                    </a>
                  ),
                )}
                <CTAButton
                  href={solid ? `/${CTA_HREF}` : CTA_HREF}
                  onClick={() => setOpen(false)}
                  className="mt-2 w-full"
                >
                  {CTA_LABEL}
                </CTAButton>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
