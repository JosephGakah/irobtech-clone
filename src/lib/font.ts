import { Raleway as PrimaryFont, Urbanist as SecondaryFont, Inter as DasboardFont } from "next/font/google"

export const primaryFont = PrimaryFont({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: "500"
})

export const secondaryFont = SecondaryFont({
  subsets: ["latin"],
  variable: "--font-mono",
})


export const dasboardFont = DasboardFont({
  subsets: ["latin"],
  variable: "--font-mono",
})
