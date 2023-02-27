const { prompt } = require("inquirer");
const { removeEmployee, removeDepartment } = require("./db");
const db = require("./db");
init();
function init() {
    loadMainPrompts();
}
function loadMainPrompts() {
    prompt([
        {
            type:"list",
            name:"choice",
            message:"Select an option.",
            choices: [
                {
                    name: 'Find All Employees',
                    value:'VIEW_EMPLOYEES',
                },
                {
                    name: 'Find All Managers',
                    value:'VIEW_MANAGERS',
                },
                {
                    name: 'Create Employee',
                    value:'CREATE_EMPLOYEE',
                },
                {
                    name: 'Remove Employee',
                    value:'REMOVE_EMPLOYEE',
                },
                {
                    name: 'Update Employee',
                    value:'UPDATE_EMPLOYEE',
                },
                {
                    name: 'Update Employee Role',
                    value:'UPDATE_EMPLOYEE_ROLE',
                },
                {
                    name: 'VIEW ROLE',
                    value:'VIEW_ROLE',
                },
                {
                    name: 'Add Role',
                    value:'ADD_ROLE',
                },
                {
                    name: 'Remove Role',
                    value:'REMOVE_ROLE',
                },
                {
                    name: 'Find Department',
                    value:'VIEW_DEPARTMENT',
                },
                {
                    name: 'Add Department',
                    value:'ADD_DEPARTMENT',
                },
                {
                    name: 'Remove Department',
                    value:'REMOVE_DEPARTMENT',
                },
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
                case "VIEW_MANAGERS":
                    viewManagers();
                    break;
                    case 'CREATE_EMPLOYEE':
                        createEmployee();
                        break;
                        case "REMOVE_EMPLOYEE":
                            removeEmployee();
                            break;
                            case "UPDATE_EMPLOYEE":
                            updateEmployeeRManager();
                            break;
                            case "UPDATE_EMPLOYEE_ROLE":
                                updateEmployeeRole();
                                break;
                                case 'VIEW_ROLE':
                                    viewRole();
                                    break;
                                    case 'ADD_ROLE':
                                    addRole();
                                    break;
                                    case 'REMOVE_ROLE':
                                        removeRole();
                                        break;
                                        case 'VIEW_DEPARTMENT':
                                        viewDepartment();
                                        break;
                                        case 'ADD_DEPARTMENT':
                                            addDepartment();
                                            break;
                                            case 'REMOVE_DEPARTMENT':
                                                removeDepartment();
                                                break;
                                                default:
                                                    queueMicrotask();

        }
    })
}
function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.table(employees);
    })
    .then(() => loadMainPrompts());
}
function viewManagers() {
    db.findALLManagers()
    .then(([rows]) => {
        let managers = rows;
        console.table(managers);
    })
    .then(() => loadMainPrompts() );
}
function createEmployee() {
    db.c
}







