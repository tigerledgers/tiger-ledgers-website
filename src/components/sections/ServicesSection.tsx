import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SERVICES } from "@/constants/siteData";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      eyebrow="What we do"
      title="Our Services"
      description="A complete finance function — accounting, payroll, tax, systems, and CFO leadership — delivered as one cohesive service."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.id}
              className="group border-border/60 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[var(--shadow-card)]"
            >
              <CardContent className="p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
