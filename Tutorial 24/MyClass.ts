class MyClass {
    private name: string = '';
    setName(name: string) {
        this.name = name;
    }
    displayName(): void {
        console.log(`name: ${this.name}, length: ${this.getNameLength()}`);
    }

    private getNameLength(): number {
        return this.name.length;
    }
}

const u1: MyClass = new MyClass();
u1.setName('Guru Randhawa');
u1.displayName();
