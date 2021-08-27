const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(employee, gitHub){
        super();
        this.name = employee.name;
        this.id = employee.id;
        this.email = employee.email;
        this.role = 'Engineer';
        this.gitHub= gitHub;
    }
    getGithub(){
        return {github: this.gitHub};
    }
    getRole(){
        return {role: this.role};
    }
}

module.exports = Engineer;