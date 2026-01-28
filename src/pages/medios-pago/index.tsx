import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import siroInstrucciones from "@/assets/image-siro-instrucciones.gif";
import siroPagoEfectivo from "@/assets/image-siro-pagoefectivo.gif";
import siroPagoElectronico from "@/assets/image-siro-pagoelectronico.gif";
import siroFormulario from "@/assets/image-siro-formulario.jpg";
// import animationDanger from "@/assets/animation-danger.json";
import animationForm from "@/assets/animation-form.json";
import animationPayment from "@/assets/animation-payment.json";
import animationMoney from "@/assets/animation-money.json";

export function MediosPagoPage() {
  return (
    <article className="py-15! container-custom">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Pago de cuotas GEMA
        </h1>
        
        <figure className="my-6">
          <img
            src={siroInstrucciones} 
            alt="Instrucciones de pago Gema Roel Asiro" 
            className="mx-auto max-w-full h-auto"
          />
        </figure>
      </header>

      <section className="mb-8">
        <div className="flex items-center text-left gap-0 sm:gap-2 mb-4">
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <Lottie 
              animationData={animationPayment}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Descargá tu cupón de pago</h2>
        </div>

        <p className="mb-4">
          Descargá tu cupón de pago desde tu Estado de Cuenta en Gema Web Services 
          y pagá por todos estos medios:
        </p>

        <div className="flex flex-wrap items-center gap-4 justify-center my-6">
          <img 
            src={siroPagoEfectivo} 
            alt="Opciones de pago en efectivo" 
            className="max-w-full h-auto"
          />
          <img 
            src={siroPagoElectronico} 
            alt="Opciones de pago electrónico" 
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center text-left gap-0 sm:gap-2 mb-4">
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <Lottie 
              animationData={animationForm}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">¡Adherite y Pagá Menos!</h2>
        </div>
        
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Sujeto a disponibilidad y autorización de las entidades correspondientes.</li>
          <li>10% bonificación en débito automático desde tu CBU (Válido al primer vencimiento)</li>
          <li>5% bonificación en débito automático con tarjeta de crédito (Válido al primer vencimiento)</li>
        </ul>

        <p className="mb-6">
          Para adherirte a débito automático con tarjeta de crédito o desde tu CBU, 
          imprimí, completá y envianos una foto por WhatsApp del siguiente formulario:
        </p>

        <div className="flex flex-col items-center gap-4">
          <figure>
            <img 
              src={siroFormulario} 
              alt="Formulario de adhesión a débito automático" 
              className="mx-auto my-4 max-w-full h-auto"
            />
          </figure>
          
          <Button
            variant="default" 
            size="lg" 
            className="w-full sm:w-auto hover:scale-105 transition-transform"
          >
            Descargar Formulario
          </Button>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center sm:justify-start gap-0 sm:gap-2 mb-4">
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <Lottie 
              animationData={animationMoney}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Otras opciones de pago</h2>
        </div>

        <ul className="list-disc list-inside space-y-3 mb-4">
          <li>
            Pago en efectivo en nuestro local de General Simón Bolívar 348, Piso 4, 
            de la Ciudad de Córdoba.
          </li>
          <li>
            Por transferencia bancaria a nuestra cuenta corriente en pesos:
          </li>
        </ul>

        <div className="bg-primary/5 pl-4 py-4 pr-6 rounded-r">
          <div className="border-b border-gray-400 mb-2 pb-2">
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">IMPORTANTE:</strong> Si pagás por transferencia, recordá poner en observaciones o referencia el CUIT de tu farmacia.
            </p>
          </div>

          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="font-bold text-gray-500 uppercase tracking-wider">Número</dt>
            <dd className="font-mono text-gray-800">330109408273812</dd>

            <dt className="font-bold text-gray-500 uppercase tracking-wider">CBU</dt>
            <dd className="font-mono text-gray-800 break-all">2850301930094082738121</dd>

            <dt className="font-bold text-gray-500 uppercase tracking-wider">Alias</dt>
            <dd className="font-mono">sistemagema</dd>

            <dt className="font-bold text-gray-500 uppercase tracking-wider">CUIT</dt>
            <dd className="font-mono text-gray-800">30-71041463-3</dd>
           
          </dl>

        </div>


      </section>
    </article>
  );
}
