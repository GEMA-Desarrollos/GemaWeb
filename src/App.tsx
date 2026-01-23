import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HomePage } from "@/pages/home"
// import { ComponentExample } from "./components/component-example"

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomePage />
        {/* <ComponentExample /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App