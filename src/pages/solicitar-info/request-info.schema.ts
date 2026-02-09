import { z } from "zod"

// Esquema de validación para el formulario de solicitud de información, utilizando Zod
export const requestInfoSchema = z.object({
  razonSocial: z
    .string()
    .min(1, "El nombre de la razón social es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(20, "El nombre debe tener como máximo 20 caracteres"),
  
  cuit: z
    .string()
    .min(1, "El CUIT es requerido")
    .regex(/^\d{11}$/, "El CUIT debe tener 11 dígitos numéricos"),
  
  telefono: z
    .string()
    .min(1, "El teléfono es requerido")
    .regex(/^\d{10,15}$/, "El teléfono debe contener entre 10 y 15 dígitos"),
  
  email: z
    .string()
    .email("Formato de email inválido")
    .min(1, "El email es requerido")
    .max(50, "El email debe tener como máximo 50 caracteres"),
  
  horarioDesde: z
    .string()
    .min(1, "Selecciona el horario desde"),
  
  horarioHasta: z
    .string()
    .min(1, "Selecciona el horario hasta"),
  
  nombreContacto: z
    .string()
    .min(1, "El nombre de contacto es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre debe tener como máximo 50 caracteres"),
  
  observacion: z
    .string()
    .max(100, "La observación debe tener como máximo 100 caracteres")
    .optional()
  
  // recaptcha: z
  //   .string()
  //   .min(1, "Por favor, completa el reCAPTCHA"),
    
}).refine((data) => {
  // Validación personalizada: horario hasta > horario desde
  if (data.horarioDesde && data.horarioHasta) {
    return data.horarioHasta > data.horarioDesde
  }
  return true
}, {
  message: "El horario 'hasta' debe ser mayor que el horario 'desde'",
  path: ["horarioHasta"],
})

// Tipo inferido de Zod - también disponible en request-info.types.ts
export type RequestInfoFormData = z.infer<typeof requestInfoSchema>