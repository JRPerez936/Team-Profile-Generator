const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(employee){
        super();
        employee.profession = 'Engineer';
    }
}

module.exports = Engineer;