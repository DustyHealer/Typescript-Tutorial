"use strict";
class Users {
    // Short-hand Initialization
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayVal() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
    }
}
const u1 = new Users('Himanshu', 29, 'himanshu@mail.com');
u1.displayVal();
