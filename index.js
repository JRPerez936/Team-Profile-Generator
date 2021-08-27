const inquirer = require("inquirer");
const Employee = require('./lib/Employee');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptManager = () => {
    console.log(`
    =================
    Welcome To Team Manager! 
    Please Start By Entering Manager Role Information.
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
    ]); 
};

const promptEmployee = employeeData =>{
    console.log(`
    =================
    Add a New Employee
    =================
    `);
    if(!employeeData.employees){
        employeeData.employees = [];
        employeeData.employees.push(new Manager(new Employee(employeeData.name,employeeData.id,employeeData.email), employeeData.office));
    }
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'employeetype',
                message: 'What kind of employee is this? (Required)',
                choices:['Engineer', 'Intern']
            }
        ])
        .then(({employeetype}) =>{
            if(employeetype === 'Engineer'){
                return inquirer
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
                        type: 'input',
                        name: 'github',
                        message: 'What is the employee`s github? (Required)',
                        validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter their github!');
                            return false;
                        }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ])
                .then(engineerData =>{
                    const tempEmployee = new Employee(engineerData.name,engineerData.id,engineerData.email);
                    const tempEngineer = new Engineer(tempEmployee,engineerData.github);
                    employeeData.employees.push(tempEngineer);
                    if(engineerData.confirmAddEmployee){
                        return promptEmployee(employeeData);
                    }
                    else{
                        return employeeData;
                    }
                });
            }
            if(employeetype === 'Intern'){
                return inquirer
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
                        type: 'input',
                        name: 'github',
                        message: 'What is the employee`s school? (Required)',
                        validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter their school!');
                            return false;
                        }
                        }
                    },
                    {
                        type: 'confirm',
                        name: 'confirmAddEmployee',
                        message: 'Would you like to enter another employee?',
                        default: false
                    }
                ])
                .then(internData =>{
                    const tempEmployee = new Employee(internData.name,internData.id,internData.email);
                    const tempIntern = new Intern(tempEmployee,internData.github);
                    employeeData.employees.push(tempIntern);
                    if(internData.confirmAddEmployee){
                        return promptEmployee(employeeData);
                    }
                    else{
                        return employeeData;
                    }
                });
            }
        });
};

promptManager()
    .then(promptEmployee)
    .then(employeeData =>{
        return generatePage(employeeData);
    })
    .catch(err =>{
        console.log(err);
    });
