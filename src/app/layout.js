import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Herodiv from '../components/Herodiv';
import Intro from '../components/Intro';
import Bento from '../components/Events/Bento';



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technolympics2024',
  description: '22nd Oct, 2024',
}




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header2 />
        <Herodiv />
        <Header />
        <Intro />
        <Bento />

        {children}
      </body>
    </html>
  )
}

