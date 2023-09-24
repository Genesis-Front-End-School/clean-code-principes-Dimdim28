import { fetchCourses } from "../courses/asyncActions";
import { fetchLessons } from "../lessons/asyncActions";

jest.setTimeout(15000);

describe('courses thunk', () => {
    it('should fetchCourses with correct structure', async () => {
        jest.mock('axios');

        const dispatch = jest.fn();
        const thunk = fetchCourses();
        await thunk(dispatch);

        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
    })
})

describe('lessons thunk', () => {
    it('should lessons with correct structure', async () => {
        jest.mock('axios');

        const dispatch = jest.fn();
        const thunk = fetchLessons();
        await thunk(dispatch);

        const { calls } = dispatch.mock;
        expect(calls).toHaveLength(2);
    })
})
