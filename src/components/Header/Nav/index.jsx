import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";

export default function index() {
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href, target } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <motion.a
                        
                          href={href}
                          target={target}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                        >
                            
                            {title}
                            
                        </motion.a>
                    </div>
                )
            })
        }
       </div>
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href, target } = link;
                    return (
                        <motion.a 
                            href={href}
                            target={target}
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}