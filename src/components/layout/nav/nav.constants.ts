import type { NavMenuItem } from "./nav.types"

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
