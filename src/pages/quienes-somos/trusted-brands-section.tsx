import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { Button } from "@/components/ui/button"
import { PauseIcon, PlayIcon } from "lucide-react"
import { useCarouselAutoscroll } from "./use-carousel-autoscroll"
import type { TrustedBrandsSectionProps } from "./about.types"

/**
 * @deprecated se desestima su uso por ahora
 */
export function TrustedBrandsSection({ title, description, brands }: TrustedBrandsSectionProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollRef = useRef(AutoScroll({ speed: 1, stopOnInteraction: false }))

  useCarouselAutoscroll({ api, isPaused, autoScrollPlugin: autoScrollRef.current })

  return (
    <motion.section
      className="py-5 bg-dark-blue text-white"
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <Carousel
          setApi={setApi}
          plugins={[autoScrollRef.current]}
          opts={{ align: "start", loop: true, dragFree: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {brands.map((brand) => (
              <CarouselItem key={brand.id} className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-6 h-32 rounded-lg">
                  <brand.Icon className="w-20 h-20 text-white" aria-label={brand.name} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="w-full flex justify-center sm:justify-end">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setIsPaused(!isPaused)}
            className="ml-4 text-white border-b rounded-full hover:border-white"
            aria-label={isPaused ? "Reanudar" : "Pausar"}
          >
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

TrustedBrandsSection.displayName = "TrustedBrandsSection"
