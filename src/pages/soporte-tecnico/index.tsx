import { PageHeader } from "./page-header"
import { SearchFilter } from "./search-filter"
import { TechniciansGrid } from "./technicians-grid"
import { EmptyState } from "./empty-state"
import { JoinSection } from "./join-section"
import { PAGE_INFO } from "./support.constants"
import { CONTACT_INFO } from "@/components/shared"
import { useTechnicianFilters } from "./support.hooks"

export function SoporteTecnicoPage() {
  const { searchTerm, setSearchTerm, selectedLocation, setSelectedLocation, locations, filteredTechnicians, clearFilters, } = useTechnicianFilters()

  return (
    <div className="py-15! container-custom">
      <PageHeader
        title={PAGE_INFO.header.title}
        subtitle={PAGE_INFO.header.subtitle}
      />
      <main className="container mx-auto pb-12">
        <SearchFilter
          searchTerm={searchTerm}
          selectedLocation={selectedLocation}
          locations={locations}
          onSearchChange={setSearchTerm}
          onLocationChange={setSelectedLocation}
        />
        {filteredTechnicians.length > 0 ? (
          <TechniciansGrid technicians={filteredTechnicians} />
        ) : (
          <EmptyState onClearFilters={clearFilters} />
        )}
        <JoinSection
          title={PAGE_INFO.about.title}
          description={PAGE_INFO.about.description}
          contactEmail={CONTACT_INFO.email}
        />
      </main>
    </div>
  )
}
