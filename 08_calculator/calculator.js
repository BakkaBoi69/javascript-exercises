const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = arr => arr.reduce((accumulator, currentElement) => accumulator + currentElement, 0);

const multiply = arr => arr.reduce((accumulator, currentElement) => accumulator * currentElement, 1);

const power = (num1, num2) => num1 ** num2;

const factorial = (num) => num == 0 ? 1 : num * factorial(num - 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
