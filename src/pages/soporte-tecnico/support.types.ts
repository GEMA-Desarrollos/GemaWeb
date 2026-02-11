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

export interface PageHeaderData {
  title: string
  subtitle: string
}

export interface AboutSectionData {
  title: string
  description: string
}

export interface PageInfo {
  header: PageHeaderData
  about: AboutSectionData
}

export interface PageHeaderProps {
  title: string
  subtitle: string
}

export interface EmptyStateProps {
  onClearFilters: () => void
}

export interface TechniciansGridProps {
  technicians: Technician[]
}

export interface JoinSectionProps {
  title: string
  description: string
  contactEmail: string
}
