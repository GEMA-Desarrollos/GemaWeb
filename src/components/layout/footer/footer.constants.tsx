import { XIcon, FacebookIcon, InstagramIcon, YoutubeIcon, WhatsappIcon } from "@/components/shared/icons"

export const ABOUT_INFO = {
  title: "Sobre nosotros",
  description: "Somos una empresa de desarrollo de software especializada en soluciones tecnológicas para empresas. Creamos sistemas de gestión integral que optimizan procesos administrativos y mejoran la eficiencia operativa de nuestros clientes."
} as const

export const SOCIAL_LINKS = [
  {
    name: "X",
    link: "https://x.com/sistemagema",
    icon: XIcon,
    bgColor: "bg-gradient-to-tr from-[#000000] to-[#434343]",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sistemagema",
    icon: FacebookIcon,
    bgColor: "bg-[#558ccc]",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sistemagema",
    icon: InstagramIcon,
    bgColor: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@sistemagema",
    icon: YoutubeIcon,
    bgColor: "bg-[#dc2626]",
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/5493518084771",
    icon: WhatsappIcon,
    bgColor: "bg-[#16a34a]",
  },
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

export const COPYRIGHT = `© ${new Date().getFullYear()} Gema. Todos los derechos reservados.` as const
