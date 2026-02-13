import { motion } from "framer-motion"
import type { WhyChooseUsSectionProps } from "./about.types"

export function WhyChooseUsSection({ title, description }: WhyChooseUsSectionProps) {
  return (
    <motion.section
      className="py-16 md:py-20 bg-dark-blue text-white"
      initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 text-center max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </motion.section>
  )
}

WhyChooseUsSection.displayName = "WhyChooseUsSection"
