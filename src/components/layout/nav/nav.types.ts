export interface NavDropdownItem {
  href: string
  label: string
}

export interface NavMenuItem {
  label: string
  href?: string
  items?: readonly NavDropdownItem[]
}

export interface NavProps {
  menuItems: readonly NavMenuItem[]
}
