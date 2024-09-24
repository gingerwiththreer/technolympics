'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import styles from './styles.module.scss'

gsap.registerPlugin(ScrollTrigger)

const events = [
    {
      title: 'BattleOfBrains',
      image: 'https://i.pinimg.com/564x/7f/40/b2/7f40b21e46f376e504ce2a016176b3a7.jpg',
      classes: 'IX-XII',
      infoLink: 'https://example.com/battleofbrains'
    },
    {
      title: 'VirtualWarriors',
      image: 'https://i.pinimg.com/736x/38/cc/72/38cc72708964ad19ee35895ed965339a.jpg',
      classes: 'OPEN',
      infoLink: 'https://example.com/virtualwarriors'
    },
    {
      title: 'EWaste Expressions',
      image: 'https://i.pinimg.com/564x/d5/85/d2/d585d28bb3f98239bf069551205535ac.jpg',
      classes: 'VI-VIII',
      infoLink: 'https://example.com/ewasteexpression'
    },
    {
      title: 'Top Coders',
      image: 'https://preview.redd.it/hyprland-my-first-rice-not-so-bad-right-v0-l1oyuwepzlpd1.png?width=1080&crop=smart&auto=webp&s=26d4770828e9fcbc43de0e6eeda3917e12ac4d17',
      classes: 'IX-XII',
      infoLink: 'https://example.com/topcoders'
    },
    {
      title: 'Webolution',
      image: 'https://i.pinimg.com/736x/55/b0/05/55b005dc58a78dbeb8e868e699bf2ef2.jpg',
      classes: 'IX-XII',
      infoLink: 'https://example.com/webolution'
    },
    {
      title: 'Mission Doodle',
      image: 'https://pbs.twimg.com/media/GX_NCacXwAAY-Ar?format=jpg&name=large',
      classes: 'IX-XII',
      infoLink: 'https://example.com/missiondoodle'
    },
    {
      title: 'GameCraft',
      image: 'https://i.pinimg.com/564x/7c/8a/6c/7c8a6c9daf7bf45a06cfb9c25a210c21.jpg',
      classes: 'IV-V',
      infoLink: 'https://example.com/gamecraft'
    },
    {
      title: 'SlideSage',
      image: 'https://i.pinimg.com/564x/63/a8/e0/63a8e07d533cf154f310eaa8c328c51b.jpg',
      classes: 'VI-VIII',
      infoLink: 'https://example.com/slidesage'
    },
    {
      title: 'SnapShot',
      image: 'https://pbs.twimg.com/media/GVZPY07bIAATOOt?format=jpg&name=4096x4096',
      classes: 'VI-VIII',
      infoLink: 'https://example.com/snapshot'
    },
    {
      title: 'Pitch Prodigy',
      image: 'https://i.pinimg.com/564x/9f/57/85/9f578565f96cff23b2f790d94a4936a6.jpg',
      classes: 'IX-XII',
      infoLink: 'https://example.com/pitchprodigy'
    },
    {
      title: 'Future Tech',
      image: 'https://i.pinimg.com/564x/a0/88/73/a0887393d913a0a2f468e1da3eaa4080.jpg',
      classes: 'IX-XII',
      infoLink: 'https://example.com/futuretech'
    },
    {
      title: 'Cryptex',
      image: 'https://i.pinimg.com/564x/bb/09/04/bb09048e906e75e7ffcc8b11660adcad.jpg',
      classes: 'VI-VIII',
      infoLink: 'https://example.com/cryptex'
    },
    {
      title: 'RoboMaze',
      image: 'https://i.pinimg.com/564x/05/bd/fd/05bdfdf6ba84d0e7a6105c7aabda09bc.jpg',
      classes: 'OPEN',
      infoLink: 'https://example.com/robomaze'
    },
    {
      title: 'IdeasUnleashed',
      image: 'https://i.pinimg.com/564x/1d/f5/3a/1df53a427f565e67a70f17c5d5f7ee91.jpg',
      classes: 'IX-XII',
      infoLink: 'https://example.com/ideasunleashed'
    },
  ]

