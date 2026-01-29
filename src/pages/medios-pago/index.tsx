import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Printer, CheckIcon } from "lucide-react";
import { usePrintImage } from "@/hooks";
import siroInstrucciones from "@/assets/image-siro-instrucciones.gif";
import siroPagoEfectivo from "@/assets/image-siro-pagoefectivo.gif";
import siroPagoElectronico from "@/assets/image-siro-pagoelectronico.gif";
import siroFormulario from "@/assets/image-siro-formulario.jpg";
import animationPayment from "@/assets/animation-payment.json";
import animationMoney from "@/assets/animation-money.json";
import { HEADER_CONFIG, CUPON_SECTION, BONUS_SECTION, OTHER_PAYMENT_SECTION, BANK_ACCOUNT, BANK_TRANSFER_NOTE, } from "./medios-pago.constants";

export function MediosPagoPage() {
  const printFormulario = usePrintImage(siroFormulario);

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
        <figure>
          <img
            src={siroInstrucciones} 
            alt="Instrucciones de pago Gema Roel Asiro" 
            className="mx-auto max-w-full sm:max-w-[80%] h-auto"
          />
        </figure>
      </section>

      <section className="py-4">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="hidden sm:block w-12 h-12 lg:w-14 lg:h-14 shrink-0">
            <Lottie 
              animationData={animationPayment}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{CUPON_SECTION.title}</h2>
        </div>
        <p className="mb-6 text-center">
          {CUPON_SECTION.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 justify-center my-4">
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

      <section className="py-4">
        <div className="flex justify-center items-center gap-0 sm:gap-2 mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">{BONUS_SECTION.title}</h2>
        </div>
        <ul className="space-y-2 mb-4 sm:ml-8 md:ml-10">
          {BONUS_SECTION.disclaimers.map((disclaimer, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>{disclaimer}</span>
            </li>
          ))}
          {BONUS_SECTION.bonuses.map((bonus, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>
              {bonus.percentage}% bonificación en {bonus.method} ({bonus.condition})
              </span>
            </li>
          ))}
        </ul>
        <p className="sm:ml-8 md:ml-10 mb-6">
          {BONUS_SECTION.formInstructions}
        </p>
        <div className="flex flex-col items-center">
          <Button
            variant="default" 
            size="lg" 
            onClick={printFormulario}
            className="w-full sm:w-auto hover:scale-105 transition-transform hover:cursor-pointer"
          >
            <Printer className="mr-2 h-5 w-5" />
            Imprimir Formulario
          </Button>
        </div>
      </section>

      <section className="py-4">
        <div className="flex justify-center items-center sm:justify-start gap-0 sm:gap-2 mb-4">
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <Lottie 
              animationData={animationMoney}
              loop={true}
              autoplay={true}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{OTHER_PAYMENT_SECTION.title}</h2>
        </div>
        <ul className="list-disc list-inside space-y-3 mb-4">
          {OTHER_PAYMENT_SECTION.options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <div className="bg-primary/5 pl-4 py-4 pr-6 rounded-r">
          <div className="border-b border-gray-400 mb-2 pb-2">
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">IMPORTANTE:</strong> {BANK_TRANSFER_NOTE}
            </p>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-1 gap-y-2 text-sm">
            <dt className="font-bold text-accent-blue uppercase tracking-wider">Número</dt>
            <dd className="font-mono text-gray-800">{BANK_ACCOUNT.number}</dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">CBU</dt>
            <dd className="font-mono text-gray-800 break-all">{BANK_ACCOUNT.cbu}</dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">Alias</dt>
            <dd className="font-mono">{BANK_ACCOUNT.alias}</dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">CUIT</dt>
            <dd className="font-mono text-gray-800">{BANK_ACCOUNT.cuit}</dd>
          </dl>
        </div>
      </section>
    </article>
  );
}
