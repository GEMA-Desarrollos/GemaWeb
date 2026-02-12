import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { ProductCard } from "./product-card"
import { motion } from "framer-motion"
import type { ProductsSectionProps } from "./home.types"

export function ProductsSection({ title, description, products }: ProductsSectionProps) {
  return (
    <section id="productos" className="py-15! container-custom">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeOut" }}
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
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
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
            {products.map((product) => (
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
      </motion.div>

      {/* Grid para desktop con animaciones */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-10 mt-12">
        {products.map((product, index) => (
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

    </section>
  )
}
