SELECT first_name AS FirstName, last_name AS LastName FROM employees
SELECT DISTINCT (department_id) FROM employees 
SELECT * FROM employees
ORDER BY first_name DESC
SELECT first_name, last_name, salary, (salary*15)/100 AS PF from employees
SELECT employee_id, first_name, last_name, salary FROM employees 
ORDER BY salary ASC 
SELECT sum(salary) FROM employees
SELECT max(salary) FROM employees 
SELECT min(salary) FROM employees 
SELECT COUNT (employee_id) FROM employees
SELECT COUNT(first_name) FROM employees
SELECT LEFT(first_name, 3) FROM employees 
SELECT CONCAT(first_name, ' ', last_name) AS fullname FROM employees
SELECT LENGTH(CONCAT(first_name, ' ', last_name)) AS LEN FROM employees 
SELECT first_name FROM employees WHERE first_name ~ '^[0-9.]+$' 
SELECT * FROM countries LIMIT 10 
SELECT first_name, last_name, salary FROM employees WHERE salary>=10000 AND salary<=15000
SELECT first_name, last_name, hire_date FROM employees WHERE hire_date >= '1987-01-01'AND hire_date <'1988-01-01'
SELECT * FROM employees WHERE first_name LIKE '%ce%'
SELECT employees.last_name, employees.job_id, employees.salary FROM employees 
INNER JOIN jobs ON jobs.job_id = employees.job_id  
WHERE salary !=4500 AND salary != 10000 AND salary != 15000 AND job_title != 'Programmer' AND job_title !='Shipping Clerk'
SELECT * FROM employees WHERE length(last_name) = 6 
SELECT last_name FROM employees WHERE left(first_name,3) LIKE '%e 
SELECT job_title FROM jobs -- INNER JOIN employees ON jobs.job_id = employees.job_id 
SELECT * FROM employees WHERE last_name = 'Jones' OR last_name = 'Blake' OR last_name = 'Scott' OR last_name = 'King' OR last_name = 'Ford'
