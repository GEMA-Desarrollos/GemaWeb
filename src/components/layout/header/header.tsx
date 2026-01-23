import { Nav } from "@/components/layout/nav"
import { NAV_MENU_ITEMS } from "@/components/layout/nav/nav.constants"
import { cn } from "@/lib/utils"
import type { HeaderProps } from "./header.types"

export function Header({ className }: HeaderProps) {
  return (
    <header
      style={{
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
      className={cn(
        "text-white fixed top-0 left-0 right-0 py-4 px-0 z-1000 bg-primary",
        className
      )}
    >
      <Nav menuItems={NAV_MENU_ITEMS} />
    </header>
  )
}

Header.displayName = "Header"
