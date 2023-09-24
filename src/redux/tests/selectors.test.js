import {
    selectCourses,
    selectStatus as selectCoursesStatus,
    selectError as selectCoursesError,
    selectCurrentPage
} from "../courses/selectors";

import {
    selectCourseInfo,
    selectLessons,
    selectStatus as selectLessonsStatus,
    selectError as selectLessonsError
} from "../lessons/selectors"

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
    lessons: {
        status: 'success',
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
            {
                id: 'f5b9b0aa-baa6-4218-b16c-46152bd9b505',
                title: 'Develop self-awareness',
                duration: 327,
                order: 5,
                type: 'video',
                status: 'unlocked',
                link: 'https://wisey.app/videos/the-power-of-self-discipline-how-to-stay-on-track/lesson-5/AppleHLS1/lesson-5.m3u8',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/the-power-of-self-discipline-how-to-stay-on-track/lesson-5',
                meta: null
            }
        ],
        courseInfo: {
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
        }
    }
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
    lessons: {
        status: 'loading',
        lessons: [
            {
                id: '278e5a0e-8df1-4646-9984-10289d52dc2d',
                title: 'Why we lack motivation',
                duration: 255,
                order: 1,
                type: 'video',
                status: 'unlocked',
                link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-1/AppleHLS1/lesson-1.m3u8',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-1',
                meta: null
            },
            {
                id: 'd2379510-3e3a-4d87-a3e9-05c1a0195548',
                title: 'Decision paralysis',
                duration: 266,
                order: 2,
                type: 'video',
                status: 'unlocked',
                link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-2/AppleHLS1/lesson-2.m3u8',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-2',
                meta: null
            },
            {
                id: '29a8fc4d-b2a4-420b-80de-73ecda13f28e',
                title: 'Negative self-talk',
                duration: 286,
                order: 3,
                type: 'video',
                status: 'unlocked',
                link: 'https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/lesson-3/AppleHLS1/lesson-3.m3u8',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/lack-of-motivation-how-to-overcome-it/lesson-3',
                meta: null
            },
        ],
        courseInfo: {
            id: '352be3c6-848b-4c19-9e7d-54fe68fef183',
            title: 'Lack of Motivation & How to Overcome It',
            tags: [
                'productivity'
            ],
            launchDate: '2023-03-06T16:50:06.000Z',
            status: 'launched',
            description: 'Reignite your inner drive by managing factors that dampen your motivation.',
            duration: 1401,
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
            },
            containsLockedLessons: false
        }
    }
}

