CREATE TABLE orders ( item_id int, order_id int not null primary key, user_id int not null, CONSTRAINT fk_items foreign key (item_id) references items(item_id))
CREATE TABLE items( item_name varchar(50), item_id int primary key, item_price int not null)
INSERT INTO items(item_name, item_id, item_price) VALUES ('xbox',1,300) INSERT INTO orders (item_id, order_id, user_id) VALUES (1, 3, 7)
CREATE OR REPLACE FUNCTION total_price(myOrder int) returns int language plpgsql as $$ DECLARE totalprice integer; 
BEGIN SELECT SUM(item_price) into totalprice FROM orders 
INNER JOIN items ON orders.item_id=items.item_id WHERE order_id = myOrder AND user_id = user_id; return totalprice; END; $$
SELECT total_price(3)
