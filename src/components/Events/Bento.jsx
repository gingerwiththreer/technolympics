import React from 'react';
import styles from './styles.module.scss';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';

// Generate a random size class for each item
const getRandomSizeClass = () => {
  const sizes = ['small', 'medium', 'large'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const BentoGrid = ({ className, children }) => (
  <div className={`${styles.bentoGrid} ${className}`}>
    {children}
  </div>
);

const BentoGridItem = ({ className, title, description, header, icon }) => {
  const sizeClass = getRandomSizeClass();

  return (
    <div
      className={`${styles.bentoGridItem} ${styles[sizeClass]} ${className}`}
    >
      {header}
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};

const Skeleton = () => (
  <div className={styles.skeleton}></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className={styles.icon} />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className={styles.icon} />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className={styles.icon} />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className={styles.icon} />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className={styles.icon} />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className={styles.icon} />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className={styles.icon} />,
  },
];

export function Bento() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

export default Bento;
