const { Pool, Client } = require("pg");
// pools will use environment variables
// for connection information
const pool = new Pool({
  host: "localhost",
  user: "francis",
  password: "francis",
  database: "jokes",
  port: 5432,
});

const jokeObjExample = {
  question: "Huhu?",
  answer: "Hahahaha.",
  author: "Bob",
};

const jokeObjExample2 = {
  question: "What?",
  answer: "Really?",
  author: "Nobody.",
};

const listOfJokes = [jokeObjExample, jokeObjExample2];

const showJoke = (jokeObj) => {
  const { question, answer, author } = jokeObj;

  console.log("-------");
  console.log(question);
  console.log(answer);
  console.log(`This wonderful joke was provided by: ${author}`);
  console.log("-------\n");
};

const showAllJokes = (jokeList) => jokeList.forEach(showJoke);

// showAllJokes(listOfJokes);

const query = `SELECT jokes.question, jokes.answer, authors.name AS author
FROM jokes
JOIN authors
ON jokes.author_id = authors.id`;

pool
  .query(query)
  .then((res) => res.rows)
  .then(showAllJokes) // Referencing
  .catch((err) => console.log(err))
  .finally(() => pool.end());

// pool
//   .query(query)
//   .then((res) => showAllJokes(res.rows)) // anonymous function that will call showAllJokes
//   .catch((err) => console.log(err))
//   .finally(() => pool.end());
