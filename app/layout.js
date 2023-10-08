
import Footer from './components/Footer'
import Hidden from './components/Hidden'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marathon',
  description: 'Welcome to the Marathon Fanpage, we track all upcoming news and trailers for Bungies next title Marathon',
  keywords: 'pageName Announcement, Marathon, Marathon Fanpage, Marathon Game, Marathon Trilogy, Marathon Bungie, Marathon Infinity, Marathon 2, Marathon Durandal, Marathon Rubicon, Marathon Aleph One, Marathonthegame.com, marathonthegame.com, marathonthegame.site'
}

export default function RootLayout({ children }) {
 
  return (
   
   <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
    
      </head>

      <body className={inter.className}>
        <Hidden/>
        {children}
        <Footer/>
        </body>
       
    </html>
    
  )
}
