import { Status, CourseMeta, Course } from "./types";
import { CoursesSliceState, FetchCourseResponse } from "./courses/types";
import { Lesson, Lessons, LessonsSliceState, FetchLessonsParams } from "./lessons/types";

describe('file in the redux directory with all global types', () => {
    it('has all enums', () => {
        expect(Status).toBeDefined();
    })

    it('has all types', () => {
        const CourseMeta2 = {} as CourseMeta;
        expect(CourseMeta2).toBeDefined();

        const Course2 = {} as Course;
        expect(Course2).toBeDefined();
    })
})

describe('file for exporting course slice types', () => {
    it('has all interfaces', () => {
        const CoursesSliceState2 = {} as CoursesSliceState;
        expect(CoursesSliceState2).toBeDefined();

        const FetchCourseResponse2 = {} as FetchCourseResponse;
        expect(FetchCourseResponse2).toBeDefined();
    })
})

describe('file for exporting course slice types', () => {
    it('has all interfaces and types', () => {
        const Lesson2 = {} as Lesson;
        expect(Lesson2).toBeDefined();

        const Lessons = {} as Lessons;
        expect(Lessons).toBeDefined();

        const LessonsSliceState2 = {} as LessonsSliceState;
        expect(LessonsSliceState2).toBeDefined();

        const FetchLessonsParams2 = {} as FetchLessonsParams;
        expect(FetchLessonsParams2).toBeDefined();
    })
})