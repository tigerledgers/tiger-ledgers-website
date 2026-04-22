import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FocusAreasSection } from "@/components/sections/FocusAreasSection";
import { PartnershipsSection } from "@/components/sections/PartnershipsSection";
import { AboutUsSection } from "@/components/sections/AboutUsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
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
