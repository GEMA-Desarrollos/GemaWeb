"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import {
  inputGroupVariants,
  inputGroupAddonVariants,
  inputGroupButtonVariants,
  inputGroupTextVariants,
  inputGroupInputVariants,
  inputGroupTextareaVariants,
} from "./input-group.styles"
import type {
  InputGroupProps,
  InputGroupAddonProps,
  InputGroupButtonProps,
  InputGroupTextProps,
  InputGroupInputProps,
  InputGroupTextareaProps,
} from "./input-group.types"

export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(inputGroupVariants(), className)}
      {...props}
    />
  )
}

InputGroup.displayName = "InputGroup"

export function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: InputGroupAddonProps) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props}
    />
  )
}

InputGroupAddon.displayName = "InputGroupAddon"

export function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: InputGroupButtonProps) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

InputGroupButton.displayName = "InputGroupButton"

export function InputGroupText({ className, ...props }: InputGroupTextProps) {
  return (
    <span
      className={cn(inputGroupTextVariants(), className)}
      {...props}
    />
  )
}

InputGroupText.displayName = "InputGroupText"

export function InputGroupInput({
  className,
  ...props
}: InputGroupInputProps) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(inputGroupInputVariants(), className)}
      {...props}
    />
  )
}

InputGroupInput.displayName = "InputGroupInput"

export function InputGroupTextarea({
  className,
  ...props
}: InputGroupTextareaProps) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(inputGroupTextareaVariants(), className)}
      {...props}
    />
  )
}

InputGroupTextarea.displayName = "InputGroupTextarea"
