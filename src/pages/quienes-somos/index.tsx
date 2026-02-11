import { CallToActionSection } from "../home/call-to-action-section"
import { PAGE_INFO, EMPLOYEES, BRANDS } from "./about.constants"
import { HeroSection } from "./hero-section"
import { ValuesSection } from "./values-section"
import { TeamSection } from "./team-section"
import { TrustedBrandsSection } from "./trusted-brands-section"

export function QuienesSomosPage() {
  return (
    <>
      <HeroSection
        title={PAGE_INFO.hero.title}
        description={PAGE_INFO.hero.description}
        video={PAGE_INFO.hero.video}
      />
      <ValuesSection
        title={PAGE_INFO.values.title}
        description={PAGE_INFO.values.description}
      />
      <TeamSection
        title={PAGE_INFO.team.title}
        description={PAGE_INFO.team.description}
        employees={EMPLOYEES}
      />
      <TrustedBrandsSection
        title={PAGE_INFO.trustedBrands.title}
        description={PAGE_INFO.trustedBrands.description}
        brands={BRANDS}
      />
      <CallToActionSection />
    </>
  )
}
