import { useRef } from "react"
import type ReCAPTCHA from "react-google-recaptcha"
import type { UseRecaptchaOptions, UseRecaptchaReturn } from "./request-demo.types"

/**
 * Hook personalizado para gestionar reCAPTCHA v2
 * Proporciona handlers y referencia para integrar con react-hook-form
 * 
 * @example
 * ```tsx
 * const { form } = useRequestDemoForm()
 * const { recaptchaRef, handleRecaptchaChange, resetRecaptcha } = useRecaptcha({
 *   setValue: form.setValue
 * })
 * 
 * // En el JSX:
 * <ReCAPTCHA
 *   ref={recaptchaRef}
 *   sitekey={SITE_KEY}
 *   onChange={handleRecaptchaChange}
 *   onExpired={resetRecaptcha}
 *   onErrored={resetRecaptcha}
 * />
 * ```
 */
export function useRecaptcha<T extends { recaptcha?: string }>({
  setValue,
  onTokenChange,
}: UseRecaptchaOptions<T>): UseRecaptchaReturn {
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Handler para cuando el usuario completa el reCAPTCHA
  const handleRecaptchaChange = (token: string | null) => {
    // @ts-expect-error - TypeScript no puede inferir correctamente el tipo genérico aquí
    setValue("recaptcha", token || "", {
      shouldValidate: true,
    })
    onTokenChange?.(token)
  }

  // Resetea el reCAPTCHA y limpia el valor del formulario (Útil en caso de expiración o error)
  const resetRecaptcha = () => {
    recaptchaRef.current?.reset()
    // @ts-expect-error - TypeScript no puede inferir correctamente el tipo genérico aquí
    setValue("recaptcha", "", {
      shouldValidate: false,
    })
  }

  // Ejecuta el reCAPTCHA programáticamente y devuelve el token (Útil si necesitas validar antes de submit)
  const executeRecaptcha = async (): Promise<string | null> => {
    return recaptchaRef.current?.executeAsync() || null
  }

  // Obtiene el token actual sin ejecutar
  const getRecaptchaValue = (): string | null => {
    return recaptchaRef.current?.getValue() || null
  }

  return {
    // recaptchaRef,
    handleRecaptchaChange,
    resetRecaptcha,
    executeRecaptcha,
    getRecaptchaValue,
  }
}
