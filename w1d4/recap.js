// We use functions to avoid code repetition (DRY code)

// Use arguments for values in a function

const someAddition = (num1, num2) => console.log(num1 + num2);

someAddition(4, 5);
someAddition(42, 9001);

// We can take functions one step further with callbacks!
// A callback is a parameter that is a function definition instead of a value

const forEach = (list, action) => {
  for (const item of list) {
    action(item);
  }
};

forEach([1, 2, 3, 4], (item) => console.log(item));

const newArray = [];
forEach([1, 2, 3, 4], (item) => newArray.push(item * 2));

// The callback action is defined when we execute the higher order function (forEach)

// IIFE => Immediately Invoked Function Expression

(function () {
  const name = "Bob";

  console.log("hello! ", name);
})();

(function () {
  const name = "Bob";

  console.log("hello! ", name);
})();

(function () {
  const name = "Bob";

  console.log("hello! ", name);
})();
