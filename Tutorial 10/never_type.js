// void method returns undefined
function tryReturn() {
    // return true;
}
// never type method
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(tryReturn());
console.log(apiError('server side error', 500));
