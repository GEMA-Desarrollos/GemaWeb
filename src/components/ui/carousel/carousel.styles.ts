import { cva } from "class-variance-authority"

/**
 * Estilos para el contenedor principal del carousel
 */
export const carouselVariants = cva("relative", {
  variants: {},
  defaultVariants: {},
})

/**
 * Estilos para el contenedor de contenido del carousel
 */
export const carouselContentVariants = cva("overflow-hidden", {
  variants: {},
  defaultVariants: {},
})

/**
 * Estilos para el contenedor flex interno del carousel
 */
export const carouselContentInnerVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "-ml-4",
      vertical: "-mt-4 flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

/**
 * Estilos para cada item del carousel
 */
export const carouselItemVariants = cva("min-w-0 shrink-0 grow-0 basis-full", {
  variants: {
    orientation: {
      horizontal: "pl-4",
      vertical: "pt-4",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

/**
 * Estilos para los botones de navegación (Previous/Next)
 */
export const carouselNavigationVariants = cva(
  "rounded-full absolute touch-manipulation",
  {
    variants: {
      orientation: {
        horizontal: "",
        vertical: "rotate-90",
      },
      direction: {
        previous: "",
        next: "",
      },
    },
    compoundVariants: [
      {
        orientation: "horizontal",
        direction: "previous",
        class: "top-1/2 -left-12 -translate-y-1/2",
      },
      {
        orientation: "horizontal",
        direction: "next",
        class: "top-1/2 -right-12 -translate-y-1/2",
      },
      {
        orientation: "vertical",
        direction: "previous",
        class: "-top-12 left-1/2 -translate-x-1/2",
      },
      {
        orientation: "vertical",
        direction: "next",
        class: "-bottom-12 left-1/2 -translate-x-1/2",
      },
    ],
    defaultVariants: {
      orientation: "horizontal",
      direction: "previous",
    },
  }
)
