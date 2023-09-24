import { NextPage } from 'next';
import { useAppSelector } from '../../hooks/appHooks';
import { selectTheme } from '../../redux/main/selectors';

import LessonsPage from '../../components/pages/lessons-page';

import colorStyles from '../../styles/colorStyles.module.scss';

const Details: NextPage = () => {
  const theme = useAppSelector(selectTheme);

  return (
    <main className={`main ${theme === 'light' ? colorStyles.light : colorStyles.dark}`} role='wrapper'>
      <LessonsPage />
    </main>
  );
};

export default Details;
