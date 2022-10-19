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

const showJoke = (jokeObj) => {
  const { question, answer, author } = jokeObj;

  console.log("-------");
  console.log(question);
  console.log(answer);
  console.log(`This wonderful joke was provided by: ${author}`);
  console.log("-------\n");
};

const query = `
SELECT jokes.question, jokes.answer, authors.name AS author
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE jokes.id = $1
`;

pool
  .query(query, [process.argv[2]])
  .then((res) => res.rows[0])
  .then(showJoke)
  .catch((err) => console.log(err))
  .finally(() => pool.end());
