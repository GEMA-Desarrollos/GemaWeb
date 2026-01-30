import { useState, useRef } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
// import ReCAPTCHA from "react-google-recaptcha"
import { HEADER_CONFIG, FORM_CONFIG, API_CONFIG } from "./request-demo.constants"
import { requestDemoSchema, type RequestDemoFormData, type DemoRequestPayload } from "./request-demo.schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Card, CardContent } from "@/components/ui/card"
import { WhatsappIcon } from "@/components/shared/icons"


export function SolicitarDemoPage() {
  const [submitStatus, setSubmitStatus] = useState<string>("")
  // const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { register, control, handleSubmit, setValue, formState: { errors, isSubmitting }, reset, } = useForm<RequestDemoFormData>({ resolver: zodResolver(requestDemoSchema), defaultValues: { farmacia: "",
    cuit: "",
    telefono: "",
    email: "",
    horarioDesde: "",
    horarioHasta: "",
    nombreContacto: "",
    observacion: "",
    // recaptcha: "",
  }, })
  // const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

  // Función para filtrar solo números
  const filterOnlyNumbers = (value: string): string => {
    return value.replace(/[^0-9]/g, "")
  }

  // Handler para CUIT - solo números
  const handleCuitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("cuit", filtered, { shouldValidate: true })
  }

  // Handler para teléfono - solo números
  const handleTelefonoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filtered = filterOnlyNumbers(e.target.value)
    setValue("telefono", filtered, { shouldValidate: true })
  }

  const onSubmit = async (data: RequestDemoFormData) => {
    setSubmitStatus("")

    try {
      // consumir la API
      const response = await fetch(`${API_CONFIG.baseUrl}/Demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          farmacia: data.farmacia,
          cuit: data.cuit,
          telefono: data.telefono,
          email: data.email,
          horarioContacto: `${data.horarioDesde} - ${data.horarioHasta}`,
          nombreContacto: data.nombreContacto,
          observaciones: data.observacion || "",
        } as DemoRequestPayload),
      } as RequestInit)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const resultLink: string = await response.text()

      // Redirigir a WhatsApp después de 1.5 segundos
      setTimeout(() => {
        window.open(resultLink, "_blank")
        reset()
        setSubmitStatus("")
      }, 1500)
    } catch (error) {
      console.error("Error al enviar formulario:", error)
      setSubmitStatus("error")
      // // Resetear reCAPTCHA en caso de error
      // recaptchaRef.current?.reset()
      
      // Limpiar mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus("")
      }, 5000)
    }
  }

  // const handleRecaptchaChange = (token: string | null) => {
  //   setValue("recaptcha", token || "", { 
  //     shouldValidate: true 
  //   })
  // }

  return (
    <article className="py-15! container-custom">
      <header>
        <div className="container mx-auto px-4 py-2 sm:py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {HEADER_CONFIG.title}
            </h1>
            <p className="text-xl sm:text-2xl mb-6">
              {HEADER_CONFIG.subtitle}
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Field>
                  <FieldLabel htmlFor="farmacia">
                    {FORM_CONFIG.fields.farmacia.label}
                    <span className="text-destructive ml-1">*</span>
                  </FieldLabel>
                  <Input
                    id="farmacia"
                    type="text"
                    placeholder={FORM_CONFIG.fields.farmacia.placeholder}
                    aria-invalid={!!errors.farmacia}
                    disabled={isSubmitting}
                    maxLength={20}
                    {...register("farmacia")}
                  />
                  {errors.farmacia && (
                    <FieldError errors={[{ message: errors.farmacia.message }]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="cuit">
                    {FORM_CONFIG.fields.cuit.label}
                    <span className="text-destructive ml-1">*</span>
                  </FieldLabel>
                  <Input
                    id="cuit"
                    type="text"
                    inputMode="numeric"
                    placeholder={FORM_CONFIG.fields.cuit.placeholder}
                    aria-invalid={!!errors.cuit}
                    disabled={isSubmitting}
                    {...register("cuit")}
                    onChange={handleCuitChange}
                    maxLength={11}
                  />
                  {errors.cuit && (
                    <FieldError errors={[{ message: errors.cuit.message }]} />
                  )}
                </Field>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="telefono">
                      {FORM_CONFIG.fields.telefono.label}
                      <span className="text-destructive ml-1">*</span>
                    </FieldLabel>
                    <Input
                      id="telefono"
                      type="tel"
                      inputMode="numeric"
                      placeholder={FORM_CONFIG.fields.telefono.placeholder}
                      aria-invalid={!!errors.telefono}
                      disabled={isSubmitting}
                      {...register("telefono")}
                      onChange={handleTelefonoChange}
                      maxLength={15}
                    />
                    {errors.telefono && (
                      <FieldError errors={[{ message: errors.telefono.message }]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">
                      {FORM_CONFIG.fields.email.label}
                      <span className="text-destructive ml-1">*</span>
                    </FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder={FORM_CONFIG.fields.email.placeholder}
                      aria-invalid={!!errors.email}
                      disabled={isSubmitting}
                      maxLength={50}
                      {...register("email")}
                    />
                    {errors.email && (
                      <FieldError errors={[{ message: errors.email.message }]} />
                    )}
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel htmlFor="horarioDesde">
                      {FORM_CONFIG.fields.horarioDesde.label}
                      <span className="text-destructive ml-1">*</span>
                    </FieldLabel>
                    <Controller
                      name="horarioDesde"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger 
                            id="horarioDesde"
                            aria-invalid={!!errors.horarioDesde}
                          >
                            <SelectValue placeholder={FORM_CONFIG.fields.horarioDesde.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {FORM_CONFIG.horarios.map((horario) => (
                              <SelectItem key={horario} value={horario}>
                                {horario}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.horarioDesde && (
                      <FieldError errors={[{ message: errors.horarioDesde.message }]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="horarioHasta">
                      {FORM_CONFIG.fields.horarioHasta.label}
                      <span className="text-destructive ml-1">*</span>
                    </FieldLabel>
                    <Controller
                      name="horarioHasta"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          disabled={isSubmitting}
                          
                        >
                          <SelectTrigger 
                            id="horarioHasta"
                            aria-invalid={!!errors.horarioHasta}
                          >
                            <SelectValue placeholder={FORM_CONFIG.fields.horarioHasta.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {FORM_CONFIG.horarios.map((horario) => (
                              <SelectItem key={horario} value={horario}>
                                {horario}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.horarioHasta && (
                      <FieldError errors={[{ message: errors.horarioHasta.message }]} />
                    )}
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="nombreContacto">
                    {FORM_CONFIG.fields.nombreContacto.label}
                    <span className="text-destructive ml-1">*</span>
                  </FieldLabel>
                  <Input
                    id="nombreContacto"
                    type="text"
                    placeholder={FORM_CONFIG.fields.nombreContacto.placeholder}
                    aria-invalid={!!errors.nombreContacto}
                    disabled={isSubmitting}
                    maxLength={50}
                    {...register("nombreContacto")}
                  />
                  {errors.nombreContacto && (
                    <FieldError errors={[{ message: errors.nombreContacto.message }]} />
                  )}
                </Field>

                <Field>
                  <FieldLabel htmlFor="observacion">
                    {FORM_CONFIG.fields.observacion.label}
                  </FieldLabel>
                  <Textarea
                    id="observacion"
                    placeholder={FORM_CONFIG.fields.observacion.placeholder}
                    rows={4}
                    disabled={isSubmitting}
                    maxLength={100}
                    {...register("observacion")}
                  />
                </Field>

                {/* <Field>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={recaptchaKey || ""}
                      onChange={handleRecaptchaChange}
                      onExpired={() => setValue("recaptcha", "")}
                      onErrored={() => setValue("recaptcha", "")}
                    />
                  </div>
                  {errors.recaptcha && (
                    <FieldError errors={[{ message: errors.recaptcha.message }]} />
                  )}
                </Field> */}

                {submitStatus === "success" && (
                  <div 
                    className="p-4 rounded-md bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                    role="alert"
                  >
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      {FORM_CONFIG.messages.success}
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div 
                    className="p-4 rounded-md bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
                    role="alert"
                  >
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      {FORM_CONFIG.messages.error}
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-50 cursor-pointer bg-whatsapp-green hover:bg-whatsapp-green/80"
                  >
                    <WhatsappIcon className="inline-flex mr-2" />
                    {isSubmitting ? FORM_CONFIG.buttons.submitting : FORM_CONFIG.buttons.submit}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </article>
  )
}