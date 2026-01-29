import { useState, useMemo } from "react"
import { TECHNICIANS } from "./support.constants"

export function useTechnicianFilters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  // Extract unique locations
  const locations = useMemo(() => {
    return Array.from( new Set(TECHNICIANS.map((tech) => tech.location)), ).sort()
  }, [])

  // Filter technicians
  const filteredTechnicians = useMemo(() => {
    return TECHNICIANS.filter((tech) => {
      const matchesSearch = searchTerm === "" || tech.name.toLowerCase().includes(searchTerm.toLowerCase()) || tech.company?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesLocation = selectedLocation === "" || tech.location === selectedLocation
      return matchesSearch && matchesLocation
    })
  }, [searchTerm, selectedLocation])

  // Clear filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedLocation("")
  }

  return {
    searchTerm,
    setSearchTerm,
    selectedLocation,
    setSelectedLocation,
    locations,
    filteredTechnicians,
    clearFilters,
  }
}
