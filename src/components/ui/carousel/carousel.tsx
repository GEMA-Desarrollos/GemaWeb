import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  carouselVariants,
  carouselContentVariants,
  carouselContentInnerVariants,
  carouselItemVariants,
  carouselNavigationVariants,
} from "./carousel.styles"
import { CarouselContext, useCarousel } from "./carousel.hooks"
import type {
  CarouselApi,
  CarouselComponentProps,
  CarouselContentProps,
  CarouselItemProps,
  CarouselPreviousProps,
  CarouselNextProps,
} from "./carousel.types"

export function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselComponentProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext]
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn(carouselVariants(), className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.displayName = "Carousel"

export function CarouselContent({
  className,
  ...props
}: CarouselContentProps) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className={cn(carouselContentVariants())}
      data-slot="carousel-content"
    >
      <div
        className={cn(
          carouselContentInnerVariants({ orientation }),
          className
        )}
        {...props}
      />
    </div>
  )
}

CarouselContent.displayName = "CarouselContent"

export function CarouselItem({ className, ...props }: CarouselItemProps) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(carouselItemVariants({ orientation }), className)}
      {...props}
    />
  )
}

CarouselItem.displayName = "CarouselItem"

export function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: CarouselPreviousProps) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        carouselNavigationVariants({
          orientation,
          direction: "previous",
        }),
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Anterior</span>
    </Button>
  )
}

CarouselPrevious.displayName = "CarouselPrevious"

export function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: CarouselNextProps) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        carouselNavigationVariants({
          orientation,
          direction: "next",
        }),
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Siguiente</span>
    </Button>
  )
}

CarouselNext.displayName = "CarouselNext"
