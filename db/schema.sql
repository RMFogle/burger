-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burger_db" database --
CREATE DATABASE burgers_db;

-- Creates table for burgers -- 
USE burgers_db;
CREATE TABLE burgers (

    id int NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR(40) NOT NULL, 
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
); 

