import type { Technician } from "./support.types"

export const PAGE_INFO = {
  header: {
    title: "Soporte Técnico",
    subtitle: "Red de técnicos certificados y especializados en Sistema GEMA disponibles en toda Argentina para garantizar el funcionamiento óptimo de tu negocio."
  },
  about: {
    title: "¿Sos técnico?",
    description: 'Si sos técnico informático, tenes experiencia con Sistema Gema y queres que pongamos tus datos en este listado, escribinos un mail con los siguientes datos "Nombre y Apellido", "Teléfono", "Mail" y "Area o Localidad" en que prestarias servicio haciendo click aquí.'
  },
}

export const TECHNICIANS: Technician[] = [
  {
    id: "1",
    name: "Nicolas Filippi",
    phone: "(0351) 156 012 716",
    email: "ngfilippi@gmail.com",
    location: "Córdoba Capital"
  },
  {
    id: "2",
    name: "Mariano Clemente",
    phone: "(0358) 154 014 509",
    email: "marianogcle@hotmail.com",
    location: "Río Cuarto"
  },
  {
    id: "3",
    name: "Dámaris Acevedo",
    phone: "(0358) 155 096 705",
    email: "damybag@gmail.com",
    location: "Río Cuarto"
  },
  {
    id: "4",
    name: "Cristian Carle",
    phone: "(03564) 155 08 868",
    email: "cristiancarle@hotmail.com",
    location: "San Francisco"
  },
  {
    id: "5",
    name: "Gustavo Andres Benites",
    company: "PC FIX Informatica Profesional",
    phone: "(03544) 421015 / 15408754",
    email: "info@pcfix.com.ar",
    location: "Villa Dolores"
  },
  {
    id: "6",
    name: "Sergio Scarioni",
    phone: "(03562) 423738 / 15568420",
    email: "ser510@coopmorteros.com.ar",
    location: "Morteros"
  },
  {
    id: "7",
    name: "Gustavo Reina",
    phone: "(03549) 15437377",
    email: "rgaelectronics@yahoo.com.ar",
    location: "Cruz del Eje"
  },
  {
    id: "8",
    name: "Javier Nieto",
    phone: "(03467) 15499714",
    email: "max@nodosud.com.ar",
    location: "Bell Ville"
  },
  {
    id: "9",
    name: "Marcelo Ponce",
    phone: "(03385) 15688134",
    email: "tecnico@yellowinformatica.com.ar",
    location: "Laboulaye"
  },
  {
    id: "10",
    name: "Guillermo Vergara",
    phone: "(03521) 15649775 / 15441110",
    email: "elsanto52@hotmail.com",
    location: "Deán Funes"
  },
  {
    id: "11",
    name: "Fernando Gonzalez",
    phone: "(0351) 156 513 228",
    email: "infocbaseguridad@gmail.com",
    website: "www.cbaseguridad.dmtienda.com",
    location: "Córdoba Provincia"
  },
  {
    id: "12",
    name: "Ezequiel Oliva",
    phone: "(03574) 15408729",
    email: "ezequiel@geekoweb.com.ar",
    location: "Rio Primero"
  },
  {
    id: "13",
    name: "Juan Sebastián Koch",
    phone: "(03751) 423796",
    email: "johnsebastian_koch@hotmail.es",
    location: "Misiones"
  },
  {
    id: "14",
    name: "Leoncio Eder",
    phone: "(03583) 400647",
    email: "info@asl-solutions.com.ar",
    website: "www.asl-solutions.com.ar",
    location: "Sur de Córdoba"
  }
]
