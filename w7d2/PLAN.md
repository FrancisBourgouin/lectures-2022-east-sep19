# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  name: "name of plant",
  type: "type of plant",
  lastWatered: "date string",
  wateringInterval: 10,
};
```

## Plants

```jsx
const plants = [plant, plant];
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-03-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2022-03-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2022-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-03-20",
  wateringInterval: 1000,
};

const plants = [plant1, plant2, plant3, plant4];
```

## Structure

### HTML

- header
  - h1 title
- main
  - section
    - h1 title section
    - article
      - h1 name of plant / type
      - p last watered on : ...
      - (border) good watering / bad watering

### Components

- Header ? (50/50)
- PlantList
  - PlantListItem

### Component Data

- Header (props: plantCount(num))
- PlantList (props: plants([]))
  - PlantListItem (props: name(""), type(""), lastWateredDate(""), wateringInterval(num))
