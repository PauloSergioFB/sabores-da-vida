"use client"

import { AlignJustify, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { links } from "@/constants"

const MenuMobile = () => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState<boolean>(false)

  const closeMenu = () => {
    setIsClosing(true)

    setTimeout(() => {
      setIsClosing(false)
      setMenuMobile(false)
    }, 200)
  }

  return (
    <div className="relative flex justify-end md:hidden">
      <button
        className="relative flex size-7 items-center justify-center rounded bg-white"
        onClick={() => setMenuMobile(!menuMobile)}
      >
        <AlignJustify
          size={20}
          className={`absolute transition-all duration-200 ${
            menuMobile ? "scale-90 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <X
          size={20}
          className={`absolute transition-all duration-200 ${
            menuMobile ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        />
      </button>
      {menuMobile && (
        <>
          <div className="fixed inset-0 z-10" onClick={closeMenu} />
          <ul
            className={`absolute top-full right-full z-20 mt-1 ml-1 flex flex-col items-center gap-6 rounded bg-white p-6 shadow-xl ${isClosing ? "animate-slide-up" : "animate-slide-down"}`}
          >
            {links.map(({ label, url }, i) => (
              <li
                key={i}
                className={`w-full px-4 ${
                  links.length - 1 !== i ? "border-text border-b pb-3" : ""
                }`}
                onClick={closeMenu}
              >
                <Link href={url} className="block text-center uppercase">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default MenuMobile
