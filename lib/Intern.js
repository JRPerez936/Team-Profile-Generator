const Employee = require("./Employee");

class Intern extends Employee {
    constructor(employee, schoolName){
        super();
        this.name = employee.name;
        this.id = employee.id;
        this.email = employee.email;
        this.role = 'Intern';
        this.school = schoolName;
    }
    getSchool(){
        return{school: this.school};
    }
    getRole(){
        return {role: this.role};
    }
}

module.exports = Intern;