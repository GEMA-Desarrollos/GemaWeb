import Lottie from "lottie-react";
import type { PaymentOptionsSectionProps } from "./payment-methods.types";

export function PaymentOptionsSection({
  title,
  icon,
  options,
  warning,
  bankInfo,
}: PaymentOptionsSectionProps) {
  return (
    <section className="py-8! border-t border-gray-300">
      <div className="container-custom">
        <div className="flex justify-center items-center sm:justify-start gap-0 sm:gap-2 mb-4">
          <div className="hidden sm:block w-16 h-16 shrink-0">
            <Lottie animationData={icon} loop={true} autoplay={true} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
        </div>
        <ul className="list-disc list-inside space-y-3 mb-4">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        <div className="bg-primary/5 pl-4 py-4 pr-6 rounded-r">
          <div className="border-b border-gray-400 mb-2 pb-2">
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">IMPORTANTE:</strong> {warning}
            </p>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-1 gap-y-2 text-sm">
            <dt className="font-bold text-accent-blue uppercase tracking-wider">
              Número
            </dt>
            <dd className="font-mono text-gray-800">{bankInfo.number}</dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">
              CBU
            </dt>
            <dd className="font-mono text-gray-800 break-all">
              {bankInfo.cbu}
            </dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">
              Alias
            </dt>
            <dd className="font-mono">{bankInfo.alias}</dd>
            <dt className="font-bold text-accent-blue uppercase tracking-wider">
              CUIT
            </dt>
            <dd className="font-mono text-gray-800">{bankInfo.cuit}</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

PaymentOptionsSection.displayName = "PaymentOptionsSection";
