import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";

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
      </main>
    </>
  );
}
