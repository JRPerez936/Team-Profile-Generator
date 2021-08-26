const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employee){
        super();
        employee.role = 'Manager';
    }
}

module.exports = Manager;