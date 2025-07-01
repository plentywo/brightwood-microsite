import React from "react";
import { AudienceDetailsSection } from "@/components/landing/AudienceDetailsSection/AudienceDetailsSection";
import { AudienceOverviewSection } from "@/components/landing/AudienceOverviewSection/AudienceOverviewSection";
import { CallToActionSection } from "@/components/landing/CallToActionSection/CallToActionSection";
import { ComponentNodeSection } from "@/components/landing/ComponentNodeSection/ComponentNodeSection";
import { ContentSection } from "@/components/landing/ContentSection/ContentSection";
import { ContentWrapperSection } from "@/components/landing/ContentWrapperSection/ContentWrapperSection";
import { FooterSection } from "@/components/landing/FooterSection/FooterSection";
import { FrequentlyAskedQuestionsSection } from "@/components/landing/FrequentlyAskedQuestionsSection/FrequentlyAskedQuestionsSection";
import { HeroSection } from "@/components/landing/HeroSection/HeroSection";
import { MainContentSection } from "@/components/landing/MainContentSection/MainContentSection";
import { NavigationSection } from "@/components/landing/NavigationSection/NavigationSection";
import { TargetAudienceSection } from "@/components/landing/TargetAudienceSection/TargetAudienceSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#1b1b1b]">
      <NavigationSection />
      <HeroSection />
      <AudienceOverviewSection />
      <AudienceDetailsSection />
      <MainContentSection />
      <ContentWrapperSection />
      <ContentSection />
      <ComponentNodeSection />
      <TargetAudienceSection />
      <FrequentlyAskedQuestionsSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
} 