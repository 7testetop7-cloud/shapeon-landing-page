import { StickyBar } from "@/components/landing/StickyBar";
import { HeroSection } from "@/components/landing/HeroSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { TransformationSection } from "@/components/landing/TransformationSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { AppShowcaseSection } from "@/components/landing/AppShowcaseSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StickyBar />
      <HeroSection />
      <BenefitsSection />
      <TransformationSection />
      <SocialProofSection />
      <PillarsSection />
      <AppShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
