import { Facebook, Twitter, Youtube, Phone, MapPin, Mail, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FooterProps } from "./footer.types"
import { ABOUT_INFO, SOCIAL_LINKS, CONTACT_INFO, COPYRIGHT } from "./footer.constants"

const iconMap = {
  Twitter,
  Facebook,
  Youtube,
  Phone,
  LinkedIn: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
} as const

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
            <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 inline-block">
              {ABOUT_INFO.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {ABOUT_INFO.description}
            </p>
          </div>

          {/* Columna 2: Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 inline-block">
              Redes Sociales
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-10 h-10 flex items-center justify-center transition-colors",
                      social.bgColor,
                      social.hoverColor
                    )}
                    aria-label={social.name}
                  >
                    {typeof Icon === "function" ? <Icon /> : <Icon className="w-5 h-5" />}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 border-primary pb-2 inline-block">
              {CONTACT_INFO.title}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <p className="text-white/80">
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
                <p className="text-white/80">
                  {CONTACT_INFO.phones}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div className="text-white/80">
                  <p>{CONTACT_INFO.schedule.weekdays}</p>
                  <p>{CONTACT_INFO.schedule.saturday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/70 text-sm">
            © {COPYRIGHT.year} {COPYRIGHT.company}. {COPYRIGHT.text}
          </p>
        </div>
      </div>
    </footer>
  )
}
