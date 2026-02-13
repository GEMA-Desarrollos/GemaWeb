import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { IconUserAvatar } from "@/components/shared/icons"
import type { EmployeeCardProps } from "./about.types"
import {motion} from "framer-motion"

export function EmployeeCard({ employee, index }: EmployeeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y:30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1], }}
      className={`flex flex-col gap-0 sm:gap-2 sm:flex-row justify-between ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
    >
      <div className="relative h-54 w-54 sm:h-50 sm:w-50 lg:h-70 lg:w-70 m-auto pointer-events-none select-none">
        {employee.image ? (
          <img src={employee.image} alt={employee.name} className="relative rounded-2xl w-full h-auto z-1" loading="lazy" draggable="false" />
        ) : (
          <div className="relative rounded-2xl w-full h-full bg-gray-300 flex items-center justify-center z-1">
            <IconUserAvatar className="w-42 h-42 lg:w-50 lg:h-50 text-white" />
          </div>
        )}
        <div className="absolute top-0 left-0 h-full w-full rotate-75 bg-lightest-blue rounded-tl-[64px] rounded-br-[64px]" />
      </div>
      <div className="w-full sm:w-[65%] flex flex-col justify-center pt-8">
        <h3 className="mb-4 text-2xl md:text-3xl font-bold">{employee.name}</h3>
        <h4 className="mb-2 text-xl md:text-2xl font-semibold text-light-blue">{employee.position}</h4>
        <p className="text-base md:text-lg">{employee.description}</p>
        {employee.email && (
          <Button asChild variant="outline" size="default" className="mt-4 w-fit mx-auto sm:mx-0" >
            <a href={`mailto:${employee.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contactar
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

EmployeeCard.displayName = "EmployeeCard"
