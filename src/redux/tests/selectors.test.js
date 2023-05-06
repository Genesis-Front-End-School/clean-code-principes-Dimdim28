import { selectCourses, selectStatus, selectError, selectCurrentPage } from "../courses/selectors";

const stateOne = {
    courses: {
        status: 'success',
        courses: [
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
            {
                id: '9c5d78a1-c393-4666-8de4-b9d10c424d30',
                title: 'Goal-Setting 101: Become Productive, Not Busy',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-02-20T13:19:00.000Z',
                status: 'launched',
                description: 'Achieve anything you want by defining goals that actually matter to you.',
                duration: 1420,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy',
                rating: 4.5,
                meta: {
                    slug: 'goal-setting-101-become-productive-not-busy',
                    skills: [
                        'Define goals that matter to you'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/goal-setting-101-become-productive-not-busy/preview/AppleHLS1/preview.m3u8',
                        duration: 17,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/goal-setting-101-become-productive-not-busy/preview'
                    }
                }
            },
            {
                id: '6d923b27-9980-41c1-bd0f-102772377b8d',
                title: 'How to Stop Procrastinating',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-02-12T13:04:20.000Z',
                status: 'launched',
                description: 'It only takes 10-15 minutes a day to eliminate procrastination once and for all',
                duration: 4560,
                lessonsCount: 14,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz',
                rating: 3.5,
                meta: {
                    slug: 'anti-procrastination-quiz',
                    skills: [
                        'Taking responsibility '
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/anti-procrastination-quiz/preview/AppleHLS1/preview.m3u8',
                        duration: 0,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/anti-procrastination-quiz/preview'
                    }
                }
            },
            {
                id: 'b6f69a35-70f8-49fa-8da9-f05e1a75f6ef',
                title: 'Think Creatively, Solve Problems Easily',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-01-24T15:53:07.000Z',
                status: 'launched',
                description: 'Want to generate brilliant ideas on the spot? W’ell show you how to do it using creative techniques.',
                duration: 1603,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/think-creatively-solve-problems-easily',
                rating: 4,
                meta: {
                    slug: 'think-creatively-solve-problems-easily',
                    skills: [
                        'Start generating brilliant ideas now!',
                        'Thinking outside the box',
                        'Generating unique ideas',
                        'Modifying the problem',
                        'Identifying the best solutions'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/think-creatively-solve-problems-easily/preview/AppleHLS1/preview.m3u8',
                        duration: 31,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/think-creatively-solve-problems-easily/preview'
                    }
                }
            },
            {
                id: 'd75b0a7d-dba8-44e1-9b66-25074f701d9f',
                title: 'The Art of Logical Reasoning',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-01-24T15:37:48.000Z',
                status: 'launched',
                description: 'Logic isn’t just about saying things that are right. It’s about making sense of our chaotic world and creating order where there is none.',
                duration: 1577,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning',
                rating: 4,
                meta: {
                    slug: 'the-art-of-logical-reasoning',
                    skills: [
                        'Learn how to make sense out of chaos',
                        'Building logical arguments',
                        'Inductive reasoning',
                        'Deductive reasoning',
                        'Creating hypotheses',
                        'Recognizing logical fallacies'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/the-art-of-logical-reasoning/preview/AppleHLS1/preview.m3u8',
                        duration: 33,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning/preview'
                    }
                }
            },
            {
                id: '59ba9bb7-2bd6-49db-afce-c09964125bc6',
                title: 'Money Management for Financial Freedom',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-01-24T14:46:43.000Z',
                status: 'launched',
                description: 'From spending to saving and earning — we’ll show you how to take proper care of your funds.',
                duration: 1583,
                lessonsCount: 10,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom',
                rating: 4.7,
                meta: {
                    slug: 'money-management-for-financial-freedom',
                    skills: [
                        'Learn how to take care of your funds',
                        'Building a financial foundation',
                        'Budgeting',
                        'Personal spending control',
                        'Protecting your finances'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/money-management-for-financial-freedom/preview/AppleHLS1/preview.m3u8',
                        duration: 0,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom/preview'
                    }
                }
            },
            {
                id: 'cf21a172-5a09-460c-a02f-51bfc2314e79',
                title: 'Memory training simulator',
                tags: [
                    'learning ability'
                ],
                launchDate: '2023-01-11T11:19:46.000Z',
                status: 'launched',
                description: 'Work out your memory to remember anything, from phone numbers to speeches.',
                duration: 1140,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/memory-bootcamp',
                rating: 4.3,
                meta: {
                    slug: 'memory-bootcamp',
                    skills: [
                        'Self-assertion'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/memory-bootcamp/preview/AppleHLS1/preview.m3u8',
                        duration: 123,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/memory-bootcamp/preview'
                    }
                }
            },
            {
                id: '58a1a586-51d1-4a74-a30b-bddd095af398',
                title: 'Learn & Grow. Relationships',
                tags: [
                    'communication'
                ],
                launchDate: '2022-12-19T14:44:27.000Z',
                status: 'launched',
                description: 'Learn how to fix or improve your relationships with loved ones, friends, coworkers, and just anybody.',
                duration: 4523,
                lessonsCount: 9,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships',
                rating: 5,
                meta: {
                    slug: 'learn-and-grow-relationships',
                    skills: [
                        'improving relationships'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/learn-and-grow-relationships/preview/AppleHLS1/preview.m3u8',
                        duration: 31,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships/preview'
                    }
                }
            }
        ],
        currentPage: 1
    },
}

