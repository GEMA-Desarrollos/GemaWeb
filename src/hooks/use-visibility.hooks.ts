import { useEffect, useRef, useState } from "react"

/**
 * Hook para detectar cuando un elemento es visible en el viewport
 * Usa IntersectionObserver para monitorear la visibilidad
 * @param threshold - Porcentaje del elemento que debe ser visible (0-1)
 * @returns {object} - { isVisible, sectionRef }
 * @example
 * const { isVisible, sectionRef } = useVisibility(0.2)
 * <section ref={sectionRef}>
 *   {isVisible && <AnimatedContent />}
 * </section>
 */
export function useVisibility(threshold: number = 0.2) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // si el elemento es visible en el viewport dejar de observar
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        // se activa cuando el porcentaje especificado del elemento es visible
        threshold,
      }
    )
    // iniciar la observación del elemento referenciado
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [threshold])

  return { isVisible, sectionRef }
}
