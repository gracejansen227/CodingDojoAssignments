
SELECT *
FROM billing;

SELECT *
FROM clients;

SELECT *
FROM leads;

SELECT *
FROM sites;

SELECT CONCAT(clients.first_name,' ',clients.last_name) as client_name, SUM(billing.amount) as Total_Revenue, MONTHNAME(billing.charged_datetime) as month_charge, YEAR(billing.charged_datetime) as year_charge
FROM clients 
JOIN billing ON clients.client_id = billing.client_id 
GROUP BY MONTHNAME(billing.charged_datetime)
ORDER BY clients.client_id;