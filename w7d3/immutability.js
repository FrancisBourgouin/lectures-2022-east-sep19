// Immutability vs Mutability

// const someObject = { a: 1 };
// someObject.a = 6;

// const someOtherObject = { a: 5 };
// const someOtherOtherObject = someOtherObject;

// someOtherObject.b = 10;

const somePlants = {
  1: {
    id: 1,
    name: "Ghost Pipe (Monotropa Uniflora)",
    type: "Best plant",
    lastWateredDate: "2022-04-04",
    wateringInterval: 30,
  },
  2: {
    id: 2,
    name: "Ghost Pepper",
    type: "Best plant",
    lastWateredDate: "2022-04-04",
    wateringInterval: 30,
  },
};

const newPlants = { ...somePlants };

const someObject = { bob: { name: "robert" } };
const newObject = { ...someObject };

newObject.al = { name: "Albert" };

const newBob = { ...newObject.bob };
newBob.name = "Roberto";
newObject.bob = newBob;

console.log(someObject);
console.log(newObject);

{
  {
  }
  aaa;
  {
  }
  {
  }
  {
  }
}
{
  {
  }
  aaa;
  {
  }
  {
  }
  {
  }
}
