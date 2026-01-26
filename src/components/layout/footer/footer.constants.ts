export const ABOUT_INFO = {
  title: "Sobre nosotros",
  description: "GEMA, es un software de gestión integral para la Farmacia que brinda numerosas posibilidades para la dispensación de productos y para la administración general."
} as const

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "Twitter",
    bgColor: "bg-[#55ACEE]",
    hoverColor: "hover:bg-[#55ACEE]/80"
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "Facebook",
    bgColor: "bg-[#3B5998]",
    hoverColor: "hover:bg-[#3B5998]/80"
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: "Youtube",
    bgColor: "bg-[#CD201F]",
    hoverColor: "hover:bg-[#CD201F]/80"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5493514226382",
    icon: "Phone",
    bgColor: "bg-[#25D366]",
    hoverColor: "hover:bg-[#25D366]/80"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "LinkedIn",
    bgColor: "bg-[#0077B5]",
    hoverColor: "hover:bg-[#0077B5]/80"
  }
] as const

export const CONTACT_INFO = {
  title: "Contacto",
  address: "General Simón Bolivar 348. Piso 4., CP.5000 - Córdoba",
  email: "sistemagema@gmail.com",
  phones: "351 4271159 / 351 4226382",
  schedule: {
    weekdays: "Lunes a viernes de 08:00 a 18:00.",
    saturday: "Sábados de 9 a 13: línea de ayuda movil (0351) 155 199 330"
  }
} as const

export const COPYRIGHT = {
  year: 2016,
  company: "Gema",
  text: "Todos los derechos reservados."
} as const
