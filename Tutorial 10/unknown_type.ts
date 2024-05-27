// any
// any is a run time variable - computes everything at run time
let unknownData: any;
unknownData = 'Himanshu';
unknownData = 20;
unknownData = true;

// unknown
// unknown is a compile time variable - computes everything at compile time
let unknownData1: unknown;
unknownData1 = 'Himanshu';
unknownData1 = 20;
unknownData1 = true;

let item: number;
item = unknownData; // compile in case of any
// item = unknownData1; // does not compile in case of unknown
console.log(item);
