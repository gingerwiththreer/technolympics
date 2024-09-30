'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react';

export default function About() {
    // Define the projects array here
    const projects = [
        {
            name: "TECHNOLYMPICS",
            client: "Grow",
            description: "A partnership between Google & SN37.",
            src: "tc1.png",
            year: 2023,
        },
        {
            name: "TECHNOLYMPICS",
            client: "Decimal",
            description: "Portfolio site for Decimal.",
            src: "tc2.png",
            year: 2016,
        },
        {
            name: "TECHNOLYMPICS",
            client: "analogueagency",
            description: "New web design for the blockchain investment fund Maven 11.",
            src: "tc3.png",
            year: 2018,
        },
        {
            name: "TECHNOLYMPICS",
            client: "Wix Playground",
            description: "Wix Playground is powered by the Wix.com design team.",
            src: "tc4.png",
            year: 2023,
        },
        {
            name: "TECHNOLYMPICS",
            client: "POWELL—STUDIO",
            description: "The online presence for Powell—Studio.",
            src: "tc5.png",
            year: 2022,
        },
        {
            name: "TECHNOLYMPICS",
            client: "ET Studio",
            description: "An Italian animation studio.",
            src: "tc6.png",
            year: 2022,
        },
        {
            name: "TECHNOLYMPICS",
            client: "Ingamana",
            description: "C2 Montréal is Canada's premier creative-business event.",
            src: "tc7.png",
            year: 2022,
        },
        {
            name: "TECHNOLYMPICS",
            client: "Shader Studio",
            description: "Funny is the design work of Daniele Buffa.",
            src: "tc8.png",
            year: 2023,
        }
    ];

    const Double = ({ reversed, projects }) => {
        const firstImage = useRef(null);
        const secondImage = useRef(null);
        let requestAnimationFrameId = null;
        let xPercent = reversed ? 100 : 0;
        let currentXPercent = reversed ? 100 : 0;
        const speed = 0.15;

        const manageMouseMove = (e) => {
            const { clientX } = e;
            xPercent = (clientX / window.innerWidth) * 100;

            if (!requestAnimationFrameId) {
                requestAnimationFrameId = window.requestAnimationFrame(animate);
            }
        };

        const animate = () => {
            const xPercentDelta = xPercent - currentXPercent;
            currentXPercent += xPercentDelta * speed;

            const firstImagePercent = 66.66 - currentXPercent * 0.33;
            const secondImagePercent = 33.33 + currentXPercent * 0.33;

            firstImage.current.style.width = `${firstImagePercent}%`;
            secondImage.current.style.width = `${secondImagePercent}%`;

            if (Math.round(xPercent) === Math.round(currentXPercent)) {
                window.cancelAnimationFrame(requestAnimationFrameId);
                requestAnimationFrameId = null;
            } else {
                window.requestAnimationFrame(animate);
            }
        };

        return (
            <div onMouseMove={manageMouseMove} className={styles.double}>
                <div ref={firstImage} className={styles.imageContainer}>
                    <div className={styles.stretchyWrapper}>
                        <Image
                            src={`/images/${projects[0].src}`}
                            fill={true}
                            alt={projects[0].name}
                        />
                    </div>
                    <div className={styles.body}>
                        <h3>{projects[0].name}</h3>
                        <p>{projects[0].year}</p>
                    </div>
                </div>

                <div ref={secondImage} className={styles.imageContainer}>
                    <div className={styles.stretchyWrapper}>
                        <Image
                            src={`/images/${projects[1].src}`}
                            fill={true}
                            alt={projects[1].name}
                        />
                    </div>
                    <div className={styles.body}>
                        <h3>{projects[1].name}</h3>
                        <p>{projects[1].year}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={styles.idk}>
            <h1 className={styles.h1}>****Bringing together the brightest minds, the creative thinkers, and tech enthusiasts to showcase their skills****</h1>
            <div className={styles.gallery}>
                <Double projects={[projects[0], projects[1]]} />
                <Double projects={[projects[2], projects[3]]} reversed={true} />
                <Double projects={[projects[4], projects[5]]} />
                <Double projects={[projects[6], projects[7]]} reversed={true} />
            </div>
        </div>
    );
}
