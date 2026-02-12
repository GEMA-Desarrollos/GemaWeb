import { HeroSection } from "./hero-section";
import { ProductsSection } from "./products-section";
import { FeaturesSection } from "./features-section";
import { StatsSection } from "./stats-section";
import { TestimonialsSection } from "./testimonials-section";
import { CallToActionSection } from "./call-to-action-section";
import { PAGE_DATA, LIST_PRODUCTS, LIST_STATS, LIST_FEATURES, LIST_TESTIMONIALS } from "./home.constants";

export function HomePage() {
  return (
    <>
      <HeroSection
        video={PAGE_DATA.hero.video}
        title={PAGE_DATA.hero.title}
        description={PAGE_DATA.hero.description}
      />
      <ProductsSection
        title={PAGE_DATA.products.title}
        description={PAGE_DATA.products.description}
        products={LIST_PRODUCTS}
      />
      <StatsSection stats={LIST_STATS} />
      <FeaturesSection
        title={PAGE_DATA.stats.title}
        description={PAGE_DATA.stats.description}
        features={LIST_FEATURES}
      />
      <TestimonialsSection
        title={PAGE_DATA.testimonials.title}
        description={PAGE_DATA.testimonials.description}
        testimonials={LIST_TESTIMONIALS}
      />
      <CallToActionSection
        title={PAGE_DATA.callToAction.title}
        description={PAGE_DATA.callToAction.description}
      />
    </>
  );
}
