// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Manager extends Employee {
  constructor(name, email, department, id) {
    this.department = department;
  }
  getRole() {
    return "Manager";
  }
  getDepartment() {
    return this.department;
  }
}
module.exports = Manager;
