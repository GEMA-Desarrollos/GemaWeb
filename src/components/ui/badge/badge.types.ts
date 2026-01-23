import type { VariantProps } from "class-variance-authority"
import type { badgeVariants } from "./badge.styles"

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"]

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  /**
   * Renderizar como un componente hijo usando Radix Slot
   * @default false
   */
  asChild?: boolean
}
