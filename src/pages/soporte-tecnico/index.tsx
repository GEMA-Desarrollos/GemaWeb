import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechnicianCard } from "./technician-card";
import { SearchFilter } from "./search-filter";
import { HEADER_CONFIG, FOOTER_CONFIG } from "./support.constants";
import { useTechnicianFilters } from "./support.hooks";
import animationGearwrench from "@/assets/animation-gearwrench.json";
import Lottie from "lottie-react";

export function SoporteTecnicoPage() {
  const { searchTerm, setSearchTerm, selectedLocation, setSelectedLocation, locations, filteredTechnicians, clearFilters, } = useTechnicianFilters();

  return (
    <div className="py-15! container-custom">
      <header>
        <div className="container mx-auto py-2 sm:py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              {HEADER_CONFIG.title}
            </h1>
            <p className="text-xl sm:text-2xl mb-6">{HEADER_CONFIG.subtitle}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto pb-12">
        <SearchFilter
          searchTerm={searchTerm}
          selectedLocation={selectedLocation}
          locations={locations}
          onSearchChange={setSearchTerm}
          onLocationChange={setSelectedLocation}
        />

        {filteredTechnicians.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredTechnicians.map((technician, index) => (
              <TechnicianCard
                key={technician.id}
                technician={technician}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="m-auto w-24 h-24 shrink-0">
              <Lottie
                animationData={animationGearwrench}
                loop={true}
                autoplay={true}
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No encontramos técnicos
            </h3>
            <p className="text-gray-600 mb-6 max-w-xxl mx-auto">
              Intenta ajustar tus criterios de búsqueda o selecciona una
              ubicación diferente.
            </p>
            <Button onClick={clearFilters} variant="outline">
              Limpiar filtros
            </Button>
          </div>
        )}

        {/* Footer CTA Section */}
        <div className="mt-16">
          <div className="border-4 border-solid border-gray-300 p-8">
            <h3 className="text-2xl font-bold mb-3 text-center text-gray-700">
              {FOOTER_CONFIG.about.title}
            </h3>
            <div className="flex gap-2 mb-4">
              <p className="text-gray-500">{FOOTER_CONFIG.about.description}</p>
            </div>
            <div className="w-full sm:flex sm:justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto hover:scale-105 transition-transform hover:cursor-pointer"
              >
                <a
                  href={`mailto:${FOOTER_CONFIG.contact.email}?subject=Solicitud para unirse como técnico GEMA`}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contáctanos
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
