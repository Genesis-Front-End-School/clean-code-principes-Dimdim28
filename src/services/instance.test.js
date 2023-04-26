import { SingletonInstance } from "./instance";

describe('Singleton client instance', ()=>{
    it('must return same object after every getInstance() calls',()=>{
        const instanceOne =  SingletonInstance.getInstance();
        const instanceTwo =  SingletonInstance.getInstance();
        expect(instanceOne).toEqual(instanceTwo);
    })
})