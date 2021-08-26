const Employee = require('../lib/Employee');

test('creates a employee object', () =>{
    const employee = new Employee('Dave',1,'Email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Email');
    expect(employee.role).toBe('Employee');
});
test('get employee`s info', () =>{
    const employee = new Employee('Dave',1,'Email');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');    
});