import { useAppSelector } from '../hooks/appHooks';
import { selectTheme } from '../redux/main/selectors';

import CoursesPage from '../components/pages/courses-page/courses-page';

import colorStyles from '../styles/colorStyles.module.scss';

export default function Home() {
  const theme = useAppSelector(selectTheme);
  return (
    <main className={`main ${theme === 'light' ? colorStyles.light : colorStyles.dark}`}>
      <CoursesPage />
    </main>
  );
}
