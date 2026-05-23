import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { VideoSection } from "@/components/sections/VideoSection";
import { PersonaSection } from "@/components/sections/PersonaSection";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoSection />
        <PersonaSection />
        <HowItWorks />
      </main>
    </>
  );
}
