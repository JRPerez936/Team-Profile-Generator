const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(employee){
        super();
        employee.role = 'Engineer';
    }
}

module.exports = Engineer;