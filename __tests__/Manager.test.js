const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const manager = new Manager(employee, 1);   
});
test('check Manager functions', () =>{
    const employee = new Employee('Dave',1,'Email');
    const manager = new Manager(employee, 1);
    expect(manager.getRole()).toHaveProperty('role'); 
});