import type { Metadata } from "next";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { FAQSection } from "@/components/sections/FAQSection";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FocusAreasSection } from "@/components/sections/FocusAreasSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tigerledgers.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FAQSchema />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FocusAreasSection />
        <PartnershipsSection />
        <AboutUsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
