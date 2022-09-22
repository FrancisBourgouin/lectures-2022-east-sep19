// Recap of loops

// Why looping?
// To iterate over a list elements
// Same action on multiple items
// Same action repeated x amount of times

// for..of loop => Iteration over an array
const someArray = ["Vinson", "Anittan", "Domara", "Spencer"];

console.log(`Good morning ${someArray[0]}`);
console.log(`Good morning ${someArray[1]}`);

for (let i = 0; i < someArray.length; i++) {
  console.log(`Good morning ${someArray[i]}`);
}

for (let i = 0; i < someArray.length; i++) {
  const name = someArray[i];

  console.log(`Good morning ${name}`);
}

for (const name of someArray) {
  console.log(`Good morning ${name}`);
}
// I want to show a specific amount of empty console logs
// I want to iterate until I reach the number of rows in my terminal
// for (let i = 0; i < 20; i++) {
//   console.log("");
// }

const someObject = { a: 1, b: 2, c: 3, 1: d };
// someObject[1]

for (let i = 0; i < Object.keys(someObject).length; i++) {
  console.log(someObject[i]);
}

for (let i = 0; i < Object.keys(someObject).length; i++) {
  const key = i;
  console.log(someObject[key]);
}

for (const key in someObject) {
  console.log(someObject[key]);
}

// Recap of functions

// Save code rewrites
// Arguments/Parameters that we give to a function to make it reusable
// We don't know what's inside firstMessage, it's fine, we don't care.
// We don't know what's inside secondMessage, it's fine, we don't care.
const superCoolFunction = function (firstMessage, secondMessage) {
  console.log(firstMessage);
  console.log(secondMessage);
};

// We care that someObject is at least an object, after that, wtv
const someFunctionThatWorksWithAnObject = function (someObject) {
  console.log("data of object");
  console.log(someObject.name);
};

superCoolFunction();
