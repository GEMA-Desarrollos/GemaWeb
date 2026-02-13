import type { ValuesSectionProps } from "./about.types"
import {motion} from "framer-motion"

export function ValuesSection({ title, description }: ValuesSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
      className="py-16 bg-gray-200"
    >
      <div className="container-custom px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-right mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center sm:text-right max-w-4xl mx-auto sm:mr-0 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.section>
  )
}

ValuesSection.displayName = "ValuesSection"