"use client"

import { Label as LabelPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { labelVariants } from "./label.styles"
import type { LabelProps } from "./label.types"

export function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants(), className)}
      {...props}
    />
  )
}

Label.displayName = "Label"
