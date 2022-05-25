USE my_employees; 

INSERT INTO departments (dept_name)
VALUES ('HR'),
("NETWORK"),
("SYSTEMS"),
("DIGITAL MEDIA"),
("IT");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Director of Technology", 90000, 1),
("Sr. Network Engineer", 80000, 2),
("Jr. Network Enginerer", 65000, 2),
("Sr. Systems Engineer", 80000, 3),
("Jr. Systems Engineer", 65000, 3),
('Sr. Digital Media Engineer', 80000, 4),
("Jr. Digital Media Engineer", 65000, 4),
("Technical Support Supervisor", 70000, 5),
("Technical Specialist", 50000, 5),
("Information Technician", 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Skellington", 1, null),
("Mad", "Hatter", 2, null),
("Mikey", "Walsh", 3, 2),
("Korben", "Dallas", 4, null),
("Clark", "Devereaux", 5, 3),
("Neeta", "Chavez", 6, null),
("Star", "Lord", 7, 4),
("Oogie", "Boogie", 8, null),
("Cheshire", "Cat", 9, 5),
("Leeloo", "Dallas", 10, 5),
("Neo", "Anderson", 10, 5),
("Agent", "Smith", 10, 5),
("Rocket", "Raccoon", 10, 5),
("Inigo", "Montoya", 10, 5),
("Miracle", "Max", 10, 5);
