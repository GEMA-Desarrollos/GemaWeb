import { HeroSection } from "./hero-section";
import { ProductsSection } from "./products-section";
import { FeaturesSection } from "./features-section";
import { StatsSection } from "./stats-section";
import { TestimonialsSection } from "./testimonials-section";
import { ContactSection } from "./contact-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
