import './globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/export'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
