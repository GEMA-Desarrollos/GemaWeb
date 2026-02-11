import type { ValuesSectionProps } from "./about.types"

export function ValuesSection({ title, description }: ValuesSectionProps) {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container-custom px-4">
        <h2 className="text-4xl font-bold text-center sm:text-right mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center sm:text-right max-w-4xl mx-auto sm:mr-0 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}

ValuesSection.displayName = "ValuesSection"
