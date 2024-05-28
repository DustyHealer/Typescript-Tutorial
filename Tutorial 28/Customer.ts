// Parent class
class CreateAccount {
    makeEmail(name: string): string {
        return `${name}@test.com`;
    }
}

// Child class
class Customer extends CreateAccount {
    public addCustomer(name: string): string {
        return `${name} added as Customer`;
    }

    public deleteUser() {}
}

class Employee extends CreateAccount {
    addEmployee(name: string): string {
        return `${name} is added as an employee`;
    }
}

// const cus1 = new Customer();
// console.log(cus1.addCustomer('Himanshu Singhal'));
// console.log(cus1.makeEmail('Himanshu Singhal'));
const emp = new Employee();
console.log(emp.addEmployee('Gobar'));
console.log(emp.makeEmail('Gobar'));
