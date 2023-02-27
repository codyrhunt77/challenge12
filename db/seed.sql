USE staff;
INSERT INTO department
(name)
VALUES
('Customer Service'),
('Sales'),
('Warehouse'),
('Delivery')
('Managment');
INSERT INTO role
(title, salary. department_id)
VALUES
("Head Driver", 60000,4),
("Assistant Driver", 50000,4),
("Salesman", 90000,2),
("Unpacker", 45000,3),
("Service", 60000,1),
("Manager", 100000,5);
INSERT INTO employee
(first_name,last_name,role_id,manager_id)
VALUES
("Dean","Hall",4,NULL),
("Jake","Tritt",3,NULL),
('Ashley',"Corra",1,NULL),
('Ryan','Starner',3,5),
('Chevelle', 'Swartz',2,NULL);
