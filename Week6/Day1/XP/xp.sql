CREATE TABLE items (
    id serial primary key,
    product varchar(100),
    price integer
);

CREATE TABLE customers (
    id serial primary key,
    first_name varchar(50),
    last_name varchar(50)
);

INSERT INTO items (product, price)
VALUES ('small-desk',100);

INSERT INTO items (product, price)
VALUES ('large-desk',300),
('fan',80)
;

INSERT INTO customers (last_name, first_name)
VALUES ('Greg','Jones'),
('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melania','Jhnson')
;

SELECT * FROM public.items;

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price < 300 ;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name != 'Jones';
