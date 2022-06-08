// premitive vs reference type

// premitive        it does not change in the other variable

// it stores in STOCK

// let num1 = 2;
// let num2 = num1;

// console.log(num1);
// console.log(num2);
// num1++;
// console.log("after incrementing")
// console.log(num1);
// console.log(num2);

// reference data type  it change in the other variable

// it stores in HEAP 

let array1 = ["item1", "item2",];
let array2 = array1;

console.log(array1);
console.log(array2);
array1.push("item3");

console.log("After Pushing into Array");
console.log(array1);
console.log(array2);