"use strict";
class Users {
    constructor() {
        this.name = '';
        this.email = '';
    }
    // constructor(name: string, email: string) {
    //     this.name = name;
    //     this.email = email;
    // }
    addUser(name) {
        return `${name} is Added`;
    }
    removeUser(name) {
        return `${name} is Removed`;
    }
}
let user1 = new Users();
user1.name = 'Himanshu';
console.log(user1.addUser(user1.name));
console.log(user1.removeUser(user1.name));
