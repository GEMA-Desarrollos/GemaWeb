"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ChevronDownIcon, XIcon, CheckIcon } from "lucide-react"
import {
  comboboxTriggerVariants,
  comboboxInputGroupVariants,
  comboboxContentVariants,
  comboboxListVariants,
  comboboxItemVariants,
  comboboxLabelVariants,
  comboboxEmptyVariants,
  comboboxSeparatorVariants,
  comboboxChipsVariants,
  comboboxChipVariants,
  comboboxChipsInputVariants,
} from "./combobox.styles"
import type {
  ComboboxValueProps,
  ComboboxTriggerProps,
  ComboboxClearProps,
  ComboboxInputProps,
  ComboboxContentProps,
  ComboboxListProps,
  ComboboxItemProps,
  ComboboxGroupProps,
  ComboboxLabelProps,
  ComboboxCollectionProps,
  ComboboxEmptyProps,
  ComboboxSeparatorProps,
  ComboboxChipsProps,
  ComboboxChipProps,
  ComboboxChipsInputProps,
} from "./combobox.types"

export function Combobox(props: React.ComponentProps<typeof ComboboxPrimitive.Root>) {
  return <ComboboxPrimitive.Root {...props} />
}

Combobox.displayName = "Combobox"

export function ComboboxValue({ ...props }: ComboboxValueProps) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

ComboboxValue.displayName = "ComboboxValue"

export function ComboboxTrigger({
  className,
  children,
  ...props
}: ComboboxTriggerProps) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(comboboxTriggerVariants(), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground size-4 pointer-events-none" />
    </ComboboxPrimitive.Trigger>
  )
}

ComboboxTrigger.displayName = "ComboboxTrigger"

export function ComboboxClear({ className, ...props }: ComboboxClearProps) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn(className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  )
}

ComboboxClear.displayName = "ComboboxClear"

export function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxInputProps) {
  return (
    <InputGroup className={cn(comboboxInputGroupVariants(), className)}>
      <ComboboxPrimitive.Input
        render={<InputGroupInput disabled={disabled} />}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  )
}

ComboboxInput.displayName = "ComboboxInput"

export function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxContentProps) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(comboboxContentVariants(), className)}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

ComboboxContent.displayName = "ComboboxContent"

export function ComboboxList({ className, ...props }: ComboboxListProps) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(comboboxListVariants(), className)}
      {...props}
    />
  )
}

ComboboxList.displayName = "ComboboxList"

export function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxItemProps) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(comboboxItemVariants(), className)}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        render={<span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />}
      >
        <CheckIcon className="pointer-events-none" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  )
}

ComboboxItem.displayName = "ComboboxItem"

export function ComboboxGroup({ className, ...props }: ComboboxGroupProps) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  )
}

ComboboxGroup.displayName = "ComboboxGroup"

export function ComboboxLabel({ className, ...props }: ComboboxLabelProps) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn(comboboxLabelVariants(), className)}
      {...props}
    />
  )
}

ComboboxLabel.displayName = "ComboboxLabel"

export function ComboboxCollection({ ...props }: ComboboxCollectionProps) {
  return (
    <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
  )
}

ComboboxCollection.displayName = "ComboboxCollection"

export function ComboboxEmpty({ className, ...props }: ComboboxEmptyProps) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(comboboxEmptyVariants(), className)}
      {...props}
    />
  )
}

ComboboxEmpty.displayName = "ComboboxEmpty"

export function ComboboxSeparator({
  className,
  ...props
}: ComboboxSeparatorProps) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn(comboboxSeparatorVariants(), className)}
      {...props}
    />
  )
}

ComboboxSeparator.displayName = "ComboboxSeparator"

export function ComboboxChips({ className, ...props }: ComboboxChipsProps) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(comboboxChipsVariants(), className)}
      {...props}
    />
  )
}

ComboboxChips.displayName = "ComboboxChips"

export function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxChipProps) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(comboboxChipVariants(), className)}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-xs" />}
          className="-ml-1 opacity-50 hover:opacity-100"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  )
}

ComboboxChip.displayName = "ComboboxChip"

export function ComboboxChipsInput({
  className,
  ...props
}: ComboboxChipsInputProps) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn(comboboxChipsInputVariants(), className)}
      {...props}
    />
  )
}

ComboboxChipsInput.displayName = "ComboboxChipsInput"
