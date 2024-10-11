'use client';
import styles from './style.module.scss';

import React from 'react'
// import '~video-react/dist/video-react.css'; // import css


// function Herodiv() {
//   return (
//     <div className={styles.Herodiv}>
//         index
//     </div>
//   );
// }

function Herodiv() {
    return (
        <div className={styles.herodiv}>
            <video className={styles.video} autoPlay loop muted>
                <source src="/videos/finaltrailer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Herodiv;



