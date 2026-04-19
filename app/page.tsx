import { SiteHeader } from "@/components/layout/SiteHeader";
import { ConceptSection } from "@/components/sections/ConceptSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { NameColorGeneratorSection } from "@/components/sections/NameColorGeneratorSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { StrengthSection } from "@/components/sections/StrengthSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1 bg-white text-zinc-900">
        <HeroSection />
        <NameColorGeneratorSection />
        <ConceptSection />
        <ServicesSection />
        <StrengthSection />
        <MissionVisionSection />
        <StatsSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
