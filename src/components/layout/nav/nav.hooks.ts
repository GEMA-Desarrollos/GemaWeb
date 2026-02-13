import * as React from "react"

export interface UseNavMenuReturn {
  isOpen: boolean
  openDropdown: string | null
  toggleMenu: () => void
  closeMenu: () => void
  setOpenDropdown: (label: string | null) => void
}

/**
 * Hook para manejar el estado del menú de navegación
 */
export function useNavMenu(): UseNavMenuReturn {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const toggleMenu = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMenu = React.useCallback(() => {
    setIsOpen(false)
    setOpenDropdown(null)
  }, [])

  // Cerrar menú al hacer click fuera
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest("nav") && isOpen) {
        closeMenu()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen, closeMenu])

  return {
    isOpen,
    openDropdown,
    toggleMenu,
    closeMenu,
    setOpenDropdown,
  }
}
