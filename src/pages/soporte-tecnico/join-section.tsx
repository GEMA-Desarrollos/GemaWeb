import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JoinSectionProps } from "./support.types"

export function JoinSection({ title, description, contactEmail }: JoinSectionProps) {
  return (
    <section className="mt-16">
      <div className="border-4 border-solid border-gray-300 p-8 rounded-tl-3xl rounded-br-3xl">
        <h3 className="text-2xl font-bold mb-3 text-center text-gray-700">
          {title}
        </h3>
        <div className="flex gap-2 mb-4">
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="w-full sm:flex sm:justify-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto hover:scale-105 transition-transform hover:cursor-pointer"
          >
            <a
              href={`mailto:${contactEmail}?subject=Solicitud para unirse como técnico GEMA`}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

JoinSection.displayName = "JoinSection"
