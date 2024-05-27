// any
// any is a run time variable - computes everything at run time
var unknownData;
unknownData = 'Himanshu';
unknownData = 20;
unknownData = true;
// unknown
// unknown is a compile time variable - computes everything at compile time
var unknownData1;
unknownData1 = 'Himanshu';
unknownData1 = 20;
unknownData1 = true;
var item;
item = unknownData; // compile in case of any
// item = unknownData1; // does not compile in case of unknown
console.log(item);
