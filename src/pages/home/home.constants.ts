
import type { Product, Stat, Testimonial, FeatureCardProps, PageInfo } from "./home.types"
import iconSistemaGema from "@/assets/icon-sistema-gema.png"
import iconTurnero from "@/assets/icon-turnero.png"
import iconFeComercios from "@/assets/icon-fe-comercios.png"
import iconTrazabilidad from "@/assets/icon-trazabilidad.png"
import animationPuzzle from "@/assets/animation-puzzle.json"
import animationDB from "@/assets/animation-db.json"
import animationCheck from "@/assets/animation-check.json"
import animationSatellite from "@/assets/animation-satellite.json"
import videoHero from "@/assets/video-hero.webm";
import { Headset } from "lucide-react"


export const PAGE_DATA: PageInfo = {
  hero: {
    video: videoHero,
    title: "Software que Impulsa tu Negocio",
    description: "Soluciones tecnológicas innovadoras y escalables, diseñadas para optimizar tus procesos y acelerar el crecimiento de tu empresa.",
  },
  products: {
    title: "Nuestros Productos",
    description: "Desarrollamos software especializado para la gestión integral de negocios, adaptándonos a las necesidades específicas de cada establecimiento."
  },
  stats: {
    title: "Características Principales",
    description: "Sistema Gema está diseñado pensando en la experiencia del usuario y la eficiencia operativa."
  },
  testimonials: {
    title: "Lo que dicen nuestros clientes",
    description: "Miles de empresas confían en nuestras soluciones. Conocé las experiencias de quienes ya transformaron su negocio."
  },
  callToAction: {
    title: "¿Listo para comenzar?",
    description: "En Gema te ofrecemos desarrollados de primer nivel para potenciar tu éxito, rompiendo límites, impulsando la innovación y entregando resultados extraordinarios."
  }
}

export const LIST_PRODUCTS: readonly Product[] = [
  {
    icon: iconSistemaGema,
    title: "Sistema Gema",
    description: "Software completo para la administración de negocios con facturación, control de inventario en tiempo real y reportes avanzados.",
    features: [
      "Control de stock y precios",
      "Facturación electrónica AFIP",
      "Gestión completa desde un único sistema",
      "Centralización de múltiples sucursales"
    ],
  },
  {
    icon: iconTurnero,
    title: "Turnero Gema",
    description: "Sistema de gestión de turnos digital que elimina filas y organiza la atención al cliente de forma eficiente.",
    features: [
      "Turnos por DNI, CUIL o número secuencial",
      "Llamá a tus clientes desde el sistema",
      "Visor de publicidades o entretenimiento",
      "Mejora la organización y la experiencia del cliente",
    ],
  },
  {
    icon: iconFeComercios,
    title: "Facturación-E",
    description: "Sistema integrado con facturación electrónica.",
    features: [
      "Facturación online sin impresora fiscal",
      "Ahorra en papeleria y almacenaje",
      "Genera credibilidad y demuestra formalidad",
    ],
  },
  {
    icon: iconTrazabilidad,
    title: "Trazabilidad",
    description: "Primer software homologado del país en trazabilidad de medicamentos.",
    features: [
      "Cumplimiento normativo ANMAT",
      "Registro automatizado",
    ],
  },
] as const

export const LIST_FEATURES: readonly FeatureCardProps[] = [
  {
    letter: "S",
    title: "Simple",
    description: "Interfaz intuitiva y fácil de usar. Reduce la curva de aprendizaje y optimiza el tiempo de capacitación.",
    animation: animationCheck,
  },
  {
    letter: "A",
    title: "Adaptable",
    description: "Se ajusta a las necesidades específicas de cada negocio, sin importar su tamaño o complejidad.",
    animation: animationPuzzle,
  },
  {
    letter: "I",
    title: "Innovador",
    description: "Incorporamos tecnología de vanguardia para mantenerte competitivo en el mercado actual.",
    animation: animationSatellite,
  },
  {
    letter: "C",
    title: "Confiable",
    description: "Sistema robusto y seguro respaldado por años de experiencia y actualizaciones constantes.",
    animation: animationDB,
  },
] as const

export const LIST_STATS: readonly Stat[] = [
  { value: "+1200", label: "Negocios activos" },
  { value: "100%", label: "Soporte nacional" },
  { value: undefined, label: "Asistencia técnica", icon: Headset },
  { value: "+20", label: "Años de experiencia" },
] as const

export const LIST_TESTIMONIALS: readonly Testimonial[] = [
  {
    name: "María González",
    role: "Propietaria",
    company: "Farmacia del Centro",
    comment: "Gema revolucionó completamente la gestión de nuestra farmacia. La facturación electrónica y el control de stock en tiempo real nos ahorraron horas de trabajo diario.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente",
    company: "Farmacias del Sur",
    comment: "Implementamos el sistema de turnos en nuestras 3 sucursales y mejoró notablemente la experiencia de nuestros clientes. Ya no hay filas ni confusiones, todo fluye con orden y eficiencia.",
    rating: 4,
  },
  {
    name: "Ana Martínez",
    role: "Farmacéutica",
    company: "Farmacia San Martín", 
    comment: "El sistema de Trazabilidad fue un gran acierto. El sistema nos quitó un peso enorme, ahora cumplimos con todas las regulaciones sin complicaciones",
    rating: 5,
  },
] as const
