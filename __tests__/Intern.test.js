const Employee = require('../lib/Employee');
const Engineer = require('../lib/Intern');

test('creates a intern object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const engineer = new Intern(employee);   
});