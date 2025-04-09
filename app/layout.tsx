import type { Metadata } from "next"
import { Roboto } from "next/font/google"

import "./globals.css"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Temperos da Vida",
  description: "O melhor site de receitas online da internet.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} font-roboto antialiased`}>
        {children}
      </body>
    </html>
  )
}
