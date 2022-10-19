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

const query = `
INSERT INTO
  jokes (question, answer, rating, author_id)
VALUES
  ($1, $2, $3, $4)
RETURNING *
`;

// const question = process.argv[2]
// const answer = process.argv[3]
// const rating = process.argv[4]
// const author_id = process.argv[5]

const [, , question, answer, rating, author_id] = process.argv;

const listOfParams = [question, answer, rating, author_id];

pool.query(query, listOfParams).then((res) => console.log(res));
