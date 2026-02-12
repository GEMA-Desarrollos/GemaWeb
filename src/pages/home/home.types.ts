import type { LucideIcon } from "lucide-react"

export interface Product {
  icon: string
  title: string
  description: string
  features: readonly string[]
}

export interface Stat {
  value?: string
  label?: string
  icon?: LucideIcon
}

export interface ProductCardProps {
  icon: string
  title: string
  description: string
  features: readonly string[]
}

export interface FeatureCardProps {
  letter: string
  title: string
  description: string
  animation?: object // El JSON de Lottie
}

export interface Testimonial {
  name: string
  role: string
  company: string
  comment: string
  rating: number
}

export interface TestimonialCardProps {
  name: string
  role: string
  company: string
  comment: string
  rating: number
}

// Props de Secciones
export interface HeroSectionProps {
  video: string
  title: string
  description: string
}

export interface ProductsSectionProps {
  title: string
  description: string
  products: readonly Product[]
}

export interface StatsSectionProps {
  stats: readonly Stat[]
}

export interface FeaturesSectionProps {
  title: string
  description: string
  features: readonly FeatureCardProps[]
}

export interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: readonly Testimonial[]
}

export interface CallToActionSectionProps {
  title: string
  description: string
}

// Estructura de datos de página
export interface PageInfo {
  hero: {
    video: string
    title: string
    description: string
  }
  products: {
    title: string
    description: string
  }
  features: {
    title: string
    description: string
  }
  testimonials: {
    title: string
    description: string
  }
  callToAction: {
    title: string
    description: string
  }
}
