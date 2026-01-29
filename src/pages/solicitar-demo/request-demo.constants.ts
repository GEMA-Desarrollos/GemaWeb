export const HEADER_CONFIG = {
  title: "Solicitá tu demo",
  subtitle: "Completá el formulario para solicitar una demostración personalizada del sistema GEMA y conocer todas sus funcionalidades."
}

export const FORM_CONFIG = {
  fields: {
    farmacia: {
      label: "Farmacia",
      placeholder: "Nombre de la farmacia",
    },
    cuit: {
      label: "CUIT",
      placeholder: "20-12345678-9",
    },
    telefono: {
      label: "Teléfono",
      placeholder: "+54 9 11 1234-5678",
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
    submit: "Enviar solicitud",
    submitting: "Enviando...",
  },
  messages: {
    success: "¡Solicitud enviada exitosamente! Nos pondremos en contacto a la brevedad.",
    error: "Ocurrió un error al enviar la solicitud. Por favor, intentá nuevamente.",
  }
}
