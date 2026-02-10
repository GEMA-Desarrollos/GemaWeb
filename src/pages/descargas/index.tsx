import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HEADER_CONFIG, DOWNLOADS } from "./download.constants";
import { downloadFile } from "./download.utils";

export function DescargasPage() {
  return (
    <div className="py-15! container-custom">
      <header>
        <div className="container mx-auto py-2 sm:py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {HEADER_CONFIG.title}
            </h1>
            <p className="text-lg sm:text-xl mb-6">{HEADER_CONFIG.subtitle}</p>
          </div>
        </div>
      </header>
      <main className="container mx-auto pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DOWNLOADS.map((download) => (
            <Card key={download.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
              <div className="flex justify-center items-center gap-2">
                <img
                  src={download.logo}
                  alt={`${download.name} Logo`}
                  className="h-6 mb-4"
                />
                <CardTitle className="text-xl text-center mb-4">{download.name}</CardTitle>
              </div>
              <CardDescription>{download.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => downloadFile(download.url, `${download.name}.exe`)}
                  className="w-full"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}