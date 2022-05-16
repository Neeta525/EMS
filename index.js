// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer')
const consoleTable = require('console.table');
const { createConnection } = require('net');

const PORT = process.env.PORT || 3001;


// Connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'generic_pw',
    database: 'employees_db'
    }
);

createConnection.connect(err => {
    if (err) throw err;
    console.log('connected');
    afterConnection();
});

//welcome Image
afterConnection = () => {
    console.log("********************************")
    console.log("*                              *")
    console.log("*             EMS              *")
    console.log("*  Employee Management System  *")
    console.log("*                              *")
    console.log("********************************")
    startPrompts();
};

//starts prompts
const startPrompts = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choice',
            message: 'Please choose one of the following options.',
            choice: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
                'Quit'
            ]
        }
    ])

//Switch for options 
.then((response) => {
    switch (response.choice) {
        case 'View all departments':
            viewDepartments();
            break;
        case 'View all Roles':
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
        case 'Add an Employee':
            addEmployee();
            break;
        case 'Update a Role':
            updateRole();
            break;
        case 'Quit':
            quit();
            break;    
    }
})
}
//Function to view Departments
function viewDepartments() {
    const request = "SELECT * FROM departments";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Please choose an option.',
                choices: [
                    'Main Menu',
                ]
            }
        ])
        .then((response) => {
            switch (response.choice) {
                case 'Main Menu':
                startPrompts();
                break;
                case 'Quit':
                Quit();
            }
        })
    })
}

//Function to view all roles
function viewRoles() {
    const request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Roles");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Please choose an option.',
                choices: [
                    'Main Menu',
                ]
            }
        ])
        .then((response) => {
            switch (response.choice) {
                case 'Main Menu':
                startPrompts();
                break;
                case 'Quit':
                Quit();
            }
        })
    })
}

//Function to view all Employees
function viewEmployees() {
    const request = "SELECT * FROM employees";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log("Viewing all Departments");
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Please choose an option.',
                choices: [
                    'Main Menu',
                ]
            }
        ])
        .then((response) => {
            switch (response.choice) {
                case 'Main Menu':
                startPrompts();
                break;
                case 'Quit':
                Quit();
            }
        })
    })
}

