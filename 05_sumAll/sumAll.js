const sumAll = function (a, b) {
  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (typeof a == "number" && typeof b == "number") {
    let result = a + b;
    if (a < b) {
      for (let i = a + 1; i < b; i++) {
        result += i;
      }
    } else if (a > b) {
      for (let i = b + 1; i < a; i++) {
        result += i;
      }
    } else if (a === b) {
      return result;
    }
    return result;
  } else {
    return "ERROR";
  }
};

// console.log(sumAll(-1, 5));

// Do not edit below this line
module.exports = sumAll;
