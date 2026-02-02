import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"

import Header from "./components/header/Header"
import "./globals.css"

export const metadata: Metadata = {
  title: "GratisSocial",
  description: "Full stack social media website, focused on a minimalist and intuitive experience",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Header />
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
