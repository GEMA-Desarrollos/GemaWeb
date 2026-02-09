import type { RefObject } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import type { UseFormSetValue } from "react-hook-form"

// Datos del formulario de solicitud de info inferido del schema de validación Zod
export interface RequestInfoFormData {
  razonSocial: string
  cuit: string
  telefono: string
  email: string
  horarioDesde: string
  horarioHasta: string
  nombreContacto: string
  observacion?: string
  recaptcha?: string // Opcional - se activará cuando sea necesario
}

// Payload que se envía a la API
export interface InfoRequestPayload {
  razonSocial: string
  cuit: string
  telefono: string
  email: string
  horarioContacto: string // Formato: "HH:MM - HH:MM"
  nombreContacto: string
  observaciones?: string
}

// Estados posibles del envío del formulario
export type SubmitStatus = "" | "success" | "error"

// Opciones para el hook useRecaptcha
export interface UseRecaptchaOptions<T extends { recaptcha?: string }> {
  setValue: UseFormSetValue<T> // Función setValue de react-hook-form
  onTokenChange?: (token: string | null) => void // Callback opcional cuando el token cambia
}

// Retorno del hook useRecaptcha
export interface UseRecaptchaReturn {
  recaptchaRef?: RefObject<ReCAPTCHA>
  handleRecaptchaChange: (token: string | null) => void
  resetRecaptcha: () => void
  executeRecaptcha: () => Promise<string | null>
  getRecaptchaValue: () => string | null
}