const stateThree = {
    courses: {
        status: "error",
        courses: [],
        currentPage: 3,
        Error: "Error occured =("
    },
    lessons: {
        status: 'error',
        Error: 'Incorrent course id',
        lessons: [
            {
                id: '6c77bb21-2410-406a-9e8d-36c27fe43826',
                title: 'Understand your procrastination',
                duration: 420,
                order: 1,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-1',
                meta: {
                    difficulty: 'medium'
                }
            },
            {
                id: '49936797-7dbe-461b-a05b-cc9a3ad512ca',
                title: 'Motivation vs. procrastination',
                duration: 300,
                order: 2,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-2',
                meta: {
                    difficulty: 'medium'
                }
            },
            {
                id: '15e8f9a7-9531-4156-b5d2-d282a89685a7',
                title: 'How to become more motivated',
                duration: 240,
                order: 3,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-3',
                meta: {
                    difficulty: 'medium'
                }
            },
            {
                id: '7a25346e-2aca-45e8-833e-136e76d8f4e6',
                title: 'Irrational thinking & task avoidance',
                duration: 540,
                order: 4,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-4',
                meta: {
                    difficulty: 'medium'
                }
            },
            {
                id: '51572006-522d-411a-b90b-db37d6e2e133',
                title: 'How to change limiting beliefs',
                duration: 300,
                order: 5,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-5',
                meta: {
                    difficulty: 'easy'
                }
            },
            {
                id: '1fbc389c-d48b-410a-8f2a-a28341a64aa0',
                title: 'Dare to take action',
                duration: 240,
                order: 6,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-6',
                meta: {
                    difficulty: 'medium'
                }
            },
            {
                id: 'bfdc3c41-a943-4a42-b4b3-ea91e7d9cfce',
                title: 'How to keep procrastination at bay',
                duration: 300,
                order: 7,
                type: 'quiz_simulator',
                status: 'unlocked',
                previewImageLink: 'https://wisey.app/assets/images/web/lessons-covers/anti-procrastination-quiz/lesson-7',
                meta: {
                    difficulty: 'easy'
                }
            },
        ],
        courseInfo: {
            id: '6d923b27-9980-41c1-bd0f-102772377b8d',
            title: 'How to Stop Procrastinating',
            tags: [
                'productivity'
            ],
            launchDate: '2023-02-12T13:04:20.000Z',
            status: 'launched',
            description: 'It only takes 10-15 minutes a day to eliminate procrastination once and for all',
            duration: 4560,
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
            },
            containsLockedLessons: true
        }
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
        const statusOne = selectCoursesStatus(stateOne);
        expect(statusOne).toBe("success");

        const statusTwo = selectCoursesStatus(stateTwo);
        expect(statusTwo).toBe("loading");

        const statusThree = selectCoursesStatus(stateThree);
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
        const ErrorMessageOne = selectCoursesError(stateOne);
        expect(ErrorMessageOne).toBe(undefined);

        const ErrorMessageTwo = selectCoursesError(stateTwo);
        expect(ErrorMessageTwo).toBe(undefined);

        const ErrorMessageThree = selectCoursesError(stateThree);
        expect(ErrorMessageThree).toBe("Error occured =(");
    })
})

describe("lessons slice selectors", () => {
    it('should select lessons correctly', () => {
        const lessonsOne = selectLessons(stateOne);
        expect(Array.isArray(lessonsOne)).toBe(true);
        expect(lessonsOne).toHaveLength(5);

        const lessonsTwo = selectLessons(stateTwo);
        expect(Array.isArray(lessonsTwo)).toBe(true);
        expect(lessonsTwo).toHaveLength(3);

        const lessonsThree = selectLessons(stateThree);
        expect(Array.isArray(lessonsThree)).toBe(true);
        expect(lessonsThree).toHaveLength(7);
    })

    it('should select status correctly', () => {
        const statusOne = selectLessonsStatus(stateOne);
        expect(statusOne).toBe("success");

        const statusTwo = selectLessonsStatus(stateTwo);
        expect(statusTwo).toBe("loading");

        const statusThree = selectLessonsStatus(stateThree);
        expect(statusThree).toBe("error");
    })

    it('should select course info correctly', () => {
        const courseInfoOne = selectCourseInfo(stateOne);
        expect(courseInfoOne.id).toBe('3b77ceb6-fb43-4cf5-a25b-8fe9222a0714');
        expect(courseInfoOne.title).toBe('The Power of Self-Discipline: How to Stay on Track');
        expect(courseInfoOne.containsLockedLessons).toBe(false);

        const courseInfoTwo = selectCourseInfo(stateTwo);
        expect(courseInfoTwo.id).toBe('352be3c6-848b-4c19-9e7d-54fe68fef183');
        expect(courseInfoTwo.title).toBe('Lack of Motivation & How to Overcome It');
        expect(courseInfoTwo.containsLockedLessons).toBe(false);

        const courseInfoThree = selectCourseInfo(stateThree);
        expect(courseInfoThree.id).toBe('6d923b27-9980-41c1-bd0f-102772377b8d');
        expect(courseInfoThree.title).toBe('How to Stop Procrastinating');
        expect(courseInfoThree.containsLockedLessons).toBe(true);
    })

    it('should select Error message correctly', () => {
        const ErrorMessageOne = selectLessonsError(stateOne);
        expect(ErrorMessageOne).toBe(undefined);

        const ErrorMessageTwo = selectLessonsError(stateTwo);
        expect(ErrorMessageTwo).toBe(undefined);

        const ErrorMessageThree = selectLessonsError(stateThree);
        expect(ErrorMessageThree).toBe("Incorrent course id");
    })
})