export default function ScrollAnimation() {
  const servicesRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const services = gsap.utils.toArray(`.${styles.service}`)

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const service = entry.target
          const imgContainer = service.querySelector(`.${styles.img}`)

          gsap.set(imgContainer, { width: "30%" })
          gsap.set(service, { height: "150px" })

          ScrollTrigger.create({
            trigger: service,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress
              let newWidth = 30 + 70 * progress
              gsap.to(imgContainer, {
                width: newWidth + "%",
                duration: 0.1,
                ease: "none",
              })
            },
          })

          ScrollTrigger.create({
            trigger: service,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              let progress = self.progress
              let newHeight = 150 + 300 * progress
              gsap.to(service, {
                height: newHeight + "px",
                duration: 0.1,
                ease: "none",
              })
            },
          })

          observer.unobserve(service)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    services.forEach((service) => {
      observer.observe(service)
    })

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.container}>

      <section className={styles.services} ref={servicesRef}>
        <div className={styles.servicesHeader}>
          <div className={styles.col}></div>
          <div className={styles.col}><h1>EVENTS</h1></div>
        </div>

        {events.map((event, index) => (

          
          <div key={index} className={styles.service}>


            <div className={styles.serviceInfo}>
              <h1 className={styles.h1}>{event.title}</h1>
              <p className={styles.p}>
                Class: {event.classes}<br />
                <a className={styles.a} href={event.infoLink} target="_blank">More Info 🔗</a>
              </p>
            </div>
            <div className={styles.serviceImg}>
              <div className={styles.img}>
                <img src={event.image} alt={event.title} />
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  )
}







// 'use client'

// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Lenis from '@studio-freight/lenis'
// import styles from './styles.module.scss'

// gsap.registerPlugin(ScrollTrigger)

// const events = [
//   {
//     title: 'BattleOfBrains',
//     image: 'https://i.pinimg.com/564x/7f/40/b2/7f40b21e46f376e504ce2a016176b3a7.jpg',
//     classes: 'CS101, CS201',
//     infoLink: 'https://example.com/battleofbrains'
//   },
//   {
//     title: 'VirtualWarriors',
//     image: 'https://i.pinimg.com/736x/38/cc/72/38cc72708964ad19ee35895ed965339a.jpg',
//     classes: 'VR301, CS401',
//     infoLink: 'https://example.com/virtualwarriors'
//   },
//   {
//     title: 'EWaste Expression',
//     image: 'https://i.pinimg.com/564x/d5/85/d2/d585d28bb3f98239bf069551205535ac.jpg',
//     classes: 'ENV202, ART101',
//     infoLink: 'https://example.com/ewasteexpression'
//   },
//   {
//     title: 'Top Coders',
//     image: 'https://preview.redd.it/hyprland-my-first-rice-not-so-bad-right-v0-l1oyuwepzlpd1.png?width=1080&crop=smart&auto=webp&s=26d4770828e9fcbc43de0e6eeda3917e12ac4d17',
//     classes: 'CS301, CS401',
//     infoLink: 'https://example.com/topcoders'
//   },
//   {
//     title: 'Webolution',
//     image: 'https://i.pinimg.com/736x/55/b0/05/55b005dc58a78dbeb8e868e699bf2ef2.jpg',
//     classes: 'WEB101, WEB201',
//     infoLink: 'https://example.com/webolution'
//   },
//   {
//     title: 'Mission Doodle',
//     image: 'https://pbs.twimg.com/media/GX_NCacXwAAY-Ar?format=jpg&name=large',
//     classes: 'ART101, CS201',
//     infoLink: 'https://example.com/missiondoodle'
//   },
//   {
//     title: 'GameCraft',
//     image: 'https://i.pinimg.com/564x/7c/8a/6c/7c8a6c9daf7bf45a06cfb9c25a210c21.jpg',
//     classes: 'GAME101, CS301',
//     infoLink: 'https://example.com/gamecraft'
//   },
//   {
//     title: 'SlideSage',
//     image: 'https://i.pinimg.com/564x/63/a8/e0/63a8e07d533cf154f310eaa8c328c51b.jpg',
//     classes: 'PRES101, COM201',
//     infoLink: 'https://example.com/slidesage'
//   },
//   {
//     title: 'SnapShot',
//     image: 'https://pbs.twimg.com/media/GVZPY07bIAATOOt?format=jpg&name=4096x4096',
//     classes: 'PHOTO101, ART201',
//     infoLink: 'https://example.com/snapshot'
//   },
//   {
//     title: 'Pitch Prodigy',
//     image: 'https://i.pinimg.com/564x/9f/57/85/9f578565f96cff23b2f790d94a4936a6.jpg',
//     classes: 'BUS301, COM301',
//     infoLink: 'https://example.com/pitchprodigy'
//   },
//   {
//     title: 'Future Tech',
//     image: 'https://i.pinimg.com/564x/a0/88/73/a0887393d913a0a2f468e1da3eaa4080.jpg',
//     classes: 'TECH401, CS501',
//     infoLink: 'https://example.com/futuretech'
//   },
//   {
//     title: 'Cryptex',
//     image: 'https://i.pinimg.com/564x/bb/09/04/bb09048e906e75e7ffcc8b11660adcad.jpg',
//     classes: 'CRYPTO101, CS401',
//     infoLink: 'https://example.com/cryptex'
//   },
//   {
//     title: 'RoboMaze',
//     image: 'https://i.pinimg.com/564x/05/bd/fd/05bdfdf6ba84d0e7a6105c7aabda09bc.jpg',
//     classes: 'ROBO201, CS301',
//     infoLink: 'https://example.com/robomaze'
//   },
//   {
//     title: 'IdeasUnleashed',
//     image: 'https://i.pinimg.com/564x/1d/f5/3a/1df53a427f565e67a70f17c5d5f7ee91.jpg',
//     classes: 'INNOV101, BUS201',
//     infoLink: 'https://example.com/ideasunleashed'
//   },
// ]

// export default function ScrollAnimation() {
//   const servicesRef = useRef(null)

//   useEffect(() => {
//     const lenis = new Lenis()

//     lenis.on('scroll', ScrollTrigger.update)

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000)
//     })

