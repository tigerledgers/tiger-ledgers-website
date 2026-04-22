import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  centered?: boolean;
}

export function SectionWrapper({
  id,
  className,
  children,
  eyebrow,
  title,
  description,
  centered = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-20 px-4 py-20 sm:px-6 md:py-28", className)}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-navy sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base text-muted-foreground sm:text-lg",
                  centered && "mx-auto max-w-2xl",
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}
