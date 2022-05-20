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

//function to add a new department
async function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Please enter the name of the department you are adding.'
    }])
    .then((response) => {
        addDataTo('departments', response);
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
        type: 'list',
        name: 'department',
        message: 'Please choose the department for this new role.',
        choices: [
            'Network',
            'Systems',
            'Digital Media',
            'IT'
    ]    
    }     
])
    .then((response) => {
        addDataTo('roles', response);
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
        name: 'LastName',
        message: 'Please enter the last name of the employee you are adding.'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Please choose the role for this employee.',
        choices: [
            'Sr. Network Engineer',
            'Jr. Network Enginerer',
            'Sr. Systems Enginerer',
            'Jr. Systems Engineer',
            'Sr. Digital Media Engineer',
            'Jr. Digital Media Engineer',
            'Technical Support Supervisor',
            'Technical Specialist',
            'Information Technician'
        ]
    },
    {
        type: 'list',
        name: 'department',
        message: 'Please choose the department for this new role.',
        choices: [
            'Network',
            'Systems',
            'Digital Media',
            'IT'
    ]    
    }     
])
    .then((response) => {
        addDataTo('employees', response);
    });
}

//function to update a role
async function updateRole() {
    inquirer.prompt([
    {
        type: 'list',
        name: 'employeeNames',
        message: 'Please select the employee you would like to update',
        choice: 
    },   
    {
        type: 'list',
        name: 'role',
        message: 'Please choose their new role.',
        choices: [
            'Sr. Network Engineer',
            'Jr. Network Enginerer',
            'Sr. Systems Enginerer',
            'Jr. Systems Engineer',
            'Sr. Digital Media Engineer',
            'Jr. Digital Media Engineer',
            'Technical Support Supervisor',
            'Technical Specialist',
            'Information Technician'
        ]
    }  
])
    .then((response) => {
        addDataTo('employees', response);
    });
}

startPrompts();