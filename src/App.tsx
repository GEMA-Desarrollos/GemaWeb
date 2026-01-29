import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HomePage } from "@/pages/home"
import { MediosPagoPage } from "@/pages/medios-pago"
import { SoporteTecnicoPage } from "./pages/soporte-tecnico"

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App