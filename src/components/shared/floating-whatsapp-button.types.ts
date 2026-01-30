export interface WhatsappOption {
  label: string
  href?: string
  onClick?: () => void
  icon?: React.ReactNode
}

export interface FloatingWhatsappButtonProps {
  options?: WhatsappOption[]
  className?: string
}
