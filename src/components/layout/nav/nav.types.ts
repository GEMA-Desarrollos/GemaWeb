export interface NavDropdownItem {
  link: string
  label: string
}

export interface NavMenuItem {
  label: string
  link?: string
  items?: readonly NavDropdownItem[]
}

export interface NavProps {
  menuItems: readonly NavMenuItem[]
}
