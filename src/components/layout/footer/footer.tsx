import { FOOTER_LINKS } from "@/components/layout/nav/nav.constants"
import { cn } from "@/lib/utils"
import type { FooterProps } from "./footer.types"

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-foreground text-white py-12 text-center",
        className
      )}
    >
      <div className="container-custom">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">GEMA</h3>
          <p className="text-white/80">Software profesional para empresas</p>
        </div>

        <div className="flex justify-center gap-8 mb-8 flex-wrap">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 no-underline transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="opacity-70 text-sm pt-8 border-t border-white/10">
          <p>&copy; 2026 Gema Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

Footer.displayName = "Footer"
