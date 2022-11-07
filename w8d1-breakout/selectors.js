// Pantry & Orders

const pantry = [
  { name: "Chocolate", icon: "🍫", description: "Stale chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Tuna", icon: "🎣", description: "It's in a can" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
  { name: "Potato", icon: "🥔", description: "Best potato" },
];

const williamsRunGood = ["🍝", "🍫", "🍪"];
const kaydensRun = ["🍫", "🍪"];

const williamsRunBad = [
  { name: "Chocolate", icon: "🍫", description: "Fresh chocolate" },
  { name: "Cookie", icon: "🍪", description: "Very soft cookie" },
  { name: "Pasta", icon: "🍝", description: "Ready to reheat!" },
];

const populateIngredients = (run, pantry) => {
  const output = [];
  for (const ingredientIcon of run) {
    const ingredient = pantry.find((ingredient) => ingredient.icon === ingredientIcon);
    output.push(ingredient);
  }
  return output;
};

const report = (run) => {
  console.log("We took from the pantry the following ingredients:");
  for (const ingredient of run) {
    console.log(ingredient.name);
  }
};

// Databases => ERDs => Normalize => Avoid repetition, and multiple sources of truth

const populatedIngredients = populateIngredients(williamsRunGood, pantry);

// console.log(populatedIngredients);

report(populatedIngredients);
