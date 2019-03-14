--Drop the database
DROP DATABASE IF EXISTS coffee_quiz_db;
CREATE DATABASE coffee_quiz_db;

USE coffee_quiz_db;

CREATE TABLE coffee
(
	id INT NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);