import { Link } from "react-router-dom"
import { ChevronDownIcon } from "lucide-react"
import type { NavMenuItem } from "./nav.types"
import { isExternalLink } from "./nav.utils"

interface NavMobileItemProps {
  item: NavMenuItem
  openDropdown: string | null
  onToggleDropdown: (label: string | null) => void
  onClose: () => void
}

export function NavMobileItem({
  item,
  openDropdown,
  onToggleDropdown,
  onClose,
}: NavMobileItemProps) {
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
            className="text-white no-underline font-bold block transition-opacity hover:opacity-80 px-6"
            onClick={onClose}
          >
            {item.label}
          </a>
        ) : (
          <Link
            to={item.link}
            className="text-white no-underline font-bold block transition-opacity hover:opacity-80 px-6"
            onClick={onClose}
          >
            {item.label}
          </Link>
        )}
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
          onClick={() => onToggleDropdown(isDropdownOpen ? null : item.label)}
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
            {item.items.map((subItem) => {
              const isExternal = isExternalLink(subItem.link)

              return (
                <li key={subItem.link}>
                  {isExternal ? (
                    <a
                      href={subItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 no-underline block transition-opacity hover:opacity-80 py-2"
                      onClick={onClose}
                    >
                      {subItem.label}
                    </a>
                  ) : (
                    <Link
                      to={subItem.link}
                      className="text-white/80 no-underline block transition-opacity hover:opacity-80 py-2"
                      onClick={onClose}
                    >
                      {subItem.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </li>
    )
  }

  return null
}

NavMobileItem.displayName = "NavMobileItem"
