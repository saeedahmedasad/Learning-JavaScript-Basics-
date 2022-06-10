// computed properties

const key1 = "obj1";
const key2 = "obj2";


const obj1 = "value1";
const obj2 = "value2";

// const obj = {
//     obj1: "value1",      => using variables
//     obj2: "value2"
// }

// METHOD 1
// const obj ={
//     [key1] : obj1,
//     [key2] : obj2
// }

// METHOD 2
const obj = {};

obj[key1] = obj1;
obj[key2] = obj2;
console.log(obj)