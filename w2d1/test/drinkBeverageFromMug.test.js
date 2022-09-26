const drinkBeverageFromMug = require("../drinkBeverageFromMug");
const { expect } = require("chai");

describe("Happy path tests for drinkBeverageFromMug", () => {
  it("returns a modified object with amount updated properly", () => {
    const originalObject = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 350,
    };
    const sipSize = 100;

    const expectedResult = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 250,
    };

    const actualResult = drinkBeverageFromMug(originalObject, sipSize);

    expect(actualResult).to.be.an("object");
    expect(actualResult).to.deep.equal(expectedResult);
  });
});
describe("Error path tests for drinkBeverageFromMug", () => {
  it("should throw an error if amount is zero", () => {
    const originalObject = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 0,
    };
    const sipSize = 100;

    const expectedResult = "";

    const shouldThrow = () => drinkBeverageFromMug(originalObject, sipSize); // THROW!

    expect(shouldThrow).to.throw("Mug is empty you dum dum.");
  });
  it("should throw an error if mug is not a valid object", () => {
    const sipSize = 100;

    const expectedResult = "";

    const shouldThrow = () => drinkBeverageFromMug(undefined, sipSize);

    expect(shouldThrow).to.throw("That ain't a mug");
  });
  it("should return a modified object with amount === 0 if sip is bigger than the remaining amount", () => {
    const originalObject = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 10,
    };
    const sipSize = 100;

    const expectedResult = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 0,
    };

    const actualResult = drinkBeverageFromMug(originalObject, sipSize);

    expect(actualResult).to.deep.equal(expectedResult);
  });
  it("should throw if sip is not defined, or is invalid", () => {
    const originalObject = {
      id: 1,
      name: "Mugginator",
      content: "Coffee",
      amount: 10,
    };

    const expectedResult = "";

    const shouldThrow = () => drinkBeverageFromMug(originalObject, undefined);

    expect(shouldThrow).to.throw("Yo that's not a sip");
  });
});
