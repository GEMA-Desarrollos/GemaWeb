import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FloatingWhatsappButton } from "@/components/shared"
import { HomePage } from "@/pages/home"
import { MediosPagoPage } from "@/pages/medios-pago"
import { SoporteTecnicoPage } from "./pages/soporte-tecnico"
import { SolicitarInfoPage } from "./pages/solicitar-info"
import { QuienesSomosPage } from "./pages/quienes-somos"
import { ContactoPage } from "./pages/contacto"
import { DescargasPage } from "./pages/descargas"

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/medios-pago" element={<MediosPagoPage />} />
            <Route path="/soporte-tecnico" element={<SoporteTecnicoPage />} />
            <Route path="/solicitar-info" element={<SolicitarInfoPage />} />
            <Route path="/quienes-somos" element={<QuienesSomosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/descargas" element={<DescargasPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsappButton />
      </div>
    </BrowserRouter>
  )
}

export default App