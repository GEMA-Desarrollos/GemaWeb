import { Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Card, CardContent } from "@/components/ui/card"
import { IconWhatsappSocial } from "@/components/shared/icons"
import { FORM_CONFIG } from "./contact.constants"
import type { ContactFormProps } from "./contact.types"

export function ContactForm({
  form,
  submitStatus,
  handleCuitChange,
  handleTelefonoChange,
  onSubmit,
}: ContactFormProps) {
  const { register, control, handleSubmit, formState } = form

  return (
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
                    aria-invalid={!!formState.errors.razonSocial}
                    disabled={formState.isSubmitting}
                    maxLength={20}
                    {...register("razonSocial")}
                  />
                  {formState.errors.razonSocial && (
                    <FieldError errors={[{ message: formState.errors.razonSocial.message }]} />
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
                    aria-invalid={!!formState.errors.cuit}
                    disabled={formState.isSubmitting}
                    {...register("cuit")}
                    onChange={handleCuitChange}
                    maxLength={11}
                  />
                  {formState.errors.cuit && (
                    <FieldError errors={[{ message: formState.errors.cuit.message }]} />
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
                      aria-invalid={!!formState.errors.telefono}
                      disabled={formState.isSubmitting}
                      {...register("telefono")}
                      onChange={handleTelefonoChange}
                      maxLength={15}
                    />
                    {formState.errors.telefono && (
                      <FieldError errors={[{ message: formState.errors.telefono.message }]} />
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
                      aria-invalid={!!formState.errors.email}
                      disabled={formState.isSubmitting}
                      maxLength={50}
                      {...register("email")}
                    />
                    {formState.errors.email && (
                      <FieldError errors={[{ message: formState.errors.email.message }]} />
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
                          disabled={formState.isSubmitting}
                        >
                          <SelectTrigger 
                            id="horarioDesde"
                            aria-invalid={!!formState.errors.horarioDesde}
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
                    {formState.errors.horarioDesde && (
                      <FieldError errors={[{ message: formState.errors.horarioDesde.message }]} />
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
                          disabled={formState.isSubmitting}
                        >
                          <SelectTrigger 
                            id="horarioHasta"
                            aria-invalid={!!formState.errors.horarioHasta}
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
                    {formState.errors.horarioHasta && (
                      <FieldError errors={[{ message: formState.errors.horarioHasta.message }]} />
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
                    aria-invalid={!!formState.errors.nombreContacto}
                    disabled={formState.isSubmitting}
                    maxLength={50}
                    {...register("nombreContacto")}
                  />
                  {formState.errors.nombreContacto && (
                    <FieldError errors={[{ message: formState.errors.nombreContacto.message }]} />
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
                    disabled={formState.isSubmitting}
                    maxLength={100}
                    {...register("observacion")}
                  />
                </Field>

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
                    disabled={formState.isSubmitting}
                    className="w-full md:w-auto md:min-w-50 cursor-pointer bg-whatsapp-green hover:bg-whatsapp-green/80"
                  >
                    <IconWhatsappSocial className="inline-flex mr-2" />
                    {formState.isSubmitting ? FORM_CONFIG.buttons.submitting : FORM_CONFIG.buttons.submit}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

ContactForm.displayName = "ContactForm"
