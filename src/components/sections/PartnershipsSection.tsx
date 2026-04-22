import { SectionWrapper } from "@/components/common/SectionWrapper";
import { PARTNERSHIPS } from "@/constants/siteData";
import { Card, CardContent } from "@/components/ui/card";

export function PartnershipsSection() {
  return (
    <SectionWrapper
      id="partnerships"
      eyebrow="Collaborate"
      title="Partnership Services"
      description="Trusted collaboration models for firms and platforms that need a finance back-office."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PARTNERSHIPS.map((p) => {
          const Icon = p.icon;
          return (
            <Card
              key={p.id}
              className="border-border/60 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]"
            >
              <CardContent className="p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
