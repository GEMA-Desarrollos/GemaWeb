import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import type { ProductCardProps } from "./home.types"

export function ProductCard({ icon, title, description, features }: ProductCardProps) {
  return (
    <Card className="hover:-translate-y-1 transition-transform duration-300 h-full">
      <CardHeader>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
            <img src={icon} alt={title} className="w-full h-full object-contain " />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-center">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-muted-foreground">
              <CheckIcon className="size-5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
