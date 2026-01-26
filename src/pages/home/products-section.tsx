import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from "./product-card"
import { PRODUCTS } from "./home.constants"
import { motion } from "framer-motion"

export function ProductsSection() {
  return (
    <section id="productos" className="py-15">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Desarrollamos software especializado para la gestión integral de farmacias, 
            adaptándonos a las necesidades específicas de cada establecimiento.
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
            {PRODUCTS.map((product) => (
              <CarouselItem 
                key={product.title} 
                className="pl-4 basis-full md:basis-1/3"
              >
                <ProductCard {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:left-0 top-[55%]" />
          <CarouselNext className="right-0 md:right-0 top-[55%]" />
        </Carousel>

        {/* Grid para desktop con animaciones */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-10 mt-12">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4 + (index * 0.1),
                delay: index * 0.5,
                ease: "easeOut"
              }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
