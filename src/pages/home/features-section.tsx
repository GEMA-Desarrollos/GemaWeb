import { motion } from "framer-motion"
import { FeatureCard } from "./feature-card"
import { FEATURES } from "./home.constants"
import { useBreakpoint } from "@/hooks"
import { ANIMATIONS } from "./features-section.constants"

export function FeaturesSection() {
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
          <h2 className="text-4xl font-bold text-center mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
            Sistema Gema está diseñado pensando en la experiencia del usuario 
            y la eficiencia operativa.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
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




// import { motion } from "framer-motion"
// import { FeatureCard } from "./feature-card"
// import { FEATURES } from "./home.constants"
// import { useBreakpoint } from "./features-section.hooks"
// import { ANIMATIONS } from "./features-section.constants"

// export function FeaturesSection() {
//   const breakpoint = useBreakpoint()
//   const animations = ANIMATIONS[breakpoint]

//   return (
//     <section className="py-15 bg-gray-50">
//       <div className="container-custom">
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           viewport={{
//             once: true, // Animar solo la primera vez que entra en vista
//             amount: 0.3
//           }}
//           transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
//         >
//           <h2 className="text-4xl font-bold text-center mb-4">
//             Características Principales
//           </h2>
//           <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
//             Sistema Gema está diseñado pensando en la experiencia del usuario 
//             y la eficiencia operativa.
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {FEATURES.map((feature, index) => (
//             <motion.div
//               key={feature.letter}
//               initial={animations[index]} // Animación inicial desde constantes
//               whileInView={{ x: 0, y: 0, opacity: 1 }} // Animar a la posición original
//               viewport={{
//                 once: true, // Animar solo la primera vez que entra en vista
//                 amount: 0.3,
//                 margin: "0px 0px -50px 0px"
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//                 ease: [0.25, 0.46, 0.45, 0.94]
//               }}
//             >
//               <FeatureCard {...feature} />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
