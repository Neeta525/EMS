// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
// const { createConnection } = require('net');
var startPrompts = startPrompts;

const PORT = process.env.PORT || 3001;


// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: "genericPW",
    database: "my_employees"
    }
);

db.connect(err => {
    if (err) throw err;
    console.log('connected');
    startPrompts();
    // afterConnection();
});

// // welcome Image
// afterConnection = () => {
//     console.log("********************************")
//     console.log("*                              *")
//     console.log("*             EMS              *")
//     console.log("*  Employee Management System  *")
//     console.log("*                              *")
//     console.log("********************************")
//     startPrompts();
// };

//starts prompts
function startPrompts () {
inquirer.prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'Please choose one of the following options.',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update a role',
                'Quit'
            ]
        }
    ])
//     .then(function(res) {
//         console.log(res)
//     })
// }
// Switch for options 
.then((res) => { 
    let choice = res.choice;
    switch (choice) {
        case 'View all departments':
            // console.log(choice)
            viewDepartments();
            break;
        case 'View all roles':
            viewRoles();
            break;
        case 'View all employees':
            viewEmployees();
            break;
        case 'Add a department':
            addDepartment();
            break;    
        case 'Add a role':
            addRole();
            break;
        case 'Add an employee':
            addEmployee();
            break;
        case 'Update a role':
            updateRole();
            break;
        case 'Quit':
            quit();
            break;    
    }
})
}

function viewDepartments() {
    const request = "SELECT * FROM departments";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Departments");
        console.table(res);
        startPrompts();
    })
}

function viewRoles() {
    const request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Roles");
        console.table(res);
    });
    startPrompts();
}

function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Roles");
        console.table(res);
    });
    startPrompts();
}



//function to add a new department
async function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the department you are adding.'
    }])
    .then((response) => {

        const sql = `insert into departments(dept_name) values(?)`;
        db.query(sql, [response.name], (err, res) => {
            console.log("department has been added");
        }); 
        startPrompts();
    });
}


//function to add a role
async function addRole() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the role you are adding.'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'Please enter the salary for this new role.'
    },
    {
        type: 'input',
        name: 'department',
        message: 'Please choose the department for this new role.'
    }     
])
    .then((response) => {
        const sql = `insert into roles(title, salary, dept_id) values(?,?,?)`;
        db.query(sql, [response.name, response.salary, response.department], (err, res) => {
            console.log("role has been added");
        }
        )
        startPrompts();
    });
    
}

//function to add an employee
async function addEmployee() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'firstName',
        message: 'Please enter the first name of the employee you are adding.'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Please enter the last name of the employee you are adding.'
    },
    {
        type: 'input',
        name: 'role_id',
        message: 'Please enter the role ID for this employee.'
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Please enter the manager ID for this new role.'
    }     
])
    .then((response) => {
        const sql = `insert into employees(first_name, last_name, role_id, manager_id) values(?,?,?,?)`;
        db.query(sql, [response.firstName, response.lastName, response.role_id, response.manager_id], (err, res) => {
            console.log("employee has been added");
        }
        )
        startPrompts(); 
    });
}

//function to update a role
async function updateRole() {

    return inquirer.prompt([
        {
            type: 'input',
            name: "firstName",
            message: 'Please enter the employee\'s first name'
        },
    {
        type: 'input',
        name: 'role_id',
        message: 'Please enter employee\'s new role ID',
    },   
])
    .then((response) => {
        const sql = `update employees set ? WHERE ? `;
        db.query(sql, [{role_id: response.role_id}, {first_name: response.firstName}], (err, res) => {
            console.log("employee has been updated");
        }
        ) 
        startPrompts();
    });
    
}

