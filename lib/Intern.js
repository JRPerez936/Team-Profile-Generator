const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employee){
        super();
        employee.profession = 'Intern';
    }
}

module.exports = Intern;