import { XIcon, FacebookIcon, InstagramIcon, YoutubeIcon, WhatsappIcon, LinkedinIcon } from "@/components/shared/icons"

export const ABOUT_INFO = {
  title: "Sobre nosotros",
  description: "GEMA, es un software de gestión integral para la Farmacia que brinda numerosas posibilidades para la dispensación de productos y para la administración general."
} as const

export const SOCIAL_LINKS = [
  {
    name: "X",
    href: "https://x.com",
    icon: XIcon,
    bgColor: "bg-gradient-to-tr from-[#000000] to-[#434343]",
    hoverColor: "hover:from-[#000000]/80 hover:to-[#434343]/80"
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FacebookIcon,
    bgColor: "bg-gradient-to-tr from-[#1877F2] to-[#3b5998]",
    hoverColor: "hover:from-[#1877F2]/80 hover:to-[#3b5998]/80"
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
    bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    hoverColor: "hover:from-[#F58529]/80 hover:via-[#DD2A7B]/80 hover:to-[#8134AF]/80"
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: YoutubeIcon,
    bgColor: "bg-gradient-to-tr from-[#FF0000] to-[#800000]",
    hoverColor: "hover:from-[#FF0000]/80 hover:to-[#800000]/80"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5493514226382",
    icon: WhatsappIcon,
    bgColor: "bg-gradient-to-tr from-[#25D366] to-[#1a9247]/80",
    hoverColor: "hover:from-[#25D366]/80 hover:to-[#1a9247]/80"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    bgColor: "bg-gradient-to-tr from-[#0A66C2] to-[#004182]",
    hoverColor: "hover:from-[#0A66C2]/80 hover:to-[#004182]/80"
  }
] as const

export const CONTACT_INFO = {
  title: "Contacto",
  address: "General Simón Bolivar 348, Piso 4, CP.5000 - Córdoba",
  email: "sistemagema@gmail.com",
  phones: "351 4271159 / 351 4226382",
  schedule: [
    "Lunes a viernes de 08:00 a 18:00",
    "Sábados de 09:00 a 13:00",
    "Línea de ayuda movil (0351) 155 199 330"
  ],
} as const

export const COPYRIGHT = {
  year: 2016,
  company: "Gema",
  text: "Todos los derechos reservados."
} as const
