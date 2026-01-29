export interface Technician {
  id: string
  name: string
  company?: string
  phone: string
  email: string
  website?: string
  location: string
}

export interface SearchFilterProps {
  searchTerm: string
  selectedLocation: string
  locations: string[]
  onSearchChange: (value: string) => void
  onLocationChange: (value: string) => void
}

export interface TechnicianCardProps {
  technician: Technician
  index: number
}
