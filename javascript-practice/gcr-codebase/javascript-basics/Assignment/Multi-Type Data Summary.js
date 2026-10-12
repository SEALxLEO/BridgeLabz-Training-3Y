// Declare variables
const str = "Hello";
const num = 42;
const bool = true;
const arr = [1, 2, 3];
const obj = { role: "admin" };
const nullVar = null;
let undefVar;

// Map data into an array for the table
const dataEntries = [
  { label: "String", value: str, type: typeof str },
  { label: "Number", value: num, type: typeof num },
  { label: "Boolean", value: bool, type: typeof bool },
  { label: "Array", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "Object", value: obj, type: typeof obj },
  { label: "Null", value: nullVar, type: nullVar === null ? "null" : typeof nullVar },
  { label: "Undefined", value: undefVar, type: typeof undefVar }
];

// Print report
console.table(dataEntries);