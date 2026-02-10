import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "./contact.schema"
import { filterOnlyNumbers } from "./contact.utils"
import type { contactFormData, contactPayload, SubmitStatus } from "./contact.types"

/**
 * Hook personalizado para el formulario de solicitud de información.
 * Encapsula toda la lógica del formulario incluyendo validación,
 * handlers de inputs y submit
 */
export function useContactForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("")

  const form = useForm<contactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      razonSocial: "",
      cuit: "",
      telefono: "",
      email: "",
      horarioDesde: "",
      horarioHasta: "",
      nombreContacto: "",
      observacion: "",
    },
  })

  const { setValue, reset } = form

  // Handler para input de CUIT para filtrar solo números
  const handleCuitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("cuit", filtered, { shouldValidate: true })
  }

  // Handler para input de teléfono para filtrar solo números
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("telefono", filtered, { shouldValidate: true })
  }

  // Handler para abrir el link de WhatsApp y resetear el formulario despues de 10 segundos
  const handleSuccessRedirect = (resultLink: string) => {
    setTimeout(() => {
      window.open(resultLink, "_blank")
      reset()
      setTimeout(() => {
        setSubmitStatus("")
      }, 10000)
    }, 1500)
  }

  // Handler para el envío del formulario, que incluye la llamada a la API y la redirección a WhatsApp
  const onSubmit = async (data: contactFormData) => {
    setSubmitStatus("")
    try {
      const payload: contactPayload = {
        razonSocial: data.razonSocial,
        cuit: data.cuit,
        telefono: data.telefono,
        email: data.email,
        horarioContacto: `${data.horarioDesde} - ${data.horarioHasta}`,
        nombreContacto: data.nombreContacto,
        observaciones: data.observacion || "",
      }

      const response = await fetch(`/api/Info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const resultLink: string = await response.text()
      setSubmitStatus("success")
      handleSuccessRedirect(resultLink)
    } catch (error) {
      console.error("Error al enviar formulario:", error)
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("")
      }, 5000)
    }
  }

  return {
    form,
    submitStatus,
    handleCuitChange,
    handleTelefonoChange,
    onSubmit,
  }
}
