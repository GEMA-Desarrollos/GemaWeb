import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { Printer, CheckIcon } from "lucide-react";
import { usePrintImage } from "@/hooks";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { PAGE_INFO } from "./medios-pago.constants";

export function MediosPagoPage() {
  const printFormulario = usePrintImage(PAGE_INFO.bonus.image);

  return (
    <article className="py-15!">
      <header className="py-2! sm:py-8! container-custom">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {PAGE_INFO.header.title}
            </h1>
            <p className="text-lg sm:text-xl">
              {PAGE_INFO.header.subtitle}
            </p>
          </div>
        </div>
      </header>

      <section className="py-5! container-custom">
        <small className="block lg:hidden text-center text-gray-500 mb-2 text-sm">
          click en la imagen para ampliar
        </small>
        <figure>
          <Zoom>
            <img
              src={PAGE_INFO.header.image} 
              alt="Instrucciones de pago Siro"
              className="mx-auto max-w-full sm:max-w-[80%] h-auto"
              loading="lazy"
            />
          </Zoom>
        </figure>
      </section>

      <section className="py-8! dotsPattern">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-semibold">{PAGE_INFO.cupon.title}</h2>
          </div>
          <div className="flex items-center justify-center mb-2">
            <p className="text-center bg-white px-4 py-4 ">
              {PAGE_INFO.cupon.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 justify-center my-4">
            {
              PAGE_INFO.cupon.image.map((imgSrc, index) => (
                <img 
                  key={index}
                  src={imgSrc} 
                  alt={`Opciones de pago ${index === 0 ? "en efectivo" : "electrónico"}`} 
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              ))
            }
          </div>
        </div>
      </section>

      <section className="py-8! container-custom">
        <div className="flex justify-center items-center gap-0 sm:gap-2 mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">{PAGE_INFO.bonus.title}</h2>
        </div>
        <ul className="space-y-2 mb-4 sm:ml-8 md:ml-10">
          {
            PAGE_INFO.bonus.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))
          }
        </ul>
        <p className="sm:ml-8 md:ml-10 mb-6">
          {PAGE_INFO.bonus.instructions}
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

      <section className="py-8! border-t border-gray-300">
        <div className="container-custom">
          <div className="flex justify-center items-center sm:justify-start gap-0 sm:gap-2 mb-4">
            <div className="hidden sm:block w-16 h-16 shrink-0">
              <Lottie 
                animationData={PAGE_INFO.payment.icon}
                loop={true}
                autoplay={true}
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold">{PAGE_INFO.payment.title}</h2>
          </div>
          <ul className="list-disc list-inside space-y-3 mb-4">
            {PAGE_INFO.payment.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <div className="bg-primary/5 pl-4 py-4 pr-6 rounded-r">
            <div className="border-b border-gray-400 mb-2 pb-2">
              <p className="text-sm text-gray-800">
                <strong className="font-semibold">IMPORTANTE:</strong> {PAGE_INFO.payment.warning}
              </p>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-1 gap-y-2 text-sm">
              <dt className="font-bold text-accent-blue uppercase tracking-wider">Número</dt>
              <dd className="font-mono text-gray-800">{PAGE_INFO.payment.bank.number}</dd>
              <dt className="font-bold text-accent-blue uppercase tracking-wider">CBU</dt>
              <dd className="font-mono text-gray-800 break-all">{PAGE_INFO.payment.bank.cbu}</dd>
              <dt className="font-bold text-accent-blue uppercase tracking-wider">Alias</dt>
              <dd className="font-mono">{PAGE_INFO.payment.bank.alias}</dd>
              <dt className="font-bold text-accent-blue uppercase tracking-wider">CUIT</dt>
              <dd className="font-mono text-gray-800">{PAGE_INFO.payment.bank.cuit}</dd>
            </dl>
          </div>
        </div>
      </section>
    </article>
  );
}
