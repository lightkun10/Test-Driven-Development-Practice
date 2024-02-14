const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe('Returns Three', function () {

    it ('returns the number 3', () => {
        expect(returnsThree()).to.equal(3);
    });

});


describe('Reciprocal', function () {

    let num;
    let num2;

    beforeEach(() => {
        num = 2;
        num2 = 4;
    })

    context('with valid arguments', () => {
        it('should return the reciprocal of the given number', () => {
            expect(reciprocal(num)).to.equal(0.5);
            expect(reciprocal(num2)).to.equal(0.25);
        });
    });

    context('with invalid arguments', () => {
        it('should throw a TypeError when the argument is not a Number', () => {
            expect(() => reciprocal("not a number teehee")).to.throw(TypeError);
            expect(() => reciprocal([])).to.throw(TypeError);
            expect(() => reciprocal({a: 'a', b: 1})).to.throw(TypeError);
        });

        it('should throw a TypeError when the argument is less than 1 or greater than 1,000,000', () => {
            expect(() => reciprocal(0)).throw(TypeError, 'number must be between 1 and 1,000,000');
            expect(() => reciprocal(1000001)).throw(TypeError, 'number must be between 1 and 1,000,000');
        });
    });

});
