// Console log can print something in the console

// console.log("Hello World");

// ("use strict"); // This helps us not to make mistakes

// Intro to the variable

// variables can store some information
// We can use that information later
// we can change that information later

// declare a variable

// var firstName = "Saeed";

// use a variable

// console.log(firstName);

// change value

// firstName = "Ahmad"; // It is correct
// console.log(firstName);
// var firstName = "Ahmad"     // It is also correct

// Rules for naming varibles

// You cannot start with a Number
// Example =>
// 1variable   (Invalid)
// variable    (Valid)
//                             <=== ===>
// var 1variable = 12;     //invalid
// console.log(1variabble)

// var variable1 =12;       //valid
// console.log(variable1)
//                             <=== ===>
// you can only use underscore _ or dollar Symbol $
// Example =>  first_name   Snake case Writing
// or first$name    (these are Valid)

// var variable1 = 12;
// console.log(variable1);
//                             <=== ===>
// you can not use Blank Space
// firstname   (valid)
// first name  (invalid)

// convention
// start with a small letter and use camelCase

// let keyword
// declare a variable using let keyword

// var myName = "saeed";
// var myName = "Ahmad"; //You can use var again
// console.log(myName);

// let myname = "Saeed";
// myname = "Ahmad"; //Don't use let again
// console.log(myname);

// block scope vs function scope (learn these topics)

// Declare Constants

// const pi = 3.14;
// console.log(pi);

// String Indexing

// let string = "saeed";

// s  a  e  e  d
// 1  2  3  4  5
// console.log(string[1]);

// String Length
// string.length

// console.log(string.length);

// Last Indext =======> string.length-1

// console.log(string[string.length - 1]);

// we can also use this to print the second last and third last characters

// trim()           to remove extra spaces
// toUpperCase
// toLowerCase
// slice            some section of string

// ====TRIM====

// let firstName = "        Saeed       ";
// firstName.trim();       //gives new variable
// firstName = firstName.trim();
// console.log(firstName);

// ====TO UPPER CASE====

// console.log(firstName.toUpperCase());

// ====TO LOWER CASE====

// console.log(firstName.toLowerCase());

// ====SLICE====
//  start index
//  end index
// console.log(firstName.slice(2, 4));

// typeof operator

// data type (primitive data types)
// string 'saeed'
// number 2, 3, 5.5
// booleans
// undefined
// null
// BigInt
// Symbol

// let number = 1;
// console.log(number);
// console.log(typeof number); //brackets are not necessary

// Convert Number to String ==== 22=>"22"

// number = number + "";
// number = String(number);
// console.log(typeof number);

// Convert String to Number ==== "22"=>22

// let name = "12";
// name = +name;
// name = Number(name);
// console.log(typeof name);

// string cancatenation

// let str1 = '23';
// let str2 = '22';

// let newStr = Number(str1) + Number(str2);
// let newStr = +str1 + +str2;

// console.log(newStr)

// template String

// let firstName = 'saeed';
// let age = 12;

// my name is saeed and i am 12

// let about = "my name is " + firstName + ". and i am " + age;
// let about = `my name is ${firstName} and i am ${age}`
// console.log(about);

// undefined
// null

// let variable;
// variable = "12";
// console.log(typeof variable, variable);

// variable = null;
// console.log(typeof variable);   //bug, error

// BigInt

// let myNumber = BigInt(121);
// let sameMyNumber = 121n;
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber + sameMyNumber);

// you can only perform BigInt operation to BigInt Numbers

// booleans
// true, false

// let num1 = 12;
// let num2 = 12;

// console.log(num1 > num2);

//  vs ===

// == it only checks the  value not the data type

// console.log(num1 == num2);

// === it checks the data type and value

// != vs !==

// console.log(num1!=num2);    //it only checks the value
// console.log(num1!==num2);   //it checks the data type and value

// truthy and falsy values

// falsy values

// false
// ""
// null
// undefined
// 0

