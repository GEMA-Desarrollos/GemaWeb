import { Controller } from "react-hook-form"
// import ReCAPTCHA from "react-google-recaptcha"
import { PAGE_INFO, FORM_CONFIG } from "./contact.constants"
import { useContactForm } from "./contact.hooks"
// import { useRecaptcha } from "./use-recaptcha.hooks"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Card, CardContent } from "@/components/ui/card"
import { IconWhatsappSocial } from "@/components/shared/icons"

export function ContactoPage() {
  const {
    form: { register, control, handleSubmit, formState: { errors, isSubmitting } },
    submitStatus,
    handleCuitChange,
    handleTelefonoChange,
    onSubmit,
  } = useContactForm()

  /*
  // Pendiente activar reCAPTCHA, descomenta:
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  const { recaptchaRef, handleRecaptchaChange, resetRecaptcha } = useRecaptcha({ setValue: form.setValue, onTokenChange: (token) => { console.log("reCAPTCHA token:", token ? "✓" : "✗") } })
  */

  return (
    <article className="pt-15!">
      <header className="py-2 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {PAGE_INFO.title}
            </h1>
            <p className="text-lg sm:text-xl mb-6">
              {PAGE_INFO.subtitle}
            </p>
          </div>
        </div>
      </header>

      <section className="dotsPattern py-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <Field>
                    <FieldLabel htmlFor="razonSocial">
                      {FORM_CONFIG.fields.razonSocial.label}
                      <span className="text-destructive">*</span>
                    </FieldLabel>
                    <Input
                      id="razonSocial"
                      type="text"
                      placeholder={FORM_CONFIG.fields.razonSocial.placeholder}
                      aria-invalid={!!errors.razonSocial}
                      disabled={isSubmitting}
                      maxLength={20}
                      {...register("razonSocial")}
                    />
                    {errors.razonSocial && (
                      <FieldError errors={[{ message: errors.razonSocial.message }]} />
                    )}
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="cuit">
                      {FORM_CONFIG.fields.cuit.label}
                      <span className="text-destructive">*</span>
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
                        <span className="text-destructive">*</span>
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
                        <span className="text-destructive">*</span>
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
                        <span className="text-destructive">*</span>
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
                        <span className="text-destructive">*</span>
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
                      <span className="text-destructive">*</span>
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
                      <IconWhatsappSocial className="inline-flex mr-2" />
                      {isSubmitting ? FORM_CONFIG.buttons.submitting : FORM_CONFIG.buttons.submit}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative w-full -mx-[50vw] left-1/2 right-1/2 pt-10">
        <div className="text-center mb-6 px-4 sm:max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Nuestra Ubicación
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
          {PAGE_INFO.address}
          </p>
        </div>
        <iframe
          width="100%"
          height="450"
          loading="lazy"
          src={PAGE_INFO.mapsUrl}
        ></iframe>
      </section>
    </article>
  )
}