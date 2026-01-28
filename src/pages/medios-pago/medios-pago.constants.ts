import type { BankAccountInfo, BonusInfo } from "./medios-pago.types"

export const PAGE_TITLE = "Pago de cuotas GEMA" as const

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
  formInstructions: "Para adherirte a débito automático con tarjeta de crédito o desde tu CBU, imprimí, completá y envianos una foto por WhatsApp del siguiente formulario:",
} as const

export const OTHER_PAYMENT_SECTION = {
  title: "Otras opciones de pago",
  options: [
    "Pago en efectivo en nuestro local de General Simón Bolívar 348, Piso 4, de la Ciudad de Córdoba.",
    "Por transferencia bancaria a nuestra cuenta corriente en pesos:",
  ] as const,
} as const

export const BANK_ACCOUNT: BankAccountInfo = {
  number: "330109408273812",
  cbu: "2850301930094082738121",
  alias: "sistemagema",
  cuit: "30-71041463-3",
} as const

export const BANK_TRANSFER_NOTE = "Si pagás por transferencia, recordá poner en observaciones o referencia el CUIT de tu farmacia." as const
