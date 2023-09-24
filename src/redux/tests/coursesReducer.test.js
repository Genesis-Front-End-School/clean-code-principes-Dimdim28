import coursesReducer, { setCurrentPage } from "../courses/slice";
import { fetchCourses } from "../courses/asyncActions";

const initialState = {
    status: 'loading',
    courses: [],
    currentPage: 1,
}
const courses = [
    {
        id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
        title: 'Lack of Motivation & How to Overcome It',
        tags: [
            'productivity'
        ],
        launchDate: '2023-03-06T16:50:06.000Z',
        status: 'launched',
        description: 'Reignite your inner drive by managing factors that dampen your motivation.',
        duration: 1401,
        lessonsCount: 5,
        containsLockedLessons: false,
        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it',
        rating: 3.5,
        meta: {
            slug: 'lack-of-motivation-how-to-overcome-it',
            skills: [
                'Aligning your goals with your motives',
                'Overcoming decision paralysis',
                'Reframing negative self-talk',
                'Gaining clarity',
                'Challenging yourself'
            ],
            courseVideoPreview: {
                link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8',
                duration: 27,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/lack-of-motivation-how-to-overcome-it/preview'
            }
        }
    },
    {
        id: '3b77ceb6-fb43-4cf5-a25b-8fe9222a0714',
        title: 'The Power of Self-Discipline: How to Stay on Track',
        tags: [
            'productivity'
        ],
        launchDate: '2023-03-06T16:25:24.000Z',
        status: 'launched',
        description: 'Find the inner strength to overcome procrastination and reach your goals.',
        duration: 1486,
        lessonsCount: 5,
        containsLockedLessons: false,
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
        }
    },
    {
        id: 'f58ff842-2d2b-4f24-9a4b-c6f6e1fd866e',
        title: 'Win Your Emotional Battle Against Procrastination',
        tags: [
            'productivity'
        ],
        launchDate: '2023-03-06T16:13:29.000Z',
        status: 'launched',
        description: 'Learn to manage negative emotions that make you put things off.',
        duration: 1458,
        lessonsCount: 5,
        containsLockedLessons: false,
        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination',
        rating: 3.5,
        meta: {
            slug: 'Win-your-emotional-battle-against-procrastination',
            skills: [
                'Eliminating boredom',
                'Overcoming the fear of failure',
                'Dealing with uncertainty',
                'Managing feelings of guilt',
                'Recognizing your emotions'
            ],
            courseVideoPreview: {
                link: 'https://wisey.app/videos/Win-your-emotional-battle-against-procrastination/preview/AppleHLS1/preview.m3u8',
                duration: 17,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/Win-your-emotional-battle-against-procrastination/preview'
            }
        }
    },
]

describe('courses slice reducers', () => {
    it('should return default state when passed an empty action', () => {
        const result = coursesReducer(initialState, { type: "" });
        expect(result).toEqual({
            status: 'loading',
            courses: [],
            currentPage: 1
        });
    })
    it('should change page in state when passed setCurrentPage action', () => {
        const result = coursesReducer(initialState, { type: setCurrentPage.type, payload: 2 });
        expect(result).toEqual({
            status: 'loading',
            courses: [],
            currentPage: 2
        });
    })
    it('state should change correctly with fetchCourses.pending action', () => {
        const state = coursesReducer(initialState, fetchCourses.pending());
        expect(state.status).toBe('loading')
    })
    it('state should change correctly with fetchCourses.fulfilled action', () => {
        const state = coursesReducer(initialState, fetchCourses.fulfilled(courses));
        expect(state.status).toBe('success');
        expect(state.courses).toHaveLength(3);
        expect(state.courses[0].id).toBe('352be3c6-848b-4c19-9e7d-54fe68fef183');
    })
    it('state should change correctly with fetchCourses.rejected action', () => {
        const state = coursesReducer(initialState, fetchCourses.rejected("was rejected"));
        expect(state.status).toBe('error');
        expect(state.Error).toBe('was rejected')
    })
})