import { useState, useEffect } from "react"

/**
 * Hook para detectar breakpoints responsive
 * @param minWidth - Ancho mínimo en píxeles para considerar "desktop" (default: 1024)
 * @returns "desktop" | "mobile"
 * @example
 * const breakpoint = useBreakpoint() // 1024px por defecto (lg)
 * const breakpoint = useBreakpoint(768) // Tablet breakpoint (md)
 */
export function useBreakpoint(minWidth: number = 1024) {
  const [breakpoint, setBreakpoint] = useState<"desktop" | "mobile">(
    window.innerWidth >= minWidth ? "desktop" : "mobile"
  )

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint(window.innerWidth >= minWidth ? "desktop" : "mobile")
    }

    updateBreakpoint()
    window.addEventListener("resize", updateBreakpoint)
    return () => window.removeEventListener("resize", updateBreakpoint)
  }, [minWidth])

  return breakpoint
}
