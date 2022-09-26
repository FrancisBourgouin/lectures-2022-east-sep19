# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

# In / Out

const originalObject = {a:1}

const newObject = multiplyKeyValuesByTwo(originalObject) {a:2}
const newNewObject = multiplyKeyValuesByTwo(newObject) {a:4}

```js
const mugObject = {
  id: 1,
  name: "Mugginator",
  content: "Coffee",
  amount: 350,
};
```

IN: mugObject (Object), sizeOfSip (Number)
OUT: change original object (mutable), new object (immutable)
NAME: drinkBeverageFromMug, drink

# How

Modify key of object with new value
Return modified object.

# Test cases

```js
const mugObject = {
  id: 1,
  name: "Mugginator",
  content: "Coffee",
  amount: 350,
};

const drinkBeverageFromMug = (mug, sipSize) => {};

const updatedMugObject = drinkBeverageFromMug(mugObject, 100);
```

- Should not run if there is nothing left (amount === 0)
- mug is not a valid object
- If sip is bigger than remaining, should not have negative amount
- we don't know the size of the sip
- sip is invalid
