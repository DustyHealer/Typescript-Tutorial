"use strict";
// Parent class
class CreateAccount {
    makeEmail(name) {
        return `${name}@test.com`;
    }
}
// Child class
class Customer extends CreateAccount {
    addCustomer(name) {
        return `${name} added as Customer`;
    }
    deleteUser() { }
}
class Employee extends CreateAccount {
    addEmployee(name) {
        return `${name} is added as an employee`;
    }
}
// const cus1 = new Customer();
// console.log(cus1.addCustomer('Himanshu Singhal'));
// console.log(cus1.makeEmail('Himanshu Singhal'));
const emp = new Employee();
console.log(emp.addEmployee('Gobar'));
console.log(emp.makeEmail('Gobar'));
