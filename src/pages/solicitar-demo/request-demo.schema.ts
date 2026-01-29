import { z } from "zod"

export const requestDemoSchema = z.object({
  farmacia: z
    .string()
    .min(1, "El nombre de la farmacia es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  
  cuit: z
    .string()
    .min(1, "El CUIT es requerido")
    .regex(/^\d{2}-\d{8}-\d{1}$/, "Formato de CUIT inválido (XX-XXXXXXXX-X)"),
  
  telefono: z
    .string()
    .min(1, "El teléfono es requerido")
    .min(8, "El teléfono debe tener al menos 8 dígitos"),
  
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("Formato de email inválido"),
  
  horarioDesde: z
    .string()
    .min(1, "Selecciona el horario desde"),
  
  horarioHasta: z
    .string()
    .min(1, "Selecciona el horario hasta"),
  
  nombreContacto: z
    .string()
    .min(1, "El nombre de contacto es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  
  observacion: z
    .string()
    .optional(),
  
  recaptcha: z
    .string()
    .min(1, "Por favor, completa el reCAPTCHA"),
    
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

export type RequestDemoFormData = z.infer<typeof requestDemoSchema>
