const generateJokeHelpers = (pool) => {
  const fetchAllJokes = () => {
    const query = `SELECT jokes.id, jokes.question, jokes.answer, authors.name AS author
      FROM jokes
      JOIN authors
      ON jokes.author_id = authors.id
    `;

    return pool.query(query).then((res) => res.rows);
  };

  const fetchOneJoke = (jokeId) => {
    // return jokeList.find((joke) => joke.id === jokeId);
    const query = `
      SELECT jokes.question, jokes.answer, authors.name AS author
      FROM jokes
      JOIN authors
      ON jokes.author_id = authors.id
      WHERE jokes.id = $1
    `;
    return pool.query(query, [jokeId]).then((res) => res.rows[0]);
  };

  return { fetchAllJokes, fetchOneJoke };
};

// fetchAllJokes().then(rows => ...)

module.exports = generateJokeHelpers;

// obj[] obj.
