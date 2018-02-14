SELECT customer.first_name, customer.last_name, customer.email, address.address, address.address2
FROM customer 
JOIN address ON customer.address_id = address.address_id;
