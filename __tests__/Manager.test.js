const Employee = require('../lib/Employee');
const Engineer = require('../lib/Manager');

test('creates a manager object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const engineer = new Manager(employee);   
});