import imagePattern from "@/assets/image-pattern.webp"
import { EmployeeCard } from "./employee-card"
import type { TeamSectionProps } from "./about.types"
import {motion} from "framer-motion"

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
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          className="pb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground text-center px-4 mb-12 max-w-4xl mx-auto">
            {description}
          </p>
        </motion.div>
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
