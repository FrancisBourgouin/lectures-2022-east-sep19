// Function doing tasks

const listOfStudents = ["Andrei", "Evan", "Jacky", "Kate"];

const greetEveryone = function (listOfStudents) {
  // Iterate over every element of the listOfStudents for..of
  for (const student of listOfStudents) {
    // Write a message in the console that greets them. console.log
    console.log(`Good morning ${student}!`);
  }
};

greetEveryone(listOfStudents);

const undegreetEveryone = function (listOfStudents) {
  // Iterate over every element of the listOfStudents for..of
  for (const student of listOfStudents) {
    // Write a message in the console that greets them. console.log
    console.log(`Farewell ${student}!`);
  }
};

undegreetEveryone(listOfStudents);

const sayToEveryone = function (listOfStudents, words) {
  for (const student of listOfStudents) {
    console.log(`${words} ${student}!`);
  }
};

sayToEveryone(listOfStudents, "AH YEAH !");

// singGoodMorning => Reference
// singGoodMorning() => Calling the Reference

// ARROW FUNCTIONS !

const someArrowFunction = (name) => console.log(`🎵🎶🎵 Good morning ${name}! 🎵🎶🎵`);

const someArrowWithMultipleLines = () => {
  console.log("YAY!");
  console.log("NAY!");
};

const addition1 = (a, b) => a + b; // implicit return

const addition2 = (a, b) => {
  return a + b; // explicit return
};

// badFunction();

// function badFunction() {
//   // Hoisting
//   console.log("Hey I'm a function definition :(");
// }

// function badFunction() {
//   // overwrite a function
//   console.log("MWHAHAHAHAHAHAHAHA");
// }

// singGoodMorning is NOT a callback function
const singGoodMorning = function (name) {
  console.log(`🎵🎶🎵 Good morning ${name}! 🎵🎶🎵`);
};
// yellGoodMorning is NOT a callback function
const yellGoodMorning = function (name) {
  const greeting = `Good morning ${name}!`;
  console.log(greeting.toUpperCase());
};

// sayToEveryoneButBetter is a Higher Order Function (CEO / President)
const sayToEveryoneButBetter = function (listOfStudents, greetingAction) {
  for (const student of listOfStudents) {
    greetingAction(student);
  }
};

// singGoodMorning is THE callback of sayToEveryoneButBetter
sayToEveryoneButBetter(listOfStudents, singGoodMorning);

sayToEveryoneButBetter(listOfStudents, yellGoodMorning);

sayToEveryoneButBetter(listOfStudents, function (name) {
  console.log(`🎵🎶🎵 Good morning ${name}! 🎵🎶🎵`);
});

sayToEveryoneButBetter(listOfStudents, (name) =>
  console.log(`🎵🎶🎵 Good morning ${name}! 🎵🎶🎵`)
);

const coolArray = [0, -10, -20, 5];

// coolArray.forEach((item, index, array) =>
//   console.log(`${item} at position ${index} of the array ${array}`)
// );

const homemadeForEach = (list, action) => {
  for (const index in list) {
    action(list[index], index, list); // We decide what to give to the callback here!
  }
};

homemadeForEach(coolArray, (item) => console.log(item));

// (temp1 + temp2 + temp3) / 3
// temp1 / 3 + temp2 / 3 + temp3 / 3

let averageTemp = 0;

homemadeForEach(coolArray, (item, index, array) => {
  averageTemp += item / array.length;
});

console.log(averageTemp);

const names = ["Harry", "Muhammad", "Abdullahi"];
const uppercaseNames = [];

homemadeForEach(names, (name) => uppercaseNames.push(name.toUpperCase()));

console.log(uppercaseNames);

const homemadeMap = (list, action) => {
  const output = [];
  for (const index in list) {
    const result = action(list[index]);
    output.push(result);
  }
  return output;
};

const newNames = homemadeMap(names, (name) => name.toUpperCase());

console.log(newNames, names);

// Complex conditions

// Grade consist of grade, subject
const mathGrade = { score: 30, subject: "math" };
const frenchGrade = { score: 80, subject: "french" };

const listOfGrades = [mathGrade, frenchGrade];
// They want at least 90%
// They want at least 99% in math
const strictParentsHappy = (grade) => {
  if (grade.score < 90) {
    return false;
  }
  if (grade.score < 99 && grade.subject === "math") {
    return false;
  }
  return true;
};

// They want at least 65%
// In French you should at least 20%
const lenientParentsHappy = (grade) => {
  if (grade.score < 65 && grade.subject !== "french") {
    return false;
  }
  if (grade.score < 20 && grade.subject === "french") {
    return false;
  }
  return true;
};

const result = lenientParentsHappy(frenchGrade);

console.log(result);

const verbalizeParentEmotion = (grade, parentCondition) => {
  if (parentCondition(grade)) {
    return console.log("GOOD JOB.");
  }

  console.log("SON I AM DISAPPOINT");
};

verbalizeParentEmotion(frenchGrade, lenientParentsHappy);
verbalizeParentEmotion(frenchGrade, strictParentsHappy);

homemadeForEach(listOfGrades, (grade) =>
  verbalizeParentEmotion(grade, lenientParentsHappy)
);

// [].forEach()
// [].map()
