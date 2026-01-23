import { AlertDialog as AlertDialogPrimitive } from "radix-ui"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  alertDialogOverlayVariants,
  alertDialogContentVariants,
  alertDialogHeaderVariants,
  alertDialogFooterVariants,
  alertDialogMediaVariants,
  alertDialogTitleVariants,
  alertDialogDescriptionVariants,
} from "./alert-dialog.styles"
import type {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogPortalProps,
  AlertDialogOverlayProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogMediaProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
} from "./alert-dialog.types"

export function AlertDialog({ ...props }: AlertDialogProps) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

AlertDialog.displayName = "AlertDialog"

export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

AlertDialogTrigger.displayName = "AlertDialogTrigger"

export function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

AlertDialogPortal.displayName = "AlertDialogPortal"

export function AlertDialogOverlay({
  className,
  ...props
}: AlertDialogOverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(alertDialogOverlayVariants(), className)}
      {...props}
    />
  )
}

AlertDialogOverlay.displayName = "AlertDialogOverlay"

export function AlertDialogContent({
  className,
  size = "default",
  ...props
}: AlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(alertDialogContentVariants(), className)}
        {...props}
      />
    </AlertDialogPortal>
  )
}

AlertDialogContent.displayName = "AlertDialogContent"

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(alertDialogHeaderVariants(), className)}
      {...props}
    />
  )
}

AlertDialogHeader.displayName = "AlertDialogHeader"

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(alertDialogFooterVariants(), className)}
      {...props}
    />
  )
}

AlertDialogFooter.displayName = "AlertDialogFooter"

export function AlertDialogMedia({
  className,
  ...props
}: AlertDialogMediaProps) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(alertDialogMediaVariants(), className)}
      {...props}
    />
  )
}

AlertDialogMedia.displayName = "AlertDialogMedia"

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(alertDialogTitleVariants(), className)}
      {...props}
    />
  )
}

AlertDialogTitle.displayName = "AlertDialogTitle"

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(alertDialogDescriptionVariants(), className)}
      {...props}
    />
  )
}

AlertDialogDescription.displayName = "AlertDialogDescription"

export function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}: AlertDialogActionProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

AlertDialogAction.displayName = "AlertDialogAction"

export function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogCancelProps) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  )
}

AlertDialogCancel.displayName = "AlertDialogCancel"
