import React from 'react';
import styles from './styles.module.scss'; // Import the SCSS module

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <ul className={styles.sitemap}>
          <li><a href="https://www.instagram.com/technolympicscsn">Instagram</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="https://7df9a428-af3e-40ef-a5eb-f8a75223fba4.filesusr.com/ugd/df8c76_96a2f1ffefc04f55a3858cc3248d9d54.pdf">Brochure</a></li>
        </ul>
      </div>
      <div className={styles.right}>
        <video className={styles.video} autoPlay loop muted>
          <source src="/videos/anim.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Footer;
