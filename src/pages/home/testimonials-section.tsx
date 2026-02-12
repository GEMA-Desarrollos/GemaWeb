import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { TestimonialCard } from "./testimonial-card"
import { motion } from "framer-motion"
import { useBreakpoint } from "@/hooks"
import { ANIMATIONS } from "./testimonials-section.constants"
import type { TestimonialsSectionProps } from "./home.types"

export function TestimonialsSection({ title, description, testimonials }: TestimonialsSectionProps) {
  const breakpoint = useBreakpoint()
  const animations = ANIMATIONS[breakpoint]

  return (
    <section className="py-15 bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
        
        {/* Carousel para móvil y tablet */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Carousel
            plugins={[
              Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true, }),
            ]}
            opts={{ align: "start", loop: true, }}
            className="mt-12 lg:hidden"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
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
        </motion.div>

        {/* Grid para desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={animations[index]}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <TestimonialCard key={testimonial.name} {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
