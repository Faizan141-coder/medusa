import { Metadata } from "next"
import { Toaster } from "react-hot-toast"
import "styles/globals.css"
import { CartProvider } from "../../context/cart"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <html lang="en" data-mode="light">
        <body>
          <Toaster />
          <main className="relative">{props.children}</main>
        </body>
      </html>
    </CartProvider>
  )
}
