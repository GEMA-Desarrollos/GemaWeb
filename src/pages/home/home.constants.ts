
import type { Product, Stat, Testimonial, FeatureCardProps } from "./home.types"
import gemaImg from "@/assets/gema.png"
import turneroImg from "@/assets/turnero.png"
import feComerciosImg from "@/assets/fe-comercios.png"
import trazabilidadImg from "@/assets/trazabilidad.png"
import puzzleAnimation from "@/assets/puzzle.json"
import databaseAnimation from "@/assets/database.json"
import checkAnimation from "@/assets/check.json"
import satelliteAnimation from "@/assets/satellite.json"

export const PRODUCTS: readonly Product[] = [
  {
    icon: gemaImg,
    title: "Sistema Gema",
    description: "Software completo para la administración de farmacias con facturación electrónica integrada.",
    features: [
      "Control de inventario en tiempo real",
      "Facturación electrónica AFIP",
      "Gestión de ventas y compras",
      "Reportes y estadísticas avanzadas",
    ],
  },
  {
    icon: turneroImg,
    title: "Turnero Gema",
    description: "Gestión eficiente de turnos independiente integrable con Gema Farmacias.",
    features: [
      "Turnero digital",
      "Integración con Gema",
      "Visor de publicidades o entretenimiento",
    ],
  },
  {
    icon: feComerciosImg,
    title: "Facturación-E",
    description: "Sistema de gestión con factura electrónica para todo tipo de negocios minoristas.",
    features: [
      "Facturación online sin impresora fiscal",
      "Adaptable a múltiples rubros",
      "Control de stock y ventas",
      "Interfaz intuitiva y moderna",
    ],
  },
  {
    icon: trazabilidadImg,
    title: "Trazabilidad",
    description: "Primer software homologado del país para el seguimiento integral de medicamentos.",
    features: [
      "Cumplimiento normativo ANMAT",
      "Trazabilidad completa de productos",
      "Registro automatizado",
      "Reportes de auditoría",
    ],
  },
] as const

export const FEATURES: readonly FeatureCardProps[] = [
  {
    letter: "S",
    title: "Simple",
    description: "Interfaz intuitiva y fácil de usar. Reduce la curva de aprendizaje y optimiza el tiempo de capacitación.",
    animation: checkAnimation,
  },
  {
    letter: "A",
    title: "Adaptable",
    description: "Se ajusta a las necesidades específicas de cada farmacia, sin importar su tamaño o complejidad.",
    animation: puzzleAnimation,
  },
  {
    letter: "I",
    title: "Innovador",
    description: "Incorporamos tecnología de vanguardia para mantenerte competitivo en el mercado actual.",
    animation: satelliteAnimation,
  },
  {
    letter: "C",
    title: "Confiable",
    description: "Sistema robusto y seguro respaldado por años de experiencia y actualizaciones constantes.",
    animation: databaseAnimation,
  },
] as const

export const STATS: readonly Stat[] = [
  { value: "+1200", label: "Negocios activos" },
  { value: "100%", label: "Soporte nacional" },
  { value: "24/7", label: "Asistencia técnica" },
  { value: "+10", label: "Años de experiencia" },
] as const

export const TESTIMONIALS: readonly Testimonial[] = [
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
    comment: "Implementamos el sistema en nuestras 3 sucursales y la sincronización es perfecta. El soporte técnico siempre está disponible cuando lo necesitamos.",
    rating: 4,
  },
  {
    name: "Ana Martínez",
    role: "Farmacéutica",
    company: "Farmacia San Martín",
    comment: "La interfaz es muy intuitiva, nuestro personal se adaptó en pocos días. Los reportes nos permiten tomar mejores decisiones de compra y gestión.",
    rating: 5,
  },
  // {
  //   name: "Jorge López",
  //   role: "Director",
  //   company: "Cadena FarmaVida",
  //   comment: "Después de probar varios sistemas, Gema fue el único que cumplió todas nuestras expectativas. La trazabilidad de medicamentos es impecable.",
  //   rating: 5,
  // },
  // {
  //   name: "Laura Fernández",
  //   role: "Administradora",
  //   company: "Farmacia Nueva Esperanza",
  //   comment: "Excelente relación calidad-precio. Las actualizaciones constantes y nuevas funcionalidades demuestran el compromiso de GEMA con sus clientes.",
  //   rating: 4,
  // },
  // {
  //   name: "Roberto Sánchez",
  //   role: "Propietario",
  //   company: "Farmacia Salud Total",
  //   comment: "El sistema de turnos integrado mejoró notablemente la experiencia de nuestros clientes. Ya no hay filas ni confusiones, todo fluye perfectamente.",
  //   rating: 5,
  // },
] as const
