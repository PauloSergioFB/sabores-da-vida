import Link from "next/link"

import HLogo from "@/public/images/branding-h-logo.svg"
import MenuMobile from "./MenuMobile"
import NavLinks from "./NavLinks"

const Header = () => {
  return (
    <header className="bg-primary-500 flex w-full items-center justify-between px-4 py-2 md:px-8 md:py-4">
      <Link href="/">
        <HLogo className="w-35 text-white md:w-45" />
      </Link>
      <MenuMobile />
      <NavLinks />
    </header>
  )
}

export default Header
