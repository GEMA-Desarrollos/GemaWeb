import { motion } from "framer-motion"
import { FeatureCard } from "./feature-card"
import { useBreakpoint } from "@/hooks"
import { ANIMATIONS } from "./features-section.constants"
import type { FeaturesSectionProps } from "./home.types"

export function FeaturesSection({ title, description, features }: FeaturesSectionProps) {
  const breakpoint = useBreakpoint()
  const animations = ANIMATIONS[breakpoint]

  return (
    <section className="py-15 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.letter}
              initial={animations[index]}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{
                once: true,
                amount: 0.3,
                margin: "0px 0px -50px 0px"
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
