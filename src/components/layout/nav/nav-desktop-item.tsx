import { Link } from "react-router-dom"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"
import type { NavMenuItem } from "./nav.types"
import { isExternalLink } from "./nav.utils"

interface NavDesktopItemProps {
  item: NavMenuItem
}

export function NavDesktopItem({ item }: NavDesktopItemProps) {
  // Item sin dropdown - link directo
  if (item.link && !item.items) {
    const isExternal = isExternalLink(item.link)

    return (
      <li key={item.label}>
        {isExternal ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline font-bold transition-opacity hover:opacity-80"
          >
            {item.label}
          </a>
        ) : (
          <Link
            to={item.link}
            className="text-white no-underline font-bold transition-opacity hover:opacity-80"
          >
            {item.label}
          </Link>
        )}
      </li>
    )
  }

  // Item con dropdown
  if (item.items) {
    return (
      <li key={item.label}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="text-white font-bold flex items-center gap-1 bg-transparent border-0 cursor-pointer transition-opacity hover:opacity-80">
              {item.label}
              <ChevronDownIcon className="size-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-dark-blue border-0 shadow-lg rounded-none mt-3 min-w-44 py-2 animate-in fade-in-0 zoom-in-95 duration-200 font-display" align="center">
            {item.items.map((subItem) => {
              const isExternal = isExternalLink(subItem.link)

              return (
                <DropdownMenuItem key={subItem.link} asChild>
                  {isExternal ? (
                    <a
                      href={subItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-white/80 no-underline hover:text-white transition-opacity py-2 hover:rounded-none text-[16px]"
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link
                      to={subItem.link}
                      className="cursor-pointer text-white/80 no-underline hover:text-white transition-opacity py-2 hover:rounded-none text-[16px]"
                    >
                      {subItem.label}
                    </Link>
                  )}
                </DropdownMenuItem>
              )
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </li>
    )
  }

  return null
}

NavDesktopItem.displayName = "NavDesktopItem"
