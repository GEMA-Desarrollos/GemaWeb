// Configuración del header de la página de solicitud de demo
export const HEADER_CONFIG = {
  title: "Solicitá tu demo",
  subtitle: "Completá el formulario para solicitar una demostración personalizada del sistema GEMA y conocer todas sus funcionalidades."
}

// Configuración del formulario de solicitud de demo
export const FORM_CONFIG = {
  fields: {
    farmacia: {
      label: "Farmacia",
      placeholder: "Nombre de la farmacia",
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
      placeholder: "ejemplo@farmacia.com",
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
    submit: "Enviar solicitud por WhatsApp",
    submitting: "Enviando...",
  },
  messages: {
    success: "¡Solicitud procesada! Redirigiendo a WhatsApp...",
    error: "Ocurrió un error al procesar la solicitud. Por favor, intentá nuevamente.",
  }
}
