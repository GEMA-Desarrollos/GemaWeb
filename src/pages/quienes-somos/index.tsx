import { CallToActionSection } from "../home/call-to-action-section"
import { PAGE_DATA, LIST_EMPLOYEES, /* BRANDS */ } from "./about.constants"
import { HeroSection } from "./hero-section"
import { ValuesSection } from "./values-section"
import { TeamSection } from "./team-section"
import { WhyChooseUsSection } from "./why-choose-us-section"
// import { TrustedBrandsSection } from "./trusted-brands-section"

export function QuienesSomosPage() {
  return (
    <>
      <HeroSection
        title={PAGE_DATA.hero.title}
        description={PAGE_DATA.hero.description}
        video={PAGE_DATA.hero.video}
      />
      <ValuesSection
        title={PAGE_DATA.ourValues.title}
        description={PAGE_DATA.ourValues.description}
      />
      <TeamSection
        title={PAGE_DATA.team.title}
        description={PAGE_DATA.team.description}
        employees={LIST_EMPLOYEES}
      />
      <WhyChooseUsSection
        title={PAGE_DATA.whyChooseUs.title}
        description={PAGE_DATA.whyChooseUs.description}
      />
      {/* <TrustedBrandsSection
        title={PAGE_DATA.trustedBrands.title}
        description={PAGE_DATA.trustedBrands.description}
        brands={BRANDS}
      /> */}
      <CallToActionSection
        title={PAGE_DATA.callToAction.title}
        description={PAGE_DATA.callToAction.description}
      />
    </>
  )
}
