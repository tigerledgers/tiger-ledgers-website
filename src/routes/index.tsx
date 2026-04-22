import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FocusAreasSection } from "@/components/sections/FocusAreasSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Tiger Ledgers — Strategic Financial Leadership for Growing Businesses",
      },
      {
        name: "description",
        content:
          "Accounting, payroll, tax filing, fractional CFO, and AI-enabled finance operations for small businesses, eCommerce, freelancers, and SaaS startups.",
      },
      {
        property: "og:title",
        content: "Tiger Ledgers — Strategic Financial Leadership",
      },
      {
        property: "og:description",
        content:
          "A modern finance partner for growing businesses — accounting, tax, payroll, and fractional CFO services.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FocusAreasSection />
        <PartnershipsSection />
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
