import Lottie from "lottie-react"
import type { FeatureCardProps } from "./home.types"

export function FeatureCard({ letter, title, description, animation }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg text-center border-2 border-transparent hover:border-primary transition-colors">
      {animation ? (
        <div className="w-16 h-16 mx-auto mb-6">
          <Lottie 
            animationData={animation}
            loop={true}
            autoplay={true}
          />
        </div>
      ) : (
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-white text-3xl font-bold">{letter}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}


// import type { FeatureCardProps } from "./home.types"

// export function FeatureCard({ letter, title, description }: FeatureCardProps) {
//   return (
//     <div className="bg-white p-8 rounded-lg text-center border-2 border-transparent hover:border-primary transition-colors">
//       <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
//         <span className="text-white text-3xl font-bold">{letter}</span>
//       </div>
//       <h3 className="text-xl font-semibold mb-3">{title}</h3>
//       <p className="text-muted-foreground leading-relaxed">{description}</p>
//     </div>
//   )
// }
