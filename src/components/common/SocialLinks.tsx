import { Linkedin } from "lucide-react";
import { SOCIALS } from "@/constants/siteData";
import { cn } from "@/lib/utils";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.86l-4.78-6.26L4.8 22H2l6.97-7.97L2 2h6.91l4.34 5.74L18.244 2Zm-1.2 18h1.69L7.04 4h-1.8l11.8 16Z" />
    </svg>
  );
}

interface SocialLinksProps {
  variant?: "light" | "dark";
  className?: string;
}

export function SocialLinks({ variant = "light", className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)} aria-label="Social media">
      {SOCIALS.map((s) => (
        <li key={s.id}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors",
              variant === "light"
                ? "bg-gold/15 text-gold hover:bg-gold hover:text-gold-foreground"
                : "bg-navy/5 text-navy hover:bg-gold hover:text-gold-foreground",
            )}
          >
            {s.id === "linkedin" ? (
              <Linkedin className="h-5 w-5" />
            ) : (
              <XIcon className="h-[18px] w-[18px]" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
