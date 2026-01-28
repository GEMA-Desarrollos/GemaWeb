import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "lucide-react"
import type { TestimonialCardProps } from "./home.types"

export function TestimonialCard({ name, role, company, comment, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:-translate-y-1 transition-transform duration-300">
      <CardContent>
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <StarIcon key={i} className="size-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed mb-6 italic font-display select-none">
          "{comment}"
        </p>
        <div className="border-t pt-4 flex justify-end select-none">
          <div className="w-[80%] text-right">
            <p className="font-semibold text-foreground">{name} ({role})</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
