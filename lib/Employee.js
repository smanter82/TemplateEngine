class Employee {
    constructor(name, id, contact) {
        this.name = name;
        this.id = id;
        this.contact = contact;
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.id;
    }
    getContact() {
        return this.contact;
    }
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;