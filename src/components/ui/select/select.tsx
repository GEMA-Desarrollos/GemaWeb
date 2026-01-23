"use client"

import { Select as SelectPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"
import {
  selectGroupVariants,
  selectTriggerVariants,
  selectContentVariants,
  selectLabelVariants,
  selectItemVariants,
  selectSeparatorVariants,
  selectScrollButtonVariants,
} from "./select.styles"
import type {
  SelectProps,
  SelectGroupProps,
  SelectValueProps,
  SelectTriggerProps,
  SelectContentProps,
  SelectLabelProps,
  SelectItemProps,
  SelectSeparatorProps,
  SelectScrollUpButtonProps,
  SelectScrollDownButtonProps,
} from "./select.types"

export function Select({ ...props }: SelectProps) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

Select.displayName = "Select"

export function SelectGroup({ className, ...props }: SelectGroupProps) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn(selectGroupVariants(), className)}
      {...props}
    />
  )
}

SelectGroup.displayName = "SelectGroup"

export function SelectValue({ ...props }: SelectValueProps) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

SelectValue.displayName = "SelectValue"

export function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(selectTriggerVariants(), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

SelectTrigger.displayName = "SelectTrigger"

export function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          selectContentVariants(),
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          data-position={position}
          className={cn(
            "data-[position=popper]:h-[var(--radix-select-trigger-height)] data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)]",
            position === "popper" && ""
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

SelectContent.displayName = "SelectContent"

export function SelectLabel({ className, ...props }: SelectLabelProps) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(selectLabelVariants(), className)}
      {...props}
    />
  )
}

SelectLabel.displayName = "SelectLabel"

export function SelectItem({
  className,
  children,
  ...props
}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(selectItemVariants(), className)}
      {...props}
    >
      <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="pointer-events-none" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

SelectItem.displayName = "SelectItem"

export function SelectSeparator({
  className,
  ...props
}: SelectSeparatorProps) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(selectSeparatorVariants(), className)}
      {...props}
    />
  )
}

SelectSeparator.displayName = "SelectSeparator"

export function SelectScrollUpButton({
  className,
  ...props
}: SelectScrollUpButtonProps) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(selectScrollButtonVariants(), className)}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpButton>
  )
}

SelectScrollUpButton.displayName = "SelectScrollUpButton"

export function SelectScrollDownButton({
  className,
  ...props
}: SelectScrollDownButtonProps) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(selectScrollButtonVariants(), className)}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownButton>
  )
}

SelectScrollDownButton.displayName = "SelectScrollDownButton"
