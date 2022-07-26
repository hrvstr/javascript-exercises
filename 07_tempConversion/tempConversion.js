function checkIfInteger(num) {
  if (Number.isInteger(num)) {
    return num;
  } else {
    return parseFloat(num.toFixed(1));
  }
}

const ftoc = function (degree) {
  let result = (degree - 32) * (5 / 9);
  return checkIfInteger(result);
};

const ctof = function (degree) {
  let result = degree * (9 / 5) + 32;
  return checkIfInteger(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
