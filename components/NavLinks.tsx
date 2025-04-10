import Link from "next/link"

import { links } from "@/constants"

const NavLinks = () => {
  return (
    <ul className="hidden gap-8 md:flex">
      {links.map(({ label, url }, i) => (
        <li key={i}>
          <Link
            href={url}
            className="cursor-pointer font-bold text-white hover:underline"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
