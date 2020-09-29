// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, email, institution, id) {
    super(name, email, id);
    this.institution = institution;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.institution;
  }
}
module.exports = Intern;
