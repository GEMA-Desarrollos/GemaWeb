import { PageHeader } from "./page-header"
import { ContactForm } from "./contact-form"
import { LocationSection } from "./location-section"
import { PAGE_INFO } from "./contact.constants"
import { useContactForm } from "./contact.hooks"

export function ContactoPage() {
  const { form, submitStatus, handleCuitChange, handleTelefonoChange, onSubmit, } = useContactForm()

  /*
  // Pendiente activar reCAPTCHA, descomenta:
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  const { recaptchaRef, handleRecaptchaChange, resetRecaptcha } = useRecaptcha({ setValue: form.setValue, onTokenChange: (token) => { console.log("reCAPTCHA token:", token ? "✓" : "✗") } })
  */

  return (
    <article className="pt-15!">
      <PageHeader 
        title={PAGE_INFO.title}
        subtitle={PAGE_INFO.subtitle}
      />
      <ContactForm
        form={form}
        submitStatus={submitStatus}
        handleCuitChange={handleCuitChange}
        handleTelefonoChange={handleTelefonoChange}
        onSubmit={onSubmit}
      />
      <LocationSection
        title="Nuestra Ubicación"
        address={PAGE_INFO.address}
        mapsUrl={PAGE_INFO.mapsUrl}
      />
    </article>
  )
}