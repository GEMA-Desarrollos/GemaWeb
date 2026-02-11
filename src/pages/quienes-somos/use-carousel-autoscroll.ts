import { useEffect } from "react"
import type { CarouselApi } from "@/components/ui/carousel"
import type AutoScroll from "embla-carousel-auto-scroll"

interface UseCarouselAutoscrollParams {
  api: CarouselApi | undefined
  isPaused: boolean
  autoScrollPlugin: AutoScroll
}

export function useCarouselAutoscroll({ api, isPaused, autoScrollPlugin }: UseCarouselAutoscrollParams) {
  useEffect(() => {
    if (!api) {
      return
    }
    
    if (isPaused) {
      autoScrollPlugin.stop()
    } else {
      autoScrollPlugin.play()
    }
  }, [api, isPaused, autoScrollPlugin])
}
