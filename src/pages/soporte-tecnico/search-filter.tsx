import { Search, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { SearchFilterProps } from "./support.types"

export function SearchFilter({
  searchTerm,
  selectedLocation,
  locations,
  onSearchChange,
  onLocationChange
}: SearchFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg py-6 px-2 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search Input */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar por nombre o empresa..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Location Filter */}
        <div className="lg:w-64 relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" />
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full h-12 pl-10 pr-10 text-base rounded-md border border-input bg-background text-foreground appearance-none cursor-pointer hover:bg-accent/5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
          >
            <option value="">Todas las ubicaciones</option>
            {locations.map(location => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg 
              className="h-5 w-5 text-gray-400" 
              fill="none" 
              strokeWidth={2} 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Results Counter */}
      {/* <div className={`hidden mt-4 pt-4 border-t border-gray-100 ${resultsCount === 0 ? "hidden" : "block"}`}>
        <p className="text-sm text-gray-600">
          {resultsCount > 0 &&  (
            <>
              Mostrando{" "}
              <span className="font-bold text-blue-600">{resultsCount}</span>{" "}
              {resultsCount === 1 ? "técnico" : "técnicos"}
              {(searchTerm || selectedLocation) && (
                <span className="text-gray-500">
                  {" "}
                  {searchTerm && `para "${searchTerm}"`}
                  {searchTerm && selectedLocation && " en "}
                  {selectedLocation && `${selectedLocation}`}
                </span>
              )}
            </>
          )}
        </p>
      </div> */}
    </div>
  )
}
