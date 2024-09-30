// "use client";
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'; 
import Header from '../components/Header';
import Header2 from '../components/Header2';
import Herodiv from '../components/Herodiv';
import Intro from '../components/Intro';
import ScrollAnimation from '../components/Events';
import About from '../components/Double';
import Footer from '../components/Footer';
// import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Technolympics2024',
  description: '22nd Oct, 2024',
}




export default function RootLayout({ children }) {
  return (
   
    <html lang="en">


      <head>
        <title>Technolympics2024</title>
      </head>
      <body className={inter.className}>
        
        <Header2 />
        <Herodiv />
        <Header />
        <Intro />
        <div id="events" className="events">
          <img className="img" src="https://pbs.twimg.com/media/GX_sAy1XkAAMihR?format=png&name=small" alt="Event" />
        </div>
        
        <ScrollAnimation />
        <div id="about" className="about">About Us</div>
        <About />
        <Footer />

        {children}
      </body>
    </html>
  )
}

















// "use client";
// import { Inter } from 'next/font/google'
// import './globals.css'
// import Link from 'next/link'; 
// import Header from '../components/Header';
// import Header2 from '../components/Header2';
// import Herodiv from '../components/Herodiv';
// import Intro from '../components/Intro';
// import ScrollAnimation from '../components/Events';
// import About from '../components/Double';
// import Footer from '../components/Footer/footer';
// import { useEffect } from "react";
// import Lenis from 'lenis';


// const inter = Inter({ subsets: ['latin'] })

// // export const metadata = {
// //   title: 'Technolympics2024',
// //   description: '22nd Oct, 2024',
// // }




// export default function RootLayout({ children }) {useEffect( () => {

//   const lenis = new Lenis()



//   function raf(time) {

//     lenis.raf(time)

//     requestAnimationFrame(raf)

//   }



//   requestAnimationFrame(raf)

// }, [])



// return (<html lang="en">


//   <head>
//     <title>Technolympics2024</title>
//   </head>
//   <body className={inter.className}>
    
//     <Header2 />
//     <Herodiv />
//     <Header />
//     <Intro />
//     <div id="events" className="events">
//       <img className="img" src="https://pbs.twimg.com/media/GX_sAy1XkAAMihR?format=png&name=small" alt="Event" />
//     </div>
    
//     <ScrollAnimation />
//     <div id="about" className="about">About Us</div>
//     <About />
//     {/* <Footer /> */}

//     {children}
//   </body>
//   </html>
//   );

// }



