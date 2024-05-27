// Literal in TS
// Very similar to union, but instead of types we use values in literals
var litter = 123;
// Function which accepts union type parameters
// Use case for literals - Incase our function have 5,6 parameters then use literals
function combineLiter(a, b, type) {
    if (type === 'as-number')
        return +a + +b;
    else
        return a.toString() + b.toString();
}
var type = 'as-number';
console.log(combineLiter(10, 20, type));
type = 'as-string';
console.log(combineLiter('Anil', 'Sidhu', type));
