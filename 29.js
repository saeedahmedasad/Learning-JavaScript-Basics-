// How to Clone Array 

// how to concatenate array

let array1 = ["item1", "item2"];

// let array2 = array1.slice(0);
// let array2 = [].concat(array1)

// new method

let array2 = [...array1];
array1.push("item3")

console.log(array1, array2)