//     gsap.ticker.lagSmoothing(0)

//     const services = gsap.utils.toArray(`.${styles.service}`)

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.1,
//     }

//     const observerCallback = (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const service = entry.target
//           const imgContainer = service.querySelector(`.${styles.img}`)

//           gsap.set(imgContainer, { width: "30%" })
//           gsap.set(service, { height: "150px" })

//           ScrollTrigger.create({
//             trigger: service,
//             start: "bottom bottom",
//             end: "top top",
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress
//               let newWidth = 30 + 70 * progress
//               gsap.to(imgContainer, {
//                 width: newWidth + "%",
//                 duration: 0.1,
//                 ease: "none",
//               })
//             },
//           })

//           ScrollTrigger.create({
//             trigger: service,
//             start: "top bottom",
//             end: "top top",
//             scrub: true,
//             onUpdate: (self) => {
//               let progress = self.progress
//               let newHeight = 150 + 300 * progress
//               gsap.to(service, {
//                 height: newHeight + "px",
//                 duration: 0.1,
//                 ease: "none",
//               })
//             },
//           })

//           observer.unobserve(service)
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, observerOptions)

//     services.forEach((service) => {
//       observer.observe(service)
//     })

//     return () => {
//       lenis.destroy()
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill())
//       observer.disconnect()
//     }
//   }, [])

//   return (
//     <div className={styles.container}>
//       <section className={styles.hero}></section>

//       <section className={styles.services} ref={servicesRef}>
//         <div className={styles.servicesHeader}>
//           <div className={styles.col}></div>
//           <div className={styles.col}><h1>EVENTS</h1></div>
//         </div>

//         {events.map((event, index) => (
//           <div key={index} className={styles.service}>
//             <div className={styles.serviceInfo}>
//               <h2>{event.title}</h2>
//               <p>
//                 Classes: {event.classes}<br />
//                 <a href={event.infoLink} target="_blank" rel="noopener noreferrer">Information</a>
//               </p>
//             </div>
//             <div className={styles.serviceImg}>
//               <div className={styles.img}>
//                 <img src={event.image} alt={event.title} />
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       <section className={styles.footer}></section>
//     </div>
//   )
// }





