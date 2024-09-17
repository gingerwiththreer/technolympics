'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

const menu = {
    open: {
        width: "400px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
        width: "30px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
}

export default function Index() {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            {/* Animated Menu */}
            <motion.div 
                className={styles.menu}
                variants={menu}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>

                {/* Video Background inside Menu */}
                <video className={styles.backgroundVideo} autoPlay loop muted playsInline>
                    <source src="https://v1.pinimg.com/videos/mc/720p/fa/00/26/fa002683eadb48e18237aa2302cbb343.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Button */}
            <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </div>
    );
}
