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

1. tsc -init : This command will create a tsconfig.json file.
2. tsc --watch or tsc -w: Will run typescript in watch mode. It will automatically create javascript for all the typescript files dynamically as it detect any changes.
3. "exclude": ["student.ts"] - Add this block inside the tsconfig file to exclude some files from automatic watch. So, it will not be compiles into JS when we execute tsc -w.

## TS CONFIG

# Target in tsconfig

We can change the target to any version of ECMA Script which will be then used while compiling the TS file.

# rootdir, outdir - TS Config

# Code Quality Improvements -

"noUnusedLocals": true, - Gives warning when we declare a variable but don't use it
"noUnusedParameters": true, - Gives warning when we pass parameter to a method and don't use it
"noImplicitReturns": true, - Gives an warning when a all path does not return a value in method
"noFallthroughCasesInSwitch": true, - Gives warning when we miss break in switch case
