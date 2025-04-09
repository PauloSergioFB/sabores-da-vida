import Link from "next/link"

const NotFound = () => {
  return (
    <main className="flex grow flex-col items-center justify-center gap-2 px-8">
      <p className="text-center text-3xl">
        Parece que você está perdido. Esta página não existe!
      </p>
      <Link
        href="/"
        className="text-link-500 hover:text-link-600 cursor-pointer text-xl hover:underline"
      >
        Volte para o Inicio
      </Link>
    </main>
  )
}

export default NotFound
