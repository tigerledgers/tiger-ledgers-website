import { SectionWrapper } from "@/components/common/SectionWrapper";
import { FOCUS_AREAS } from "@/constants/siteData";

export function FocusAreasSection() {
  return (
    <SectionWrapper
      id="focus-areas"
      eyebrow="Industries"
      title="Who We Serve"
      description="We partner with founders and operators across these key segments."
      className="bg-secondary/40"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {FOCUS_AREAS.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.id}
              className="flex items-start gap-5 rounded-2xl border border-border/60 bg-surface p-6 transition-all duration-300 hover:border-gold/40 hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy">{area.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
