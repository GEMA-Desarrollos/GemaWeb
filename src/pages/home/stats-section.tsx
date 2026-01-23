import { STATS } from "./home.constants"
import AnimatedNumber from "react-animated-numbers"
import { useStatsVisibility } from "./stats-section.hooks"
import { parseStatValue } from "./stats-section.utils"

export function StatsSection() {
  const { isVisible, sectionRef } = useStatsVisibility()

  return (
    <section ref={sectionRef} className="py-15 bg-dark-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {/* {STATS.map((stat) => {
            const { prefix, number, suffix } = parseStatValue(stat.value)
            
            return (
              <div key={stat.label}>
                <h3 className="text-5xl font-bold mb-2 flex items-center justify-center">
                  {prefix}
                  {isVisible ? (
                    <AnimatedNumber
                      transitions={(index) => ({
                        type: "spring",
                        duration: index + 0.2,
                      })}
                      animateToNumber={number}
                      fontStyle={{
                        fontSize: "inherit",
                        fontWeight: "inherit",
                      }}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  {suffix}
                </h3>
                <p className="text-lg opacity-90 font-nunito">{stat.label}</p>
              </div>
            )
          })} */}

          {/*  version estatica */}
          {STATS.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold mb-2 flex items-center justify-center">
                {stat.value}
              </h3>
              <p className="text-lg opacity-90 font-nunito">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}