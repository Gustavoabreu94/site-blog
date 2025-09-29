import { CallToAction } from "@/src/components/call-to-action";
import { CustomerStory } from "@/src/components/customer-story";
import { FeatureSection } from "@/src/components/feature-section";
import { HeroSection } from "@/src/components/hero-section";
import { SupportSection } from "@/src/components/support-section";

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
