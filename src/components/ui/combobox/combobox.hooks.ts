import * as React from "react"

/**
 * Hook para crear una referencia de anclaje para el Combobox
 * @returns RefObject para usar con la prop anchor de ComboboxContent
 */
export function useComboboxAnchor(): React.RefObject<HTMLDivElement | null> {
  return React.useRef<HTMLDivElement>(null)
}
