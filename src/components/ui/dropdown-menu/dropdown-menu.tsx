import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { CheckIcon, ChevronRightIcon } from "lucide-react"
import {
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuCheckboxItemVariants,
  dropdownMenuRadioItemVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
  dropdownMenuSubTriggerVariants,
  dropdownMenuSubContentVariants,
} from "./dropdown-menu.styles"
import type {
  DropdownMenuProps,
  DropdownMenuPortalProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
} from "./dropdown-menu.types"

export function DropdownMenu({ ...props }: DropdownMenuProps) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

DropdownMenu.displayName = "DropdownMenu"

export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

DropdownMenuPortal.displayName = "DropdownMenuPortal"

export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

export function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(dropdownMenuContentVariants(), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

DropdownMenuContent.displayName = "DropdownMenuContent"

export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

DropdownMenuGroup.displayName = "DropdownMenuGroup"

export function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(dropdownMenuItemVariants(), className)}
      {...props}
    />
  )
}

DropdownMenuItem.displayName = "DropdownMenuItem"

export function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(dropdownMenuCheckboxItemVariants(), className)}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

export function DropdownMenuRadioGroup({
  ...props
}: DropdownMenuRadioGroupProps) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

export function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(dropdownMenuRadioItemVariants(), className)}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center pointer-events-none"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

export function DropdownMenuLabel({
  className,
  inset,
  ...props
}: DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(dropdownMenuLabelVariants(), className)}
      {...props}
    />
  )
}

DropdownMenuLabel.displayName = "DropdownMenuLabel"

export function DropdownMenuSeparator({
  className,
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(dropdownMenuSeparatorVariants(), className)}
      {...props}
    />
  )
}

DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

export function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(dropdownMenuShortcutVariants(), className)}
      {...props}
    />
  )
}

DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

DropdownMenuSub.displayName = "DropdownMenuSub"

export function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(dropdownMenuSubTriggerVariants(), className)}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"

export function DropdownMenuSubContent({
  className,
  ...props
}: DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(dropdownMenuSubContentVariants(), className)}
      {...props}
    />
  )
}

DropdownMenuSubContent.displayName = "DropdownMenuSubContent"
