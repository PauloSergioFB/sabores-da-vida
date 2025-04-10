import Link from "next/link"

import { devs, links, socialMedias } from "@/constants"
import Logo from "@/public/images/branding-logo.svg"

const Footer = () => {
  return (
    <footer className="bg-primary-500 flex w-full flex-col items-center gap-6 px-8 pt-8 pb-4 md:px-12 lg:gap-8 lg:pt-12">
      <div className="flex w-full max-w-[1400px] flex-col items-center gap-6 text-white md:flex-row md:items-start md:justify-between md:gap-10 lg:justify-start lg:gap-10">
        <section className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">Contato: </h2>
          <div className="flex flex-col gap-2">
            <p>
              <span className="font-bold">Email:</span>{" "}
              contato@temperosdavida.com
            </p>
            <p>
              <span className="font-bold">WhatsApp:</span> (11) 99999-9999
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">Páginas</h2>
          <ul className="flex flex-col gap-2">
            {links.map(({ label, url }, i) => (
              <li key={i}>
                <Link href={url} className="cursor-pointer hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">Desenvolvido por:</h2>
          <ul className="flex flex-col gap-2">
            {devs.map(({ short_name, rm }, i) => (
              <li key={i}>
                <p className="font-bold">{short_name}</p>
                <p className="text-sm">
                  <span className="font-bold">RM:</span> {rm}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <Logo className="ml-auto hidden w-full max-w-[350px] self-center lg:block" />
      </div>
      <section className="flex justify-center gap-8">
        {socialMedias.map(({ icon: Icon, url }, i) => (
          <a
            key={i}
            href={url}
            className="cursos-pointer transition-transform duration-300 hover:scale-110"
          >
            <Icon className="size-8 fill-white" />
          </a>
        ))}
      </section>
    </footer>
  )
}

export default Footer
