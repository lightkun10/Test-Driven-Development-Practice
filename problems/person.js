class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== 'object') {
      throw new TypeError('argument should be an object');
    }

    if (!(obj.hasOwnProperty('name')) || !(obj.hasOwnProperty('age'))) {
      throw new TypeError('object should have a name and an age property');
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch(err) {
      return false;
    }
  }

  static greetAll = (peopleArr) => peopleArr.map((person) => person.sayHello());
}

module.exports = Person;
