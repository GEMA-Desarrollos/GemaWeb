import type { VariantProps } from "class-variance-authority"
import type { inputGroupAddonVariants, inputGroupButtonVariants } from "./input-group.styles"
import type { Button } from "@/components/ui/button"

export type InputGroupAddonAlign = VariantProps<typeof inputGroupAddonVariants>["align"]
export type InputGroupButtonSize = VariantProps<typeof inputGroupButtonVariants>["size"]

export type InputGroupProps = React.ComponentProps<"div">

export interface InputGroupAddonProps extends React.ComponentProps<"div">, VariantProps<typeof inputGroupAddonVariants> {}

export interface InputGroupButtonProps extends Omit<React.ComponentProps<typeof Button>, "size">, VariantProps<typeof inputGroupButtonVariants> {}

export type InputGroupTextProps = React.ComponentProps<"span">

export type InputGroupInputProps = React.ComponentProps<"input">

export type InputGroupTextareaProps = React.ComponentProps<"textarea">
