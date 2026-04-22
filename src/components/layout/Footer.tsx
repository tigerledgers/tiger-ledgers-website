"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/constants/siteData";
import { SocialLinks } from "@/components/common/SocialLinks";
const logoSrc = "/logo.png";

function isInternalRoute(href: string) {
  return href.startsWith("/");
}

export function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex max-w-xs flex-col items-start gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={logoSrc}
                alt={`${SITE.name} logo`}
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <span className="font-display text-xl font-semibold">{SITE.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-navy-foreground/70">
              Strategic financial leadership and full-service accounting for growing businesses.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
            {NAV_ITEMS.map((item) => {
              const className = "text-sm text-navy-foreground/75 transition-colors hover:text-gold";
              if (isInternalRoute(item.href)) {
                return (
                  <Link key={item.id} href={item.href} className={className}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <a key={item.id} href={onHome ? item.href : `/${item.href}`} className={className}>
                  {item.label}
                </a>
              );
            })}
          </nav>
          <SocialLinks variant="light" />
        </div>
        <div className="mt-10 border-t border-navy-foreground/10 pt-6 text-center text-xs text-navy-foreground/60">
          © 2025 {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
