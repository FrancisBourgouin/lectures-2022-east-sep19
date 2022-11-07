# React Glossary

# Project Description

Shows a list of statements about multiple things of React, possibility to add new statements and can collapse per subject

# User Stories

- User can see a list of statements about React subjects
- User can add a statement to a specific subject
- User can create a new subject

# Packages

## Frontend

- CRA
- Sass
- Axios

## Backend

- Axios ?
- Express

# Data structure

## Statement

```jsx
  const statement = {
    id:1
    subject:"component",
    content:"something"
  }
```

## Statements

```jsx
const listOfStatementsArr = [statement, statement]; // Fine since we don't edit
const listOfStatementsObj = { 1: statement, 2: statement }; // If we had to edit
```

# Mock Data

```jsx
const initialStatements = [
  {
    id: 1,
    subject: "components",
    content: "Components are the building blocks of react",
  },
  {
    id: 2,
    subject: "components",
    content:
      "Take a functionality of a small piece of your application and encapsulated its own isolated container",
  },
  {
    id: 3,
    subject: "props",
    content:
      "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
  },
  {
    id: 4,
    subject: "props",
    content:
      "Props are accessible in an object in the first argument of a functional component",
  },
];
```

```jsx
const subjects = {
  components: ["...", "..."],
  props: ["...", "..."],
};
```

# HTML Structure

- header
  - h1 Title
- main
  - section
    - h2 Form
    - form
      - input subject
      - textarea content
      - button
  - section
    - h2 Statements
    - ul
      - li
        - p subject
        - p content

# Component Structure

- App
  - Header
  - StatementForm
  - StatementList
    - StatementListItem

# Steps

- Planning
- Build mockups + data structure + ERDs
- Fight mockups & ERDs
- Backend -> Frontend
  - DBHelpers
  - Routes
  - Give the response of a route to static file
  - Build React Components w/ static file
  - Make them talk with Axios (network calls)
- Frontend -> Backend
  - Static Components
  - Static Data -> Props (Mock data)
  - Give Mock Data to a route
  - Give DBHelpers to the route
- Make it fancy!

# APIs


statements -> group them -> show them


[{subject, content}] -> [{name:"props", statements:[]}]


getContentforSubject => Selector function (appoints for a day)
