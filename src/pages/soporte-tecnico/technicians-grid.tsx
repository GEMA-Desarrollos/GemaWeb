import { TechnicianCard } from "./technician-card"
import type { TechniciansGridProps } from "./support.types"

export function TechniciansGrid({ technicians }: TechniciansGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {technicians.map((technician, index) => (
        <TechnicianCard
          key={technician.id}
          technician={technician}
          index={index}
        />
      ))}
    </div>
  )
}

TechniciansGrid.displayName = "TechniciansGrid"
