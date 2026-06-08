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
        <ReviewSection />
        <CollegesLogoWheel />
        <FAQSection />
        <SocialsSlider />
      </div>
      <Footer />
    </main>
  );
}
