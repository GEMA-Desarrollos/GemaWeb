import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-15 border-t border-gray-200"
    >
      <div className="container-custom text-center">
        <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Contactanos hoy y descubre cómo nuestras soluciones pueden
          transformar tu negocio.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-md font-semibold transition-all hover:scale-105 mx-auto">
          Solicitar Información
        </button>
      </div>
    </motion.section>
  )
}
