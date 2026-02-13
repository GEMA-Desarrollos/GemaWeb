import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon } from "lucide-react"
import type { NavProps } from "./nav.types"
import { useNavMenu } from "./nav.hooks"
import { NavDesktopItem } from "./nav-desktop-item"
import { NavMobileItem } from "./nav-mobile-item"

export function Nav({ menuItems }: NavProps) {
  const { isOpen, openDropdown, toggleMenu, closeMenu, setOpenDropdown } = useNavMenu()

  return (
    <nav className="max-w-300 mx-auto px-8 h-8 flex justify-between items-center relative">
      <Link to="/" className="flex items-center h-8">
        <img src="zoltan-white.svg" alt="GEMA" className="h-8 w-auto" />
        <span className="hidden sm:flex ml-2 text-2xl items-center font-semibold">GEMA</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-display list-none m-0 p-0 items-center">
        {menuItems.map((item) => (
          <NavDesktopItem key={item.label} item={item} />
        ))}
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
        <ul className="md:hidden absolute top-12 left-0 right-0 bg-dark-blue font-display text-[18px] flex flex-col gap-4 list-none m-0 py-6 shadow-lg animate-in slide-in-from-top-4 fade-in-0 duration-300">
          {menuItems.map((item) => (
            <NavMobileItem
              key={item.label}
              item={item}
              openDropdown={openDropdown}
              onToggleDropdown={setOpenDropdown}
              onClose={closeMenu}
            />
          ))}
        </ul>
      )}
    </nav>
  )
}

Nav.displayName = "Nav"
