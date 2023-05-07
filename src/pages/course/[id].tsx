import { NextPage } from 'next';

import LessonsPage from '@/components/pages/lessons-page';

const Details: NextPage = () => {
  return (
    <main className="main" role='wrapper'>
      <LessonsPage />
    </main>
  );
};

export default Details;
