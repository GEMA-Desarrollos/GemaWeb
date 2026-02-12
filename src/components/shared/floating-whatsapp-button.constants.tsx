import { Calendar, Headphones, MessageCircle } from "lucide-react";
import type { WhatsappOption } from "./floating-whatsapp-button.types";
import { CONTACT_INFO } from "./contact.constants";

export const DEFAULT_WHATSAPP_OPTIONS: WhatsappOption[] = [
  {
    label: "Solicitar Información",
    href: "/contacto",
    icon: <Calendar className="size-5 text-primary-blue" />,
  },
  {
    label: "Soporte Técnico",
    href: `${CONTACT_INFO.whatsapp.support}?text=Hola,%20necesito%20soporte%20técnico`,
    icon: <Headphones className="size-5 text-primary-blue" />,
  },
  {
    label: "Consulta General",
    href: `${CONTACT_INFO.whatsapp.training}?text=Hola,%20tengo%20una%20consulta`,
    icon: <MessageCircle className="size-5 text-primary-blue" />,
  },
] as const;
