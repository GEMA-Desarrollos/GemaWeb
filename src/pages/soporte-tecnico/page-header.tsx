import type { PageHeaderProps } from "./support.types"

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header>
      <div className="container mx-auto py-2 sm:py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl mb-6">{subtitle}</p>
        </div>
      </div>
    </header>
  )
}

PageHeader.displayName = "PageHeader"
