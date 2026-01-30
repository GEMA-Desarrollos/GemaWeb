import { Phone, MapPin, Mail, Clock } from "lucide-react"
import { cn } from "../../../lib/utils"
import type { FooterProps } from "./footer.types"
import { ABOUT_INFO, SOCIAL_LINKS, CONTACT_INFO, COPYRIGHT } from "./footer.constants"

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-foreground text-white py-12",
        className
      )}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Sobre nosotros */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-gray-400 pb-2 inline-block">
              {ABOUT_INFO.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {ABOUT_INFO.description}
            </p>
          </div>

          {/* Columna 2: Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-gray-400 pb-2 inline-block">
              Redes Sociales
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 flex items-center justify-center",
                      social.bgColor,
                      "hover:scale-110 hover:rounded transition-all duration-200"
                    )}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-gray-400 pb-2 inline-block">
              {CONTACT_INFO.title}
            </h3>
            <div className="space-y-3 text-sm!">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p className="text-white/80 text-sm">
                  {CONTACT_INFO.address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/80 hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <p className="text-white/80 text-sm">
                  {CONTACT_INFO.phones}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="text-white/80">
                  {CONTACT_INFO.schedule.map((line, index) => (
                    <p key={index} className="text-sm">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">
            {COPYRIGHT}
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
