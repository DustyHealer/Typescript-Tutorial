var today;
var x = 20;
var y = 10;
// Void return type - returns nothing
function printData() {
    today = new Date();
    console.log("Hello Himanshu ".concat(today));
    return;
}
console.log(printData());
