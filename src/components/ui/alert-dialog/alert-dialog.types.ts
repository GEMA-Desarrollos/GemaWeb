import type { AlertDialog as AlertDialogPrimitive } from "radix-ui"
import type { Button } from "@/components/ui/button"

export type AlertDialogSize = "default" | "sm"

export type AlertDialogProps = React.ComponentProps<typeof AlertDialogPrimitive.Root>

export type AlertDialogTriggerProps = React.ComponentProps<typeof AlertDialogPrimitive.Trigger>

export type AlertDialogPortalProps = React.ComponentProps<typeof AlertDialogPrimitive.Portal>

export type AlertDialogOverlayProps = React.ComponentProps<typeof AlertDialogPrimitive.Overlay>

export interface AlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogPrimitive.Content> {
  /**
   * Tamaño del alert dialog
   * @default "default"
   */
  size?: AlertDialogSize
}

export type AlertDialogHeaderProps = React.ComponentProps<"div">

export type AlertDialogFooterProps = React.ComponentProps<"div">

export type AlertDialogMediaProps = React.ComponentProps<"div">

export type AlertDialogTitleProps = React.ComponentProps<typeof AlertDialogPrimitive.Title>

export type AlertDialogDescriptionProps = React.ComponentProps<typeof AlertDialogPrimitive.Description>

export interface AlertDialogActionProps extends React.ComponentProps<typeof AlertDialogPrimitive.Action>, Pick<React.ComponentProps<typeof Button>, "variant" | "size"> {}

export interface AlertDialogCancelProps extends React.ComponentProps<typeof AlertDialogPrimitive.Cancel>, Pick<React.ComponentProps<typeof Button>, "variant" | "size"> {}
