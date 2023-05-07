import { useAppDispatch, useAppSelector } from "./appHooks";

describe('file with typed hooks ', () => {
    it('all hooks were defined', () => {
        expect(useAppDispatch).toBeDefined()
        expect(useAppSelector).toBeDefined()
    })
})