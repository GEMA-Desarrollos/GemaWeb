import type { Combobox as ComboboxPrimitive } from "@base-ui/react"

export type ComboboxValueProps = ComboboxPrimitive.Value.Props

export type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props

export type ComboboxClearProps = ComboboxPrimitive.Clear.Props

export interface ComboboxInputProps extends ComboboxPrimitive.Input.Props {
  /**
   * Mostrar el trigger en el input
   * @default true
   */
  showTrigger?: boolean
  /**
   * Mostrar el botón de limpiar
   * @default false
   */
  showClear?: boolean
}

export interface ComboboxContentProps extends ComboboxPrimitive.Popup.Props, Pick<ComboboxPrimitive.Positioner.Props, "side" | "align" | "sideOffset" | "alignOffset" | "anchor"> {}

export type ComboboxListProps = ComboboxPrimitive.List.Props

export type ComboboxItemProps = ComboboxPrimitive.Item.Props

export type ComboboxGroupProps = ComboboxPrimitive.Group.Props

export type ComboboxLabelProps = ComboboxPrimitive.GroupLabel.Props

export type ComboboxCollectionProps = ComboboxPrimitive.Collection.Props

export type ComboboxEmptyProps = ComboboxPrimitive.Empty.Props

export type ComboboxSeparatorProps = ComboboxPrimitive.Separator.Props

export interface ComboboxChipsProps extends React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips>, ComboboxPrimitive.Chips.Props {}

export interface ComboboxChipProps extends ComboboxPrimitive.Chip.Props {
  /**
   * Mostrar el botón de remover
   * @default true
   */
  showRemove?: boolean
}

export type ComboboxChipsInputProps = ComboboxPrimitive.Input.Props
