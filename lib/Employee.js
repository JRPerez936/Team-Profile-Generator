const inquirer = require("inquirer");

class Employee{
    constructor(name = '', id, email = ''){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
    getName(){
        return {name: this.name};
    }
    getId(){
        return {id: this.id};
    }
    getEmail(){
        return {email: this.email};
    }
    getRole(){
        return {role: this.role};
    }
    // employeeType(){
    //     inquirer
    //       .prompt({
    //               type:'list',
    //               message: 'What kind of Employee is this?',
    //               name: 'employees',
    //               choices: ['Engineer', 'Intern','Manager']
    //           })
    //       .then(({ employees }) => {
    //           if(employees === 'Engineer'){
    //             return 'Engineer';
    //           }
    //           else if(employees === 'Intern'){
    //             return 'Intern';
    //           }
    //           else if(employees === 'Manager'){
    //             return 'Manager';
    //           }
    //         })
    // }
}

module.exports = Employee;