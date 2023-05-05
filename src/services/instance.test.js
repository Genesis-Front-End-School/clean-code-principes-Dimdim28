import { SingletonInstance } from "./instance";

describe('Singleton client instance', ()=>{
    it('must return same object after every getInstance() calls',()=>{
        const instanceOne =  SingletonInstance.getInstance();
        const instanceTwo =  SingletonInstance.getInstance();
        expect(instanceOne).toEqual(instanceTwo);
    })
    it('must not allow us to use new for the creating instances',()=>{
        const attemptToCreate = () => {new SingletonInstance()};
        expect(attemptToCreate).toThrow('use a static getInstance() method');
    })
})