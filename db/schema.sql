DROP DATABASE IF EXISTS workplace_db;
CREATE DATABASE workplace_db;

USE workplace_db;
-- Create Department Table:

CREATE TABLE departments(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
  );

-- Create Role Table:

CREATE TABLE roles (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  salary DECIMAL NULL DEFAULT 0,
  department_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE CASCADE
  );

-- Create Employee Table:

CREATE TABLE employees (
  emp_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  manager_id INT,
  PRIMARY KEY (emp_id),
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
  );

