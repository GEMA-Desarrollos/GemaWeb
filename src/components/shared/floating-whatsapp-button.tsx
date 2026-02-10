import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IconWhatsappSocial } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { DEFAULT_WHATSAPP_OPTIONS } from "./floating-whatsapp-button.constants"
import type { FloatingWhatsappButtonProps } from "./floating-whatsapp-button.types"

export function FloatingWhatsappButton({
  options = DEFAULT_WHATSAPP_OPTIONS,
  className,
}: FloatingWhatsappButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)

  // Cerrar panel al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Manejar clic en una opción. Si es una ruta interna, navegar; si es externa, abrir en nueva pestaña
  const handleOptionClick = (option: typeof options[number]) => {
    if (option.onClick) {
      option.onClick()
    } else if (option.href) {
      if (option.href.startsWith("/")) {
        navigate(option.href)
      } else {
        window.open(option.href, "_blank", "noopener,noreferrer")
      }
    }
    setIsOpen(false)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3",
        className
      )}
    >
      {/* Panel de opciones */}
      {isOpen && (
        <Card className="p-2! shadow-lg animate-in slide-in-from-bottom-2 fade-in-0 duration-200 w-64">
          <CardContent className="p-0!">
            <div className="flex flex-col gap-1">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="default"
                  className="cursor-pointer justify-start w-full h-auto py-3 px-3 text-left hover:bg-whatsapp-green/10"
                  onClick={() => handleOptionClick(option)}
                >
                  <div className="flex items-center gap-3 w-full">
                    {option.icon || null}
                    <span className="text-sm font-medium">{option.label}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Botón flotante principal */}
      <Button
        size="icon-lg"
        className="cursor-pointer rounded-full shadow-lg bg-whatsapp-green hover:bg-whatsapp-green/90 text-white h-14 w-14 transition-transform hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp"
        aria-expanded={isOpen}
      >
        <IconWhatsappSocial className="size-7" />
      </Button>
    </div>
  )
}

FloatingWhatsappButton.displayName = "FloatingWhatsappButton"
