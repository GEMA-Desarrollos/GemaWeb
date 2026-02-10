import { CONTACT_INFO } from "@/components/shared"
import siroInstrucciones from "@/assets/image-siro-instrucciones.gif";
import siroPagoEfectivo from "@/assets/image-siro-pagoefectivo.gif";
import siroPagoElectronico from "@/assets/image-siro-pagoelectronico.gif";
import siroFormulario from "@/assets/image-siro-formulario.jpg";
import animationMoney from "@/assets/animation-money.json";

export const PAGE_INFO = {
  header: {
    title: "Pago de cuotas",
    subtitle: "Conocé todas las formas de pago disponibles para abonar tu suscripción mensual de sistema GEMA de forma rápida y segura.",
    image: siroInstrucciones
  },
  cupon: {
    title: "Descargá tu cupón",
    description: "Descargá tu cupón de pago desde tu Estado de Cuenta en Gema Web Services y pagá por todos estos medios:",
    image: [ siroPagoEfectivo, siroPagoElectronico ]
  },
  bonus: {
    title: "¡Adherite y Pagá Menos!",
    items: [
      "Sujeto a disponibilidad y autorización de las entidades correspondientes.",
      "10% bonificación en débito automático desde tu CBU (Válido al primer vencimiento)",
      "5% bonificación en débito automático con tarjeta de crédito (Válido al primer vencimiento)"
    ],
    instructions: "Para adherirte a débito automático con tarjeta de crédito o desde tu CBU, imprimí, completá y envianos una foto por WhatsApp del formulario de adhesión.",
    image: siroFormulario
  },
  payment: {
    title: "Otras opciones de pago",
    icon: animationMoney,
    options: [
      `Pago en efectivo en nuestro local de ${CONTACT_INFO.shortAddress}.`,
      "Por transferencia bancaria a nuestra cuenta corriente en pesos:",
    ],
    warning: "Si pagás por transferencia, recordá poner en observaciones o referencia el CUIT de tu empresa o razón social.",
    bank: {
      number: "330109408273812",
      cbu: "2850301930094082738121",
      alias: "sistemagema",
      cuit: "30-71041463-3",
    }
  }
} as const;
