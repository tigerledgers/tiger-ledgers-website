import { Linkedin } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { TEAM } from "@/constants/siteData";
import { Card, CardContent } from "@/components/ui/card";

export function AboutUsSection() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="Our team"
      title="About Us"
      description="A small, senior team of finance and technology leaders dedicated to your success."
      className="bg-secondary/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {TEAM.map((member) => (
          <Card
            key={member.id}
            className="border-border/60 bg-surface transition-all duration-300 hover:border-gold/40 hover:shadow-[var(--shadow-card)]"
          >
            <CardContent className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy font-display text-xl font-semibold text-gold">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-gold">
                      {member.role}
                    </p>
                  </div>
                </div>
                <a
                  href={member.linkedin}
                  aria-label={`${member.name} on LinkedIn`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
