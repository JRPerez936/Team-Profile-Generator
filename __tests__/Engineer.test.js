const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates a engineer object', () =>{
    const employee = new Employee('Dave',1,'Email');
    const engineer = new Engineer(employee); 
});