const stateTwo = {
    courses: {
        status: 'loading',
        courses: [
            {
                id: 'd75b0a7d-dba8-44e1-9b66-25074f701d9f',
                title: 'The Art of Logical Reasoning',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-01-24T15:37:48.000Z',
                status: 'launched',
                description: 'Logic isn’t just about saying things that are right. It’s about making sense of our chaotic world and creating order where there is none.',
                duration: 1577,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning',
                rating: 4,
                meta: {
                    slug: 'the-art-of-logical-reasoning',
                    skills: [
                        'Learn how to make sense out of chaos',
                        'Building logical arguments',
                        'Inductive reasoning',
                        'Deductive reasoning',
                        'Creating hypotheses',
                        'Recognizing logical fallacies'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/the-art-of-logical-reasoning/preview/AppleHLS1/preview.m3u8',
                        duration: 33,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/the-art-of-logical-reasoning/preview'
                    }
                }
            },
            {
                id: '59ba9bb7-2bd6-49db-afce-c09964125bc6',
                title: 'Money Management for Financial Freedom',
                tags: [
                    'productivity'
                ],
                launchDate: '2023-01-24T14:46:43.000Z',
                status: 'launched',
                description: 'From spending to saving and earning — we’ll show you how to take proper care of your funds.',
                duration: 1583,
                lessonsCount: 10,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom',
                rating: 4.7,
                meta: {
                    slug: 'money-management-for-financial-freedom',
                    skills: [
                        'Learn how to take care of your funds',
                        'Building a financial foundation',
                        'Budgeting',
                        'Personal spending control',
                        'Protecting your finances'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/money-management-for-financial-freedom/preview/AppleHLS1/preview.m3u8',
                        duration: 0,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/money-management-for-financial-freedom/preview'
                    }
                }
            },
            {
                id: 'cf21a172-5a09-460c-a02f-51bfc2314e79',
                title: 'Memory training simulator',
                tags: [
                    'learning ability'
                ],
                launchDate: '2023-01-11T11:19:46.000Z',
                status: 'launched',
                description: 'Work out your memory to remember anything, from phone numbers to speeches.',
                duration: 1140,
                lessonsCount: 5,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/memory-bootcamp',
                rating: 4.3,
                meta: {
                    slug: 'memory-bootcamp',
                    skills: [
                        'Self-assertion'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/memory-bootcamp/preview/AppleHLS1/preview.m3u8',
                        duration: 123,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/memory-bootcamp/preview'
                    }
                }
            },
            {
                id: '58a1a586-51d1-4a74-a30b-bddd095af398',
                title: 'Learn & Grow. Relationships',
                tags: [
                    'communication'
                ],
                launchDate: '2022-12-19T14:44:27.000Z',
                status: 'launched',
                description: 'Learn how to fix or improve your relationships with loved ones, friends, coworkers, and just anybody.',
                duration: 4523,
                lessonsCount: 9,
                containsLockedLessons: false,
                previewImageLink: 'https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships',
                rating: 5,
                meta: {
                    slug: 'learn-and-grow-relationships',
                    skills: [
                        'improving relationships'
                    ],
                    courseVideoPreview: {
                        link: 'https://wisey.app/videos/learn-and-grow-relationships/preview/AppleHLS1/preview.m3u8',
                        duration: 31,
                        previewImageLink: 'https://wisey.app/assets/images/web/course-covers/learn-and-grow-relationships/preview'
                    }
                }
            }],
        currentPage: 2
    },
}

const stateThree = {
    courses: {
        status: "error",
        courses: [],
        currentPage: 3,
        Error: "Error occured =("
    }
}
describe("courses slice selectors", () => {
    it('should select courses correctly', () => {
        const coursesOne = selectCourses(stateOne);
        expect(Array.isArray(coursesOne)).toBe(true);
        expect(coursesOne).toHaveLength(10);

        const coursesTwo = selectCourses(stateTwo);
        expect(Array.isArray(coursesTwo)).toBe(true);
        expect(coursesTwo).toHaveLength(4);

        const coursesThree = selectCourses(stateThree);
        expect(Array.isArray(coursesThree)).toBe(true);
        expect(coursesThree).toHaveLength(0);
    })

    it('should select status correctly', () => {
        const statusOne = selectStatus(stateOne);
        expect(statusOne).toBe("success");

        const statusTwo = selectStatus(stateTwo);
        expect(statusTwo).toBe("loading");

        const statusThree = selectStatus(stateThree);
        expect(statusThree).toBe("error");
    })

    it('should select current page correctly', () => {
        const currentPageOne = selectCurrentPage(stateOne);
        expect(currentPageOne).toBe(1);

        const currentPageTwo = selectCurrentPage(stateTwo);
        expect(currentPageTwo).toBe(2);

        const currentPageThree = selectCurrentPage(stateThree);
        expect(currentPageThree).toBe(3);
    })

    it('should select Error message correctly', () => {
        const ErrorMessageOne = selectError(stateOne);
        expect(ErrorMessageOne).toBe(undefined);

        const ErrorMessageTwo = selectError(stateTwo);
        expect(ErrorMessageTwo).toBe(undefined);

        const ErrorMessageThree = selectError(stateThree);
        expect(ErrorMessageThree).toBe("Error occured =(");
    })
})