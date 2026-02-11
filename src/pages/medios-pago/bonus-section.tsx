import { Button } from "@/components/ui/button"
import { Printer, CheckIcon } from "lucide-react"
import type { BonusSectionProps } from "./payment-methods.types"

export function BonusSection({ 
  title, 
  items, 
  instructions, 
  onPrint 
}: BonusSectionProps) {
  return (
    <section className="py-8! container-custom">
      <div className="flex justify-center items-center gap-0 sm:gap-2 mb-4">
        <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      </div>
      <ul className="space-y-2 mb-4 sm:ml-8 md:ml-10">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="sm:ml-8 md:ml-10 mb-6">
        {instructions}
      </p>
      <div className="flex flex-col items-center">
        <Button
          variant="default"
          size="lg"
          onClick={onPrint}
          className="py-6 px-4 w-full sm:w-auto hover:scale-105 transition-transform hover:cursor-pointer"
        >
          <Printer className="mr-2 h-5 w-5" />
          Imprimir Formulario
        </Button>
      </div>
    </section>
  )
}

BonusSection.displayName = "BonusSection"
