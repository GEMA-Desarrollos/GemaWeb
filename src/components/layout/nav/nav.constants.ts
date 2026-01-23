export interface NavDropdownItem {
  href: string
  label: string
}

export interface NavMenuItem {
  label: string
  href?: string // Para items sin dropdown
  items?: readonly NavDropdownItem[] // Para items con dropdown
}

export const NAV_MENU_ITEMS: readonly NavMenuItem[] = [
  {
    label: "Empresa",
    items: [
      { href: "/quienes-somos", label: "Quiénes Somos" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    label: "Servicios",
    items: [
      { href: "/solicitar-demo", label: "Solicitar Demo" },
      { href: "/sucursales", label: "Sucursales" },
      { href: "/validador-os", label: "Validador OS" },
    ],
  },
  {
    label: "Soporte",
    items: [
      { href: "/soporte-tecnico", label: "Soporte Técnico" },
      { href: "/descargas", label: "Descargas" },
    ],
  },
  {
    label: "Medios de Pago",
    href: "/medios-pago",
  },
] as const

export const FOOTER_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/medios-pago", label: "Medios de pago" },
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/descargas", label: "Descargas" },
  { href: "/soporte-tecnico", label: "Soporte Técnico" },
  { href: "/contacto", label: "Contacto" },
] as const
