// Union type variable is created using |
let uni: number | string = 1232;
uni = 'himanshu';

// Function which accepts union type parameters
function combine(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    else return a.toString() + b.toString();
}

console.log(combine(10, 20));
console.log(combine('Anil', 'Sidhu'));

// Alternate option to union is any. But preference is given to union
function newCombine(a: any, b: any) {
    return a + b;
}
console.log(newCombine(10, 20));
console.log(newCombine('Anil', 'Sidhu'));
