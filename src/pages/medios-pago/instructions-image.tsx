import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import type { InstructionsImageProps } from "./payment-methods.types"

export function InstructionsImage({ src }: InstructionsImageProps) {
  return (
    <section className="py-5!">
      <div className="container-custom">
        <small className="block lg:hidden text-center text-gray-500 mb-2 text-sm">
          click en la imagen para ampliar
        </small>
        <figure>
          <Zoom>
            <img src={src} className="mx-auto max-w-full sm:max-w-[80%] h-auto rounded-3xl shadow-md" loading="lazy" alt="Instrucciones de pago Siro" />
          </Zoom>
        </figure>
      </div>
    </section>
  )
}

InstructionsImage.displayName = "InstructionsImage"
