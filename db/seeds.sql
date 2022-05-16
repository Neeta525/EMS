INSERT INTO departments (dept_name)
VALUES ("NETWORK"),
("SYSTEMS"),
("DIGITAL MEDIA")
("IT");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Director of Technology", 90000, 1),
("Sr. Network Engineer", 80000, 4),
("Jr. Network Enginerer", 65000, 4),
("Sr. Systems Engineer", 80000, 3),
("Jr. Systems Engineer", 65000, 3),
("Sr. Digital Media Engineer", 80000, 2),
("Jr. Digital Media Engineer" 65000, 2),
("Technical Support Supervisor", 70000, 5)
("Technical Specialist", 50000, 5),
("Information Technician", 40000, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Neeta", "Chavez", 6, null),
("Star", "Lord", 6, 5),
("Mad", "Hatter", 2, null),
("Mikey", "Walsh", 2, 3),
("Korben", "Dallas", 8, null),
("Clark", "Devereaux", 8, 7),
("Oogie", "Boogie", 4, null),
("Cheshire", "Cat", 4, 9),
("Leeloo", "Dallas", 14, null),
("Neo", "Anderson", 12, 11),
("Agent", "Smith", 12, 11),
("Rocket", "Raccoon", 10, 11),
("Inigo", "Montoya", 10, 11),
("Miracle", "Max", 10, 11),
("Jack", "Skellington", 1, null),
