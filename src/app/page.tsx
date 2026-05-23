import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoSection />
        <PersonaSection />
        <HowItWorks />
        <FeaturesSection />
        <ComparisonTable />
        <TestimonialsSection />
        <PricingSection />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
