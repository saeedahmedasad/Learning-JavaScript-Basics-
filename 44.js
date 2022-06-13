// Functions Declaration

// function twoPlusFour() {
//    console.log('this is going to add two'); // if it is string then we will only call the function .
//    return 2+3;                              //if it is a number then we will have to store the value in a variable in order to retrieve that function.
// }

// const returnedValue = twoPlusFour();
// console.log(returnedValue);

// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// greet("saeed");
// console.log(ans);

// odd or even
// return True if even.
// return False if Odd.

// function evenOdd(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const ans = evenOdd(5);
// console.log(ans);

// function
// input: string
// return : firstIndex

// function firstChar(string) {
//   return string[0];
// }
// console.log(firstChar("ahmad"));

// input: array, target
// index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(findTarget([1, 2, 3, 4, 5, 5, 6, 7, 7, 23], 1));
