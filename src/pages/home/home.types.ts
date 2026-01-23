export interface Product {
  icon: string
  title: string
  description: string
  features: readonly string[]
}

export interface Stat {
  value: string
  label: string
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
