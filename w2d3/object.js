const bob = { a: 1 };
const bill = { b: 5 };
const sarah = { b: 5 };
const terror = { a: "AHHHHH" };

const listOfObjects = [];

listOfObjects.push(bob);
listOfObjects.push(bill);
listOfObjects.push(sarah);
listOfObjects.push(terror);

console.log("bob", bob);
console.log("bill", bill);
console.log("sarah", sarah);
console.log("terror", terror);

console.log(listOfObjects);

// THIS IS NOT EQUALITY
// THIS IS EQUIVALENT OBJECTS
for (const key of Object.keys(bill)) {
  bill[key] === sarah[key];
}

setInterval(() => {
  console.log("Hello");
}, 1000);
