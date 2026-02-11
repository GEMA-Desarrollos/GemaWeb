import { PAGE_INFO } from "./download.constants"
import { downloadFile } from "./download.utils"
import { DownloadCard } from "./download-card"

export function DescargasPage() {
  return (
    <div className="py-15! container-custom">
      <header>
        <div className="container mx-auto py-2 sm:py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {PAGE_INFO.header.title}
            </h1>
            <p className="text-lg sm:text-xl mb-6">{PAGE_INFO.header.subtitle}</p>
          </div>
        </div>
      </header>
      <section className="container mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PAGE_INFO.downloads.map((download) => (
            <DownloadCard
              key={download.id}
              download={download}
              onDownload={downloadFile}
            />
          ))}
        </div>
      </section>
    </div>
  )
}