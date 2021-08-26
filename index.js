const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const promptManager = () => {
    console.log(`
    =================
    Welcome To Team Manager! Please Start By Entering Manager Role Information.
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager`s name? (Required)',
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
            message: 'What is the manager`s ID? (Required)',
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
            message: 'What is the manager`s email? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their email!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the manager`s office number? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter their office number!');
                return false;
              }
            }
        }
    ])  
};

const promptEmployee = () =>{
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    inquirer
        .prompt([
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
            {
                type: 'list',
                name: 'employeetype',
                message: 'What kind of employee is this? (Required)',
                choices:['Engineer', 'Intern']
            }
        ])
        .then(({employeetype}) =>{
            if(employeetype === 'Engineer'){
                console.log('This is an Engineer');
            }
            if(employeetype === 'Intern'){
                 console.log('This is an Intern');
            }
        });
};

promptManager()
    .then((data)=>{ 
        teamManager = new Manager(new Employee(data.name,data.id,data.email),data.office);
        promptEmployee();
    })
    .catch(err =>{
        console.log(err);
    });
