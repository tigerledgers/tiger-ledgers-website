import * as React from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  inverted?: boolean;
}

export function NavLink({ className, inverted, children, ...props }: NavLinkProps) {
  return (
    <a
      {...props}
      className={cn(
        "relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full",
        inverted
          ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] hover:text-gold"
          : "text-navy/80 hover:text-navy",
        className,
      )}
    >
      {children}
    </a>
  );
}
