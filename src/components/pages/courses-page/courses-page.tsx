import React, { useEffect, useState } from 'react';

import Error from '@/components/common/Error';
import Preloader from '@/components/common/Preloader';
import { useAppDispatch, useAppSelector } from '@/hooks/appHooks';
import { fetchCourses } from '@/redux/courses/asyncActions';
import {
  selectCourses,
  selectCurrentPage,
  selectError,
  selectStatus,
} from '@/redux/courses/selectors';
import { setCurrentPage } from '@/redux/courses/slice';

import CourseCard from './components/CourseCard';
import Pagination from './components/Pagination';

import styles from './courses-page.module.scss';

const CoursesPage = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);
  const courses = useAppSelector(selectCourses);
  const current = useAppSelector(selectCurrentPage);
  const error = useAppSelector(selectError);
  const [page, setPage] = useState(current);

  useEffect(() => {
    if (!courses.length) dispatch(fetchCourses());
  }, [dispatch, courses]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(page));
  }, [page, dispatch]);

  if (status === 'loading') return <Preloader />;
  if (status === 'error') return <Error text={error} />;
  const sortedCourses = courses
    .slice(10 * (page - 1), 10 * page)
    .sort(
      (a, b) =>
        new Date(b.launchDate).valueOf() - new Date(a.launchDate).valueOf(),
    );
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {sortedCourses.map(course => (
          <CourseCard
            key={course.id}
            {...course}
            image={course.previewImageLink}
            skills={course.meta.skills}
            videoLink={course.meta.courseVideoPreview?.link || ''}
            videoPreviewImage={
              course.meta.courseVideoPreview?.previewImageLink || ''
            }
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={Math.ceil(courses.length / 10)}
      />
    </div>
  );
};

export default CoursesPage;
