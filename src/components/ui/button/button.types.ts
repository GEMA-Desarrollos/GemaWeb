import type { VariantProps } from "class-variance-authority"
import type { buttonVariants } from "./button.styles"

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]
export type ButtonSize = VariantProps<typeof buttonVariants>["size"]

export interface ButtonProps extends 
  React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  /**
   * Renderizar como un componente hijo usando Radix Slot
   * @default false
   */
  asChild?: boolean
}
