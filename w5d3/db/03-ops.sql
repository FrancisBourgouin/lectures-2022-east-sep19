-- SELECT jokes.question, jokes.answer, authors.name 
-- FROM jokes
-- JOIN authors
-- ON jokes.author_id = authors.id
-- ;


SELECT jokes.question, jokes.answer, authors.name 
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE jokes.id = 1 --Placeholder value
;

