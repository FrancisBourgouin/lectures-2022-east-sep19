-- Basic SELECT

-- SELECT * FROM jokes;

-- body header nav ul li:first-of-type button{
--   border:1px solid red;
-- }

-- SELECT question FROM jokes;
-- SELECT jokes.question FROM jokes; -- NOT NECESSARY FOR NOW (NON AMBIGUOUS)

-- Single WHERE clause

-- SELECT question FROM jokes WHERE rating >= 4 ;
SELECT question FROM jokes WHERE question LIKE 'What%';
SELECT question FROM jokes WHERE question LIKE '%fly%';
SELECT question FROM jokes WHERE question LIKE '%_hat%';

SELECT question FROM jokes WHERE LOWER(question) LIKE '%what%';
SELECT question FROM jokes WHERE question ILIKE '%what%';

-- || &&

-- Multiple WHERE clauses

-- SELECT question FROM jokes WHERE question ILIKE '%what%' AND question ILIKE '%you%';
-- SELECT question FROM jokes WHERE question ILIKE '%what%' OR question ILIKE '%you%';

-- SELECT question 
-- FROM jokes 
-- WHERE 
--   question ILIKE '%what%' OR question ILIKE '%you%'
-- ;
-- SELECT question FROM jokes AND question ILIKE '%you%'; BAD

-- Ordering results

-- SELECT * FROM jokes ORDER BY rating DESC;

-- Joining tables

-- SELECT * FROM jokes JOIN authors ON jokes.author_id = authors.id;
-- SELECT * FROM authors LEFT JOIN jokes ON jokes.author_id = authors.id;
-- SELECT * FROM jokes RIGHT JOIN authors ON jokes.author_id = authors.id;

-- SELECT jokes.id, authors.id FROM jokes JOIN authors ON jokes.author_id = authors.id;

-- -- Aliases

-- SELECT jokes.id AS joke_id, authors.id AS author_id FROM jokes JOIN authors ON jokes.author_id = authors.id;
-- SELECT *, jokes.id AS joke_id FROM jokes JOIN authors ON jokes.author_id = authors.id;

-- SELECT
--   jokes.*,
--   authors.name,
--   authors.description,
--   authors.funny,

-- Aggregate functions (AVG, MIN, MAX, SUM)

SELECT AVG(rating) FROM jokes;
SELECT AVG(rating), author_id FROM jokes GROUP BY author_id;


SELECT authors.id, authors.name, AVG(rating) AS average_rating
FROM jokes 
JOIN authors ON authors.id = jokes.author_id 
GROUP BY authors.name, authors.id
ORDER BY average_rating;


SELECT authors.id, authors.name, AVG(rating) AS average_rating
FROM jokes 
JOIN authors ON authors.id = jokes.author_id 
GROUP BY authors.name, authors.id
HAVING AVG(rating) = 5
ORDER BY average_rating;

-- Nested selects

-- SELECT * FROM authors WHERE id IN (
--   SELECT id FROM authors WHERE funny = true
-- );

-- SELECT * FROM authors WHERE funny = true;


-- SELECT question FROM jokes WHERE author_id IN (
--   SELECT id FROM authors WHERE name ILIKE 'l%'
-- )


-- SELECT QUERY THAT FETCHES QUESTION & ANSWER FROM AUTHORS THAT HAVE A MINIMUM RATING OF 4




-- CREATE VIEW cool_authors AS (
--   SELECT authors.*
--   FROM authors
--   JOIN jokes
--   ON jokes.author_id = authors.id
--   GROUP BY authors.id
--   HAVING AVG(jokes.rating) >= 4
-- )
-- CREATE VIEW <- READ ONLY TABLE

-- Views (stretch)


SELECT question, answer
FROM jokes
WHERE author_id IN (
  SELECT id FROM cool_authors
);

-- {
--   id       :1,
--   question :"Knock knock, whos there, to who",
--   answer   :"no, to whom",
--   rating   :3,
--   author_id:1,
--   id       :1,
--   name     :"Francis",
--   funny    :true,
--   description: "Oh boy, he is a teacher",
-- }