class MyClass {
    readonly name = 'Himanshu';
}

const c1 = new MyClass();
// c1.name = 'Peter'; // This line will throw error because property is readonly
console.log(c1.name);
