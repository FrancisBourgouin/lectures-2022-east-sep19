// Primitives
// String, Number, Null, Undefined, Symbol, Boolean, BigInt

// Object is a data type? No. Structural Type
// Array is also a structural type

const emptyObject = {};
const emptyArray = [];

if (emptyArray.length) {
  console.log("YAY!");
} else {
  console.log("NAY!");
}

const mugColor = "light blue";
const mugMaterial = "ceramic";
const mugCapacity = 400;

const mug = ["light blue", "ceramic", 400]; // Bad

const betterMug = {
  // Good
  color: "light blue",
  material: "ceramic",
  capacity: 400,
};

const otherMug = {
  color: "white",
  material: "ceramic",
  capacity: 300,
  42: "THE ANSWER TO EVERYTHING",
  "🔥": "FIREEEEE",
  "very long key hahahahaha": "shortvalue",
};

const listOfMugs = [betterMug, otherMug];

// Dot notation
// Doesn't work if
// number,
// contain spaces,
// contain special characters,
// if it's variable

console.log(otherMug.material); // Drax (VERY VERY LITTERAL)
console.log(otherMug["material"]);

const key = "capacity";

console.log(otherMug.key); // Drax (VERY VERY LITTERAL)
console.log(otherMug[key]);

// [] in objects are evaluators

// (1 + 4) x 5 = ?

let someNumber = 5;
let otherNumber = someNumber;

otherNumber = 7;

console.log(someNumber, otherNumber);

const someObject = { a: 1, b: 2 };
const otherObject = someObject;

otherObject.a = "ron";

console.log(someObject, otherObject);

const complicatedObject = {
  materials: ["metal", "plastic"],
  drinkComposition: {
    coffee: 0.98,
    milk: 0.02,
    sugar: 0,
  },
};

const mugMats = complicatedObject.materials;
for (const material of mugMats) {
}

const currentDrink = complicatedObject.drinkComposition;

currentDrink.milk;

const marianaTrenchObject = {
  seaLevel: {
    notthatdeep: {
      kindadeep: {
        prettydeep: {
          fish: "weird fish",
        },
      },
    },
  },
};

// marianaTrenchObject.seaLevel.notthatdeep.kindadeep.prettydeep.fish

const seaLevel = marianaTrenchObject.seaLevel;
const notthatdeep = seaLevel.notthatdeep;

const levelWithFish = marianaTrenchObject.seaLevel.notthatdeep.kindadeep.prettydeep;

console.log(levelWithFish.fish);
levelWithFish.anotherFish = "BIG FISH";
console.log(levelWithFish);

const someArray = [1, 2, 3, 4, 5];

const newArray = [];

for (const element of someArray) {
  newArray.push(element);
}

const hahaObject = { a: 1, b: 2 };

const newObject = {};

// for(const key of Object.keys(hahaObject))
for (const key in hahaObject) {
  // a then b
  newObject[key] = hahaObject[key];
}

// obj1 === obj2
