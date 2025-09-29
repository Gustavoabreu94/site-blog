import { CallToAction } from "@/components/call-to-action";
import { CustomerStory } from "@/components/customer-story";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SupportSection } from "@/components/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col gap-10 md:gap-20">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStory />
        <CallToAction />
      </article>
    </>
  );
}
