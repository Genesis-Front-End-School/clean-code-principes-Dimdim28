import React, { useEffect } from 'react';
import Link from 'next/link';

import { useAppDispatch, useAppSelector } from '../../../hooks/appHooks';
import { selectTheme } from '../../../redux/main/selectors';
import { changeTheme } from '@/redux/main/slice';

import styles from './notfound-page.module.scss';

const NotFoundPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== theme) dispatch(changeTheme());
  }, [])

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