// let firstName = 1;

// if (firstName == "") {
//     console.log(firstName);
// } else {
//     console.log("Your name is Kinda empty");
// }

// truthy values

// true
// "1"
// -1, 1

// if (firstName) {
//     console.log(firstName);
// } else {
//     console.log("Your name is Kinda empty");
// }

// if else condition

// let age = 44;

// if(age>=18){
//     console.log("you are very old");
// }
// else{
//     console.log("you are very young");
// }

// Checker if the Number is ODD or EVEN

// let num = 13;

// if (num%2===0) {        //if the remainder is equal to zero.
//     console.log("It is an Even Number");
// }
// else{
//     console.log("It is an Odd Number");
// }

// ternary Operator

// let age = 12;
// let drink;

// if (age>=5) {
//     console.log("Coffe");
// }else{
//     console.log("Milk");
// }
// var val if true   else
// let drink = age >= 5 ? "Coffee" : "Milk";
// console.log(drink);

// let grade = 2;

// let books = grade >= 5 ? "8 Books" : "3 Books"
// console.log(books);

// let age = 1;

// let eligible = age>= 12 ? "You are Eligible" : "You are not Eligible";
// console.log(eligible);

// AND and OR Operators

// let firstName = "safed";
// let age = 12;

// AND && if both are true.

// if (firstName[0]==="S" && age>10) {
//                         console.log("ONE or BOTH conditions are TRUE");
// }else{
//     console.log("Sorry ONE condition is FALSE");
// }

// OR || if one is true
// if (firstName[2]=== "e" || age<10) {
//     console.log("ONE or BOTH conditions are TRUE");
// }else{
//     console.log("Sorry BOTH conditions are FALSE");
// }

// Nested If else       means there is if else inside if else

// let winningNumber = 12;

// let userGuess = +prompt("Enter Your Guess"); // to take input in number

// if (userGuess === winningNumber) {
//   console.log("You Won");
// } else {

//         if (userGuess > winningNumber) {
//           console.log("You are a bit Higher");
//         }
//         else {
//           console.log("You are a bit Lower to the actual number");
//         }
// }

// let firstName = "Saeed";
// let userGuess = prompt("Guess My Name");

// if(userGuess===firstName || userGuess === "saeed"){
//     console.log("You have guessed it Right");
// }else{
//     if(userGuess[0] === "s" || userGuess[0] === "S"){
//         console.log("You are very Close to My Name");
//     }else{
//         console.log("Please Try Again");
//     }
// }

// if
// else if
// else if
// else if
// else if

// let temp = 24;

// if (temp < 10) {
//   console.log("temp is less 10");
// } else if (temp < 15) {
//   console.log("temp is less 15");
// } else if (temp < 20) {
//   console.log("temp is less 20");
// } else if (temp < 25) {
//   console.log("temp is less 25");
// } else if (temp < 30) {
//   console.log("temp is less 30");
// } else if (temp < 35) {
//   console.log("temp is less 35");
// } else if (temp < 40) {
//   console.log("temp is less 40");
// } else if (temp < 45) {
//   console.log("temp is less 45");
// } else {
//   console.log("Out of Control Temperature");
// }

// Switch Statement

// let day = 12;

// switch (day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid");
//         break;
// }

// While Loop

// DRY =======> Don't Repeat Yourself

// let i = 7;

// while (i<12) {
//     console.log("i is now ", i);
//     i++;
// }

// While Loop Examples

// let total = 0;
// let i = 0;

// while(i<=100){
//     total = total + i ;
//     i++;
// }
// console.log(total);

// we can do this using a formula

//  (num*(num+1))/2

// for loop
// print 0 to 9

// we can declare variable outside the for loop brackets

// for(let i = 0; i<= 9; i++){
//     console.log(i);
// }

// console.log("value of i is ", i);

// for loop examples

// let num = 100;
// let total = 0;

