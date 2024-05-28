# Typescript

1. Type Script is an enhanced version of javascript
2. Typescript can not run on the browser directly. TS Compiler converts the TS into JS, then it is executed on the browser.

# Benefits of TS

1. We can write code OOP way.
2. Type checking at the compile time.
3. Code is well managed

Developed by Microsoft. Influenced by Javascript (Launched - 1:oct:2012)

# Core Data Types -

Number: 1, 10, 100, 2.5
String: 'hi', "hello", `ok`
Boolean: true or false

# Add type checking in javascript files

# Type Inference

Typescript assigns a datatype to the variable based on the value which is assigned the first time. And later we can't give any other data type later on to that variable.

# Any Datatype

Pros - Can pass any data - string, number, boolean, object, etc
Cons - It can increases chances of runtime error. So minimize its usage in program.

# Compile multiple TS files in a single go

tsc -init : This command will create a tsconfig.json file.
tsc --watch or tsc -w: Will run typescript in watch mode. It will automatically create javascript for all the typescript files dynamically as it detect any changes.
