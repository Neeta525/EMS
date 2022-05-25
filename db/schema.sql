DROP DATABASE IF EXISTS my_employees;
CREATE DATABASE IF NOT EXISTS my_employees;

USE my_employees;

DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INT,
    CONSTRAINT dept_fk FOREIGN KEY (dept_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    CONSTRAINT role_fk FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INT,
    CONSTRAINT manager_fk FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);