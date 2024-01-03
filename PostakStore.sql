USE master;

CREATE DATABASE PostakStore;

USE PostakStore;

CREATE TABLE Products (
   ProductID INT PRIMARY KEY,
   ProductName VARCHAR(50),
   ProductDescription VARCHAR(255),
   ProductPrice DECIMAL(10,2),
   ProductImage VARCHAR(255)
);