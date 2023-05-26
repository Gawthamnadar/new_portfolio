import "./globals.css"
import { Ubuntu } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const roboto_mono = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Gawtham's Portfolio",
  description: "Built this portfolio using Next.Js 13.4",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
