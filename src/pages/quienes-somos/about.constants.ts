import { IconGoogleBrand, IconWindowsBrand, IconGithubBrand, IconAmdBrand, IconChatgptBrand, IconBitcoinBrand, IconIntelBrand, IconMcdonaldBrand } from "@/components/shared/icons"
import videoHero from "@/assets/video-hero-render.webm"
import type { Employee, Brand, PageInfo } from "./about.types"

export const PAGE_DATA: PageInfo = {
  hero: {
    video: videoHero,
    title: "Ingeniería que impulsa tu negocio", // Más directo
    description: "Desde 2003, en Gema diseñamos soluciones a medida que modernizan y automatizan procesos. Transformamos tus desafíos operativos en ventajas competitivas reales, optimizando costos y potenciando tu crecimiento.",
  },
  ourValues: {
    title: "Nuestros pilares",
    description: "Combinamos dos décadas de experiencia con tecnología de vanguardia. No solo escribimos código, creamos sistemas diseñados para generar resultados tangibles, enfocados en la eficiencia operativa y la escalabilidad de tu empresa."
  },
  team: {
    title: "Nosotros",
    description: "Somos especialistas apasionados por la tecnología y la resolución de problemas complejos. Nos destacamos por nuestra versatilidad y por brindar un acompañamiento integral, asegurándonos de que cada línea de código aporte valor a tu visión."
  },
  trustedBrands: {
    title: "Confían en nosotros",
    description: "Empresas líderes confían en nuestra trayectoria para llevar su operación al siguiente nivel."
  },
  callToAction: {
    title: "¿Impulsamos tu próximo proyecto?",
    description: "Ponemos a tu disposición 20 años de experiencia en desarrollo de primer nivel para potenciar tu éxito con soluciones robustas e innovadoras."
  }
}

export const LIST_EMPLOYEES: Employee[] = [
  {
    id: 1,
    image: "https://www.loremfaces.net/256/id/1.jpg",
    name: "Pagliarone, Marcos",
    position: "Cofundador de Gema y Analista de Sistemas",
    email: "sistemagema@gmail.com",
    description: "Cofundador con más de 20 años liderando la visión tecnológica de Gema. Su enfoque en el análisis de sistemas ha sido el pilar para construir soluciones robustas que siguen evolucionando día a día."
  },
  {
    id: 2,
    image: "https://www.loremfaces.net/256/id/2.jpg",
    name: "Montenegro, Fernando",
    position: "Cofundador de Gema, Técnico Contable y Analista de Sistemas",
    email: "sistemagema@gmail.com",
    description: "Con dos décadas al frente de la empresa, Fernando combina su expertise contable con el análisis de sistemas para garantizar que nuestro software no solo sea técnico, sino una herramienta de gestión eficiente y precisa."
  },
  {
    id: 3,
    image: "https://www.loremfaces.net/256/id/3.jpg",
    name: "Filippi Nicolas",
    position: "Soporte y Atención al Cliente",
    email: "gema.nicolas@hotmail.com",
    description: "Una pieza histórica en la evolución de Gema. Con una trayectoria casi tan extensa como la de sus fundadores, Nico aporta un conocimiento profundo del sistema y una cercanía inigualable con nuestros clientes."
  },
  {
    id: 4,
    image: "https://www.loremfaces.net/256/id/4.jpg",
    name: "Muratore Giuliano",
    position: "Desarrollador de Software",
    email: "gema.giulianomuratore@gmail.com",
    description: "Ingeniero recientemente graduado con un fuerte enfoque en arquitectura y backend. Aporta frescura técnica y una visión analítica clave para la escalabilidad de nuestras plataformas."
  },
  {
    id: 5,
    image: "https://www.loremfaces.net/256/id/1.jpg",
    name: "Gimenez Lucas",
    position: "Desarrollador de software",
    email: "lucas@example.com",
    description: "Programador fullstack con un enfoque integral en velocidad, experiencia de usuario y accesibilidad, asegurando que cada solución sea rápida, intuitiva y funcional para todos los perfiles de usuario."
  },
  {
    id: 6,
    image: "https://www.loremfaces.net/256/id/2.jpg",
    name: "Lemos Gonzalo",
    position: "Team Leader de Soporte",
    email: "gema.gonzalo87@gmail.com",
    description: "Con más de 5 años en el equipo, Gonzalo lidera el área de soporte con un enfoque resolutivo, asegurando que cada cliente reciba asistencia técnica de primer nivel y coordinando el flujo de trabajo del equipo."
  },
  {
    id: 7,
    image: "https://www.loremfaces.net/256/id/3.jpg",
    name: "Boiffier Pedro Alexis",
    position: "Soporte y Desarrollo",
    email: "alexis@example.com",
    description: "Un perfil híbrido y versátil. Alexis conecta las necesidades directas del usuario en soporte con la implementación de mantenimiento y mejoras en el desarrollo de software."
  },
  {
    id: 8,
    image: "https://www.loremfaces.net/256/id/4.jpg",
    name: "Demaria Dayana",
    position: "Soporte y Capacitaciones",
    email: "dayana@example.com",
    description: "Especialista en capacitaciones con un marcado perfil comercial. Dayana se asegura de que cada cliente aproveche al máximo el potencial del sistema, facilitando la adopción tecnológica con claridad y empatía."
  },
  {
    id: 9,
    image: "https://www.loremfaces.net/256/id/1.jpg",
    name: "Fraga Johana",
    position: "Administración",
    email: "johana@example.com",
    description: "Responsable de la gestión administrativa de la empresa, garantizando que los procesos internos fluyan con orden y transparencia para respaldar el crecimiento operativo de Gema."
  },
  {
    id: 10,
    image: "https://www.loremfaces.net/256/id/2.jpg",
    name: "Pigini Luciano",
    position: "Soporte y Atención al Cliente",
    email: "luciano@example.com",
    description: "Dedicado a brindar soluciones rápidas y efectivas, Luciano es parte esencial del equipo de atención, manteniendo altos estándares de satisfacción en el trato diario con nuestros usuarios."
  },
];

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
