const removeFromArray = function (array) {
  if (Array.isArray(array)) {
    if (arguments.length <= 1) {
      return array;
    } else if (arguments.length === 2) {
      array.splice(array.indexOf(arguments[1]), 1);
    } else if (arguments.length > 2) {
      for (let i = 1; i < arguments.length; i++) {
        if (array.includes(arguments[i])) {
          array.splice(array.indexOf(arguments[i]), 1);
        }
      }
    }
    return array;
  } else {
    return "ERROR! First arg is not an array";
  }
};

// Do not edit below this line
module.exports = removeFromArray;
