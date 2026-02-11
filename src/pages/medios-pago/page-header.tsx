import type { PageHeaderProps } from "./payment-methods.types"

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="py-2! sm:py-8! container-custom">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  )
}

PageHeader.displayName = "PageHeader"
