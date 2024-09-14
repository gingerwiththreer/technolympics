'use client';
import styles from './style.module.scss';

import React from 'react'
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'; // import css


// function Herodiv() {
//   return (
//     <div className={styles.Herodiv}>
//         index
//     </div>
//   );
// }

function Herodiv() {
    return(
        <div className={styles.herodiv}>
            <img className={styles.heroimg} src="https://cdnb.artstation.com/p/assets/images/images/047/683/563/large/ikhimaz-inshot-20220325-063211217.jpg?1648170514" />
        </div>
    );
}

export default Herodiv;



