import imagePattern from "@/assets/image-pattern.webp"
import { EmployeeCard } from "./employee-card"
import type { TeamSectionProps } from "./about.types"

export function TeamSection({ title, description, employees }: TeamSectionProps) {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src={imagePattern} 
          alt="" 
          className="w-full h-full object-cover object-top-left sm:object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10">
        <div className="pb-4">
          <h2 className="text-4xl font-bold text-center mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            {description}
          </p>
        </div>
        <div className="container-custom flex flex-col gap-12">
          {employees.map((employee, index) => (
            <EmployeeCard key={employee.id} employee={employee} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

TeamSection.displayName = "TeamSection"
