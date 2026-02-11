import { usePrintImage } from "@/hooks";
import { PAGE_INFO } from "./payment-methods.constants";
import { PageHeader } from "./page-header";
import { InstructionsImage } from "./instructions-image";
import { CouponSection } from "./coupon-section";
import { BonusSection } from "./bonus-section";
import { PaymentOptionsSection } from "./payment-options-section";

export function MediosPagoPage() {
  const printFormulario = usePrintImage(PAGE_INFO.bonus.image);

  return (
    <article className="py-15!">
      <PageHeader
        title={PAGE_INFO.header.title}
        subtitle={PAGE_INFO.header.subtitle}
      />
      <InstructionsImage
        src={PAGE_INFO.header.image}
      />
      <CouponSection
        title={PAGE_INFO.cupon.title}
        description={PAGE_INFO.cupon.description}
        images={PAGE_INFO.cupon.image}
      />
      <BonusSection
        title={PAGE_INFO.bonus.title}
        items={PAGE_INFO.bonus.items}
        instructions={PAGE_INFO.bonus.instructions}
        onPrint={printFormulario}
      />
      <PaymentOptionsSection
        title={PAGE_INFO.payment.title}
        icon={PAGE_INFO.payment.icon}
        options={PAGE_INFO.payment.options}
        warning={PAGE_INFO.payment.warning}
        bankInfo={PAGE_INFO.payment.bank}
      />
    </article>
  );
}
