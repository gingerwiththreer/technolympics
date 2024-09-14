import styles from './style.module.scss';
// import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
// import { perspective, slideIn } from "./anim";

export default function index() {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map(link => {
                const { title, href, target } = link;
                return (
                    <div key={title || href} className={styles.linkContainer}>
                        <a
                          href={href}
                          target={target}
                        //   variants={perspective}
                        //   initial="initial"
                        //   animate="enter"
                        //   exit="exit"
                        >
                            {title}
                        </a>
                    </div>
                )
            })
        }
       </div>
       <div className={styles.footer}>
            {
                footerLinks.map(link => {
                    const { title, href, target } = link;
                    return (
                        <a 
                            href={href}
                            target={target}
                            key={title || href}
                        >
                            {title}
                        </a>
                    )
                })
            }
       </div>
    </div>
  )
}
