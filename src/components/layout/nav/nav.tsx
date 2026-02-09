import * as React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "@/components/ui/dropdown-menu"
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react"
import type { NavProps, NavMenuItem } from "./nav.types"

export function Nav({ menuItems }: NavProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest("nav") && isOpen) {
        closeMenu()
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const renderDesktopMenuItem = (item: NavMenuItem) => {
    // Item sin dropdown - link directo
    if (item.link && !item.items) {
      return (
        <li key={item.label}>
          <Link
            to={item.link}
            className="text-white no-underline font-bold transition-opacity hover:opacity-80 "
          >
            {item.label}
          </Link>
        </li>
      )
    }

    // Item con dropdown
    if (item.items) {
      return (
        <li key={item.label}>
          <DropdownMenu  modal={false}>
            <DropdownMenuTrigger asChild>
              <button className="text-white font-bold flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-opacity hover:opacity-80 ">
                {item.label}
                <ChevronDownIcon className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-blue border-0 shadow-lg rounded-none mt-3 min-w-44 py-2 animate-in fade-in-0 zoom-in-95 duration-200 font-display" align="center">
              {item.items.map((subItem) => (
                <DropdownMenuItem key={subItem.link} asChild className="">
                  <Link
                    to={subItem.link}
                    className="cursor-pointer text-white/80 no-underline hover:text-white transition-opacity py-2 hover:rounded-none text-[16px]"
                  >
                    {subItem.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      )
    }

    return null
  }

  const renderMobileMenuItem = (item: NavMenuItem) => {
    // Item sin dropdown - link directo
    if (item.link && !item.items) {
      return (
        <li key={item.label}>
          <Link
            to={item.link}
            className="text-white no-underline font-bold block transition-opacity hover:opacity-80 px-6"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        </li>
      )
    }

    // Item con dropdown - expandible
    if (item.items) {
      const isDropdownOpen = openDropdown === item.label
      return (
        <li key={item.label} className="flex flex-col gap-2">
          <button
            className="text-white font-bold flex items-center justify-between bg-transparent border-0 cursor-pointer w-full text-left transition-opacity hover:opacity-80 px-6 py-2"
            onClick={() =>
              setOpenDropdown(isDropdownOpen ? null : item.label)
            }
          >
            {item.label}
            <ChevronDownIcon
              className={`size-4 transition-transform duration-300 ease-in-out ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isDropdownOpen && (
            <ul className="flex flex-col gap-2 pl-12 list-none m-0 w-full bg-foreground py-2 animate-in slide-in-from-top-2 fade-in-0 duration-300">
              {item.items.map((subItem) => (
                <li key={subItem.link}>
                  <Link
                    to={subItem.link}
                    className="text-white/80 no-underline block transition-opacity hover:opacity-80 py-2"
                    onClick={closeMenu}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    }

    return null
  }

  return (
    <nav className="max-w-300 mx-auto px-8 h-8 flex justify-between items-center relative">
      <Link to="/" className="flex items-center h-8">
        <img src="zoltan-white.svg" alt="GEMA" className="h-8 w-auto" />
        <span className="hidden sm:flex ml-2 text-2xl items-center font-semibold">GEMA</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-display  list-none m-0 p-0 items-center">
        {menuItems.map(renderDesktopMenuItem)}
      </ul>

      {/* Mobile Menu Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white hover:bg-transparent hover:text-white hover:scale-110 hover:transition-transform"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-12 left-0 right-0 bg-dark-blue font-display text-[18px] flex flex-col gap-4 list-none m-0 py-6 shadow-lg animate-in slide-in-from-top-4 fade-in-0 duration-300 ">
          {menuItems.map(renderMobileMenuItem)}
        </ul>
      )}
    </nav>
  )
}

Nav.displayName = "Nav"
