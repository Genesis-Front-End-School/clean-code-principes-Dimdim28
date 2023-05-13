import { NextPage } from 'next';
import { useAppSelector } from '../hooks/appHooks';

import { selectTheme } from '../redux/main/selectors';
import NotFoundPage from "../components/pages/404-page";

import styles from './404.module.scss';

const Details: NextPage = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <div className={theme === 'light' ? styles.main : styles.darkMain} role='wrapper'>
      <NotFoundPage />
    </div>
  );
};

export default Details;
