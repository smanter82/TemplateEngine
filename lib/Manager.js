//import Employee class
const Employee = require("./Employee");

//Extend Employee class to Add data specific to Manager.
class Manager extends Employee {
    constructor(name, id, contact, officeNumber) {
        super(name, id, contact);
        this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

//Export Manager constructor
module.exports = Manager;