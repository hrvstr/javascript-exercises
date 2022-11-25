const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let result = 0;
  array.forEach((element) => {
    result += element;
  });
  return result;
};

const multiply = function (array) {
  let result;
  array.forEach((element) => {
    if (element == array[0]) {
      result = element;
    } else {
      result *= element;
    }
  });
  return result;
};

const power = function (a, b) {
  let result = a;
  for (let index = 0; index < b - 1; index++) {
    result *= a;
  }
  return result;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let result = num;
    for (i = num - 1; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
