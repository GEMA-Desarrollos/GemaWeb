export interface BankAccountInfo {
  number: string
  cbu: string
  alias: string
  cuit: string
}

export interface BonusInfo {
  percentage: number
  method: string
  condition: string
}

export interface PaymentSection {
  title: string
  description?: string
  options?: readonly string[]
  disclaimers?: readonly string[]
  bonuses?: readonly BonusInfo[]
  formInstructions?: string
}
