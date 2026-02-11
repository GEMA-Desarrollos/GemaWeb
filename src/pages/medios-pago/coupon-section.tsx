import type { CouponSectionProps } from "./payment-methods.types"

export function CouponSection({ title, description, images }: CouponSectionProps) {
  return (
    <section className="py-8!">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        </div>
        <div className="flex items-center justify-center mb-2">
          <p className="text-center px-4 py-4">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center my-4">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Opciones de pago ${index === 0 ? "en efectivo" : "electrónico"}`}
              className="max-w-full h-auto rounded-3xl shadow-md"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

CouponSection.displayName = "CouponSection"
