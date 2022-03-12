class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} is playing`);
  }
}

let sakib = new Cricketer("sakib", 34, "all rounder", "Bangladesh");

console.log(sakib.type);