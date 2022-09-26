// const helpers = require("./bunchOfHelpers")

// helpers.someFunction()

const { someFunction } = require("./bunchOfHelpers");
someFunction();
// Array.isArray, Object.keys(), Object.values();

const someArray = [];
const someOtherArray = new Array();

const drinkBeverageFromMug = (mug, sipSize) => {
  if (typeof mug !== "object") {
    throw new Error("That ain't a mug");
  }

  if (mug.amount === 0) {
    throw new Error("Mug is empty you dum dum.");
  }

  if (!Number.isInteger(sipSize) || sipSize < 0) {
    throw new Error("Yo that's not a sip");
  }

  mug.amount -= sipSize;
  mug.amount = Math.max(0, mug.amount);

  // if (mug.amount < 0) {
  //   mug.amount = 0;
  // }

  return mug;
};

module.exports = drinkBeverageFromMug;
