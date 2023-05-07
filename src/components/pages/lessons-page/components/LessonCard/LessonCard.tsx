import React from 'react';

import styles from './LessonCard.module.scss';

interface lessonCardprops {
  id: string;
  title: string;
  duration: number;
  order: number;
  type: string;
  link: string;
  status: string;
  previewImageLink: string;
  meta?: {
    difficulty: string;
  };
  setCurrentVideo: React.Dispatch<React.SetStateAction<number>>;
  currentVideo: number;
  hasError?: boolean;
}

const LessonCard: React.FC<lessonCardprops> = ({
  title,
  order,
  status,
  previewImageLink,
  link,
  setCurrentVideo,
  currentVideo,
  hasError
}) => {
  const [error, setError] = React.useState(hasError || false);
  if (error)
    return (
      <div className={styles.wrapper} style={{ cursor: 'auto' }}>
        <img className={styles.image} src={'/404.png'} alt={'errorLessonImage'} />
      </div>
    );
  return (
    <div role="card"
      className={
        status === 'locked' || !link
          ? styles.locked
          : order === currentVideo + 1
          ? styles.active
          : styles.wrapper
      }
      onClick={() => {
        setCurrentVideo(order - 1);
      }}
    >
      <img
        onError={() => setError(true)}
        className={styles.image}
        src={ (previewImageLink && order ) ? `${previewImageLink}/lesson-${order}.webp` : '/preview.jpg'}
        alt={title}
      />
      <p>{title}</p>
    </div>
  );
};

export default LessonCard;
