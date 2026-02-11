import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import videoHero from "@/assets/video-hero-render.webm"
import { EMPLOYEES, BRANDS } from "@/pages/quienes-somos/about.constanst"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"
import { Button } from "@/components/ui/button"
import { PauseIcon, PlayIcon } from "lucide-react"
import { ContactSection } from "../home/contact-section";
import imagePattern from "@/assets/image-pattern.webp"

export function QuienesSomosPage() {
  const [api, setApi] = useState<CarouselApi>()
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollRef = useRef( AutoScroll({ speed: 1, stopOnInteraction: false, }) )

  useEffect(() => {
    if (!api) {
      return
    }
    const autoScroll = autoScrollRef.current
    if (isPaused) {
      autoScroll.stop()
    } else {
      autoScroll.play()
    }
  }, [api, isPaused])

  return (
    <>
      <section className="relative py-12 sm:py-20 px-0 sm:px-8 text-center overflow-hidden min-h-60 md:min-h-75">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover scale-110 saturate-50"
        >
          <source src={videoHero} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-custom px-4 sm:px-8 max-w-300 mx-auto sm:ml-0 py-0 relative z-10 flex flex-col justify-center sm:justify-end min-h-50 md:min-h-75">
          <div className="text-left text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white min-h-18.75 font-mono">
            Ingeniería e innovación
          </div>
          <div className="">
            <p className="text-xl text-white text-left">
              Desde 2006, Gema impulsa el crecimiento tanto de los desarrolladores como de las empresas que los contratan. Conectamos a los mejores ingenieros de todo el mundo con marcas líderes, adaptando sus habilidades técnicas y su adaptación cultural a los objetivos de cada cliente.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 bg-gray-200">
        <div className="container-custom px-4 ">
          <h2 className="text-4xl font-bold text-center sm:text-right mb-6">Nuestros valores</h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center sm:text-right max-w-4xl mx-auto sm:mr-0 leading-relaxed">
        Nuestra cultura Sigue Avanzando fomenta un entorno único y de apoyo donde los desarrolladores prosperan. Priorizamos el aprendizaje continuo, el acceso a tecnología avanzada, el apoyo al bienestar y las iniciativas con propósito. Esto crea un ecosistema potente que impulsa la innovación del cliente y empodera a los desarrolladores para alcanzar resultados ambiciosos.
          </p>
        </div>
      </section>


      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
          <img 
            src={imagePattern} 
            alt="" 
            className="w-full h-full object-cover object-top-left sm:object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10">
          <div className="pb-4">
            <h2 className="text-4xl font-bold text-center mb-4">Nosotros</h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-4xl mx-auto">
              Un equipo comprometido con la excelencia y la innovación, trabajando juntos para lograr resultados excepcionales.
            </p>
          </div>
          <div className="container-custom flex flex-col gap-12">
            {
              EMPLOYEES.map((employee, index) => (
                <div key={employee.id} className={`flex flex-col gap-0 sm:gap-2 sm:flex-row justify-between ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="relative h-64 w-64 sm:h-80 sm:w-80 mx-auto pointer-events-none select-none">
                    <img src={employee.image} alt={employee.name} className="relative rounded-2xl w-full h-auto z-1" loading="lazy" draggable="false" />
                    <div className="absolute top-0 left-0 h-full w-full rotate-75 bg-lightest-blue rounded-tl-[64px] rounded-br-[64px]" />
                  </div>
                  <div className="w-full sm:w-[65%] flex flex-col justify-center pt-8">
                    <h3 className="mb-4 text-2xl md:text-3xl font-bold">{employee.name}</h3>
                    <h4 className="mb-2 text-xl md:text-2xl font-semibold text-light-blue">{employee.position}</h4>
                    <p className="text-base md:text-lg">{employee.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>


      <motion.section
        className="py-5 bg-dark-blue text-white"
        initial={{ opacity: 0, y: 25, transformPerspective: 1000 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-4">
            Confían en nosotros...
          </h2>
          <p className="text-lg text-white/80 text-center mb-12 max-w-3xl mx-auto">
            Empresas líderes a nivel mundial eligen nuestros servicios y productos
          </p>
          <Carousel
            setApi={setApi}
            plugins={[autoScrollRef.current]}
            opts={{ align: "start", loop: true, dragFree: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {BRANDS.map((brand) => (
                <CarouselItem key={brand.id} className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <div className="flex items-center justify-center p-6 h-32 rounded-lg">
                    <brand.Icon className="w-20 h-20 text-white" aria-label={brand.name} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="w-full flex justify-center sm:justify-end">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => { setIsPaused(!isPaused) }}
              className="ml-4 text-white border-b rounded-full hover:border-white"
              aria-label={isPaused ? "Reanudar" : "Pausar"}
            >
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </Button>
          </div>
        </div>
      </motion.section>

      <ContactSection />
    </>
  )
}
