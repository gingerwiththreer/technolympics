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
            <img className={styles.headimg} src="https://pbs.twimg.com/media/GWTfb4bXAAARg4n?format=png&name=large" />
            <img className={styles.imgphone} src="https://pbs.twimg.com/media/GXgRJWsWoAAPtX0?format=png&name=medium" />

            <div className={styles.timer}>
                <Countdown targetDate="2024-12-25T00:00:00" /> 
            </div>
            <h1 className={styles.date}>
                COMING SOON
            </h1>
        </div>
        
        
    );
}

export default Header2;
