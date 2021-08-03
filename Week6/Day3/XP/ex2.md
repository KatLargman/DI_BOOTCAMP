SELECT * FROM language 
UPDATE language 
SET name = 'Hebrew' WHERE language_id = 1 
SELECT * FROM rental DROP TABLE customer_review 
SELECT * FROM rental FULL OUTER JOIN film ON film.rental_rate = rental.rental_id 
WHERE return_date IS NULL AND film.rental_rate = film.rental_rate 
ORDER BY film.rental_rate DESC LIMIT 30 
SELECT * FROM actor 
SELECT * FROM film_actor 
SELECT * FROM actor WHERE first_name = 'Penelope'
SELECT * FROM film_actor AS PenelopeFilms WHERE actor_id = 120 
SELECT * FROM film  INNER JOIN film_actor ON film.film_id=film_actor.film_id 
WHERE fulltext @@to_tsquery('sumo') AND actor_id = 120
SELECT * FROM film  WHERE fulltext @@to_tsquery('documentary') AND length<=60 AND rating = 'R' 
SELECT * FROM customer WHERE first_name = 'Matthew' 
SELECT * FROM ((payment INNER JOIN customer ON payment.customer_id = customer.customer_id) 
INNER JOIN rental ON payment.customer_id = rental.customer_id)
WHERE first_name = 'Matthew' AND amount >4.00 AND return_date >= '2005-07-28' AND return_date<='2005-08-01' 
SELECT * FROM payment INNER join customer ON payment.customer_id = customer.customer_id -- 
INNER JOIN film ON payment.amount = film.rental_rate -- WHERE description LIKE '%Boat%' AND replacement_cost = 29.99 AND first_name = 'Matthew'
