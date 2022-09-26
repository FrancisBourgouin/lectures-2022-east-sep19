const bob = 5;
const makeBobAngry = (value) => {
  bob = value;
};

const fctToMakeItCrash = () => makeBobAngry(10);

// try {
//   fctToMakeItCrash()
// } catch (error) {
//   console.log("OH NO.");
// }

// console.log("END OF THE LINE");

const safeFunctionRunner = (callback) => {
  try {
    callback();
  } catch (error) {
    console.log("OH NO.");
  }
};

safeFunctionRunner(makeBobAngry);
safeFunctionRunner(() => console.log("Hello!"));
