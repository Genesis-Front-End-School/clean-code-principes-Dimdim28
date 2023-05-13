import React from 'react';
import Link from 'next/link';

import { useAppSelector } from '@/hooks/appHooks';
import { selectTheme } from '@/redux/main/selectors';

import styles from './notfound-page.module.scss';

const NotFoundPage: React.FC = () => {

  const theme = useAppSelector(selectTheme);

  return (
    <div className={theme === 'light' ? styles.wrapper : styles.darkWrapper}>
      <h1>Page not found</h1>
      <Link className={styles.button} href="/">
        Back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
