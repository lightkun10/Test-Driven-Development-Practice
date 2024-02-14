const chai = require("chai");
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');

describe('Reverse String', function () {

    let str;
    let notStr;

    beforeEach(function() {
        str = "hello";
        notStr = 123;
    });

    it('should return the reversed output of the input string', function () {
        expect(reverseString(str)).to.equal("olleh");
    });

    it ('should throw a TypeError when the argument is not a string', () => {
        expect(() => reverseString(notStr)).to.throw(TypeError);
    });

});
