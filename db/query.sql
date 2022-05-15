SELECT * FROM departments;

SELECT title, roles.id, salary, dept_name
FROM roles
JOIN departments
ON roles.dept_id = departments.id;

SELECT 