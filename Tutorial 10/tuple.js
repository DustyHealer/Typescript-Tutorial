// Tuples
// Array
// let role: string[] | number[] = ['admin', 'manager', 1, 2]; // Will not accept both numbers and strings
// Tuple
var role = [
    'admin',
    'manager',
    1,
    2,
];
role.push(true);
role[1] = 'user';
