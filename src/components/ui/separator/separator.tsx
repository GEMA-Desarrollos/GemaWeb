import { Separator as SeparatorPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { separatorVariants } from "./separator.styles"
import type { SeparatorProps } from "./separator.types"

export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(separatorVariants(), className)}
      {...props}
    />
  )
}

Separator.displayName = "Separator"
