const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const manager = new Manager(employee);   
});