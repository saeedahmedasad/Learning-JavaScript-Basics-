// Arrow Function

const myFunc = () => {
  console.log("I know your name");
};

// const ans = myFunc();
// console.log(ans);

const addTwoNumbers = (number1, number2) => {
  return number1 + number2;
};
// console.log(addTwoNumbers(34, 33));

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -23;
};

const answer = findTarget([2, 3, 4, 2], 5);
console.log(answer);

const singHappyBirthday = () => {
  console.log("Happy Birthday To You");
};
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();

// ARROW FUNCTION

const myFunc2 = () => {
  console.log("are you guys ready to enjoy the beauty of functions");
};
