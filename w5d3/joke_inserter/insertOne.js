const { Pool, Client } = require("pg");
// pools will use environment variables
// for connection information
const [, , question, answer, rating, author_id] = process.argv;

const pool = new Pool({
  host: "localhost",
  user: "francis",
  password: "francis",
  database: "jokes",
  port: 5432,
});

const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;
const listOfParams = [question, answer, rating, author_id];

pool
  .query(query, listOfParams)
  .then((res) => res.rows[0])
  .then((newEntry) => console.log(newEntry))
  .catch((err) => console.log(err))
  .finally(() => pool.end());
