// Creating an object type
// const example:{} = {}; // Declares an empty object
// const example:object={}; // Declares an empty object

type objType = { name: string; age: number; email: string };

const person: objType = {
    name: 'Himanshu Singhal',
    age: 27,
    email: 'himanshu.singhal@google.com',
};

const user: objType = {
    name: 'Peter England',
    age: 31,
    email: 'peter.england@google.com',
};

console.log(`Person Name: ${person.name}`);
console.log(`Person Age: ${person.age}`);
console.log(`Person Age: ${person.email}`);

console.log(`user Name: ${user.name}`);
console.log(`user Age: ${user.age}`);
console.log(`user Age: ${user.email}`);
