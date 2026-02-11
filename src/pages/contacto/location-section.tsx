import type { LocationSectionProps } from "./contact.types"

export function LocationSection({ title, address, mapsUrl }: LocationSectionProps) {
  return (
    <section className="relative w-full -mx-[50vw] left-1/2 right-1/2 pt-10">
      <div className="text-center mb-6 px-4 sm:max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground">
          {address}
        </p>
      </div>
      <iframe
        width="100%"
        height="450"
        loading="lazy"
        src={mapsUrl}
        title="Ubicación de Gema"
      />
    </section>
  )
}

LocationSection.displayName = "LocationSection"
