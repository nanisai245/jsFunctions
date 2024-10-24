"use strict";

//                          TASK-1

function greet() {
  console.log("Hello, World!");
}
greet();

//                          TASK-2

function addNumbers(a, b) {
  console.log(a + b);
}

addNumbers(2, 3);
addNumbers(5, 6);
addNumbers(10, 5);
addNumbers(50, 3);

//                         TASK-3

function multiply(x, y) {
  return x * y;
}

const result = multiply(5, 6);
console.log(result);

//                        TASK-4

function calculateRectangleArea(length, width) {
  const area = multiply(length, width);
  return area;
}

const ans = calculateRectangleArea(5, 8);
console.log(ans);

//                       TASK-5

function greetUser(name = "guest") {
  console.log(`Hello, ${name}!`);
}

greetUser();
greetUser("vinay");