// for (let i = 0; i <= num; i++) {
//   total = total + i;
// }
// console.log(total);

// Break Keyword breaks the loop from the value

// Continue Keyword just neglets the value

// for(let i = 1; i<=9; i++){
//     if(i===4){
//         break;
//     }else{
//         console.log(i);
//     }
// }

// let name = "Saeed";

// for(let i = 0; i < 5; i++){
//     if(i === 2){
//         continue;
//     }else{
//         console.log(name[i]);
//     }
// }

// do while loop

// let i = 0;

// while(i<=3){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;

// }
// while(i>12);

// Intro to the Arrays // reference data type

// ordered collection of items

// how to create arrays

// let fruits = ["apple", "Mango", "Bannana", "akela"];
// // console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// fruits[1] = 1;

// let obj = {};
// console.log(typeof obj);

// console.log(fruits.length)

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// arrays indexing

// Methods of Arrays

// let myArray = ["Banana", "Apple", "Mango", "Grapes"];
// console.log(myArray);

// push =>insert at the end
// myArray.push("myfruit");
// console.log(myArray)

// pop => remove at the end and return it to us
// myArray.pop();
// let popped = myArray.pop();
// console.log("Popped Fruit is", popped);
// console.log(myArray);

// unshift => adds at the beginning

// myArray.unshift("fruit1");
// console.log(myArray);

// shift => removes from the beginning

// let shifted = myArray.shift();
// myArray.shift();
// console.log(myArray);
// console.log(shifted)

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

// let array1 = ["item1", "item2",];
// let array2 = array1;

// console.log(array1);
// console.log(array2);
// array1.push("item3");

// console.log("After Pushing into Array");
// console.log(array1);
// console.log(array2);

// How to Clone Array

// how to concatenate array

// let array1 = ["item1", "item2"];

// let array2 = array1.slice(0);
// let array2 = [].concat(array1)

// new method

// let array2 = [...array1];
// array1.push("item3")

// console.log(array1, array2)

// for loop in arrays

// let fruits = ["banana", "apple", "manago", "grapes",]

// console.log(fruits.length)
// console.log(fruits[fruits.length-1])
// let upperFruits = [];
// for(let i = 0; i <= fruits.length-1; i++){
//     upperFruits.push(fruits[i].toUpperCase());
// }

// console.log(upperFruits)

// use const for creating arrays

// const array1 = ["ali", "ahmad", "hassan"]
// // array1 = []               // ❌❌❌❌
// array1.push("aswad");       //✔✔✔✔
// console.log("this is an array", array1);

// while loop in arrays

// const fruits = ["mango", "grapes", "banana"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }

// for of loop in arrays

// const students = ["ahmad", "saeed", "asad", "muzammil"];
// const students2 = [];
// for(let student of students){
//     students2.push(student.toUpperCase())
// }
// console.log(students2)

// for in loop in arrays

// const students = ["ahmad", "saeed", "asad", "muzammil"];
// const students2 = [];
// for(let student in students){
//     students2.push(students[student])
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let number in numbers){
//     console.log(numbers[number])
// }

// array destructuring

// const myArray = ["Ali", "Baba", "Banda Ban"];

// let [variable1, variable2, ...myNewArray] = myArray;

// console.log(myNewArray);

// OBJECTS

// arrays are good but not sufficient for real world data
// objects store key value pairs
// objects don't have index

// how to create objects

// const person = {
//   name: "Saeed",
//   age: 22,
//   email: "saeedahmed5769644@gmail.com",
//   hobbies: ["saeed", "is", "Good"],
// };

// console.log(person)
// how to access data from objects

// console.log(Array.isArray(person.hobbies));

// how to add key value pair to objects
// person.gender = "male"
// console.log(person.gender)
// console.log(person)

// difference between dot notation and bracket notation

// let key = "email";

// const person = {
//   name: "Saeed",
//   age: 22,
//   "my hobbies": ["saeed", "is", "Good"],
// };

// console.log(person["my hobbies"]);

// how to iterate objects

// const keys = {
//     name: "Ahmad",
//     grade: 10,
//     school: "Allied",
//     key: "ali",
//     "email": "ahmedaliqasmi"
// }
// console.log(keys["email"])

// for in Loop
// for(let key in keys){
//     console.log(key, ':',  keys[key])
// };

// Object.key
// console.log(typeof Object.keys(keys));

// const val = Object.keys(keys);
// console.log(Array.isArray(val))

// if(keys["name"] === "Ahmad" || keys["name"] === "ahmad"){
//     console.log("Your Name is Correct");
// }
// else{
//     console.log("You have TYPO!!!");
// }

// computed properties

// const key1 = "obj1";
// const key2 = "obj2";

// const obj1 = "value1";
// const obj2 = "value2";

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
// const obj = {};

// obj[key1] = obj1;
// obj[key2] = obj2;
// console.log(obj)

// Spread Operator

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];

