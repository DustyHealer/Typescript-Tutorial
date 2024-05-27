// Tuples

// Array
// let role: string[] | number[] = ['admin', 'manager', 1, 2]; // Will not accept both numbers and strings

// Tuple
let role: [string, string, number, number, boolean?] = [
    'admin',
    'manager',
    1,
    2,
];
role.push(true);

role[1] = 'user';
