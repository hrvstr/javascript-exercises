const fibonacci = function (nth) {
  if (nth < 1) {
    return "OOPS";
  } else {
    let array = [0, 1];
    for (i = 0; i <= nth; i++) {
      let lastNum = array[array.length - 1];
      let penNum = array[array.length - 2];
      array.push(lastNum + penNum);
    }
    return array[nth];
  }
};

// Do not edit below this line
module.exports = fibonacci;
