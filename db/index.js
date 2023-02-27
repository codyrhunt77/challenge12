const connection = require('./connection');
class Database {
    constructor(connection) {
        this.connection = connection;
    }
    findAllEmployees() {
        return this.connectiom.promise().query("SELECT employee.id , role.id, department.id");
    }
    findALLManagers(){
        return this.connection,promise().query("SELECT id, first_name,last_name, department.id, role.id");
    }
    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET", employee);
    }
    removeEmployee(employeeID) {
        return this.connection.promise().query("DELETE FROM employee", employeeID);
    }
    updateEmployeeRManager(employeeID, managerID) {
        return this.connection.promise().query("UPDATE employyee SET manager_id", [managerID , employeeID]);
    }
    updateEmployeeRole(employeeID, roleID) {
        return this.connection.promise().query("UPDATE employee SET role_id", [employeeID, roleID]);
    }
    findAllRoles() {
        return this.connection.promise().query("SELECT role.id, role.title, deprrtment.id");
    }
    createRole() {
        return this.connection.promise().query("INSERT INTO role", role);
    }
    deleteRole() {
        return this,connection.promise().query("DELETE FROM role", role);
    }
    findAllDepartments() {
        return this.connection.promise().query("SELECT department.id, department.name FROM department");
    }
    createDepartment() {
        return this.connection.promise().query("INSERT INTO department", department);
    }
    removeDepartment() {
        return this.connection.promise().query("DELETE FROM department", department)
    }

}
module.exports = new Database(connection);