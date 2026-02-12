import { IconXSocial, IconFacebookSocial, IconInstagramSocial, IconYoutubeSocial, IconWhatsappSocial } from "@/components/shared/icons"
import { CONTACT_INFO } from "@/components/shared"

export const ABOUT_INFO = {
  title: "Sobre nosotros",
  description: "Somos una empresa de desarrollo de software especializada en soluciones tecnológicas para empresas. Creamos sistemas de gestión integral que optimizan procesos administrativos y mejoran la eficiencia operativa de nuestros clientes."
} as const

export const SOCIAL_LINKS = [
  {
    name: "X",
    link: "https://x.com/sistemagema",
    icon: IconXSocial,
    bgColor: "bg-gradient-to-tr from-twitter-black to-twitter-gray",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/sistemagema",
    icon: IconFacebookSocial,
    bgColor: "bg-facebook-blue",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sistemagema",
    icon: IconInstagramSocial,
    bgColor: "bg-gradient-to-tr from-instagram-orange via-instagram-pink to-instagram-purple",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@sistemagema",
    icon: IconYoutubeSocial,
    bgColor: "bg-youtube-red",
  },
  {
    name: "WhatsApp",
    link: `${CONTACT_INFO.whatsapp.support}`,
    icon: IconWhatsappSocial,
    bgColor: "bg-whatsapp-green",
  },
] as const

export const COPYRIGHT = `© ${new Date().getFullYear()} Gema. Todos los derechos reservados.` as const
