import { CONTACT_INFO } from "@/components/shared"

// Configuración del header de la página de contacto
export const PAGE_INFO = {
  title: "Contacto",
  subtitle: "Agradecemos tu interés en nuestros servicios. Completá el formulario para solicitar información personalizada sobre nuestros productos, cotizaciones o consultas generales, y nuestro equipo se pondrá en contacto con vos a la brevedad para brindarte toda la información que necesites.",
  address: `Nos encontramos en ${CONTACT_INFO.shortAddress}, en el corazón de Córdoba Capital. Visitanos de ${CONTACT_INFO.schedule[0]} o los ${CONTACT_INFO.schedule[1]}. También podés contactarnos por teléfono al ${CONTACT_INFO.phones.main.join(" / ")}, o a través de nuestra ${CONTACT_INFO.schedule[2]}.`,
  mapsUrl: CONTACT_INFO.mapsUrl,
}

// Configuración del formulario de contacto
export const FORM_CONFIG = {
  fields: {
    razonSocial: {
      label: "Razón Social",
      placeholder: "Nombre de tu empresa o razón social",
    },
    cuit: {
      label: "CUIT",
      placeholder: "20123456789 (solo números)",
    },
    telefono: {
      label: "Teléfono",
      placeholder: "3511234567 (solo números)",
    },
    email: {
      label: "Email",
      placeholder: "ejemplo@empresa.com",
    },
    horarioDesde: {
      label: "Horario de contacto (Desde)",
      placeholder: "Seleccionar horario",
    },
    horarioHasta: {
      label: "Horario de contacto (Hasta)",
      placeholder: "Seleccionar horario",
    },
    nombreContacto: {
      label: "Nombre de Contacto",
      placeholder: "Nombre completo",
    },
    observacion: {
      label: "Observación",
      placeholder: "Comentarios adicionales o consultas...",
    },
  },
  horarios: [
    "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
    "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00",
  ],
  buttons: {
    submit: "Enviar solicitud",
    submitting: "Enviando...",
  },
  messages: {
    success: "Redirigiendo a WhatsApp...",
    error: "Ocurrió un error al procesar la solicitud. Por favor, intentá nuevamente.",
  }
}
