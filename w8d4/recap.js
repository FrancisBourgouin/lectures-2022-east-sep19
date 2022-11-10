// Javascript Classes

// Arrays (Array.isArray)
// Date
// Function
// Object
// Error

const newArray = [];

// Classes are like blueprints
// Their instances are objects

class Potato {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hi my name is: " + this.name);
  }

  throwMe() {
    console.log("HAAAAAAAAA");
    console.log("Sploutch.");
  }
}

class SuperPotato extends Potato {
  constructor(name) {
    super(name);
  }

  throwMe() {
    console.log("HAAAAAAAAA");
    console.log("** flies away **");
  }
}

const yukon = new Potato("Yukon Gold");

yukon.greet();
yukon.throwMe();

const russett = new SuperPotato("Russett");

russett.greet();
russett.throwMe();
