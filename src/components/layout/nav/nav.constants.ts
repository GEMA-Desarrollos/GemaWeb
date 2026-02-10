export interface NavDropdownItem {
  link: string
  label: string
}

export interface NavMenuItem {
  label: string
  link?: string // Para items sin dropdown
  items?: readonly NavDropdownItem[] // Para items con dropdown
}

export const NAV_MENU_ITEMS: readonly NavMenuItem[] = [
  {
    label: "Empresa",
    items: [
      { link: "/quienes-somos", label: "Quiénes Somos" },
      { link: "/contacto", label: "Contacto" }
    ],
  },
  {
    label: "Servicios",
    items: [
      { link: "https://sistemagema.com.ar/sucursales/iniciarsesion.asp", label: "Sucursales" },
      { link: "https://sistemagema.com.ar/inicio.aspx", label: "Validador OS" },
    ],
  },
  {
    label: "Soporte",
    items: [
      { link: "/soporte-tecnico", label: "Soporte Técnico" },
      { link: "/descargas", label: "Descargas" },
    ],
  },
  {
    label: "Medios de Pago",
    link: "/medios-pago",
  },
] as const

export const FOOTER_LINKS = [
  { link: "/", label: "Inicio" },
  { link: "/medios-pago", label: "Medios de pago" },
  { link: "/quienes-somos", label: "Quiénes Somos" },
  { link: "/descargas", label: "Descargas" },
  { link: "/soporte-tecnico", label: "Soporte Técnico" },
  { link: "/contacto", label: "Contacto" },
] as const
