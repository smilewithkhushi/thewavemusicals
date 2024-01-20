import './globals.css'
import { Poppins } from 'next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['500', '600', '700']
});


export const metadata = {
  title: 'The Wave Musicals',
  description: 'A Premier Destination for Exceptional Musical Instruments in Haldwani',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>

      <body className={poppins.className}>{children}</body>
    </html>
  )
}




