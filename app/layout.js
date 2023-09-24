import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marathon',
  description: 'Welcome to the Marathon Fanpage, we track all upcoming news and trailers for Bungies next title Marathon',
}

export default function RootLayout({ children }) {
  return (
   
   <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
