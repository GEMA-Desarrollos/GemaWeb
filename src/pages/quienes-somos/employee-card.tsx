import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EmployeeCardProps } from "./about.types"

export function EmployeeCard({ employee, index }: EmployeeCardProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex flex-col gap-0 sm:gap-2 sm:flex-row justify-between ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
      <div className="relative h-64 w-64 sm:h-80 sm:w-80 mx-auto pointer-events-none select-none">
        <img 
          src={employee.image} 
          alt={employee.name} 
          className="relative rounded-2xl w-full h-auto z-1" 
          loading="lazy" 
          draggable="false" 
        />
        <div className="absolute top-0 left-0 h-full w-full rotate-75 bg-lightest-blue rounded-tl-[64px] rounded-br-[64px]" />
      </div>
      <div className="w-full sm:w-[65%] flex flex-col justify-center pt-8">
        <h3 className="mb-4 text-2xl md:text-3xl font-bold">{employee.name}</h3>
        <h4 className="mb-2 text-xl md:text-2xl font-semibold text-light-blue">{employee.position}</h4>
        <p className="text-base md:text-lg">{employee.description}</p>
        {employee.email && (
          <Button 
            asChild 
            variant="outline" 
            size="default"
            className="mt-4 w-fit mx-auto sm:mx-0"
          >
            <a href={`mailto:${employee.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contactar
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

EmployeeCard.displayName = "EmployeeCard"
