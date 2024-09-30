import Link from 'next/link'
import styles from './style.module.scss'
import { links, footerLinks } from './data'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.body}>
        {links.map((link) => {
          const { title, href, target } = link

          if (target === "_blank") {
            return (
              <div key={title} className={styles.linkContainer}>
                <a href={href} target={target} rel="noopener noreferrer">
                  {title}
                </a>
              </div>
            )
          }

          return (
            <div key={title} className={styles.linkContainer}>
              <Link href={href}>
                {title}
              </Link>
            </div>
          )
        })}
      </div>

      <div className={styles.footer}>
        {footerLinks.map((link) => {
          const { title, href, target } = link
          return (
            <a href={href} target={target} rel="noopener noreferrer" key={title}>
              {title}
            </a>
          )
        })}
      </div>
    </nav>
  )
}




