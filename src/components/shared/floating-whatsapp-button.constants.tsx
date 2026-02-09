import { Calendar, Headphones, MessageCircle } from "lucide-react"
import type { WhatsappOption } from "./floating-whatsapp-button.types"

export const DEFAULT_WHATSAPP_OPTIONS: WhatsappOption[] = [
  {
    label: "Solicitar Información",
    href: "/solicitar-info",
    icon: <Calendar className="size-5 text-primary-blue" />,
  },
  {
    label: "Soporte Técnico",
    href: "https://wa.me/5491134567890?text=Hola,%20necesito%20soporte%20técnico",
    icon: <Headphones className="size-5 text-primary-blue" />,
  },
  {
    label: "Consulta General",
    href: "https://wa.me/5491134567890?text=Hola,%20tengo%20una%20consulta",
    icon: <MessageCircle className="size-5 text-primary-blue" />,
  },
] as const
