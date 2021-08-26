const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Manager = require("./lib/Manager");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee`s name? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their name!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee`s ID? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their id!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee`s email? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their email!');
                return false;
              }
            }
        },
    ])  
};

promptUser()
    .then((data)=>{
        const employee1 = new Employee(data.name,data.id,data.email)
        const manager1 = new Manager(employee1, 3);
        console.log(manager1);
    })
    .catch(err =>{
        console.log(err);
    });
