const chai = require("chai");
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Person = require('../problems/person');


describe('Person', () => {

    let person;

    beforeEach(() => {
        person = new Person('Mai', 25);
    });

    it('should set the name and age properties on an instance', () => {
        expect(person.name).to.equal('Mai');
        expect(person.age).to.equal(25);
    });

    it('should return a string of the Person instance\'s name and a greeting message', () => {
        const sayHello = person.sayHello();
        expect(sayHello).to.equal('Hello, my name is Mai');
    });

    it('should return a string stating that this instance visited the passed-in person instance', () => {
        const otherPerson = new Person('Erin', 20);
        const oneVisitTwo = person.visit(otherPerson);
        expect(oneVisitTwo).to.equal('Mai visited Erin');
    });

    it('should invoke the visit function of the parameter (otherPerson), passing in the current instance as the argument.', () => {
        const otherPerson = new Person('Erin', 20);
        const visitSpy = chai.spy.on(otherPerson, 'visit');
        person.switchVisit(otherPerson);

        expect(visitSpy).to.have.been.called.with(person);
    });

    context('update method', () => {

        it('should update the person\'s properties to match the passed-in object\'s values', () => {
            let updateInstance = { name: "Mai Shiranui", age: 26 };
            person.update(updateInstance);
            expect(person.name).to.equal('Mai Shiranui');
            expect(person.age).to.equal(26);
        });

        it('should throw a TypeError if argument is not an object with clear message', () => {
            expect(() => person.update("I AM NOT AN OBJECT!")).to.throw(TypeError, 'argument should be an object');
        });

        it('should throw a TypeError if argument object does not have a name and an age property', () => {
            let errUpdate = { name: 'dodo' }; // No age
            let errUpdate2 = { age: 16 };     // No name
            expect(() => person.update(errUpdate)).to.throw(TypeError, 'object should have a name and an age property');
            expect(() => person.update(errUpdate2)).to.throw(TypeError, 'object should have a name and an age property');
        });

    });

    context('tryUpdate method', () => {

        it('should return true if update method is successfully invoked', () => {
            const res = person.tryUpdate({ name: "Mai Shiranui", age: 26 });
            expect(res).to.equal(true);
            expect(person.name).to.equal('Mai Shiranui');
            expect(person.age).to.equal(26);
        });

        it('should return false and not throw an error if update method not successfully invoked', () => {
            expect(() => person.tryUpdate(['not', 'object'])).not.to.throw(TypeError);
            expect(person.tryUpdate(['not', 'object'])).to.equal(false);
        });
    });

    context('greetAll method', () => {

        it('should call the sayHello method on each Person instance and return an array of greetings', () => {
            const person2 = new Person('Erin', 20);
            const person3 = new Person('Maya', 23);

            let people = [person, person2, person3];

            const greetings = Person.greetAll(people);

            expect(greetings).to.eql([
                'Hello, my name is Mai',
                'Hello, my name is Erin',
                'Hello, my name is Maya'
            ]);
        });

    })
});
