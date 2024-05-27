let today;
let x: number = 20;
let y: number = 10;

// Void return type - returns nothing
function printData(): void {
    today = new Date();
    console.log(`Hello Himanshu ${today}`);
    return;
}

console.log(printData());
