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
    console.log('connected as id ' + connection.threadID);
    afterConnection();
});

afterConnection = () => {
    console.log("********************************")
    console.log("*                              *")
    console.log("*             EMS              *")
    console.log("*  Employee Management System  *")
    console.log("*                              *")
    console.log("********************************")
}
