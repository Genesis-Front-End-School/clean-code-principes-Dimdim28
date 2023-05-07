import { Status, CourseMeta, Course } from "./types";
import { CoursesSliceState, FetchCourseResponse } from "./courses/types";
import { Lesson, Lessons, LessonsSliceState, FetchLessonsParams } from "./lessons/types";

const CourseMetaMock = {
    slug: "slug",
    skills: ["skill1", "skill2"],
    fullCourseProductId: "666",
    fullCourseProductFamily: "hell",
    courseVideoPreview: {
        link: "link",
        duration: 777,
        previewImageLink: "link",
    }
}

const CourseMock = {
    id: 'this is id',
    title: 'title',
    tags: ['tag1', 'tag2'],
    status: 'launched',
    description: "descr",
    duration: 1000,
    lessonsCount: 100,
    containsLockedLessons: true,
    previewImageLink: "link",
    rating: 10,
    meta: CourseMetaMock,
};

function courseMetaTestFunction(CourseMetaParam: CourseMeta) {
    return CourseMetaParam;
}

function CourseTestFunction(CourseParam: Course) {
    return CourseParam;
}

describe('file in the redux directory with all global types', () => {
    it('has all enums', () => {
        expect(Status).toBeDefined();
    })

    it('has all types', () => {
        const CourseMetaResult: CourseMeta = courseMetaTestFunction(CourseMetaMock);
        expect(CourseMetaResult).toBeDefined();

        const CourseResult: Course = CourseTestFunction(CourseMock);
        expect(CourseResult).toBeDefined();

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