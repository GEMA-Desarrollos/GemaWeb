import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { TestimonialCard } from "./testimonial-card"
import { TESTIMONIALS } from "./home.constants"
import { motion } from "framer-motion"

export function TestimonialsSection() {
  return (
    <section className="py-15 bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{
            // once: breakpoint === 'mobile',
            once: true, // Animar solo la primera vez que entra en vista
            amount: 0.3
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Miles de farmacias y comercios confían en nuestras soluciones.
            Conocé las experiencias de quienes ya transformaron su negocio.
          </p>
        </motion.div>
        
        {/* Carousel para móvil y tablet */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mt-12 lg:hidden"
        >
          <CarouselContent className="-ml-4">
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem 
                key={testimonial.name} 
                className="pl-4 basis-full md:basis-1/2"
              >
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:left-0 top-[55%]" />
          <CarouselNext className="right-0 md:right-0 top-[55%]" />
        </Carousel>

        {/* Grid para desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
