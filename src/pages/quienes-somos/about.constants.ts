import { 
  IconGoogleBrand, 
  IconWindowsBrand, 
  IconGithubBrand, 
  IconAmdBrand, 
  IconChatgptBrand, 
  IconBitcoinBrand, 
  IconIntelBrand, 
  IconMcdonaldBrand 
} from "@/components/shared/icons"
import videoHero from "@/assets/video-hero-render.webm"
import type { Employee, Brand, PageInfo } from "./about.types"

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    image: "https://www.loremfaces.net/256/id/1.jpg",
    name: "Amit Sion",
    position: "Chief Executive Officer",
    description: "Amit es una líder creativo, visionaria y decidida, con un historial probado de integración y elevación de estrategias de salida al mercado que impulsan ingresos y crecimiento de clientes, incluso mientras navega por incertidumbres económicas y periodos de crecimiento. Es un líder de opinión reconocido en la industria y un ponente muy solicitado sobre temas como el trabajo remoto, la ampliación de equipos tecnológicos y el futuro del trabajo en un panorama digital en rápida evolución."
  },
  {
    id: 2,
    image: "https://www.loremfaces.net/256/id/2.jpg",
    name: "Aschwin Beurskens",
    position: "Chief Strategy Officer",
    description: "Un veterano de la industria de servicios profesionales, Aschwin aporta casi 30 años de experiencia en el crecimiento y la maduración de capacidades digitales para empresas globales. Habiendo ocupado roles de liderazgo en Oracle, Wipro, Marsh & McLennan y Thoughtworks, Aschwin ha demostrado éxito en la escalabilidad de negocios y la construcción de equipos de alto rendimiento."
  },
  {
    id: 3,
    image: "https://www.loremfaces.net/256/id/3.jpg",
    name: "Josh Johnston",
    position: "CTO",
    description: "Josh es un líder técnico con más de dos décadas de experiencia en la construcción de sistemas web resilientes e innovadores. Como pionero y defensor del trabajo remoto y los equipos de software distribuidos, siempre está ansioso por aprender sobre la intersección entre la excelencia técnica y el equilibrio entre la vida laboral y personal del equipo y la organización que lo construye."
  },
  {
    id: 4,
    image: "https://www.loremfaces.net/256/id/4.jpg",
    name: "Jane Smith",
    position: "Chief Marketing Officer",
    description: "Jane es una ejecutiva de marketing dinámica con más de 15 años de experiencia en estrategia de marca, marketing digital y compromiso con el cliente. Tiene un historial comprobado de impulsar el crecimiento y construir identidades de marca sólidas."
  },
  {
    id: 5,
    image: "https://www.loremfaces.net/256/id/5.jpg",
    name: "Sarah Prelorenzo",
    position: "Chief Financial Officer",
    description: "Sarah es una líder financiera estratégica con un enfoque transformador y un historial comprobado en la posicionamiento de organizaciones para un crecimiento acelerado. Su experiencia va más allá de los roles financieros tradicionales, abarcando fusiones y adquisiciones, cumplimiento, gestión de riesgos, estrategia fiscal global y derecho laboral en Australia, Canadá y Estados Unidos."
  },
  {
    id: 6,
    image: "https://www.loremfaces.net/256/id/1.jpg",
    name: "Gemma Versace",
    position: "Chief Client Officer",
    description: "Gemma es una líder global de ventas con 18 años de éxito en los sectores de tecnología de gestión de personal y fuerza laboral. Ha liderado equipos globales de ventas, éxito del cliente y asociaciones para algunas de las marcas más icónicas del mundo."
  },
]

export const BRANDS: Brand[] = [
  { id: 1, Icon: IconGoogleBrand, name: "Google" },
  { id: 2, Icon: IconWindowsBrand, name: "Windows" },
  { id: 3, Icon: IconGithubBrand, name: "GitHub" },
  { id: 4, Icon: IconAmdBrand, name: "AMD" },
  { id: 5, Icon: IconChatgptBrand, name: "ChatGPT" },
  { id: 6, Icon: IconBitcoinBrand, name: "Bitcoin" },
  { id: 7, Icon: IconIntelBrand, name: "Intel" },
  { id: 8, Icon: IconMcdonaldBrand, name: "McDonald's" },
]

export const PAGE_INFO: PageInfo = {
  hero: {
    title: "Ingeniería e innovación",
    description: "Desde 2006, Gema impulsa el crecimiento tanto de los desarrolladores como de las empresas que los contratan. Conectamos a los mejores ingenieros de todo el mundo con marcas líderes, adaptando sus habilidades técnicas y su adaptación cultural a los objetivos de cada cliente.",
    video: videoHero
  },
  values: {
    title: "Nuestros valores",
    description: "Nuestra cultura Sigue Avanzando fomenta un entorno único y de apoyo donde los desarrolladores prosperan. Priorizamos el aprendizaje continuo, el acceso a tecnología avanzada, el apoyo al bienestar y las iniciativas con propósito. Esto crea un ecosistema potente que impulsa la innovación del cliente y empodera a los desarrolladores para alcanzar resultados ambiciosos."
  },
  team: {
    title: "Nosotros",
    description: "Un equipo comprometido con la excelencia y la innovación, trabajando juntos para lograr resultados excepcionales."
  },
  trustedBrands: {
    title: "Confían en nosotros...",
    description: "Empresas líderes a nivel mundial eligen nuestros servicios y productos"
  }
}
