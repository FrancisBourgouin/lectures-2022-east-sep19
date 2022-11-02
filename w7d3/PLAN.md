# Watering Plants

Plant list with name, watering interval, last watered date, button to water each plant to reset the date.

# User stories

- User should be able to water the plants (update the date)
- User should see a list of plants
- User should quickly see which plant needs watering

# Data Structures

## Plant

```jsx
const plant = {
  id: 0,
  name: "",
  wateringInterval: 0,
  lastWatered: "",
};
```

## PlantList

```jsx
const plantListArr = [plant, plant];
const plantListObj = { 1: plant, 2: plant };
```

# Mock Data

```jsx
const plant1 = {
  id: 1,
  name: "Ghost Pipe (Monotropa Uniflora)",
  type: "Best plant",
  lastWateredDate: "2022-04-04",
  wateringInterval: 30,
};
const plant2 = {
  id: 2,
  name: "Spear Grass",
  type: "Pointy plant",
  lastWateredDate: "2022-05-04",
  wateringInterval: 14,
};

const plant3 = {
  id: 3,
  name: "Hyacinths",
  type: "Pretty flower",
  lastWateredDate: "2022-05-12",
  wateringInterval: 3,
};

const plant4 = {
  id: 4,
  name: "Space Fern",
  type: "Floaty",
  lastWateredDate: "2020-05-12",
  wateringInterval: 9001,
};

const plantListArr = [plant1, plant2, plant3, plant4];

const plantListObj = { 1: plant1, 2: plant2, 3: plant3, 4: plant4 };
```

# HTML Structure

- header
  - h1 title
- main
  - h1 list title
  - article
    - h1 type / name
    - h2 last watered date
    - button

# Component Structure

- App
  - Header
  - PlantList
    - PlantListItem

# Data map

- App (state: listOfPlants, props: NEVER)
  - Header (state: no, props: amountOfPlants)
  - PlantList (state: no, props: listOfPlants[])
    - PlantListItem (state: no, props:id,name,type,lastWateredDate,wateringInterval)

Reason plan : to have a guideline
