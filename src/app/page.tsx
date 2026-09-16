import React from "react";
import { AnnouncementBar } from "@/components/marketing/AnnouncementBar";
import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { IntegrationsBar } from "@/components/marketing/IntegrationsBar";
import { Problem } from "@/components/marketing/Problem";
import { MetricsBar } from "@/components/marketing/MetricsBar";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { FeaturesGrid } from "@/components/marketing/FeaturesGrid";
import { Differentiator } from "@/components/marketing/Differentiator";
import { Guarantee } from "@/components/marketing/Guarantee";
import { PricingSection } from "@/components/marketing/PricingSection";
import { FAQ } from "@/components/marketing/FAQ";
import { CTAFinal } from "@/components/marketing/CTAFinal";
import { Footer } from "@/components/marketing/Footer";
import { StickyCTA } from "@/components/marketing/StickyCTA";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-brand-100 selection:text-brand-900 pb-16 md:pb-0">
        <AnnouncementBar />
        <Navbar />
        <Hero />
        <IntegrationsBar />
        <Problem />
        <MetricsBar />
        <HowItWorks />
        <FeaturesGrid />
        <Differentiator />
        <Guarantee />
        <PricingSection />
        <FAQ />
        <CTAFinal />
        <Footer />
      </main>
      <StickyCTA />
    </>
  );
}
