// void method returns undefined
function tryReturn(): void {}

// never type method
// never method should never reach the last closing bracket
function apiError(msg: string, code: number): never {
    throw { message: msg, apiCode: code };
}

// console.log(tryReturn()); // Logs undefined
console.log(apiError('server side error', 500));
