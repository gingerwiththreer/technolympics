'use client';
import styles from './style.module.scss';
import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/index';
import { useGSAP } from '@gsap/react';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);


const Intro = () => {
    const textRef = useRef([]);
  
    useEffect(() => {
      const textElements = textRef.current;
  
      textElements.forEach(text => {
        gsap.to(text, {
          backgroundSize: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: text,
            start: 'center 80%',
            end: 'center 20%',
            scrub: true,
          },
        });
      });
    }, []);
  
    return (

        
        <div className={styles.container}>
            <img className={styles.imgsep} src="https://pbs.twimg.com/media/GXWNHvIWkAAHnfM?format=png&name=medium" />
          {['THE INFOTECH DEPARTMENT', 'OF', 'CAMBRIDGE SCHOOL NOIDA', 'IS BACK WITH', '13TH EDITION OF', 'TECHNOLYMPICS'].map((text, index) => (
            <h1
              key={index}
              className={styles.text}
              ref={(el) => (textRef.current[index] = el)}
            >
              {text}
            </h1>
          ))}
        </div>
      );
    };
    
    export default Intro;
  

  



  
