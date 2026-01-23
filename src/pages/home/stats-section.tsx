import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { STATS } from "./home.constants"
import { parseStatValue } from "./stats-section.utils"

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const spring = useSpring(0, {
    bounce: 0,
    duration: 2000,
  })
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return <motion.span ref={ref}>{display}</motion.span>
}

export function StatsSection() {
  return (
    <section className="py-15 bg-dark-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat) => {
            const { prefix, number, suffix } = parseStatValue(stat.value)
            
            return (
              <div key={stat.label}>
                <h3 className="text-5xl font-bold mb-2 flex items-center justify-center">
                  {prefix}
                  <AnimatedNumber value={number} />
                  {suffix}
                </h3>
                <p className="text-lg opacity-90 font-nunito">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}