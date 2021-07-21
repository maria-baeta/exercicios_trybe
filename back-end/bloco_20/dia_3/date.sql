USE sakila;

SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT DATE(rental_date) AS DATA,
YEAR(rental_date) AS Ano,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >=22;