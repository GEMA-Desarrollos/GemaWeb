import * as React from "react"
import type { CarouselContextProps } from "./carousel.types"

export const CarouselContext = React.createContext<CarouselContextProps | null>(null)

/**
 * Hook para acceder al contexto del carousel
 * Debe ser usado dentro de un componente <Carousel />
 */
export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}
