const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates a intern object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const intern = new Intern(employee);   
});