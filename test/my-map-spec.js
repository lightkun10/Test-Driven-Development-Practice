const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map');

describe('My Map', () => {
    let arr;
    let callback;

    beforeEach(() => {
        arr = [1, 2, 3];
        callback = chai.spy((el) => el * 2);
    });

    it('should return a new array with the callback applied to each elements', () => {
        const result = myMap(arr, callback);
        expect(result).to.eql([2, 4, 6]);
    });

    it('should not mutate the passed-in array argument', () => {
        myMap(arr, callback);
        expect(arr).to.eql([1, 2, 3]);
    });

    it('should not call the built-in Array.map', () => {
        const mapSpy = chai.spy.on(arr, 'map');
        myMap(arr, callback);
        expect(mapSpy).not.to.have.been.called();
    });

    it('should ensure that the passed-in callback is invoked once for each element in the passed-in array argument', () => {
        myMap(arr, callback);
        expect(callback).to.been.called.exactly(arr.length);
    });
});
