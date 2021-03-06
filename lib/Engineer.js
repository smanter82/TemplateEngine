//import Employee class
const Employee = require("./Employee");

//Extend Employee class to Add data specific to Engineer.
class Engineer extends Employee {
    constructor(name, id, contact, github) {
        super(name, id, contact);
        this.github = github;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.contact;
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}

//Export Engineer constructor
module.exports = Engineer;