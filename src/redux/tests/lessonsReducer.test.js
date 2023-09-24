import { fetchLessons } from "../lessons/asyncActions";
import lessonsReducer from "../lessons/slice";

const initialState = {
    status: 'loading',
    lessons: [],
    courseInfo: null,
}

const lessons = {
    lessons: [
        {
            id: 'b9ad7391-0f0b-4fe1-b919-6525d76ad3c4',
            title: 'Why short-term gains aren’t worth it',
            duration: 229,
            order: 1,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-1/AppleHLS1/lesson-1.m3u8',
            previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-1',
            meta: null
        },
        {
            id: '150d6b43-7a39-4a8f-b693-b3c519d62ee6',
            title: 'Exercise your self-control',
            duration: 280,
            order: 2,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-2/AppleHLS1/lesson-2.m3u8',
            previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-2',
            meta: null
        },
        {
            id: 'aadd36f4-bf23-4f86-a6b2-767525d38989',
            title: 'Why we need routine',
            duration: 317,
            order: 3,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-3/AppleHLS1/lesson-3.m3u8',
            previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-3',
            meta: null
        },
        {
            id: 'b311d60d-652c-4fbf-b687-d43004c98342',
            title: 'Become personally accountable',
            duration: 333,
            order: 4,
            type: 'video',
            status: 'unlocked',
            link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-4/AppleHLS1/lesson-4.m3u8',
            previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-4',
            meta: null
        },
    ],
    id: '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714',
    title: 'The Power of Self-Discipline: How to Stay on Track',
    tags: [
        'productivity'
    ],
    launchDate: '2023-03-06T16:25:24.000Z',
    status: 'launched',
    description: 'Find the inner strength to overcome procrastination and reach your goals.',
    duration: 1486,
    previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track',
    rating: 5,
    meta: {
        slug: 'the-power-of-self-discipline-how-to-stay-on-track',
        skills: [
            'Increasing self-awareness',
            'Personal accountability',
            'Developing a routine',
            'Improving self-control',
            'Focusing on long-term goals'
        ],
        courseVideoPreview: {
            link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/preview/AppleHLS1/preview.m3u8',
            duration: 19,
            previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-power-of-self-discipline-how-to-stay-on-track/preview'
        }
    },
    containsLockedLessons: false
};

describe('lessons slice reducers', () => {

    it('should return default state when passed an empty action', () => {
        const result = lessonsReducer(initialState, { type: "" });
        expect(result).toEqual({
            status: 'loading',
            lessons: [],
            courseInfo: null
        });
    })
    it('state should change correctly with fetchLessons.pending action', () => {
        const state = lessonsReducer(initialState, fetchLessons.pending());
        expect(state.status).toBe('loading')
    })
    it('state should change correctly with fetchLessons.fulfilled action', () => {
        const state = lessonsReducer(initialState, fetchLessons.fulfilled(lessons));
        expect(state.status).toBe('success');
        expect(state.lessons).toHaveLength(4);
        expect(state.lessons[0].id).toBe('b9ad7391-0f0b-4fe1-b919-6525d76ad3c4');
        expect(state.courseInfo.id).toBe('3b77ceb6-fb43-4cf5-a25b-8fe9222a0714');
        expect(state.courseInfo.title).toBe('The Power of Self-Discipline: How to Stay on Track')
    })
    it('state should change correctly with fetchLessons.rejected action', () => {
        const state = lessonsReducer(initialState, fetchLessons.rejected("was rejected"));
        expect(state.status).toBe('error');
        expect(state.Error).toBe('was rejected')
    })

})