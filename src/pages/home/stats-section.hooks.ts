import { useEffect, useRef, useState } from "react"

/**
 * Hook para detectar cuando la sección de estadísticas es visible
 * Usa IntersectionObserver con threshold del 20%
 */
export function useStatsVisibility() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Dejar de observar después de que sea visible
          observer.disconnect()
        }
      },
      {
        threshold: 0.2, // Se activa cuando el 20% del elemento es visible
      }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return { isVisible, sectionRef }
}
