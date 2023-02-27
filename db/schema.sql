DROP DATABASE IF EXISTS staff;
CREATE DATABASE staff;
USE staff;
CREATE TABLE roles (
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30) UNIQUE NOT NULL,
   salary DECIMAL NOT NULL,
   department_id INT NOT NULL,
   INDEX (department_id),
   CONSTRAINT f_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE 
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    role_id INT NOT NULL,
    INDEX (role_id),
    CONSTRAINT f_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    CONSTRAINT f_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL


);
CREATE TABLE department(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(60) NOT NULL,
);