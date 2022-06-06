// undefined
// null

// let variable;
// variable = "12";
// console.log(typeof variable, variable);


// variable = null;
// console.log(typeof variable);   //bug, error

// BigInt

let myNumber = BigInt(121);
let sameMyNumber = 121n;
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMyNumber);

// you can only perform BigInt operation to BigInt Numbers