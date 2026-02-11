export interface BankInfo {
  number: string
  cbu: string
  alias: string
  cuit: string
}

export interface PageHeaderData {
  title: string
  subtitle: string
  image: string
}

export interface CouponData {
  title: string
  description: string
  image: string[]
}

export interface BonusData {
  title: string
  items: readonly string[]
  instructions: string
  image: string
}

export interface PaymentData {
  title: string
  icon: unknown
  options: readonly string[]
  warning: string
  bank: BankInfo
}

export interface PageInfo {
  header: PageHeaderData
  cupon: CouponData
  bonus: BonusData
  payment: PaymentData
}

// Component Props Types
export interface PageHeaderProps {
  title: string
  subtitle: string
}

export interface InstructionsImageProps {
  src: string
}

export interface CouponSectionProps {
  title: string
  description: string
  images: string[]
}

export interface BonusSectionProps {
  title: string
  items: readonly string[]
  instructions: string
  onPrint: () => void
}

export interface PaymentOptionsSectionProps {
  title: string
  icon: unknown
  options: readonly string[]
  warning: string
  bankInfo: BankInfo
}
