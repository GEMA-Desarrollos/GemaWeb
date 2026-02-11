import { HeroSection } from "./hero-section";
import { ProductsSection } from "./products-section";
import { FeaturesSection } from "./features-section";
import { StatsSection } from "./stats-section";
import { TestimonialsSection } from "./testimonials-section";
import { CallToActionSection } from "./call-to-action-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CallToActionSection />
    </>
  );
}
