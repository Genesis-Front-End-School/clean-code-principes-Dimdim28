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

const CoursesSliceStateMock = {
    status: Status.SUCCESS,
    courses: [CourseMock],
    currentPage: 1,
}

const FetchCourseResponseMock = {
    courses: [CourseMock],
}

const LessonMock = {
    id: "string",
    title: "string",
    duration: 666,
    order: 10,
    type: "string",
    status: "string",
    link: "string",
    previewImageLink: "string",
    meta: null,
};

const LessonsMock = {
    ...CourseMock,
    lessons: [LessonMock]
};

const LessonsSliceStateMock = {
    status: Status.LOADING,
    lessons: [LessonMock],
    courseInfo: CourseMock,
}

const FetchLessonsParamsMock = {
    id: "id"
}

function courseMetaTestFunction(CourseMetaParam: CourseMeta) {
    return CourseMetaParam;
}

function CourseTestFunction(CourseParam: Course) {
    return CourseParam;
}

function CoursesSliceStateTestFunction(CoursesSliceStateParam: CoursesSliceState) {
    return CoursesSliceStateParam;
}

function FetchCourseResponseTestFunction(FetchCourseResponseParam: FetchCourseResponse) {
    return FetchCourseResponseParam;
}

function LessonTestFunction(LessonParam: Lesson) {
    return LessonParam;
}

function LessonsTestFunction(LessonsParam: Lessons) {
    return LessonsParam;
}

function LessonsSliceStateTestFunction(LessonsSliceStateParam: LessonsSliceState) {
    return LessonsSliceStateParam;
}

function FetchLessonsParamsTestFunction(FetchLessonsParamsParam: FetchLessonsParams) {
    return FetchLessonsParamsParam;
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
    })
})

describe('file for exporting course slice types', () => {
    it('has all interfaces', () => {
        const CoursesSliceStateResult: CoursesSliceState = CoursesSliceStateTestFunction(CoursesSliceStateMock);
        expect(CoursesSliceStateResult).toBeDefined();

        const FetchCourseResponseResult: FetchCourseResponse = FetchCourseResponseTestFunction(FetchCourseResponseMock);
        expect(FetchCourseResponseResult).toBeDefined();
    })
})

describe('file for exporting course slice types', () => {
    it('has all interfaces and types', () => {
        const LessonResult: Lesson = LessonTestFunction(LessonMock);
        expect(LessonResult).toBeDefined();

        const LessonsResult: Lessons = LessonsTestFunction(LessonsMock);
        expect(LessonsResult).toBeDefined();

        const LessonsSliceStateResult: LessonsSliceState = LessonsSliceStateTestFunction(LessonsSliceStateMock);
        expect(LessonsSliceStateResult).toBeDefined();

        const FetchLessonsParamsResult: FetchLessonsParams = FetchLessonsParamsTestFunction(FetchLessonsParamsMock);
        expect(FetchLessonsParamsResult).toBeDefined();
    })
})