import Facebook from "@/public/icons/facebook.svg"
import Instagram from "@/public/icons/instagram.svg"
import WhatsApp from "@/public/icons/whatsapp.svg"
import X from "@/public/icons/x.svg"

export const links: { label: string; url: string }[] = [
  {
    label: "Inicio",
    url: "/",
  },
  {
    label: "Receitas",
    url: "/receitas",
  },
  {
    label: "Sobre",
    url: "/sobre",
  },
]

export const devs: {
  name: string
  short_name: string
  rm: string
  classroom: string
}[] = [
  {
    name: "Angelo Antonio Recke Ricieri",
    short_name: "Angelo Recke",
    rm: "560299",
    classroom: "1-TDSQ",
  },
  {
    name: "Antonio de Luca Ribeiro Silva",
    short_name: "Antonio de Luca",
    rm: "560169",
    classroom: "1-TDSQ",
  },
  {
    name: "Bruno Cesar da Silva",
    short_name: "Bruno Cesar",
    rm: "560499",
    classroom: "1-TDSQ",
  },
  {
    name: "Paulo Sérgio França Barbosa",
    short_name: "Paulo Barbosa",
    rm: "559914",
    classroom: "1-TDSQ",
  },
]

export const socialMedias: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  url: string
}[] = [
  {
    icon: Instagram,
    url: "https://instagram.com.br",
  },
  {
    icon: Facebook,
    url: "https://facebook.com.br",
  },
  {
    icon: WhatsApp,
    url: "https://web.whatsapp.com",
  },
  {
    icon: X,
    url: "https://x.com",
  },
]
