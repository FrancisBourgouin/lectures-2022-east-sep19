const homemadeUseState = (initialValue) => {
  const value = { current: initialValue, old: null };

  const updateValue = (newValue) => {
    if (newValue !== value.current) {
      value.old = value.current;
      value.current = newValue;
    }
  };

  return [value, updateValue];
};

const [value, setValue] = homemadeUseState(10);

console.log(value);

setValue(11);

console.log(value);

setValue(11);

console.log(value);

const someObj = { a: 1 };

setValue(someObj);
console.log(value);

someObj.b = 6;

setValue(someObj);
console.log(value);

const someOtherObj = someObj;

console.log(someOtherObj === someObj);

const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj2;

console.log(obj1 === obj2);
console.log(obj3 === obj2);