// const newArray = [...array1, ...array2, 57, "saeeed"];
// const newArray2 = [..."abc"]; // this will show "a", "b", "c"

// // spread operator in objects

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key3: "value3",
//   key4: "value4",
// };
// // const newObject = { ...obj1, ...obj2, key5: "value5" };
// const newObject = { ...["item1", "item2", "item3"] };
// console.log(Object.keys(newObject));
// console.log(newObject);

// Object Destructuring

// const band = {
//   bandName: "AheerDev",
//   famousSong: "Mithay Bol",
// };

// let { bandName:var1, famousSong:var2 } = band;
// famousSong = "Band";
// console.log(var2);

// Object Inside Array

// const users = [
//     {userId: 1, firstName: "Saeed"},
//     {userId: 2, firstName: "Ali"},
// ]

// console.log(users[0]);

// for (let user of users) {
//     console.log(user.userId)
// }

// nested destructuring

// const users = [
//     {userId: 1, firstName: "Saeed", gender: "male"},
//     {userId: 2, firstName: "Sophia", gender: "female"}
// ]

// const [{userId:user1Id},{userId:user2Id} ,] = users;
// console.log(user1Id, user2Id)
// console.log(firstName)

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

// function findTarget(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findTarget([1, 2, 3, 4, 5, 5, 6, 7, 7, 23], 1));

// function expression

// const myFunc = function () {
//   console.log("Hello,My name is Saeed");
// };

// myFunc();

// const sumTwoNumbers = function (number1, number2) {
//   return number1 + number2;
// };
// console.log(sumTwoNumbers(23, 6));

// const findTarget = function (array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       console.log(`Index of ${target} in array `);
//       return i;
//     }
//   }
//   return -1;
// };
// const myStr = [1, 4, 5, 6, 2, 45, , 3];
// console.log(findTarget(myStr, 45));

// Arrow Function

// const myFunc = () => {
//   console.log("I know your name");
// };

// const ans = myFunc();
// console.log(ans);

// const addTwoNumbers = (number1, number2) => {
//   return number1 + number2;
// };
// // console.log(addTwoNumbers(34, 33));

// const findTarget = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -23;
// };

// const answer = findTarget([2, 3, 4, 2], 5);
// console.log(answer);

// const singHappyBirthday = () => {
//   console.log("Happy Birthday To You");
// };
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

// ARROW FUNCTION

// const myFunc2 = () => {
//   console.log("are you guys ready to enjoy the beauty of functions");
// };

// const powerOfNumber = (number, power) => {
//   return number ** power;
// };

// const power = powerOfNumber(9, 2);
// console.log(power);

// functions inside functions

// const myFunc = function () {
//   console.log("are you sure about the interes");
// };

// function inside functions

function myFunc() {
  function myFunc2() {
    console.log("Inside myFunc2");
  }
  function myFunc3() {
    console.log("Inside myFunc3");
  }

  myFunc2();
  myFunc3();
}

myFunc();
