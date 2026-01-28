
import type { Product, Stat, Testimonial, FeatureCardProps } from "./home.types"
import iconSistemaGema from "@/assets/icon-sistema-gema.png"
import iconTurnero from "@/assets/icon-turnero.png"
import iconFeComercios from "@/assets/icon-fe-comercios.png"
import iconTrazabilidad from "@/assets/icon-trazabilidad.png"
import animationPuzzle from "@/assets/animation-puzzle.json"
import animationDB from "@/assets/animation-db.json"
import animationCheck from "@/assets/animation-check.json"
import animationSatellite from "@/assets/animation-satellite.json"

export const PRODUCTS: readonly Product[] = [
  {
    icon: iconSistemaGema,
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
    icon: iconTurnero,
    title: "Turnero Gema",
    description: "Gestión eficiente de turnos independiente integrable con Gema Farmacias.",
    features: [
      "Turnero digital",
      "Integración con Gema",
      "Visor de publicidades o entretenimiento",
    ],
  },
  {
    icon: iconFeComercios,
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
    icon: iconTrazabilidad,
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
    animation: animationCheck,
  },
  {
    letter: "A",
    title: "Adaptable",
    description: "Se ajusta a las necesidades específicas de cada farmacia, sin importar su tamaño o complejidad.",
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
