// Spread Operator

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2, 57, "saeeed"];
const newArray2 = [..."abc"]; // this will show "a", "b", "c"

// spread operator in objects

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key3: "value3",
  key4: "value4",
};
// const newObject = { ...obj1, ...obj2, key5: "value5" };
const newObject = { ...["item1", "item2", "item3"] };
console.log(Object.keys(newObject));
console.log(newObject);
