import { motion } from "framer-motion"
import {Button} from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import type { CallToActionSectionProps } from "./home.types";

export function CallToActionSection({ title, description }: CallToActionSectionProps) {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="py-15 border-t border-gray-200"
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground mb-8">
          {description}
        </p>
        <Button
          size="lg"
          variant="default"
          className="cursor-pointer px-8 py-6 text-lg transition-all hover:scale-105"
          onClick={() => navigate("/contacto")}
        >
          Solicitar Información
        </Button>
      </div>
    </motion.section>
  )
}
