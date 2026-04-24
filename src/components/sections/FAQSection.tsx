"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/components/seo/FAQSchema";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionWrapper } from "@/components/common/SectionWrapper";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper
      id="faq"
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our services, pricing, and how we work with clients."
    >
      <div className="mx-auto max-w-3xl space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-border/60 bg-surface transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span className="pr-4 text-lg font-medium text-navy">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 flex-shrink-0 text-gold transition-transform duration-200",
                  openIndex === index && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200",
                openIndex === index ? "max-h-96" : "max-h-0",
              )}
            >
              <p className="px-6 pb-6 text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
