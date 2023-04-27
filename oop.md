# Singleton

I implemented the Singleton GoF pattern for the instance of the axios client. Singleton guarantees the existence of only one object of a certain class, and also allows you to reach this object from anywhere in the program.

```js
import axios, { AxiosInstance } from 'axios';

export class SingletonInstance {
  private static instance: AxiosInstance;

  private constructor() { }

  public static getInstance(): AxiosInstance {
    if (!this.instance) this.instance = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/${process.env.NEXT_PUBLIC_API_VERSION}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    });

    return this.instance;
  }
}

export default SingletonInstance.getInstance();

```

# Builder

I have also used redux here, so I have here an example of the using built-in realization of the builder GoF pattern which allows constructing complex objects step by step. In the redux we have ability to work with extra reducers by using builder. We can add as much cases as we want with using addcase() method.


#####  lessons slice

```js
import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';

import { fetchLessons } from './asyncActions';
import { LessonsSliceState } from './types';

const initialState: LessonsSliceState = {
  status: Status.LOADING,
  lessons: [],
  courseInfo: null,
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchLessons.pending, state => {
      delete state.Error;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchLessons.fulfilled, (state, action) => {
      const { lessons, ...courseInfo } = action.payload;
      state.lessons = lessons;
      state.courseInfo = courseInfo;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchLessons.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.Error = action.error.message;
    });
  },
});

export default lessonsSlice.reducer;
```

#####  courses slice

```js
import { createSlice } from '@reduxjs/toolkit';

import { Status } from '../types';

import { fetchCourses } from './asyncActions';
import { CoursesSliceState } from './types';

const initialState: CoursesSliceState = {
  status: Status.LOADING,
  courses: [],
  currentPage: 1,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCourses.pending, state => {
      delete state.Error;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.Error = action.error.message;
    });
  },
});

export const { setCurrentPage } = coursesSlice.actions;

export default coursesSlice.reducer;
```
# Observer

Using redux also gives us a good example of the Observer pattern, we have useSelector and useDispatch hooks. Any component in the application can watch changes to any part of the store. As soon as slice of state this component is listening to changes, it and all other subscribers using this changed data will be re-rendered.


##### I created useAppDispatch and useAppSelector with using Typescript, so here is example of the implementation and using this typed hooks.

```js
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

##### I had also created selectors.

```js
import { RootState } from '@/redux/store';

export const selectLessons = (state: RootState) => state.lessons.lessons;
export const selectCourseInfo = (state: RootState) => state.lessons.courseInfo;
export const selectStatus = (state: RootState) => state.lessons.status;
export const selectError = (state: RootState) => state.lessons.Error;

```

##### We can use hook useAppSelector in che component to get the information and listen changes of it.

```js
const status = useAppSelector(selectStatus);
const lessons = useAppSelector(selectLessons)
    .slice()
    .sort((a, b) => a.order - b.order);
const courseInfo = useAppSelector(selectCourseInfo);
const error = useAppSelector(selectError);
```

##### Then we can use created variables:
```js
if (status === 'loading') return <Preloader />;
if (status === 'error') return <Error text={error} />;


<p>{courseInfo.title}</p>
<p> {courseInfo.description}</p>

<div className={styles.lessons}>
          {lessons.map((lesson, id) => (
            <LessonCard
              {...lesson}
              key={id}
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          ))}
        </div>

```