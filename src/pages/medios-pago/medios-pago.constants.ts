import type { BankAccountInfo, BonusInfo } from "./medios-pago.types"
import { CONTACT_INFO } from "@/components/shared"


export const HEADER_CONFIG = {
  title: "Pago de cuotas",
  subtitle: "Conocé todas las formas de pago disponibles para abonar tu suscripción mensual de sistema GEMA de forma rápida y segura."
}

export const CUPON_SECTION = {
  title: "Descargá tu cupón",
  description: "Descargá tu cupón de pago desde tu Estado de Cuenta en Gema Web Services y pagá por todos estos medios:",
} as const

export const BONUS_SECTION = {
  title: "¡Adherite y Pagá Menos!",
  disclaimers: [
    "Sujeto a disponibilidad y autorización de las entidades correspondientes.",
  ] as const,
  bonuses: [
    {
      percentage: 10,
      method: "débito automático desde tu CBU",
      condition: "Válido al primer vencimiento",
    },
    {
      percentage: 5,
      method: "débito automático con tarjeta de crédito",
      condition: "Válido al primer vencimiento",
    },
  ] as const satisfies readonly BonusInfo[],
  formInstructions: "Para adherirte a débito automático con tarjeta de crédito o desde tu CBU, imprimí, completá y envianos una foto por WhatsApp del formulario de adhesión.",
} as const

export const OTHER_PAYMENT_SECTION = {
  title: "Otras opciones de pago",
  options: [
    `Pago en efectivo en nuestro local de ${CONTACT_INFO.shortAddress}.`,
    "Por transferencia bancaria a nuestra cuenta corriente en pesos:",
  ] as const,
} as const

export const BANK_ACCOUNT: BankAccountInfo = {
  number: "330109408273812",
  cbu: "2850301930094082738121",
  alias: "sistemagema",
  cuit: "30-71041463-3",
} as const

export const BANK_TRANSFER_NOTE = "Si pagás por transferencia, recordá poner en observaciones o referencia el CUIT de tu empresa o razón social." as const
