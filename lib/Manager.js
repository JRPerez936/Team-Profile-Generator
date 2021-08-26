const Employee = require("./Employee");

class Manager extends Employee {
    constructor(employee, officeNum){
        super();
        this.name = employee.name;
        this.id = employee.id;
        this.email = employee.email;
        this.role = 'Manager';
        this.officeNum= officeNum;
    }
}

module.exports = Manager;