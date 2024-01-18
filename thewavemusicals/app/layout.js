import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'The Wave Musicals',
  description: 'A Premier Destination for Exceptional Musical Instruments in Haldwani',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
