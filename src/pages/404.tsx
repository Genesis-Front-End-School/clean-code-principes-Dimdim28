import { NextPage } from 'next';

import NotFoundPage from "../components/pages/404-page";

import styles from './404.module.scss';

const Details: NextPage = () => {
  return (
    <div className={styles.main} role='wrapper'>
      <NotFoundPage />
    </div>
  );
};

export default Details;
