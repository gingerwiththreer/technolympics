'use client';
import styles from './style.module.scss';
import Countdown from '../Countdown';
// export default function Index() {
//     const [isActive, setIsActive] = useState(false);

//     return (
//         <div className={styles.header2}>
//             hahaha
//         </div>
//     )
// }

import React from 'react';

function Header2() {
    return(
        <div className={styles.header2}>
            <a href='localhost:3000'><img className={styles.headimg} src="https://pbs.twimg.com/media/GWTfb4bXAAARg4n?format=png&name=large" /></a>
            <span className={styles.timer}>
                <Countdown targetDate="2024-10-22T00:00:00" /> 
            </span>
            <h1 className={styles.date}>
                22nd October 2024
            </h1>
        </div>
        
        
    );
}

export default Header2;