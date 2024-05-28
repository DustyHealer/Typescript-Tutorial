"use strict";
class MyClass {
    constructor() {
        this.name = '';
    }
    setName(name) {
        this.name = name;
    }
    displayName() {
        console.log(`name: ${this.name}, length: ${this.getNameLength()}`);
    }
    getNameLength() {
        return this.name.length;
    }
}
const u1 = new MyClass();
u1.setName('Guru Randhawa');
u1.displayName();
