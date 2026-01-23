import { useState, useEffect } from "react"

type Breakpoint = "desktop" | "mobile"

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    window.innerWidth >= 1024 ? "desktop" : "mobile"
  )

  useEffect(() => {
    const updateBreakpoint = () => {
      if (window.innerWidth >= 1024) {
        setBreakpoint("desktop")
      } else {
        setBreakpoint("mobile")
      }
    }    
    updateBreakpoint()
    window.addEventListener("resize", updateBreakpoint)
    return () => window.removeEventListener("resize", updateBreakpoint)
  }, [])

  return breakpoint
}
