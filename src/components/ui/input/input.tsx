import { cn } from "@/lib/utils"
import { inputVariants } from "./input.styles"
import type { InputProps } from "./input.types"

export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants(), className)}
      {...props}
    />
  )
}

Input.displayName = "Input"
