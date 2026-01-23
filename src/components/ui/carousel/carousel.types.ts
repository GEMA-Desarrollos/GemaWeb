import type * as React from "react"
import type useEmblaCarousel from "embla-carousel-react"
import type { UseEmblaCarouselType } from "embla-carousel-react"
import type { Button } from "@/components/ui/button"

export type CarouselApi = UseEmblaCarouselType[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseCarouselParameters[0]
export type CarouselPlugin = UseCarouselParameters[1]

/**
 * Props para el componente Carousel
 */
export interface CarouselProps {
  /**
   * Opciones de configuración de Embla Carousel
   */
  opts?: CarouselOptions
  /**
   * Plugins de Embla Carousel
   */
  plugins?: CarouselPlugin
  /**
   * Orientación del carousel
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical"
  /**
   * Callback para obtener la API del carousel
   */
  setApi?: (api: CarouselApi) => void
}

/**
 * Props del contexto del carousel
 */
export interface CarouselContextProps extends CarouselProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

/**
 * Props para el componente Carousel (con HTML props)
 */
export interface CarouselComponentProps
  extends React.ComponentProps<"div">,
    CarouselProps {}

/**
 * Props para el componente CarouselContent
 */
export type CarouselContentProps = React.ComponentProps<"div">

/**
 * Props para el componente CarouselItem
 */
export type CarouselItemProps = React.ComponentProps<"div">

/**
 * Props para el componente CarouselPrevious
 */
export type CarouselPreviousProps = React.ComponentProps<typeof Button>

/**
 * Props para el componente CarouselNext
 */
export type CarouselNextProps = React.ComponentProps<typeof Button>
