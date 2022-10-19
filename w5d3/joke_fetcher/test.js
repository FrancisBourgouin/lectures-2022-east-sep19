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

const query = `SELECT jokes.question, jokes.answer, authors.name AS author
FROM jokes
JOIN authors
ON jokes.author_id = authors.id`;

const newQuery = `
SELECT jokes.question, jokes.answer, authors.name AS author
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE jokes.id = $1
`;

// pool.query(query, (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

pool
  .query(newQuery, [process.argv[2]])
  .then((res) => res.rows[0])
  .then((rows) => console.log(rows))
  .catch((err) => console.log(err))
  .finally(() => pool.end());
