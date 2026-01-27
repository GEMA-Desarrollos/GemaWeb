import { motion } from "framer-motion"
import { AnimatedNumber } from "@/components/shared"
import { STATS } from "./home.constants"
import { parseStatValue } from "./stats-section.utils"

export function StatsSection() {
  return (
    <motion.section
      className="py-15 bg-dark-blue text-white"
      initial={{ opacity: 0, y: 25, transformPerspective: 1000, }}
      whileInView={{ opacity: 1, y: 0, }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], }}
      style={{ transformStyle: "preserve-3d", }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, index) => {
            const { prefix, number, suffix } = parseStatValue(stat.value)

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + index * 0.1,
                }}
              >
                <h3 className="text-5xl font-bold mb-2 flex items-center justify-center">
                  {prefix}
                  <AnimatedNumber value={number} />
                  {suffix}
                </h3>
                <p className="text-lg opacity-90 font-nunito">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
