import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Overview",
  description: "Dashboard pages to summarize data.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} min-h-full bg-white antialiased dark:bg-gray-950`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
