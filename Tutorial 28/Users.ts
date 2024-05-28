class Users {
    // Short-hand Initialization
    public constructor(
        public name: string,
        public age: number,
        private email: string
    ) {}

    public displayVal(): void {
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
    }
}

const u1 = new Users('Himanshu', 29, 'himanshu@mail.com');
u1.displayVal();
