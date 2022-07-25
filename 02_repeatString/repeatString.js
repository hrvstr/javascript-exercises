const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else if (num === 1) {
    return string;
  } else if (num > 1) {
    let result = string;
    for (let i = 0; i < num - 1; i++) {
      result += string;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
