//import Employee class
const Employee = require("./Employee");

//Extend Employee class to Add data specific to Intern.
class Intern extends Employee {
    constructor(name, id, contact, school) {
        super(name, id, contact);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
}

//Export Intern constructor
module.exports = Intern;