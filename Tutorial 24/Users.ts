class Users {
    name: string = '';
    email: string = '';

    // constructor(name: string, email: string) {
    //     this.name = name;
    //     this.email = email;
    // }

    addUser(name: string): string {
        return `${name} is Added`;
    }

    removeUser(name: string): string {
        return `${name} is Removed`;
    }
}

let user1 = new Users();
user1.name = 'Himanshu';
console.log(user1.addUser(user1.name));
console.log(user1.removeUser(user1.name));
