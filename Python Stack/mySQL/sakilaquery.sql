SELECT customer.store_id, address.city_id, customer.first_name, customer.last_name, customer.email, address.address
FROM customer 
JOIN address ON customer.address_id = address.address_id 
WHERE customer.store_id = 1
AND address.city_id IN (1,42,312,459);
