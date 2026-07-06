"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SubjectLabs } from "@/components/SubjectLabs";
import { ReviewSection } from "@/components/ReviewSection";
import { AIFeatureShowcase } from "@/components/AIFeatureShowcase";
import { PracticeQuizSection } from "@/components/PracticeQuizSection";
import { Footer } from "@/components/Footer";
import { HowItWorks } from "@/components/HowItWorks";
import { AppShowcase } from "@/components/AppShowcase";
import { APClassesPills } from "@/components/APClassesPills";
import { SocialsSlider } from "@/components/SocialsSlider";
import { ScrollVideoSection } from "@/components/ScrollVideoSection";
import { FAQSection } from "@/components/FAQSection";
import { CollegesLogoWheel } from "@/components/CollegesLogoWheel";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-deep-navy selection:bg-medical-teal selection:text-white">
      <Navbar />
      <div className="flex flex-col">
        <HeroSection />
        <div className="relative z-20 -mt-20">
          <APClassesPills />
        </div>
        <ScrollVideoSection />
        <HowItWorks />
        <AppShowcase />
        <AIFeatureShowcase />
        <PracticeQuizSection />
        <SubjectLabs />
        <div className="bg-white text-black relative z-10 overflow-hidden pt-20 pb-16 [clip-path:polygon(0_60px,100%_0,100%_100%,0_100%)]">

          {/* Clean black dot-matrix patterns in the background (enhanced visibility) */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.09] mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjEuNSIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] bg-repeat" />
          
          {/* Faint grid lines overlay (enhanced visibility) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

          <div className="relative z-10">
            <ReviewSection />
            <CollegesLogoWheel />
          </div>
        </div>
        <FAQSection />
        <SocialsSlider />
      </div>
      <Footer />
    </main>
  );
}
