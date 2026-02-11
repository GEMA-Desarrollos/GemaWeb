import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { DownloadCardProps } from "./download.types"

export function DownloadCard({ download, onDownload }: DownloadCardProps) {
  const handleDownload = () => {
    const fileName = download.name ? `${download.name}.exe` : "download.exe"
    onDownload(download.url, fileName)
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-center items-center gap-2">
          <download.logo className="h-6 mb-4" />
          {download.name && (
            <CardTitle className="text-xl text-center mb-4">{download.name}</CardTitle>
          )}
        </div>
        <CardDescription>{download.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleDownload}
          className="w-full cursor-pointer"
          size="lg"
        >
          <Download className="h-5 w-5 mr-2" />
          Descargar
        </Button>
      </CardContent>
    </Card>
  )
}

DownloadCard.displayName = "DownloadCard"
