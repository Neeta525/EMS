INSERT INTO departments (dept_name)
VALUES ("MANAGEMENT"),
("ENGINEERING"),
("IT");

INSERT INTO roles (title, salary, dept_id)
VALUES ("Director of Technology", 90000.00, 1),
("Sr. Network Engineer", 80000, 2),
("Jr. Network Enginerer", 65000, 2),
("Sr. Systems Engineer", 80000, 2),
("Jr. Systems Engineer", 65000, 2),
("Sr. Digital Media Engineer", 80000, 2),
("Jr. Digital Media Engineer" 65000, 2),
("Technical Support Supervisor", 70000, 1)
("Technical Specialist", 50000, 3),
("Information Technician", 40000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Neeta", "Chavez", 20, ),
("Jack", "Skellington", 19, ),
("Oogie", "Boogie", 18, ),
("Cheshire", "Cat", 17, ),
("Mad", "Hatter", 16, ),
("Korben", "Dallas", 15, ),
("Leeloo", "Dallas", 14, ),
("Clark", "Devereaux", 13, ),
("Mikey", "Walsh", 12, ),
("Neo", "Anderson", 11, ),
("Agent", "Smith", 10, ),
("Star", "Lord", 9, null),
("Rocket", "Raccoon", 8, ),
("Ingigo", "Montoya", 7, ),
("Miracle", "Max", 6, ),
