const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a employee object', () =>{
    const employee = new Employee('Dave',1,'Email');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Email');
    
});