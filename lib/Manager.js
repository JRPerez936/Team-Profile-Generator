const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employee){
        super();
        employee.profession = 'Manager';
    }
}

module.exports = Manager;