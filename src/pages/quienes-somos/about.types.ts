export interface Employee {
  id: number
  image?: string
  name?: string
  position?: string
  email?: string
  description?: string
}

export interface Brand {
  id: number
  Icon: React.ComponentType<{ className?: string }>
  name: string
}

export interface PageInfo {
  hero: {
    title: string
    description: string
    video: string
  }
  ourValues: {
    title: string
    description: string
  }
  team: {
    title: string
    description: string
  }
  // trustedBrands: {
  //   title: string
  //   description: string
  // }
  whyChooseUs: {
    title: string
    description: string
  }
  callToAction: {
    title: string
    description: string
  }
}

export interface HeroSectionProps {
  title: string
  description: string
  video: string
}

export interface ValuesSectionProps {
  title: string
  description: string
}

export interface TeamSectionProps {
  title: string
  description: string
  employees: Employee[]
}

export interface EmployeeCardProps {
  employee: Employee
  index: number
}

export interface WhyChooseUsSectionProps {
  title: string
  description: string
}

export interface TrustedBrandsSectionProps {
  title: string
  description: string
  brands: Brand[]
}
