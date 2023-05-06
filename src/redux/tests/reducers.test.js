import coursesReducer, { setCurrentPage } from "../courses/slice";

const initialState = {
    status: 'loading',
    courses: [],
    currentPage: 1,
}

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
})