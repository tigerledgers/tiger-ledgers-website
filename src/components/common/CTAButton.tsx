import * as React from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "gold" | "outline";
}

export function CTAButton({
  className,
  variant = "gold",
  children,
  ...props
}: CTAButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        variant === "gold" &&
          "bg-gold text-gold-foreground shadow-md hover:-translate-y-0.5 hover:shadow-lg",
        variant === "outline" &&
          "border border-gold/60 bg-transparent text-gold hover:bg-gold hover:text-gold-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
}
