import { CustomerStory } from "./customer-story";
import { FeatureSection } from "./feature-section";
import { HeroSection } from "./hero-section";
import { SupportSection } from "./support-section";

export const LadingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStory />
    </article>
  );
};
