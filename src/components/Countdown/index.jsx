import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate) {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className={styles.main} style={{ display: 'flex', gap: '15px', textAlign: 'center' }}>
      <div>
        <div style={{ fontSize: '15px' }}>{timeLeft.days || 0}</div>
        <div className={styles.days}>DAYS</div>
      </div>
      <div>
        <div style={{ fontSize: '15px' }}>{timeLeft.hours || 0}</div>
        <div className={styles.hours}>HOURS</div>
      </div>
      <div>
        <div style={{ fontSize: '15px' }}>{timeLeft.minutes || 0}</div>
        <div className={styles.minutes}>MINUTES</div>
      </div>
      <div>
        <div style={{ fontSize: '15px' }}>{timeLeft.seconds || 0}</div>
        <div className={styles.seconds}>SECONDS</div>
      </div>
    </div>
  );
};

export default Countdown;
