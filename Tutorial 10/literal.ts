// Literal in TS

// Very similar to union, but instead of types we use values in literals
let litter: 'abc' | 123 = 123;

// Function which accepts union type parameters
// Use case for literals - Incase our function have 5,6 parameters then use literals
function combineLiter(
    a: number | string,
    b: number | string,
    type: 'as-number' | 'as-string'
) {
    if (type === 'as-number') return +a + +b;
    else return a.toString() + b.toString();
}

let type: 'as-number' | 'as-string' = 'as-number';
console.log(combineLiter(10, 20, type));
type = 'as-string';
console.log(combineLiter('Anil', 'Sidhu', type));
