# Questions

# Shows

- House of the Dragon, Fantasy, Amazon Prime, 1
- Star Trek - Deep Space 9, Sci-fi, Crave, 7
- Walking Dead - Horror, Netflix, 13, English
- Rings of power - 1, Fantasy, Amazon Prime
- Compass - Lighthouse Labs Networks, 60, JavaScript, Educational
- Madmen - Angry people, Drama, 7, Amazon Prime
- Spy x Family - 1 season, comedy, japanese, crunchyroll
- Chainsaw Man - 1 season, shonen, japanese, crunchyroll

SELECT \* FROM jokes JOIN authors ON jokes.author_id = authors.id

SELECT \* FROM cool_shows JOIN providers ON cool_shows.provider_id = providers.id

# INT vs FLOAT

9.99 x 1.14975% => 11.49

9.99 _ 1.14975 => 11,4860025 => Math.round(11,4860025 _ 100) / 100 => 11.49

999 \* 1.14975 => 1148.60025 => Math.round(1148.60025) => 1149 => 11.49$

humanized_money_with_symbol(1149) => 11.49$
